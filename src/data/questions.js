// Preguntas de repaso oral (flashcards)
const Q = [
  {
    "id": "e1q1",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Cuáles son las 5 unidades funcionales de todo computador?",
    "a": "Todo computador, sin importar su época o tamaño, se organiza en <strong>5 unidades funcionales</strong> que trabajan en conjunto:<ul>\n<li><strong>Unidad de Entrada:</strong> recibe datos del mundo exterior hacia el sistema. Sin ella el equipo no puede recibir información del usuario. Ejemplos: teclado, mouse, micrófono, escáner, cámara.</li>\n<li><strong>Unidad de Salida:</strong> envía los resultados del procesamiento hacia el exterior. Convierte información interna en algo perceptible. Ejemplos: monitor, impresora, parlantes.</li>\n<li><strong>Memoria Principal (RAM):</strong> almacena temporalmente los datos e instrucciones que la CPU necesita en ese momento. Es <strong>volátil</strong> — su contenido se pierde al apagar.</li>\n<li><strong>ALU (Unidad Aritmética Lógica):</strong> el motor de cálculo. Realiza todas las operaciones matemáticas (suma, resta) y lógicas (AND, OR, NOT, XOR).</li>\n<li><strong>Unidad de Control (UC):</strong> el director de orquesta. Lee las instrucciones, las decodifica y genera las señales que coordinan a todas las demás unidades.</li>\n</ul>",
    "tip": "CPU = UC + ALU + Registros. No es una unidad funcional sola — es la combinación de las dos últimas más los registros internos. Pregunta frecuente: ¿qué diferencia hay entre ALU y UC? ALU calcula, UC dirige."
  },
  {
    "id": "e1q2",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Cuáles son las generaciones del computador y qué tecnología define a cada una?",
    "a": "La evolución del computador se divide en <strong>5 generaciones</strong> según la tecnología predominante en sus componentes:<ul>\n<li><strong>1ª Generación (1940-1956) — Tubos de vacío:</strong> máquinas enormes que ocupaban habitaciones enteras. Consumían cantidades masivas de energía, fallaban con frecuencia y se programaban en código máquina puro (0s y 1s). Ejemplo icónico: ENIAC (1945).</li>\n<li><strong>2ª Generación (1956-1963) — Transistores:</strong> reemplazaron los tubos de vacío. Mucho más pequeños, rápidos y confiables, con menor consumo energético. Aparece el <strong>lenguaje ensamblador</strong> como primera abstracción del código máquina.</li>\n<li><strong>3ª Generación (1964-1971) — Circuitos Integrados:</strong> múltiples transistores en un solo chip de silicio. Reducción drástica de tamaño y costo. Aparecen los <strong>sistemas operativos</strong> y los primeros lenguajes de alto nivel. Ejemplo: IBM 360.</li>\n<li><strong>4ª Generación (1971-presente) — Microprocesadores:</strong> miles de millones de transistores en un solo chip. Nace la <strong>computadora personal (PC)</strong>. El primer microprocesador comercial fue el <strong>Intel 4004 (1971)</strong>.</li>\n<li><strong>5ª Generación (presente/futuro) — IA y computación cuántica:</strong> procesamiento paralelo masivo, inteligencia artificial integrada, computación cuántica en desarrollo.</li>\n</ul>",
    "tip": "Los dos más importantes para recordar: ENIAC = 1ª generación. Intel 4004 = 4ª generación. Si el profe pregunta un ejemplo, tenés estos dos cubiertos."
  },
  {
    "id": "e1q3",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Cuáles son los componentes principales de la placa madre y qué función cumple cada uno?",
    "a": "La <strong>placa madre (motherboard)</strong> es el circuito impreso principal que interconecta físicamente todos los componentes del sistema. Todo pasa por ella:<ul>\n<li><strong>Socket CPU:</strong> zócalo donde se instala físicamente el procesador. Cada fabricante tiene su diseño propio — los sockets de Intel y AMD son incompatibles entre sí.</li>\n<li><strong>Chipset:</strong> controla la comunicación entre todos los componentes. Históricamente dividido en Northbridge (CPU↔RAM y GPU, alta velocidad) y Southbridge (USB, SATA, audio, menor velocidad). Hoy el Northbridge está integrado en la CPU.</li>\n<li><strong>Ranuras RAM (DIMM):</strong> donde se instalan los módulos de memoria principal. Pueden ser 2, 4 u 8 ranuras según la gama.</li>\n<li><strong>Ranuras PCIe/PCI:</strong> para tarjetas de expansión — GPU, tarjetas de red, sonido. PCIe es la versión moderna y más rápida.</li>\n<li><strong>Conectores SATA/M.2:</strong> para discos y SSDs. M.2 es más moderno y ofrece velocidades muy superiores con protocolo NVMe.</li>\n<li><strong>BIOS/UEFI:</strong> chip de firmware que se ejecuta antes que el SO. Inicializa el hardware (POST) y busca el dispositivo de arranque.</li>\n<li><strong>CMOS + pila CR2032:</strong> pequeña memoria que guarda la configuración (fecha, hora, orden de arranque) cuando el equipo está apagado.</li>\n<li><strong>Buses:</strong> canales de comunicación — de datos, de direcciones y de control.</li>\n<li><strong>Puertos I/O traseros:</strong> USB, HDMI, RJ45 (ethernet), audio.</li>\n</ul>",
    "tip": "Si el profe pregunta qué pasa si sacás la pila: el CMOS pierde fecha, hora y configuración de arranque. El BIOS/UEFI no se borra — está en memoria flash separada."
  },
  {
    "id": "e1q4",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Qué es el Chipset y cómo evolucionó?",
    "a": "El <strong>Chipset</strong> es el conjunto de circuitos en la placa madre que gestiona la comunicación entre todos los componentes del sistema. Históricamente se dividía en dos partes:<ul>\n<li><strong>Northbridge (Puente Norte):</strong> manejaba las conexiones de <strong>alta velocidad</strong> — CPU con RAM y GPU. Era el componente más crítico del chipset.</li>\n<li><strong>Southbridge (Puente Sur):</strong> manejaba conexiones de menor velocidad — USB, SATA, PCI, audio. Se comunicaba con el Northbridge como intermediario.</li>\n</ul>\n<strong>Evolución:</strong> a partir de los procesadores modernos (Intel desde 2008 con Nehalem, AMD con sus APUs), el <strong>Northbridge fue integrado dentro del propio die de la CPU</strong>. Esto eliminó la latencia de comunicación CPU↔RAM y mejoró el rendimiento significativamente. Hoy el Chipset equivale al antiguo Southbridge, ahora llamado <strong>PCH (Platform Controller Hub)</strong> en Intel.",
    "tip": "Pregunta trampa clásica: ¿Dónde está el Northbridge hoy? Dentro de la CPU desde ~2008. Si el profe pregunta por qué se integró: para reducir la latencia entre CPU y RAM."
  },
  {
    "id": "e1q5",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Cuál es la jerarquía de memoria y qué caracteriza a cada nivel?",
    "a": "La memoria se organiza en una <strong>pirámide jerárquica</strong>: cuanto más cerca de la CPU, más rápida, más cara y con menos capacidad:<ul>\n<li><strong>Registros:</strong> dentro de la CPU. Máxima velocidad, capacidad mínima (bytes). Son los únicos sobre los que opera directamente el procesador. CP, AC, IR, MAR, MBR.</li>\n<li><strong>Caché L1/L2/L3:</strong> entre CPU y RAM. Guarda los datos de uso frecuente para evitar acceder a la RAM constantemente. L1 es la más rápida y pequeña (KB, dentro del núcleo). L2 más grande (MB). L3 compartida entre núcleos.</li>\n<li><strong>RAM:</strong> memoria principal. Volátil, capacidad en GB. El programa en ejecución y sus datos viven aquí.</li>\n<li><strong>SSD NVMe:</strong> almacenamiento no volátil de alta velocidad. No se borra al apagar.</li>\n<li><strong>HDD:</strong> disco magnético mecánico. Gran capacidad, bajo costo por GB, lento por sus partes móviles.</li>\n<li><strong>Almacenamiento externo / Nube:</strong> mayor capacidad, más lento, portable.</li>\n</ul>\n<strong>Regla siempre válida:</strong> velocidad ↑ = capacidad ↓ = costo por GB ↑",
    "tip": "Si el profe pregunta qué pasa cuando el dato no está en caché: se produce un cache miss y la CPU lo busca en RAM. Si tampoco está en RAM: entra la memoria virtual (disco)."
  },
  {
    "id": "e1q6",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Qué es la memoria caché, para qué sirve y cuáles son sus niveles?",
    "a": "La <strong>memoria caché</strong> es una memoria ultra-rápida ubicada entre la CPU y la RAM. Su función es reducir el tiempo de acceso a datos que el procesador usa con frecuencia, evitando ir a buscarlos a la RAM cada vez.<br><br>\nSe basa en el <strong>principio de localidad</strong>:\n<ul>\n<li><strong>Localidad temporal:</strong> si un dato fue usado recientemente, probablemente se use de nuevo pronto.</li>\n<li><strong>Localidad espacial:</strong> si se accedió a una dirección, es probable acceder a las vecinas.</li>\n</ul>\n<strong>Sus niveles:</strong>\n<ul>\n<li><strong>L1:</strong> dentro del núcleo del procesador. Rapidísima, muy pequeña (32-128 KB). Latencia de 1-4 ciclos.</li>\n<li><strong>L2:</strong> más grande (256 KB - 1 MB por núcleo). Algo más lenta que L1.</li>\n<li><strong>L3:</strong> compartida entre todos los núcleos. Varios MB hasta 64 MB en CPUs modernas. Más lenta que L1/L2 pero mucho más rápida que la RAM.</li>\n</ul>",
    "tip": "Si el dato no está en caché se llama <strong>cache miss</strong> y la CPU va a buscarlo a RAM. Orden de búsqueda: L1 → L2 → L3 → RAM → disco (memoria virtual)."
  },
  {
    "id": "e1q7",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Qué es la memoria virtual y cómo funciona?",
    "a": "La <strong>memoria virtual</strong> no es un componente físico — es una <strong>técnica del sistema operativo</strong> que crea la ilusión de tener más RAM de la que existe físicamente.<br><br>\n<strong>¿Cómo funciona?</strong>\n<ul>\n<li>Cuando la RAM se llena, el SO mueve temporalmente bloques de datos inactivos (páginas) al disco duro o SSD.</li>\n<li>Este espacio en disco se llama <strong>archivo de paginación</strong> en Windows o <strong>swap</strong> en Linux.</li>\n<li>Si la CPU necesita un dato que fue movido al disco, el SO lo trae de vuelta a RAM (operación llamada <strong>page fault</strong>).</li>\n</ul>\n<strong>Ventaja:</strong> permite ejecutar más programas de los que cabrían en la RAM física.<br>\n<strong>Desventaja:</strong> el disco es órdenes de magnitud más lento que la RAM. Si el sistema depende demasiado de ella se produce el <strong>thrashing</strong> — el sistema se vuelve extremadamente lento porque pasa más tiempo moviendo páginas que ejecutando instrucciones.",
    "tip": "Pregunta directa del profe: '¿La memoria virtual es RAM?' → No. Es espacio en disco. Mucho más lenta. '¿Qué es el thrashing?' → cuando el sistema abusa de la memoria virtual y se vuelve casi inoperable."
  },
  {
    "id": "e1q8",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Cómo se clasifican los periféricos?",
    "a": "Los <strong>periféricos</strong> son todos los dispositivos externos a la CPU y la memoria principal que permiten la comunicación entre el computador y el mundo exterior.<br><br>\n<strong>Por función:</strong>\n<ul>\n<li><strong>Entrada:</strong> llevan datos hacia la CPU. Teclado, mouse, escáner, micrófono, cámara web, lector de código de barras.</li>\n<li><strong>Salida:</strong> llevan resultados desde la CPU hacia el usuario. Monitor, impresora, parlantes, proyector.</li>\n<li><strong>Entrada/Salida (mixtos):</strong> funcionan en ambas direcciones. Pantalla táctil, disco externo, pendrive, módem, impresora multifunción.</li>\n</ul>\n<strong>Por conexión:</strong>\n<ul>\n<li><strong>Cableada:</strong> USB (universal, el más común), HDMI/DisplayPort (video), RJ45 (ethernet), SATA (almacenamiento).</li>\n<li><strong>Inalámbrica:</strong> Bluetooth (corto alcance — teclados, auriculares), WiFi (red inalámbrica).</li>\n</ul>",
    "tip": "El disco duro es técnicamente un periférico — es externo a la CPU y la memoria principal, conectado vía SATA o M.2. Muchos alumnos lo olvidan."
  },
  {
    "id": "e1q9",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Qué es un driver y qué es Plug and Play? ¿Qué relación tienen?",
    "a": "<strong>Driver (controlador de dispositivo):</strong> programa que actúa como traductor entre el sistema operativo y un periférico específico. El SO habla un lenguaje genérico; el driver lo convierte al lenguaje particular del hardware. Sin el driver correspondiente, el SO no sabe cómo comunicarse con el dispositivo y este no funciona.<br><br>\n<strong>Plug and Play (PnP):</strong> tecnología que permite al SO detectar automáticamente un periférico al conectarlo y configurarlo sin intervención manual. El SO identifica el dispositivo, busca el driver apropiado y lo instala automáticamente.<br><br>\n<strong>Relación entre ambos:</strong> PnP automatiza el proceso de instalación del driver. Sin PnP, el usuario tendría que instalar manualmente el driver cada vez. USB es el estándar PnP por excelencia — conectás y funciona.<br><br>\n<strong>Ejemplo práctico:</strong> cuando conectás un pendrive, Windows lo detecta (PnP), carga el driver de almacenamiento masivo USB (ya incluido en el SO) y el dispositivo aparece disponible en segundos.",
    "tip": "Distinción importante: PnP detecta y configura automáticamente, pero igual necesita un driver — solo que lo instala solo. Sin driver no hay comunicación posible."
  },
  {
    "id": "e1q10",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Cómo se representa la información en una computadora?",
    "a": "Toda la información en una computadora se representa en <strong>sistema binario</strong> — combinaciones de 0s y 1s. Esto se debe a que los circuitos electrónicos solo pueden estar en dos estados: encendido (1) o apagado (0).<br><br>\n<strong>Unidades de medida:</strong> Bit → Nibble (4b) → Byte (8b) → KB (1024 B) → MB → GB → TB<br><br>\n<strong>Representación según tipo de dato:</strong>\n<ul>\n<li><strong>Números enteros:</strong> directamente en binario. Ej: 13 decimal = 1101 binario.</li>\n<li><strong>Texto:</strong> tablas de codificación. <strong>ASCII</strong> (128 caracteres, 7 bits — letras, números, símbolos básicos). <strong>Unicode/UTF-8</strong> (millones de caracteres, todos los idiomas, emojis).</li>\n<li><strong>Imágenes:</strong> grilla de píxeles. Cada píxel tiene valores <strong>RGB</strong> (Rojo, Verde, Azul), 1 byte por canal = 3 bytes por píxel.</li>\n<li><strong>Audio:</strong> muestras digitales de la onda sonora a intervalos regulares (sampling). Ej: CD usa 44.100 muestras/segundo.</li>\n<li><strong>Video:</strong> secuencia de imágenes (frames) + audio sincronizado, comprimidos con codecs (H.264, H.265).</li>\n</ul>",
    "tip": "Pregunta posible: '¿Por qué las computadoras usan binario y no decimal?' → Porque es más simple construir circuitos con dos estados (encendido/apagado) que con diez."
  },
  {
    "id": "e1q11",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Cuáles son los sistemas de numeración usados en informática y para qué sirve cada uno?",
    "a": "En informática se usan <strong>4 sistemas de numeración</strong>, cada uno con un propósito específico:<ul>\n<li><strong>Binario (base 2):</strong> dígitos 0 y 1. Es el lenguaje nativo de la CPU — todo en el hardware se representa en binario. Cada dígito es un bit.</li>\n<li><strong>Octal (base 8):</strong> dígitos del 0 al 7. Usado en contextos Unix/Linux para permisos de archivos (chmod 755) y como forma compacta de representar binario (3 bits por dígito octal).</li>\n<li><strong>Decimal (base 10):</strong> dígitos del 0 al 9. El sistema humano. Las computadoras lo convierten internamente a binario para operar.</li>\n<li><strong>Hexadecimal (base 16):</strong> dígitos 0-9 y A-F (A=10 hasta F=15). Muy usado en programación para representar binario de forma compacta — 1 dígito hex = 4 bits. Presente en: direcciones de memoria, colores web (#FF5733), código máquina.</li>\n</ul>\n<strong>Conversión decimal → binario:</strong> dividir por 2 sucesivamente y leer restos de abajo hacia arriba.<br>\n13 ÷ 2=6r<strong>1</strong> → 6÷2=3r<strong>0</strong> → 3÷2=1r<strong>1</strong> → 1÷2=0r<strong>1</strong> → resultado: <strong>1101</strong>",
    "tip": "Hexadecimal es fundamental en programación — FF en hex = 11111111 en binario = 255 en decimal. Esa conversión vale la pena memorizar."
  },
  {
    "id": "e1q12",
    "cat": "eje1",
    "catLabel": "Eje 1",
    "q": "¿Qué es el BIOS/UEFI, cuál es su función y qué diferencia hay entre ambos?",
    "a": "El <strong>BIOS/UEFI</strong> es el <strong>firmware</strong> almacenado en un chip de memoria no volátil en la placa madre. Es el primer software que se ejecuta al encender la computadora, <strong>antes que el sistema operativo</strong>.<br><br>\n<strong>Funciones principales:</strong>\n<ul>\n<li><strong>POST (Power-On Self Test):</strong> verifica que todos los componentes de hardware funcionen correctamente al encender.</li>\n<li><strong>Inicialización del hardware:</strong> configura la CPU, la RAM, los buses y los dispositivos de almacenamiento.</li>\n<li><strong>Arranque (Boot):</strong> busca el dispositivo de arranque según el orden configurado y transfiere el control al SO.</li>\n<li><strong>Configuración:</strong> permite ajustar fecha/hora, orden de arranque, overclock, etc.</li>\n</ul>\n<strong>Diferencias entre BIOS y UEFI:</strong>\n<ul>\n<li><strong>BIOS:</strong> versión clásica. Interfaz en texto, solo soporta discos hasta 2 TB (tabla de particiones MBR), arranque lento.</li>\n<li><strong>UEFI:</strong> versión moderna. Interfaz gráfica con soporte para mouse, discos mayores a 2 TB (GPT), arranque más rápido (Fast Boot), incluye <strong>Secure Boot</strong> para prevenir malware en el arranque.</li>\n</ul>",
    "tip": "Si el profe pregunta qué pasa si sacás la pila de la placa: el CMOS pierde la configuración (fecha, hora, orden de arranque) y vuelve a valores de fábrica. El BIOS/UEFI en sí NO se borra — está en memoria flash independiente."
  },
  {
    "id": "vn1",
    "cat": "vn",
    "catLabel": "Von Neumann",
    "q": "¿Qué es la arquitectura de Von Neumann?",
    "a": "La <strong>arquitectura de Von Neumann</strong> es el modelo de diseño fundamental de las computadoras modernas, propuesto por el matemático John von Neumann en <strong>1945</strong>.<br><br>\nSu característica principal y más importante es que define una computadora con una <strong>memoria unificada</strong> que almacena tanto las instrucciones del programa como los datos sobre los que opera, y una CPU que los procesa de forma <strong>secuencial</strong> a través de un <strong>bus único compartido</strong>.<br><br>\nEsta arquitectura introdujo el concepto de <strong>programa almacenado</strong>: las instrucciones residen en memoria igual que los datos, lo que permite modificar el programa en tiempo de ejecución.<br><br>\n<strong>Limitación conocida:</strong> el \"cuello de botella de Von Neumann\" — la CPU y la memoria compiten por el mismo bus, lo que limita el rendimiento cuando se necesita acceder frecuentemente a la memoria.",
    "tip": "Pregunta clásica: ¿Qué arquitectura soluciona el cuello de botella? → La arquitectura Harvard, que separa físicamente el bus de instrucciones del bus de datos."
  },
  {
    "id": "vn2",
    "cat": "vn",
    "catLabel": "Von Neumann",
    "q": "¿Cuáles son los registros de la CPU y para qué sirve cada uno?",
    "a": "Los <strong>registros</strong> son pequeñas memorias ultra-rápidas dentro de la CPU. Son el único lugar donde el procesador opera directamente sobre los datos:<ul>\n<li><strong>CP (Contador de Programa):</strong> contiene la dirección de memoria de la próxima instrucción a ejecutar. Se incrementa automáticamente después de cada fetch.</li>\n<li><strong>AC (Acumulador):</strong> almacena resultados temporales de la ALU. Es el registro de trabajo principal — la mayoría de las operaciones aritméticas pasan por él.</li>\n<li><strong>IR (Registro de Instrucción):</strong> contiene la instrucción que se está decodificando y ejecutando en ese momento exacto.</li>\n<li><strong>MAR (Memory Address Register):</strong> guarda la dirección de memoria que se quiere leer o escribir. Actúa como \"puntero\" al acceder a la memoria principal.</li>\n<li><strong>MBR (Memory Buffer Register):</strong> guarda temporalmente el dato leído desde memoria o el que se va a escribir en ella. Actúa como buffer entre la CPU y la RAM.</li>\n</ul>",
    "tip": "Distinción importante: CP y IR son para instrucciones; MAR y MBR son para datos en tránsito desde/hacia la memoria. El AC es donde vive el resultado de los cálculos."
  },
  {
    "id": "vn3",
    "cat": "vn",
    "catLabel": "Von Neumann",
    "q": "¿Cuál es la diferencia entre la UC y la ALU?",
    "a": "Ambas son componentes de la CPU pero cumplen roles completamente distintos:<br><br>\n<strong>UC (Unidad de Control):</strong> es el \"director\" de la CPU. Sus responsabilidades son:\n<ul>\n<li>Leer instrucciones de la memoria (fase FETCH)</li>\n<li>Decodificarlas para entender qué operación realizar (DECODE)</li>\n<li>Generar las señales de control necesarias para que el resto del sistema ejecute la operación (EXECUTE)</li>\n<li>Coordinar el flujo de datos entre registros, ALU y memoria</li>\n</ul>\n<strong>ALU (Unidad Aritmética Lógica):</strong> es el \"motor de cálculo\". Ejecuta:\n<ul>\n<li>Operaciones <strong>aritméticas:</strong> suma, resta, multiplicación, división</li>\n<li>Operaciones <strong>lógicas:</strong> AND, OR, NOT, XOR, comparaciones</li>\n<li>Opera sobre los datos que le pasa la UC, devuelve el resultado al AC</li>\n</ul>",
    "tip": "En resumen: UC decide QUÉ hacer y CUÁNDO hacerlo. ALU lo EJECUTA. La UC nunca calcula; la ALU nunca decide."
  },
  {
    "id": "top1",
    "cat": "top",
    "catLabel": "Topologías",
    "q": "¿Qué es una topología de red y cuáles existen?",
    "a": "Una <strong>topología de red</strong> define la forma en que los nodos (computadoras y dispositivos) están interconectados física o lógicamente para transferir datos mediante señales eléctricas u ópticas.<br><br>\nLas topologías principales son:\n<ul>\n<li><strong>Bus:</strong> cable único compartido (backbone) al que todos se conectan</li>\n<li><strong>Estrella:</strong> todos los nodos conectados a un hub o switch central</li>\n<li><strong>Anillo:</strong> lazo cerrado sin concentrador central</li>\n<li><strong>Malla:</strong> cada nodo conectado a varios o todos los demás</li>\n<li><strong>Árbol:</strong> combinación jerárquica de topologías en estrella</li>\n<li><strong>Híbrida:</strong> combinación de dos o más topologías según las necesidades</li>\n</ul>",
    "tip": "Nombralas todas en el oral — no decir 'etc'. El profe puede preguntarte por la que no nombraste."
  },
  {
    "id": "top2",
    "cat": "top",
    "catLabel": "Topologías",
    "q": "¿Cuál es la diferencia entre topología Estrella y Anillo? ⚠️",
    "a": "<strong>Estrella:</strong>\n<ul>\n<li>Todos los nodos se conectan <strong>directamente a un hub o switch central</strong></li>\n<li>Los datos siempre pasan por el concentrador para llegar a destino</li>\n<li><strong>Ventaja:</strong> fácil de gestionar; si un nodo falla no afecta a los demás</li>\n<li><strong>Desventaja:</strong> el hub es el <strong>punto único de fallo</strong> — si cae, toda la red cae</li>\n</ul>\n<strong>Anillo:</strong>\n<ul>\n<li>Los nodos forman un <strong>lazo cerrado</strong>, cada uno conectado exactamente a otros 2</li>\n<li><strong>No hay concentrador central</strong> — los datos viajan de nodo en nodo en una sola dirección</li>\n<li><strong>Ventaja:</strong> sin colisiones, acceso ordenado al medio</li>\n<li><strong>Desventaja:</strong> si falla un nodo o enlace, puede interrumpirse toda la red</li>\n</ul>",
    "tip": "CLAVE para el oral: el anillo NO tiene concentrador — ese detalle es exactamente lo que te preguntó el profe y donde fallaste. Estrella = hub central. Anillo = lazo directo entre nodos."
  },
  {
    "id": "top3",
    "cat": "top",
    "catLabel": "Topologías",
    "q": "¿Qué es la topología de Bus?",
    "a": "En la topología de <strong>Bus</strong>, todos los nodos comparten un único cable central llamado <strong>backbone</strong>. Los datos viajan en ambas direcciones por ese cable y todos los nodos los reciben, pero solo el destinatario los procesa.<br><br>\n<ul>\n<li><strong>Ventaja:</strong> simple, económica y fácil de implementar. Requiere poco cable comparada con otras topologías.</li>\n<li><strong>Desventaja crítica:</strong> si el cable central falla, <strong>toda la red cae</strong>. No hay redundancia. Además, si dos nodos transmiten simultáneamente se produce una <strong>colisión</strong> que corrompe ambos mensajes.</li>\n</ul>\nEsta topología fue muy popular en redes Ethernet antiguas (10BASE-2, coaxial) pero hoy está en desuso, reemplazada por la topología en estrella con switches.",
    "tip": "La topología Bus y la Estrella son las que más se confunden. Recordá: Bus = cable único compartido. Estrella = hub central con cables individuales a cada nodo."
  },
  {
    "id": "top4",
    "cat": "top",
    "catLabel": "Topologías",
    "q": "¿Qué es la topología de Malla?",
    "a": "En la topología de <strong>Malla</strong>, cada nodo se conecta directamente con varios o todos los demás nodos, creando múltiples caminos posibles para cada comunicación.<br><br>\n<strong>Dos variantes:</strong>\n<ul>\n<li><strong>Malla completa (full mesh):</strong> cada nodo está conectado con absolutamente todos los demás. Si hay n nodos, se necesitan n(n-1)/2 enlaces.</li>\n<li><strong>Malla parcial:</strong> cada nodo se conecta con varios pero no todos. Balance entre redundancia y costo.</li>\n</ul>\n<ul>\n<li><strong>Ventaja:</strong> la más tolerante a fallos de todas — si un enlace o nodo cae, los datos pueden llegar por otro camino. Alta redundancia.</li>\n<li><strong>Desventaja:</strong> muy costosa y compleja de implementar, especialmente en la versión completa. Difícil de gestionar.</li>\n</ul>\nSe usa principalmente en redes WAN críticas, backbone de Internet e infraestructuras militares.",
    "tip": "Recordá: Malla = más redundante. Árbol = más escalable. Son los dos extremos opuestos en términos de costo vs tolerancia a fallos."
  },
  {
    "id": "top5",
    "cat": "top",
    "catLabel": "Topologías",
    "q": "¿Qué es la topología de Árbol?",
    "a": "La topología de <strong>Árbol</strong> combina múltiples topologías en estrella organizadas de forma <strong>jerárquica</strong>, formando una estructura que se ramifica como un árbol desde la raíz hacia las hojas.<br><br>\n<strong>Estructura:</strong>\n<ul>\n<li><strong>Nodo raíz:</strong> el hub o switch principal en la cima de la jerarquía</li>\n<li><strong>Nodos intermedios:</strong> hubs o switches que conectan grupos de nodos</li>\n<li><strong>Nodos hoja:</strong> los dispositivos finales (computadoras, impresoras)</li>\n</ul>\n<ul>\n<li><strong>Ventaja:</strong> muy escalable — fácil agregar nuevas ramas sin afectar el resto. Organizada y fácil de administrar por segmentos.</li>\n<li><strong>Desventaja:</strong> si cae un nodo intermedio o la raíz, cae todo lo que depende de él. Alta dependencia de los nodos superiores.</li>\n</ul>",
    "tip": "La topología Árbol es básicamente una red de redes en estrella. Se usa mucho en redes empresariales grandes con pisos o edificios separados."
  },
  {
    "id": "osi1",
    "cat": "osi",
    "catLabel": "OSI/TCP-IP",
    "q": "¿Cuál es la diferencia entre el modelo OSI y TCP/IP?",
    "a": "Ambos modelos describen cómo se transmite información en una red, pero difieren en origen, estructura y aplicación:<br><br>\n<strong>Modelo OSI (Open Systems Interconnection):</strong>\n<ul>\n<li><strong>7 capas</strong>, desarrollado por <strong>ISO</strong></li>\n<li>Es un modelo <strong>teórico de referencia</strong> — no es un protocolo en uso, sino un marco conceptual para entender, diseñar y diagnosticar redes</li>\n<li>Independiente de protocolos específicos (genérico)</li>\n<li>Se usa para identificar en qué capa ocurre un problema de red</li>\n</ul>\n<strong>Modelo TCP/IP:</strong>\n<ul>\n<li><strong>4 capas</strong>, desarrollado por <strong>DARPA</strong> (Departamento de Defensa de EE.UU.)</li>\n<li>Es el modelo <strong>práctico</strong> que realmente mueve Internet</li>\n<li>Basado en protocolos específicos: TCP, IP, UDP, HTTP, etc.</li>\n<li>No funcionan en paralelo — OSI es referencia conceptual, TCP/IP opera realmente</li>\n</ul>",
    "tip": "Error común en el oral: decir que OSI 'aparece' cuando TCP/IP falla. No es así — OSI es solo una referencia conceptual para diagnosticar, no un sistema activo."
  },
  {
    "id": "osi2",
    "cat": "osi",
    "catLabel": "OSI/TCP-IP",
    "q": "¿Cuáles son las 7 capas del modelo OSI y qué función cumple cada una?",
    "a": "Las <strong>7 capas del modelo OSI</strong> de la más alta a la más baja:<ul>\n<li><strong>7 – Aplicación:</strong> interfaz directa con el usuario y las aplicaciones. Protocolos: HTTP, FTP, SMTP, DNS.</li>\n<li><strong>6 – Presentación:</strong> formato, cifrado y compresión de datos. Traduce entre formatos de red y de aplicación.</li>\n<li><strong>5 – Sesión:</strong> gestiona el inicio, mantenimiento y cierre de conexiones entre aplicaciones.</li>\n<li><strong>4 – Transporte:</strong> entrega confiable de datos de extremo a extremo. Protocolos: <strong>TCP</strong> (confiable) y <strong>UDP</strong> (no confiable pero rápido).</li>\n<li><strong>3 – Red:</strong> enrutamiento de paquetes entre redes distintas. Protocolo clave: <strong>IP</strong>.</li>\n<li><strong>2 – Enlace de datos:</strong> transmisión confiable entre nodos directamente conectados. Trabaja con tramas y direcciones <strong>MAC</strong>.</li>\n<li><strong>1 – Física:</strong> transmisión de bits sobre el medio físico. Cables, señales eléctricas, ópticas o inalámbricas.</li>\n</ul>",
    "tip": "IP está en capa 3 (Red). TCP y UDP están en capa 4 (Transporte). Eso salió en el examen. Las capas 5, 6 y 7 del OSI se combinan en la capa Aplicación de TCP/IP."
  },
  {
    "id": "kar1",
    "cat": "kar",
    "catLabel": "Karnaugh",
    "q": "¿Por qué en Karnaugh los grupos deben ser potencias de 2?",
    "a": "La razón es estrictamente <strong>matemática</strong>, basada en álgebra booleana.<br><br>\nPor la propiedad fundamental <strong>A + Ā = 1</strong>, al agrupar dos celdas adyacentes que solo difieren en una variable, esa variable se cancela automáticamente, simplificando el término.<br><br>\n<strong>El patrón de cancelación:</strong>\n<ul>\n<li>Grupo de <strong>2</strong> celdas → se cancela <strong>1 variable</strong></li>\n<li>Grupo de <strong>4</strong> celdas → se cancelan <strong>2 variables</strong></li>\n<li>Grupo de <strong>8</strong> celdas → se cancelan <strong>3 variables</strong></li>\n<li>Grupo de <strong>16</strong> celdas → se cancelan <strong>4 variables</strong> (función constante = 1)</li>\n</ul>\nUn grupo de 3 o 6 no permite que esta cancelación ocurra de forma limpia — no podés derivar un término booleano válido y simplificado. Por eso <strong>solo son válidos 1, 2, 4, 8 y 16</strong>.",
    "tip": "Respuesta corta para el oral: 'Porque por álgebra booleana, A + Ā = 1, y duplicar el grupo cancela exactamente una variable. Grupos de 3 o 6 no permiten esa cancelación.'"
  },
  {
    "id": "kar2",
    "cat": "kar",
    "catLabel": "Karnaugh",
    "q": "¿Cuándo agrupás 1s y cuándo 0s en Karnaugh?",
    "a": "La elección de qué agrupar depende de qué forma de la función querés obtener:<br><br>\n<ul>\n<li><strong>Agrupás 1s</strong> → obtenés la función en forma de <strong>SOP (Suma de Productos)</strong>: términos AND conectados por OR. También llamada forma canónica de minterms.</li>\n<li><strong>Agrupás 0s</strong> → obtenés la función en forma de <strong>POS (Producto de Sumas)</strong>: términos OR conectados por AND. También llamada forma canónica de maxterms.</li>\n</ul>\n<strong>Reglas generales:</strong>\n<ul>\n<li>Cuanto más grande el grupo → más variables se cancelan → término más simple</li>\n<li>Los grupos pueden solaparse — una celda puede pertenecer a varios grupos</li>\n<li>Se puede usar el <strong>wrap-around</strong>: los bordes opuestos del mapa son adyacentes</li>\n<li>Siempre buscar los grupos más grandes posibles primero</li>\n</ul>",
    "tip": "Resumen: 1s = SOP = Suma de Productos. 0s = POS = Producto de Sumas. Ambas representan la misma función booleana, solo en distinta forma."
  },
  {
    "id": "vf1",
    "cat": "vf",
    "catLabel": "V / F",
    "q": "V/F: \"El componente más importante de la computadora es la placa madre.\"",
    "a": "<strong style='color:#f87171'>FALSO (F)</strong><br><br>\n<strong>Justificación:</strong> Si bien la placa madre es fundamental porque interconecta todos los componentes, afirmar que es \"el más importante\" de forma aislada es incorrecto. La CPU es el cerebro que ejecuta instrucciones, la RAM es indispensable para el procesamiento en curso, la fuente alimenta todo el sistema. Ningún componente puede considerarse el más importante por sí solo — el sistema no funciona si falta cualquiera de ellos. Todos son interdependientes.",
    "tip": "La clave de la respuesta es 'de forma aislada' — ningún componente es el más importante porque todos son interdependientes."
  },
  {
    "id": "vf2",
    "cat": "vf",
    "catLabel": "V / F",
    "q": "V/F: \"Los circuitos digitales están formados por un número de compuertas lógicas definidas por su composición interna.\"",
    "a": "<strong style='color:#34d399'>VERDADERO (V)</strong><br><br>\n<strong>Justificación:</strong> Los circuitos digitales se construyen combinando compuertas lógicas: AND, OR, NOT, NAND, NOR, XOR, XNOR. La cantidad, el tipo y la disposición de esas compuertas — es decir, su <strong>composición interna</strong> — determinan completamente el comportamiento del circuito. Esto aplica tanto a circuitos combinacionales (cuya salida depende solo de las entradas actuales) como a circuitos secuenciales (que tienen memoria de estados anteriores)."
  },
  {
    "id": "vf3",
    "cat": "vf",
    "catLabel": "V / F",
    "q": "V/F: \"En el mapa de Karnaugh se puede agrupar término de a 1, 2, 3 y 6 ceros o unos.\"",
    "a": "<strong style='color:#f87171'>FALSO (F)</strong><br><br>\n<strong>Justificación:</strong> En los mapas de Karnaugh, los agrupamientos deben ser siempre <strong>potencias de 2</strong>: grupos de 1, 2, 4, 8 o 16 celdas. Los grupos de <strong>3 o 6 NO son válidos</strong>. La razón es matemática: solo cuando el grupo es una potencia de 2 se puede aplicar la propiedad booleana A + Ā = 1 para cancelar variables. Un grupo de 3 o 6 no permite esa cancelación y no puede expresarse como un término booleano simplificado."
  },
  {
    "id": "vf4",
    "cat": "vf",
    "catLabel": "V / F",
    "q": "V/F: \"En la topología de anillo todas las computadoras se conectan a un concentrador.\"",
    "a": "<strong style='color:#f87171'>FALSO (F)</strong><br><br>\n<strong>Justificación:</strong> Esa descripción corresponde a la <strong>topología en Estrella</strong>, no al Anillo. En la topología de Anillo, cada nodo se conecta directamente al siguiente y al anterior, formando un lazo cerrado. <strong>No existe un concentrador central</strong> — los datos viajan de nodo en nodo en secuencia hasta llegar al destino. Es exactamente esta diferencia la que distingue Estrella de Anillo.",
    "tip": "Este fue el punto exacto donde el profe te cortó el oral anterior. Anillo = sin concentrador. Estrella = con concentrador (hub/switch)."
  },
  {
    "id": "e2q1",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Cuál es la diferencia entre arquitectura CISC y RISC?",
    "a": "Son las dos filosofías de diseño de conjuntos de instrucciones más importantes:<br><br><strong>CISC (Complex Instruction Set Computer):</strong><ul><li>Gran cantidad de instrucciones complejas, muchas de las cuales realizan múltiples operaciones</li><li>Una sola instrucción puede acceder a memoria, operar y guardar el resultado</li><li>Instrucciones de longitud variable</li><li>Menos instrucciones en el código fuente, pero cada una tarda más ciclos</li><li>Ejemplo: <strong>Intel x86</strong> (la arquitectura de las PCs actuales)</li></ul><strong>RISC (Reduced Instruction Set Computer):</strong><ul><li>Pocas instrucciones simples, cada una realiza una sola operación</li><li>Las operaciones con memoria son solo LOAD y STORE</li><li>Instrucciones de longitud fija, ejecutadas en 1 ciclo de reloj</li><li>Ejemplos: <strong>ARM</strong> (celulares, tablets), MIPS, PowerPC</li></ul>",
    "tip": "CISC = pocas instrucciones complejas y lentas. RISC = muchas instrucciones simples y rápidas. ARM (tu celular) es RISC. Intel (tu PC) es CISC."
  },
  {
    "id": "e2q2",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Cuál es la diferencia entre arquitectura Von Neumann y Harvard?",
    "a": "<strong>Von Neumann:</strong><ul><li>Memoria unificada para instrucciones Y datos</li><li>Bus único compartido — genera el cuello de botella</li><li>Más simple, usada en PCs</li></ul><strong>Harvard:</strong><ul><li>Memorias separadas físicamente: una para instrucciones, otra para datos</li><li>Buses independientes — elimina el cuello de botella</li><li>CPU puede buscar la próxima instrucción mientras procesa datos simultáneamente</li><li>Usada en microcontroladores y DSPs (Arduino, PICs)</li></ul>",
    "tip": "Pregunta que ya salió en el oral: ¿Qué arquitectura soluciona el cuello de botella? → Harvard. Buses SEPARADOS para instrucciones y datos."
  },
  {
    "id": "e2q3",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Qué es la microarquitectura y qué es la trayectoria de datos (datapath)?",
    "a": "<strong>Microarquitectura:</strong> implementación interna concreta de una arquitectura de CPU. Define cómo los componentes físicos (ALU, registros, buses internos, UC) están organizados y conectados. Dos CPUs pueden implementar la misma arquitectura (ej: x86) con microarquitecturas distintas y rendimientos diferentes.<br><br><strong>Trayectoria de datos (Datapath):</strong> el camino físico que recorren los datos dentro de la CPU durante la ejecución. Incluye registros (CP, AC, IR, MAR, MBR), la ALU, buses internos y multiplexores. La UC dirige el datapath.",
    "tip": "Microarquitectura = el CÓMO está construida la CPU por dentro. Datapath = el CAMINO que siguen los datos. La UC controla el datapath."
  },
  {
    "id": "e2q4",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿En qué consiste el ciclo Fetch-Decode-Execute?",
    "a": "<strong>1. FETCH (Búsqueda):</strong><ul><li>MAR ← CP</li><li>MBR ← MEM[MAR]</li><li>IR ← MBR</li><li>CP ← CP + 1</li></ul><strong>2. DECODE (Decodificación):</strong><ul><li>La UC analiza el opcode del IR</li><li>Determina qué operación realizar y qué operandos necesita</li><li>Genera las señales de control necesarias</li></ul><strong>3. EXECUTE (Ejecución):</strong><ul><li>Se realiza la operación (aritmética, lógica, transferencia, salto, E/S)</li><li>Resultado en AC o memoria según la instrucción</li><li>Vuelve al paso 1</li></ul>",
    "tip": "Este ciclo es la base de la máquina hipotética del examen. Lo ejecutaste 4 veces: IN → ADD → STORE → OUT."
  },
  {
    "id": "e2q5",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Qué es el pipeline y cómo mejora el rendimiento?",
    "a": "Técnica que ejecuta múltiples instrucciones superpuestas en distintas fases simultáneamente.<br><br><strong>Sin pipeline:</strong> 3 instrucciones × 3 fases = 9 ciclos.<br><strong>Con pipeline:</strong> las mismas 3 instrucciones terminan en 5 ciclos — mientras una está en EXECUTE, la siguiente está en DECODE y la siguiente en FETCH.<br><br><strong>Analogía:</strong> línea de ensamblaje de una fábrica.<br><br><strong>Problemas:</strong><ul><li><strong>Hazard de datos:</strong> instrucción necesita resultado de la anterior aún no terminada</li><li><strong>Hazard de control:</strong> saltos condicionales rompen el flujo</li><li><strong>Hazard estructural:</strong> dos instrucciones necesitan el mismo recurso</li></ul>",
    "tip": "Pipeline mejora el throughput (instrucciones por segundo) pero no la latencia de cada instrucción individual."
  },
  {
    "id": "e2q6",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Qué son los sistemas multiprocesador y cuáles son sus tipos?",
    "a": "Computadora con dos o más procesadores trabajando coordinadamente.<br><br><strong>Tipos:</strong><ul><li><strong>SMP (Symmetric Multi-Processing):</strong> múltiples procesadores comparten la misma memoria y bus. Es el modelo de las PCs modernas con múltiples núcleos.</li><li><strong>NUMA (Non-Uniform Memory Access):</strong> cada procesador tiene memoria local propia pero puede acceder a la de otros. Usado en servidores grandes.</li><li><strong>Clusters:</strong> múltiples computadoras completas conectadas por red de alta velocidad. Cada nodo tiene su propia memoria y SO. Usado en supercomputadoras.</li></ul>",
    "tip": "SMP = múltiples CPUs, memoria compartida. Cluster = múltiples PCs completas en red. La diferencia clave: comparten memoria física o no."
  },
  {
    "id": "e2q7",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Cuál es la diferencia entre computación paralela, concurrente y multinúcleo?",
    "a": "<strong>Paralela:</strong> múltiples tareas ejecutándose literalmente al mismo tiempo en distintos procesadores o núcleos. Requiere hardware múltiple.<br><br><strong>Concurrente:</strong> múltiples tareas progresan en el mismo período pero no necesariamente al mismo instante. Un solo núcleo puede alternar entre tareas dando ilusión de simultaneidad.<br><br><strong>Multinúcleo:</strong> un único chip con múltiples núcleos independientes. Cada núcleo ejecuta un hilo en paralelo real. Es la implementación más común de paralelismo en PCs actuales.",
    "tip": "Paralelo = al mismo tiempo real. Concurrente = parece simultáneo. Multinúcleo = el hardware que hace posible el paralelismo en una sola CPU."
  },
  {
    "id": "e2q8",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Cuáles son las compuertas lógicas básicas y qué función realiza cada una?",
    "a": "<ul><li><strong>AND:</strong> salida = 1 solo si todas las entradas son 1</li><li><strong>OR:</strong> salida = 1 si al menos una entrada es 1</li><li><strong>NOT:</strong> invierte la entrada (0→1, 1→0)</li><li><strong>NAND:</strong> AND negado. Salida = 0 solo si todas son 1. Compuerta universal.</li><li><strong>NOR:</strong> OR negado. Salida = 1 solo si todas son 0. También universal.</li><li><strong>XOR:</strong> salida = 1 si las entradas son diferentes. Fundamental en sumadores.</li><li><strong>XNOR:</strong> XOR negado. Salida = 1 si las entradas son iguales.</li></ul>",
    "tip": "NAND y NOR son universales — con solo uno de esos tipos podés construir cualquier circuito."
  },
  {
    "id": "e2q9",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Cuál es la diferencia entre circuitos combinacionales y secuenciales?",
    "a": "<strong>Combinacionales:</strong><ul><li>Salida depende únicamente de las entradas actuales</li><li>Sin memoria — no recuerdan estados anteriores</li><li>Ejemplos: sumadores, multiplexores, ALU</li></ul><strong>Secuenciales:</strong><ul><li>Salida depende de entradas actuales Y del estado anterior</li><li>Con memoria (flip-flops, latches)</li><li>Ejemplos: registros de la CPU, contadores, RAM</li><li>Los registros CP, AC, IR, MAR, MBR son circuitos secuenciales</li></ul>",
    "tip": "Combinacional = sin memoria. Secuencial = con memoria. Los registros de la CPU son secuenciales."
  },
  {
    "id": "e2q10",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Cómo se representan los números negativos en binario (Complemento a 2)?",
    "a": "Para obtener el negativo de un número binario:<ol><li>Invertir todos los bits (complemento a 1)</li><li>Sumar 1 al resultado</li></ol><strong>Ejemplo — representar -5 en 8 bits:</strong><ul><li>5 = 00000101</li><li>Invertir: 11111010</li><li>Sumar 1: 11111011 → este es -5</li></ul><strong>Ventajas:</strong><ul><li>Una sola representación del cero</li><li>Suma positivos y negativos con el mismo circuito</li><li>MSB indica signo: 0 = positivo, 1 = negativo</li></ul>",
    "tip": "Complemento a 2 = invertir bits + sumar 1. Estándar en todas las CPUs modernas."
  },
  {
    "id": "e2q11",
    "cat": "eje2",
    "catLabel": "Eje 2",
    "q": "¿Qué es la codificación de información y cuáles son los estándares más importantes?",
    "a": "Proceso de convertir datos del mundo real en representaciones binarias.<br><br><ul><li><strong>ASCII:</strong> 128 caracteres en 7 bits. Letras inglesas, dígitos, puntuación. Primer estándar universal.</li><li><strong>Unicode/UTF-8:</strong> más de 1.1 millones de caracteres, todos los idiomas y emojis. Compatible con ASCII para los primeros 128 caracteres.</li><li><strong>BCD:</strong> cada dígito decimal codificado en 4 bits. Útil en aplicaciones financieras.</li><li><strong>IEEE 754:</strong> números de punto flotante en 32 o 64 bits. Divide en signo, exponente y mantisa. Es el float/double de la programación.</li></ul>",
    "tip": "ASCII = inglés básico (7 bits). UTF-8 = todo el mundo. IEEE 754 = decimales (float/double)."
  },
  {
    "id": "e3q1",
    "cat": "eje3",
    "catLabel": "Eje 3",
    "q": "¿Cuáles son los orígenes y la evolución de Internet?",
    "a": "Internet nació como un proyecto militar/académico y evolucionó hasta convertirse en la red global que conocemos hoy:<br><br><ul><li><strong>ARPANET (1969):</strong> primera red de computadoras, creada por DARPA. Conectaba solo 4 universidades. Diseñada para sobrevivir ataques nucleares mediante enrutamiento descentralizado.</li><li><strong>Protocolos TCP/IP (1974):</strong> Vint Cerf y Bob Kahn desarrollan TCP/IP, el lenguaje común que permite que distintas redes se interconecten.</li><li><strong>DNS (1984):</strong> Sistema de Nombres de Dominio. Traduce nombres legibles (google.com) a direcciones IP numéricas.</li><li><strong>World Wide Web (1991):</strong> Tim Berners-Lee inventa la WWW en el CERN. Internet existía antes; la WWW es una aplicación que corre sobre Internet.</li><li><strong>Era móvil (2000s-presente):</strong> smartphones, WiFi, 4G/5G democratizan el acceso.</li></ul>",
    "tip": "Distinción clave: Internet es la infraestructura de red. La WWW es una aplicación (páginas web) que corre sobre ella. Correo, FTP, videollamadas también son Internet pero no WWW."
  },
  {
    "id": "e3q2",
    "cat": "eje3",
    "catLabel": "Eje 3",
    "q": "¿Qué es la arquitectura de red y cuáles son sus componentes principales?",
    "a": "Define la estructura y organización de una red — cómo están dispuestos y conectados sus componentes.<br><br><strong>Componentes:</strong><ul><li><strong>Nodos:</strong> cualquier dispositivo conectado — PCs, servidores, celulares.</li><li><strong>Medios de transmisión:</strong> UTP, fibra óptica, coaxial, WiFi, Bluetooth, 4G/5G.</li><li><strong>Dispositivos de interconexión:</strong> Hub (reenvía a todos), Switch (reenvía al destino correcto), Router (conecta redes distintas), Modem (convierte señal analógica a digital).</li><li><strong>Protocolos:</strong> reglas de comunicación — TCP/IP, HTTP, FTP, DNS.</li><li><strong>Topología:</strong> organización física o lógica (bus, estrella, anillo, malla).</li></ul>",
    "tip": "Hub reenvía a todos (sin inteligencia). Switch reenvía solo al destinatario. Router conecta redes distintas. Esas tres distinciones son las que más pregunta el profe."
  },
  {
    "id": "e3q3",
    "cat": "eje3",
    "catLabel": "Eje 3",
    "q": "¿Qué es la computación distribuida y cuáles son sus características?",
    "a": "Modelo en el que múltiples computadoras independientes conectadas en red trabajan coordinadamente, apareciendo ante el usuario como un sistema único.<br><br><strong>Características:</strong><ul><li><strong>Transparencia:</strong> el usuario no percibe la distribución</li><li><strong>Escalabilidad:</strong> se agregan nodos para aumentar capacidad</li><li><strong>Tolerancia a fallos:</strong> si un nodo falla, los demás continúan</li><li><strong>Concurrencia:</strong> múltiples nodos procesan simultáneamente</li><li><strong>Heterogeneidad:</strong> nodos con distinto hardware y SO</li></ul><strong>Ejemplos:</strong> Google Search, Netflix, blockchain, sistemas bancarios.",
    "tip": "Clave: parece un sistema único pero son múltiples máquinas. Diferencia con multiprocesador: los nodos distribuidos están en distintas máquinas en red, no comparten memoria física."
  },
  {
    "id": "e3q4",
    "cat": "eje3",
    "catLabel": "Eje 3",
    "q": "¿En qué consiste el paradigma Cliente/Servidor?",
    "a": "Divide los roles en dos partes fijas:<br><br><strong>Servidor:</strong><ul><li>Provee servicios o recursos</li><li>Siempre activo, esperando solicitudes</li><li>Dirección fija y conocida (IP/dominio)</li><li>Atiende múltiples clientes simultáneamente</li><li>Ejemplos: servidor web (Apache, Nginx), servidor de BD, servidor de correo</li></ul><strong>Cliente:</strong><ul><li>Solicita servicios — siempre inicia la comunicación</li><li>Puede conectarse y desconectarse libremente</li><li>Ejemplos: navegador, app de correo, cliente FTP</li></ul><strong>Ventaja:</strong> control centralizado, fácil gestión.<br><strong>Desventaja:</strong> servidor = punto único de fallo.",
    "tip": "HTTP es el ejemplo más claro: tu navegador (cliente) pide una página, el servidor web la devuelve. El cliente SIEMPRE inicia."
  },
  {
    "id": "e3q5",
    "cat": "eje3",
    "catLabel": "Eje 3",
    "q": "¿Qué es el modelo Peer to Peer (P2P) y en qué se diferencia del Cliente/Servidor?",
    "a": "Cada nodo (peer) actúa como cliente Y servidor simultáneamente — no hay roles fijos.<br><br><strong>Características P2P:</strong><ul><li>Sin servidor central — recursos distribuidos entre todos</li><li>Altamente tolerante a fallos</li><li>Escala naturalmente: más usuarios = más recursos</li></ul><strong>Comparación:</strong><ul><li>C/S: roles fijos. P2P: intercambiables.</li><li>C/S: centralizado. P2P: descentralizado.</li><li>C/S: punto único de fallo. P2P: muy tolerante.</li><li>C/S: fácil de controlar. P2P: difícil de controlar.</li></ul><strong>Ejemplos:</strong> BitTorrent, blockchain/Bitcoin, VoIP.",
    "tip": "BitTorrent: cuando descargás un archivo, al mismo tiempo lo compartís con otros. Cada usuario es cliente Y servidor."
  },
  {
    "id": "e3q6",
    "cat": "eje3",
    "catLabel": "Eje 3",
    "q": "¿Qué es la computación centrada en redes (Network-Centric Computing)?",
    "a": "Paradigma donde la red es el elemento central — el procesamiento, almacenamiento y aplicaciones residen en la red, no en el dispositivo local.<br><br><strong>Principio:</strong> 'La red es la computadora' (Sun Microsystems, 1984).<br><br><strong>Características:</strong><ul><li>Aplicaciones en servidores remotos</li><li>Datos en la nube (cloud storage)</li><li>El dispositivo solo necesita conectividad y un navegador</li><li>Actualizaciones centralizadas</li></ul><strong>Evolución:</strong> derivó en el Cloud Computing actual — AWS, Google Cloud, Azure, Google Docs, Netflix.",
    "tip": "Lo vivís todos los días: Google Docs procesa en servidores de Google. Netflix está en servidores, no en tu celu. Eso es computación centrada en redes."
  },
  {
    "id": "e3q7",
    "cat": "eje3",
    "catLabel": "Eje 3",
    "q": "¿Qué es la computación móvil y cuáles son sus características?",
    "a": "Permite acceder a recursos y servicios de red desde dispositivos portátiles mientras el usuario se desplaza.<br><br><strong>Características:</strong><ul><li><strong>Movilidad:</strong> se mueve sin perder conectividad</li><li><strong>Portabilidad:</strong> smartphones, tablets, laptops</li><li><strong>Conectividad inalámbrica:</strong> WiFi, Bluetooth, 4G/5G</li><li><strong>Recursos limitados:</strong> batería, procesamiento y almacenamiento más acotados que una PC</li><li><strong>Handover:</strong> cambio entre celdas de red sin interrumpir la conexión</li></ul><strong>Tecnologías:</strong> WiFi (802.11), Bluetooth, 4G/5G, GPS.",
    "tip": "Handover: cuando vas en colectivo y tu celu cambia de antena sin que se corte la llamada — eso es handover automático entre celdas."
  },
  {
    "id": "e4q1",
    "cat": "eje4",
    "catLabel": "Eje 4",
    "q": "¿Cuáles son los tipos de redes según su cobertura geográfica?",
    "a": "Las redes se clasifican según el área física que abarcan:<ul>\n<li><strong>PAN (Personal Area Network):</strong> alcance de pocos metros, entorno personal. Bluetooth conectando auriculares al celu, conexión USB. Rango: ~10 metros.</li>\n<li><strong>LAN (Local Area Network):</strong> red de área local. Un edificio, oficina o campus. Alta velocidad, baja latencia, administrada por una organización. Ejemplos: red de una empresa, red doméstica con WiFi.</li>\n<li><strong>MAN (Metropolitan Area Network):</strong> área metropolitana, una ciudad. Conecta múltiples LANs dentro de una zona geográfica. Ejemplos: red de una universidad con múltiples campus, red de cámaras de una ciudad.</li>\n<li><strong>WAN (Wide Area Network):</strong> área amplia, países o continentes. Baja velocidad relativa, alta latencia. Usa infraestructura de telecomunicaciones (fibra, satélite). El ejemplo más grande: <strong>Internet</strong>.</li>\n</ul>",
    "tip": "PAN → personal (metros). LAN → local (edificio). MAN → metropolitana (ciudad). WAN → amplia (países). Internet es la WAN más grande del mundo."
  },
  {
    "id": "e4q2",
    "cat": "eje4",
    "catLabel": "Eje 4",
    "q": "¿Cuáles son los principales dispositivos de red y qué función cumple cada uno?",
    "a": "<ul>\n<li><strong>Hub:</strong> repite la señal a todos los puertos sin inteligencia. Todos los dispositivos reciben todos los mensajes. Obsoleto, reemplazado por switches.</li>\n<li><strong>Switch:</strong> aprende las direcciones MAC de cada puerto y envía los datos solo al destinatario correcto. Opera en capa 2 (Enlace). El dispositivo central de las LANs modernas.</li>\n<li><strong>Router:</strong> conecta redes distintas y determina la mejor ruta para los paquetes. Opera en capa 3 (Red). Usa direcciones IP. Es el dispositivo que conecta tu LAN hogareña con Internet.</li>\n<li><strong>Modem:</strong> modula y demodula señales — convierte señales digitales a analógicas y viceversa para transmitir por la línea telefónica o cable. ADSL, cable modem, fibra óptica.</li>\n<li><strong>Access Point (AP):</strong> punto de acceso inalámbrico. Conecta dispositivos WiFi a la red cableada. Extiende la red LAN al espacio inalámbrico.</li>\n<li><strong>Firewall:</strong> dispositivo (o software) que filtra el tráfico de red según reglas de seguridad. Protege la red interna de accesos no autorizados desde el exterior.</li>\n</ul>",
    "tip": "Regla para el oral: Hub=sin inteligencia, a todos. Switch=inteligente, al correcto (MAC). Router=entre redes distintas (IP). Modem=convierte digital↔analógico."
  },
  {
    "id": "e4q3",
    "cat": "eje4",
    "catLabel": "Eje 4",
    "q": "¿Cuáles son los principales medios de transmisión y sus características?",
    "a": "Los medios de transmisión son los canales físicos por los que viajan los datos:<br><br>\n<strong>Medios guiados (cableados):</strong>\n<ul>\n<li><strong>Par trenzado (UTP/STP):</strong> el más común en redes LAN. Dos cables de cobre trenzados entre sí para reducir interferencias. Categorías: Cat5e (100 Mbps), Cat6 (1 Gbps), Cat6A (10 Gbps). Económico y fácil de instalar.</li>\n<li><strong>Cable coaxial:</strong> núcleo de cobre rodeado de blindaje. Usado en televisión por cable y redes antiguas (Ethernet coaxial). Más resistente a interferencias que UTP.</li>\n<li><strong>Fibra óptica:</strong> transmite datos como pulsos de luz. Altísima velocidad (hasta Tbps), inmune a interferencias electromagnéticas, larga distancia sin degradación. Más costosa. Monomodo (larga distancia) y multimodo (corta distancia).</li>\n</ul>\n<strong>Medios no guiados (inalámbricos):</strong>\n<ul>\n<li><strong>WiFi (IEEE 802.11):</strong> ondas de radio 2.4 GHz y 5 GHz. LAN inalámbrica. Versiones: 802.11n, 802.11ac (WiFi 5), 802.11ax (WiFi 6).</li>\n<li><strong>Bluetooth:</strong> corto alcance (~10m), bajo consumo. Conexión entre dispositivos personales.</li>\n<li><strong>Redes celulares (4G/5G):</strong> infraestructura de antenas. 4G hasta ~100 Mbps, 5G hasta ~10 Gbps.</li>\n</ul>",
    "tip": "Fibra óptica = más rápida, más cara, inmune a interferencias electromagnéticas, usa luz no electricidad. UTP = más común, económica, suficiente para la mayoría de LANs."
  },
  {
    "id": "e4q4",
    "cat": "eje4",
    "catLabel": "Eje 4",
    "q": "¿Qué es la máscara de red y para qué sirve?",
    "a": "La <strong>máscara de red (subnet mask)</strong> es un número de 32 bits que determina qué parte de una dirección IP identifica la red y qué parte identifica el host (dispositivo) dentro de esa red.<br><br>\n<strong>Funcionamiento:</strong>\n<ul>\n<li>Se aplica una operación AND bit a bit entre la IP y la máscara</li>\n<li>Los bits en 1 de la máscara corresponden a la parte de red</li>\n<li>Los bits en 0 corresponden a la parte de host</li>\n</ul>\n<strong>Ejemplos comunes:</strong>\n<ul>\n<li><strong>255.255.255.0 (/24):</strong> los primeros 3 octetos = red, el último = host. Hasta 254 hosts.</li>\n<li><strong>255.255.0.0 (/16):</strong> los primeros 2 octetos = red. Hasta 65.534 hosts.</li>\n<li><strong>255.0.0.0 (/8):</strong> solo el primer octeto = red. Hasta 16 millones de hosts.</li>\n</ul>\n<strong>Ejemplo práctico:</strong> IP 192.168.1.100 con máscara 255.255.255.0 → red: 192.168.1.0, host: 100. Solo puede comunicarse directamente con dispositivos en 192.168.1.x.",
    "tip": "La máscara define los límites de la red. Si dos dispositivos tienen distinta red (según la máscara), necesitan un router para comunicarse."
  },
  {
    "id": "e4q5",
    "cat": "eje4",
    "catLabel": "Eje 4",
    "q": "¿Cuáles son los protocolos de red más importantes y qué función cumple cada uno?",
    "a": "Los <strong>protocolos</strong> son conjuntos de reglas que definen cómo se comunican los nodos en una red:<ul>\n<li><strong>IP (Internet Protocol):</strong> proporciona direccionamiento y enrutamiento de paquetes entre redes. Opera en capa 3. No garantiza entrega.</li>\n<li><strong>TCP (Transmission Control Protocol):</strong> entrega confiable y ordenada de datos. Establece conexión (3-way handshake), verifica entrega, retransmite si hay pérdidas. Usado en HTTP, FTP, email.</li>\n<li><strong>UDP (User Datagram Protocol):</strong> envío sin conexión, sin garantía de entrega. Más rápido que TCP. Usado en streaming, videojuegos, DNS, VoIP.</li>\n<li><strong>HTTP/HTTPS:</strong> transferencia de páginas web. HTTPS agrega cifrado SSL/TLS. Puerto 80 (HTTP) y 443 (HTTPS).</li>\n<li><strong>DNS (Domain Name System):</strong> traduce nombres de dominio (google.com) a direcciones IP. Puerto 53.</li>\n<li><strong>DHCP:</strong> asigna automáticamente direcciones IP a los dispositivos de la red. Sin DHCP, cada dispositivo necesita IP manual.</li>\n<li><strong>FTP:</strong> transferencia de archivos entre cliente y servidor. Puertos 20 y 21.</li>\n</ul>",
    "tip": "TCP = confiable pero más lento (HTTP, email). UDP = rápido pero sin garantía (streaming, juegos, DNS). DHCP = el que te da IP automática al conectarte al WiFi."
  },
  {
    "id": "e4q6",
    "cat": "eje4",
    "catLabel": "Eje 4",
    "q": "¿Qué son los estándares de red y cuáles son los más importantes?",
    "a": "Los <strong>estándares de red</strong> son especificaciones técnicas que garantizan la interoperabilidad entre equipos de distintos fabricantes.<br><br>\n<strong>Principales organismos:</strong>\n<ul>\n<li><strong>IEEE:</strong> Institute of Electrical and Electronics Engineers — define estándares de redes locales</li>\n<li><strong>ISO:</strong> International Organization for Standardization — definió el modelo OSI</li>\n<li><strong>IETF:</strong> Internet Engineering Task Force — define protocolos de Internet (RFC)</li>\n</ul>\n<strong>Estándares más importantes:</strong>\n<ul>\n<li><strong>IEEE 802.3 — Ethernet:</strong> estándar para redes LAN cableadas. Define velocidades (10/100/1000 Mbps), cables (UTP, fibra) y el formato de las tramas.</li>\n<li><strong>IEEE 802.11 — WiFi:</strong> estándar para redes inalámbricas. 802.11n (WiFi 4), 802.11ac (WiFi 5, 5 GHz, hasta 3.5 Gbps), 802.11ax (WiFi 6, más eficiente en entornos congestionados).</li>\n<li><strong>IEEE 802.15 — Bluetooth:</strong> estándar para redes de área personal inalámbricas (WPAN).</li>\n</ul>",
    "tip": "IEEE 802.3 = Ethernet (cable). IEEE 802.11 = WiFi (inalámbrico). Ambos son estándares del IEEE que garantizan que equipos de distintas marcas funcionen juntos."
  },
  {
    "id": "e4q7",
    "cat": "eje4",
    "catLabel": "Eje 4",
    "q": "¿Qué son los elementos de ruteo e interconexión de redes?",
    "a": "El <strong>ruteo</strong> es el proceso de determinar la mejor ruta para que los paquetes de datos lleguen de origen a destino a través de múltiples redes interconectadas.<br><br>\n<strong>Elementos principales:</strong>\n<ul>\n<li><strong>Router:</strong> dispositivo que interconecta redes y determina la ruta óptima para cada paquete usando tablas de ruteo y protocolos de enrutamiento.</li>\n<li><strong>Tabla de ruteo:</strong> base de datos en el router que indica por qué interfaz enviar los paquetes según la red destino.</li>\n<li><strong>Protocolos de enrutamiento:</strong> algoritmos que los routers usan para descubrir rutas y actualizar sus tablas: RIP (sencillo, distancia vector), OSPF (más complejo, estado de enlace), BGP (usado en Internet entre proveedores).</li>\n<li><strong>Gateway (Puerta de enlace):</strong> router que conecta la red local con redes externas (Internet). En casa es tu router WiFi.</li>\n<li><strong>NAT (Network Address Translation):</strong> permite que múltiples dispositivos con IPs privadas compartan una sola IP pública para acceder a Internet.</li>\n</ul>",
    "tip": "El router de tu casa hace NAT: todos tus dispositivos tienen IP privada (192.168.x.x) pero hacia Internet salen con la IP pública que da el proveedor."
  },
  {
    "id": "e5q1",
    "cat": "eje5",
    "catLabel": "Eje 5",
    "q": "¿Qué es un Sistema Operativo y cuáles son sus funciones principales?",
    "a": "El <strong>Sistema Operativo (SO)</strong> es el software fundamental que gestiona los recursos del hardware y proporciona una interfaz entre el usuario/aplicaciones y el hardware.<br><br>\n<strong>Funciones principales:</strong>\n<ul>\n<li><strong>Gestión de procesos:</strong> crea, planifica y termina procesos. Decide qué proceso usa la CPU y cuándo (scheduler).</li>\n<li><strong>Gestión de memoria:</strong> asigna y libera memoria RAM a los procesos. Implementa memoria virtual.</li>\n<li><strong>Gestión de almacenamiento:</strong> administra el sistema de archivos, organiza datos en discos (FAT32, NTFS, ext4).</li>\n<li><strong>Gestión de dispositivos:</strong> comunica aplicaciones con hardware mediante drivers.</li>\n<li><strong>Interfaz de usuario:</strong> CLI (línea de comandos) o GUI (interfaz gráfica).</li>\n<li><strong>Seguridad y control de acceso:</strong> autenticación de usuarios, permisos de archivos, aislamiento de procesos.</li>\n</ul>\n<strong>Ejemplos:</strong> Windows, Linux, macOS, Android, iOS.",
    "tip": "El SO es el intermediario entre el hardware y todo lo demás. Sin SO, las aplicaciones tendrían que hablar directamente con el hardware — imposible en la práctica."
  },
  {
    "id": "e5q2",
    "cat": "eje5",
    "catLabel": "Eje 5",
    "q": "¿Qué es un firewall y cómo protege una red?",
    "a": "Un <strong>firewall</strong> es un sistema de seguridad (hardware, software o ambos) que monitorea y filtra el tráfico de red entrante y saliente según un conjunto de reglas de seguridad predefinidas.<br><br>\n<strong>Función principal:</strong> crear una barrera entre una red interna confiable y redes externas no confiables (Internet).<br><br>\n<strong>Tipos de firewall:</strong>\n<ul>\n<li><strong>Filtrado de paquetes:</strong> analiza cada paquete individualmente según IP origen/destino, puerto y protocolo. Simple y rápido.</li>\n<li><strong>Stateful inspection:</strong> rastrea el estado de las conexiones. Más inteligente — sabe si un paquete pertenece a una conexión legítima establecida.</li>\n<li><strong>Proxy firewall:</strong> actúa como intermediario entre cliente y servidor. Inspecciona el contenido de las conexiones.</li>\n<li><strong>Next-Generation Firewall (NGFW):</strong> combina inspección profunda de paquetes, detección de intrusiones, antivirus y control de aplicaciones.</li>\n</ul>\n<strong>Ejemplos:</strong> Windows Firewall, iptables (Linux), hardware Cisco ASA, pfSense.",
    "tip": "El firewall decide qué tráfico puede entrar y salir según reglas. Por defecto bloquea todo lo no autorizado. El principio: 'todo lo que no está explícitamente permitido, está prohibido'."
  },
  {
    "id": "e5q3",
    "cat": "eje5",
    "catLabel": "Eje 5",
    "q": "¿Cuáles son los principales tipos de amenazas informáticas?",
    "a": "Las <strong>amenazas informáticas</strong> son riesgos que pueden comprometer la confidencialidad, integridad o disponibilidad de la información:<br><br>\n<strong>Malware (software malicioso):</strong>\n<ul>\n<li><strong>Virus:</strong> se adjunta a archivos legítimos y se propaga al ejecutarlos. Puede corromper datos o archivos.</li>\n<li><strong>Gusano (Worm):</strong> se propaga automáticamente por la red sin necesitar un archivo huésped. Consume ancho de banda y recursos.</li>\n<li><strong>Troyano:</strong> se disfraza de software legítimo. Al ejecutarse abre una puerta trasera para el atacante.</li>\n<li><strong>Ransomware:</strong> cifra los archivos del usuario y exige un rescate (ransom) para desbloquearlos. Uno de los más peligrosos actualmente.</li>\n<li><strong>Spyware:</strong> espía la actividad del usuario sin su conocimiento. Roba contraseñas, datos bancarios.</li>\n</ul>\n<strong>Ataques de red:</strong>\n<ul>\n<li><strong>Phishing:</strong> suplantación de identidad. Correos o sitios falsos que imitan entidades legítimas para robar credenciales.</li>\n<li><strong>DoS/DDoS:</strong> denegación de servicio. Inundar un servidor con solicitudes hasta colapsarlo.</li>\n<li><strong>Man in the Middle:</strong> el atacante intercepta la comunicación entre dos partes sin que lo sepan.</li>\n</ul>",
    "tip": "Para el oral: Virus=necesita huésped. Gusano=se propaga solo. Ransomware=cifra y pide rescate (el más dañino económicamente). Phishing=engaño de identidad."
  },
  {
    "id": "e5q4",
    "cat": "eje5",
    "catLabel": "Eje 5",
    "q": "¿Qué es la criptografía y cuáles son sus tipos principales?",
    "a": "La <strong>criptografía</strong> es la ciencia de proteger información mediante el uso de códigos y algoritmos matemáticos para que solo puedan leerla las partes autorizadas.<br><br>\n<strong>Conceptos clave:</strong>\n<ul>\n<li><strong>Cifrado:</strong> proceso de transformar datos legibles (texto plano) en datos ilegibles (texto cifrado)</li>\n<li><strong>Clave:</strong> valor secreto usado para cifrar y descifrar</li>\n<li><strong>Algoritmo:</strong> método matemático de cifrado</li>\n</ul>\n<strong>Tipos principales:</strong>\n<ul>\n<li><strong>Criptografía simétrica:</strong> usa la <strong>misma clave</strong> para cifrar y descifrar. Rápida y eficiente. Problema: cómo compartir la clave de forma segura. Algoritmos: AES, DES, 3DES.</li>\n<li><strong>Criptografía asimétrica (clave pública):</strong> usa un par de claves — <strong>clave pública</strong> (para cifrar, se comparte libremente) y <strong>clave privada</strong> (para descifrar, se mantiene secreta). Más lenta pero resuelve el problema de distribución de claves. Algoritmos: RSA, ECC.</li>\n<li><strong>Hash / Función de resumen:</strong> convierte datos en un valor de longitud fija (hash) de forma unidireccional — no se puede revertir. Usado para verificar integridad. Algoritmos: MD5, SHA-256.</li>\n</ul>",
    "tip": "Simétrica = misma clave (rápida). Asimétrica = par clave pública/privada (más segura para intercambio). Hash = unidireccional, para verificar integridad, no para cifrar. HTTPS usa ambas."
  },
  {
    "id": "e5q5",
    "cat": "eje5",
    "catLabel": "Eje 5",
    "q": "¿Qué es la Ingeniería Social y cuáles son sus técnicas más comunes?",
    "a": "La <strong>Ingeniería Social</strong> es el conjunto de técnicas psicológicas que usan los atacantes para manipular a personas y obtener información confidencial o acceso no autorizado, explotando la confianza y el comportamiento humano en lugar de vulnerabilidades técnicas.<br><br>\n<strong>Es el vector de ataque más efectivo</strong> porque el eslabón más débil de la seguridad es el factor humano.<br><br>\n<strong>Técnicas principales:</strong>\n<ul>\n<li><strong>Phishing:</strong> correos fraudulentos que imitan entidades legítimas (banco, empresa) para robar credenciales. Variantes: spear phishing (dirigido a una persona específica), whaling (dirigido a ejecutivos).</li>\n<li><strong>Pretexting:</strong> crear una historia falsa para ganarse la confianza de la víctima. Ej: hacerse pasar por soporte técnico para obtener contraseñas.</li>\n<li><strong>Baiting:</strong> dejar dispositivos infectados (USB, CD) en lugares públicos esperando que alguien los conecte.</li>\n<li><strong>Vishing:</strong> phishing por llamada telefónica.</li>\n<li><strong>Tailgating:</strong> acceso físico no autorizado siguiendo a alguien que sí tiene acceso.</li>\n</ul>",
    "tip": "La clave de la Ingeniería Social: no ataca sistemas, ataca personas. La mejor defensa es la educación y la conciencia del usuario. El antivirus no protege contra esto."
  },
  {
    "id": "e5q6",
    "cat": "eje5",
    "catLabel": "Eje 5",
    "q": "¿Qué es la firma digital y cómo funciona?",
    "a": "La <strong>firma digital</strong> es un mecanismo criptográfico que permite verificar la <strong>autenticidad</strong> e <strong>integridad</strong> de un documento digital — garantiza que fue firmado por quien dice haberlo firmado y que no fue alterado.<br><br>\n<strong>¿Cómo funciona?</strong>\n<ol>\n<li>El firmante genera un <strong>hash</strong> del documento (resumen matemático único)</li>\n<li>Cifra ese hash con su <strong>clave privada</strong> → esto es la firma digital</li>\n<li>El receptor descifra la firma con la <strong>clave pública</strong> del firmante → obtiene el hash</li>\n<li>El receptor calcula el hash del documento recibido</li>\n<li>Si ambos hashes coinciden → el documento es auténtico e íntegro</li>\n</ol>\n<strong>Propiedades que garantiza:</strong>\n<ul>\n<li><strong>Autenticidad:</strong> solo el dueño de la clave privada pudo firmar</li>\n<li><strong>Integridad:</strong> cualquier modificación cambia el hash y la firma no coincide</li>\n<li><strong>No repudio:</strong> el firmante no puede negar haber firmado</li>\n</ul>",
    "tip": "Firma digital ≠ firma escaneada. Es un proceso criptográfico con clave privada. En Argentina tiene validez legal (Ley 25.506). Se usa en facturas electrónicas, contratos digitales, software."
  },
  {
    "id": "e5q7",
    "cat": "eje5",
    "catLabel": "Eje 5",
    "q": "¿Qué es la ciberseguridad y cuáles son sus pilares fundamentales?",
    "a": "La <strong>ciberseguridad</strong> es el conjunto de prácticas, tecnologías y procesos diseñados para proteger sistemas, redes, programas y datos de ataques digitales, daños o accesos no autorizados.<br><br>\n<strong>La tríada CIA — los 3 pilares fundamentales:</strong>\n<ul>\n<li><strong>Confidencialidad (Confidentiality):</strong> la información solo es accesible para quienes están autorizados. Implementada con cifrado, control de acceso, autenticación.</li>\n<li><strong>Integridad (Integrity):</strong> la información no ha sido alterada de forma no autorizada. Implementada con hashes, firmas digitales, control de versiones.</li>\n<li><strong>Disponibilidad (Availability):</strong> los sistemas y datos están disponibles cuando se necesitan. Protegida con redundancia, backups, protección contra DoS.</li>\n</ul>\n<strong>Capas de defensa:</strong>\n<ul>\n<li>Física (controlar acceso a hardware)</li>\n<li>Red (firewall, IDS/IPS)</li>\n<li>Aplicación (código seguro, parches)</li>\n<li>Usuario (educación, autenticación multifactor)</li>\n</ul>",
    "tip": "Tríada CIA = Confidencialidad + Integridad + Disponibilidad. Si el profe pregunta los pilares de la ciberseguridad, esos tres son la respuesta estándar en toda la industria."
  }
];
