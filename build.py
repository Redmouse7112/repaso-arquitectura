#!/usr/bin/env python3
"""
Genera dist/index.html: un unico archivo HTML con CSS, JS, datos y logo
embebidos (base64), listo para abrir offline en un celular o servir como PWA
junto a manifest.json / sw.js / iconos (tambien copiados a dist/).
"""
import base64
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
PUBLIC = ROOT / "public"
ASSETS = ROOT / "assets"
DIST = ROOT / "dist"

JS_FILES = [
    SRC / "scripts" / "license.js",
    SRC / "data" / "categories.js",
    SRC / "data" / "questions.js",
    SRC / "data" / "exam.js",
    SRC / "scripts" / "stats.js",
    SRC / "scripts" / "repaso.js",
    SRC / "scripts" / "quiz.js",
    SRC / "scripts" / "exam.js",
    SRC / "scripts" / "splash.js",
    SRC / "scripts" / "nav.js",
    SRC / "scripts" / "app.js",
]

ICONS = ["icon-192.png", "icon-512.png", "icon-512-maskable.png", "apple-touch-icon.png"]


def read(path):
    return path.read_text(encoding="utf-8")


def build_html():
    html = read(SRC / "index.html")

    # 1) CSS inline
    # (repl es una funcion: evita que re.sub interprete "\n", "\t", etc.
    # dentro del CSS/JS como escapes de backreferencia)
    css = read(SRC / "styles" / "main.css")
    html = re.sub(
        r'\s*<link rel="stylesheet" href="styles/main\.css">',
        lambda m: "\n<style>\n" + css + "\n</style>",
        html,
    )

    # 2) JS inline (concatena todos los modulos en orden de dependencia)
    js = "\n".join(read(f) for f in JS_FILES)
    html = re.sub(
        r'(\s*<script src="[^"]+"></script>)+\s*(?=</body>)',
        lambda m: "\n<script>\n" + js + "\n</script>\n",
        html,
    )

    # 3) Logo embebido en base64
    logo_b64 = base64.b64encode((ASSETS / "logo.png").read_bytes()).decode("ascii")
    html = html.replace(
        '../assets/logo.png',
        f"data:image/png;base64,{logo_b64}",
    )

    # 4) manifest / iconos -> rutas planas (copiados junto al html)
    html = html.replace("../public/manifest.json", "./manifest.json")
    html = html.replace("../assets/apple-touch-icon.png", "./apple-touch-icon.png")
    html = html.replace("../assets/icon-192.png", "./icon-192.png")

    return html


def build_manifest():
    manifest = read(PUBLIC / "manifest.json")
    manifest = manifest.replace("../assets/", "./")
    return manifest


def main():
    DIST.mkdir(exist_ok=True)

    (DIST / "index.html").write_text(build_html(), encoding="utf-8")
    (DIST / "manifest.json").write_text(build_manifest(), encoding="utf-8")
    shutil.copyfile(PUBLIC / "sw.js", DIST / "sw.js")
    for icon in ICONS:
        shutil.copyfile(ASSETS / icon, DIST / icon)

    size_kb = (DIST / "index.html").stat().st_size / 1024
    print(f"dist/index.html generado ({size_kb:.0f} KB, todo embebido)")
    print("dist/manifest.json, dist/sw.js e iconos copiados")


if __name__ == "__main__":
    main()
