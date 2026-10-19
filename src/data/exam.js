// Preguntas de examen (opcion multiple)
const EQ = [
  {
    "id": "ee1",
    "cat": "Eje 1",
    "diff": "facil",
    "q": "¿Qué tecnología define la 2ª generación de computadoras?",
    "opts": [
      "Tubos de vacío",
      "Transistores",
      "Circuitos integrados",
      "Microprocesadores"
    ],
    "correct": 1,
    "feedback": "<strong>Transistores</strong> (<strong>1956-1963</strong>): reemplazaron los tubos de vacío, mucho más pequeños, rápidos, confiables y con menor consumo. Aparece el <strong>lenguaje ensamblador</strong> como primera abstracción del código máquina.<br><br>Las 5 generaciones: <strong>1ª tubos de vacío</strong> (ENIAC), <strong>2ª transistores</strong>, <strong>3ª circuitos integrados</strong> (SO y lenguajes de alto nivel, <strong>IBM 360</strong>), <strong>4ª microprocesadores</strong> (<strong>Intel 4004</strong>, <strong>1971</strong>), <strong>5ª IA/computación cuántica</strong>."
  },
  {
    "id": "ee2",
    "cat": "Eje 1",
    "diff": "media",
    "q": "¿Cuál de estos NO es un componente de la placa madre?",
    "opts": [
      "Chipset",
      "Socket CPU",
      "Ranuras DIMM",
      "Núcleo de la ALU"
    ],
    "correct": 3,
    "feedback": "El <strong>núcleo de la ALU</strong> es interno a la CPU, no un componente de la placa madre.<br><br>La placa madre integra: <strong>Socket CPU</strong> (zócalo del procesador), <strong>Chipset</strong> (coordina la comunicación entre componentes), <strong>ranuras DIMM</strong> (RAM), <strong>ranuras PCIe/PCI</strong> (GPU, red, sonido), <strong>conectores SATA/M.2</strong> (discos), <strong>BIOS/UEFI</strong> (firmware que arranca antes que el SO) y <strong>CMOS + pila</strong> (fecha, hora, orden de arranque)."
  },
  {
    "id": "ee3",
    "cat": "Eje 1",
    "diff": "media",
    "q": "¿Qué diferencia a la RAM de la ROM?",
    "opts": [
      "La RAM es solo lectura; la ROM es lectura y escritura",
      "La RAM es volátil y de lectura/escritura; la ROM es no volátil y solo lectura",
      "La RAM almacena el firmware; la ROM almacena datos del usuario",
      "No hay diferencia funcional, solo de velocidad"
    ],
    "correct": 1,
    "feedback": "<strong>RAM:</strong> volátil (se borra al apagar), lectura y escritura, almacena el programa en ejecución y sus datos — el nivel más rápido después de la caché en la jerarquía de memoria.<br><br><strong>ROM:</strong> no volátil (persiste sin energía), originalmente solo lectura, guarda el <strong>firmware</strong> (BIOS/UEFI) que arranca el equipo antes que el sistema operativo. Son opuestas en volatilidad y en capacidad de escritura."
  },
  {
    "id": "ee4",
    "cat": "Eje 1",
    "diff": "dificil",
    "q": "¿Qué ocurre cuando el sistema abusa de la memoria virtual?",
    "opts": [
      "Se produce un cache miss permanente",
      "El sistema se acelera porque usa más almacenamiento",
      "Se produce thrashing — el SO pasa más tiempo moviendo páginas que ejecutando instrucciones",
      "La RAM se resetea automáticamente"
    ],
    "correct": 2,
    "feedback": "<strong>Thrashing:</strong> cuando la RAM no alcanza, el SO mueve páginas inactivas al disco (archivo de paginación en Windows, swap en Linux) y las trae de vuelta con un <strong>page fault</strong> cuando se necesitan.<br><br>Si esto pasa demasiado seguido, la CPU pasa más tiempo moviendo páginas que ejecutando instrucciones — el sistema se vuelve casi inoperable, porque el disco es órdenes de magnitud más lento que la RAM."
  },
  {
    "id": "ee5",
    "cat": "Eje 1",
    "diff": "dificil",
    "q": "¿Dónde está el Northbridge en las computadoras modernas?",
    "opts": [
      "En un chip separado junto al Southbridge en la placa madre",
      "Integrado dentro del die de la CPU desde aproximadamente 2008",
      "Dentro del chip BIOS/UEFI",
      "En las ranuras de expansión PCIe"
    ],
    "correct": 1,
    "feedback": "Desde <strong>Intel Nehalem (~2008)</strong> y las APUs de AMD, el <strong>Northbridge</strong> (que manejaba las conexiones de alta velocidad CPU↔RAM↔GPU) se integró dentro del <strong>die de la CPU</strong>, eliminando la latencia de ese enlace.<br><br>Hoy el Chipset de la placa madre equivale al antiguo <strong>Southbridge</strong> (USB, SATA, audio), renombrado <strong>PCH</strong> (Platform Controller Hub) en Intel."
  },
  {
    "id": "ev1",
    "cat": "Von Neumann",
    "diff": "facil",
    "q": "¿Cuál es la característica principal de la arquitectura de Von Neumann?",
    "opts": [
      "Separa físicamente la memoria de instrucciones de la de datos",
      "Usa múltiples buses especializados para distintos tipos de datos",
      "La memoria almacena instrucciones Y datos en un bus único compartido",
      "Procesa instrucciones en paralelo mediante múltiples núcleos"
    ],
    "correct": 2,
    "feedback": "<strong>Von Neumann</strong> (<strong>1945</strong>): memoria <strong>unificada</strong> que guarda instrucciones y datos juntos, procesados secuencialmente por la CPU a través de un <strong>bus único compartido</strong>.<br><br>Introdujo el concepto de <strong>programa almacenado</strong> (el programa se puede modificar en tiempo de ejecución, igual que los datos). Su limitación es el <strong>cuello de botella de Von Neumann</strong>: CPU y memoria compiten por el mismo bus."
  },
  {
    "id": "ev2",
    "cat": "Von Neumann",
    "diff": "media",
    "q": "¿Qué registro guarda temporalmente el dato leído desde la memoria principal?",
    "opts": [
      "CP (Contador de Programa)",
      "IR (Registro de Instrucción)",
      "MAR (Memory Address Register)",
      "MBR (Memory Buffer Register)"
    ],
    "correct": 3,
    "feedback": "El <strong>MBR (Memory Buffer Register)</strong> es el buffer entre CPU y RAM: guarda el dato leído de memoria o el que se va a escribir en ella.<br><br>Distinción clave: el <strong>MAR</strong> guarda la <em>dirección</em> de memoria a acceder (actúa como puntero); el <strong>MBR</strong> guarda el <em>dato</em> en tránsito. El CP apunta a la próxima instrucción, el IR contiene la instrucción actual."
  },
  {
    "id": "ev3",
    "cat": "Von Neumann",
    "diff": "media",
    "q": "¿Cuál es la función de la Unidad de Control (UC)?",
    "opts": [
      "Realizar operaciones aritméticas y lógicas sobre los datos",
      "Almacenar resultados temporales de la ALU",
      "Dirigir y coordinar todas las operaciones: decodifica instrucciones y genera señales de control",
      "Gestionar la comunicación entre CPU y dispositivos de E/S"
    ],
    "correct": 2,
    "feedback": "La <strong>UC (Unidad de Control)</strong> es el director de la CPU: lee instrucciones de memoria (<strong>FETCH</strong>), las decodifica para saber qué operación hacer (<strong>DECODE</strong>) y genera las señales que coordinan registros, ALU y memoria para ejecutarla (<strong>EXECUTE</strong>).<br><br>La UC <em>nunca calcula</em> — eso es trabajo de la ALU. En resumen: UC decide QUÉ y CUÁNDO hacer, ALU lo EJECUTA."
  },
  {
    "id": "ev4",
    "cat": "Von Neumann",
    "diff": "dificil",
    "q": "¿Qué arquitectura soluciona el cuello de botella de Von Neumann y cómo lo hace?",
    "opts": [
      "Arquitectura RISC — usando instrucciones más simples y rápidas",
      "Arquitectura Harvard — separando físicamente el bus de instrucciones del bus de datos",
      "Arquitectura multiprocesador — distribuyendo la carga entre varios núcleos",
      "Arquitectura pipeline — ejecutando varias instrucciones superpuestas"
    ],
    "correct": 1,
    "feedback": "La <strong>arquitectura Harvard</strong> separa físicamente la memoria de instrucciones de la de datos, cada una con su <strong>bus independiente</strong> — así la CPU puede buscar la próxima instrucción mientras procesa datos al mismo tiempo, eliminando la competencia por un bus único.<br><br>Se usa en <strong>microcontroladores y DSPs</strong> (<strong>Arduino</strong>, <strong>PICs</strong>), donde la velocidad predecible importa más que la flexibilidad de la memoria unificada de Von Neumann."
  },
  {
    "id": "et1",
    "cat": "Topologías",
    "diff": "facil",
    "q": "¿En qué topología todas las computadoras se conectan a un concentrador central?",
    "opts": [
      "Bus",
      "Anillo",
      "Estrella",
      "Malla"
    ],
    "correct": 2,
    "feedback": "<strong>Estrella:</strong> todos los nodos se conectan directamente a un <strong>hub o switch central</strong>, y los datos siempre pasan por él para llegar a destino.<br><br>Ventaja: fácil de gestionar, un nodo que falla no afecta a los demás. Desventaja: el concentrador es el <strong>punto único de fallo</strong> — si cae, cae toda la red. El Anillo, en cambio, no tiene concentrador: los nodos se conectan en lazo cerrado."
  },
  {
    "id": "et2",
    "cat": "Topologías",
    "diff": "media",
    "q": "En la topología de Anillo, ¿cuántos nodos están directamente conectados a cada computadora?",
    "opts": [
      "Uno (el hub central)",
      "Exactamente 2 (el anterior y el siguiente)",
      "Todos los demás nodos",
      "Depende del tamaño de la red"
    ],
    "correct": 1,
    "feedback": "En el <strong>Anillo</strong> cada nodo se conecta exactamente con otros <strong>2</strong> — el anterior y el siguiente — formando un lazo cerrado <strong>sin concentrador central</strong>.<br><br>Los datos viajan de nodo en nodo en una sola dirección hasta llegar a destino. Ventaja: acceso ordenado, sin colisiones. Desventaja: si falla un nodo o enlace, puede interrumpirse toda la red."
  },
  {
    "id": "et3",
    "cat": "Topologías",
    "diff": "media",
    "q": "¿Cuál es la topología más tolerante a fallos y por qué?",
    "opts": [
      "Estrella — porque el hub puede redirigir el tráfico automáticamente",
      "Bus — porque el cable compartido distribuye la carga",
      "Árbol — porque la jerarquía permite aislar fallos",
      "Malla — porque existen múltiples caminos alternativos entre nodos"
    ],
    "correct": 3,
    "feedback": "<strong>Malla</strong> es la topología más tolerante a fallos: cada nodo se conecta con varios o todos los demás, generando múltiples caminos posibles. Si un enlace o nodo cae, los datos llegan igual por otro camino.<br><br>En <strong>malla completa</strong> se necesitan <strong>n(n-1)/2</strong> enlaces para n nodos — por eso es la más costosa y compleja de implementar. Se usa en backbone de Internet e infraestructuras críticas."
  },
  {
    "id": "et4",
    "cat": "Topologías",
    "diff": "dificil",
    "q": "En la topología Bus, si dos nodos transmiten simultáneamente, ¿qué ocurre?",
    "opts": [
      "El hub central arbitra y elige cuál transmite primero",
      "Se produce una colisión que corrompe ambos mensajes",
      "El mensaje más prioritario se transmite, el otro espera",
      "Los mensajes se fragmentan y se transmiten por turnos"
    ],
    "correct": 1,
    "feedback": "En <strong>Bus</strong> todos los nodos comparten un único cable (<strong>backbone</strong>). Si dos transmiten al mismo tiempo, sus señales interfieren y se corrompen — eso es una <strong>colisión</strong>.<br><br>Por eso esta topología usa protocolos como <strong>CSMA/CD</strong> para detectar colisiones y retransmitir. Es simple y económica, pero si el cable central falla toda la red cae — sin redundancia. Hoy está en desuso, reemplazada por Estrella con switch."
  },
  {
    "id": "eo1",
    "cat": "OSI/TCP-IP",
    "diff": "facil",
    "q": "¿Cuántas capas tienen el modelo OSI y el modelo TCP/IP respectivamente?",
    "opts": [
      "OSI=4, TCP/IP=7",
      "OSI=7, TCP/IP=4",
      "OSI=7, TCP/IP=7",
      "OSI=5, TCP/IP=4"
    ],
    "correct": 1,
    "feedback": "<strong>OSI = 7 capas</strong> (modelo teórico-referencial de <strong>ISO</strong>, para diseñar y diagnosticar redes). <strong>TCP/IP = 4 capas</strong> (modelo práctico de <strong>DARPA</strong> que realmente mueve Internet, basado en protocolos concretos: TCP, IP, UDP, HTTP).<br><br>Las capas 5, 6 y 7 de OSI (Sesión, Presentación, Aplicación) se fusionan en la única capa de Aplicación de TCP/IP. No funcionan en paralelo — OSI es solo la referencia conceptual."
  },
  {
    "id": "eo2",
    "cat": "OSI/TCP-IP",
    "diff": "media",
    "q": "¿A qué capa del modelo OSI pertenece el protocolo IP?",
    "opts": [
      "Capa 2 – Enlace de datos",
      "Capa 3 – Red",
      "Capa 4 – Transporte",
      "Capa 5 – Sesión"
    ],
    "correct": 1,
    "feedback": "<strong>IP está en la Capa 3 – Red</strong>, encargada del <strong>enrutamiento</strong> de paquetes entre redes distintas.<br><br>Para ubicarte en las 7 capas: 1-Física (bits), 2-Enlace (tramas, MAC), <strong>3-Red (IP)</strong>, <strong>4-Transporte (TCP/UDP)</strong>, 5-Sesión, 6-Presentación, 7-Aplicación (HTTP, FTP, DNS). Esta pregunta salió en el examen real."
  },
  {
    "id": "eo3",
    "cat": "OSI/TCP-IP",
    "diff": "media",
    "q": "¿Cuál es la diferencia de propósito entre OSI y TCP/IP?",
    "opts": [
      "OSI se usa en redes locales; TCP/IP en redes WAN e Internet",
      "OSI es teórico-referencial (ISO) para diseñar y diagnosticar; TCP/IP es práctico (DARPA) y mueve Internet",
      "Son equivalentes pero OSI es el estándar europeo y TCP/IP el americano",
      "OSI reemplazó a TCP/IP en redes modernas"
    ],
    "correct": 1,
    "feedback": "<strong>OSI</strong>: marco conceptual <strong>teórico-referencial</strong> de <strong>ISO</strong>, no es un protocolo en uso — sirve para entender, diseñar y diagnosticar en qué capa ocurre un problema de red.<br><br><strong>TCP/IP</strong>: el modelo <strong>práctico</strong> de <strong>DARPA</strong> que realmente opera Internet, con protocolos concretos (TCP, IP, UDP, HTTP). No son alternativas que se reemplazan entre sí — TCP/IP funciona, OSI se usa como referencia para analizarlo."
  },
  {
    "id": "eo4",
    "cat": "OSI/TCP-IP",
    "diff": "dificil",
    "q": "¿Qué protocolo de la capa de Transporte garantiza entrega confiable y cuál no?",
    "opts": [
      "IP garantiza entrega; UDP no",
      "TCP garantiza entrega; UDP es no confiable pero más rápido",
      "UDP garantiza entrega; TCP es no confiable pero más rápido",
      "HTTP garantiza entrega; FTP no"
    ],
    "correct": 1,
    "feedback": "<strong>TCP</strong> (Transmission Control Protocol): orientado a conexión, garantiza entrega completa y en orden — ideal para HTTP, email, transferencia de archivos.<br><br><strong>UDP</strong> (User Datagram Protocol): sin conexión, no garantiza entrega pero es mucho más rápido — se usa en streaming, videojuegos, llamadas en tiempo real y DNS, donde la velocidad importa más que la confiabilidad total. Ambos operan en la Capa 4 – Transporte."
  },
  {
    "id": "ek1",
    "cat": "Karnaugh",
    "diff": "facil",
    "q": "¿Cuáles son los únicos tamaños de grupo válidos en un mapa de Karnaugh?",
    "opts": [
      "1, 2, 3, 6",
      "2, 4, 6, 8",
      "1, 2, 4, 8, 16",
      "1, 3, 5, 7, 9"
    ],
    "correct": 2,
    "feedback": "Solo <strong>potencias de 2: 1, 2, 4, 8, 16</strong>. La razón es matemática: por la propiedad booleana <strong>A + Ā = 1</strong>, agrupar celdas adyacentes que difieren en una sola variable la cancela automáticamente.<br><br>Grupo de 2 cancela 1 variable, de 4 cancela 2, de 8 cancela 3, de 16 cancela 4. Los grupos de 3 o 6 <strong>no permiten</strong> esa cancelación limpia — no son válidos."
  },
  {
    "id": "ek2",
    "cat": "Karnaugh",
    "diff": "media",
    "q": "¿Qué tipo de función obtenés al agrupar los 1s en un mapa de Karnaugh?",
    "opts": [
      "POS — Producto de Sumas (OR conectados por AND)",
      "SOP — Suma de Productos (AND conectados por OR)",
      "XOR exclusivo de todas las variables",
      "NAND universal simplificado"
    ],
    "correct": 1,
    "feedback": "<strong>Agrupar 1s → SOP (Suma de Productos)</strong>: términos AND conectados por OR (forma canónica de minterms). <strong>Agrupar 0s → POS (Producto de Sumas)</strong>: términos OR conectados por AND (forma canónica de maxterms).<br><br>Ambas representan la misma función booleana en distinta forma. Reglas generales: cuanto más grande el grupo, más simple el término; los grupos pueden solaparse; usá siempre los grupos más grandes posibles primero."
  },
  {
    "id": "ek3",
    "cat": "Karnaugh",
    "diff": "dificil",
    "q": "Tenés un mapa de Karnaugh de 4 variables con 8 celdas en 1. Si formás un grupo de 8, ¿cuántas variables quedan en el término simplificado?",
    "opts": [
      "4 variables",
      "3 variables",
      "2 variables",
      "1 variable"
    ],
    "correct": 3,
    "feedback": "Grupo de <strong>8 = 2³</strong> → cancela <strong>3 variables</strong> → queda <strong>1 variable</strong> en el término simplificado.<br><br>La regla general: un grupo de tamaño 2ⁿ cancela exactamente n variables. Grupo de 2 cancela 1, de 4 cancela 2, de 8 cancela 3, y de 16 cancela las 4 (la función se vuelve constante = 1)."
  },
  {
    "id": "evf1",
    "cat": "V / F",
    "diff": "media",
    "q": "¿Cuál de estas afirmaciones sobre la placa madre es VERDADERA?",
    "opts": [
      "La placa madre es el componente más importante porque sin ella nada funciona",
      "El Northbridge actual está integrado dentro del die de la CPU",
      "La BIOS se borra si sacás la pila de la placa madre",
      "Las ranuras PCIe solo sirven para instalar tarjetas de video"
    ],
    "correct": 1,
    "feedback": "<strong>Verdadera: el Northbridge está integrado en la CPU</strong> desde <strong>~2008</strong> (<strong>Intel Nehalem</strong> en adelante).<br><br>Las otras son falsas: ningún componente es 'el más importante' de forma aislada — todos son interdependientes; la pila CMOS guarda fecha/hora/orden de arranque, pero <strong>no borra el BIOS/UEFI</strong> (vive en memoria flash separada); las ranuras PCIe sirven para GPU, red, sonido y SSDs NVMe, no solo video."
  },
  {
    "id": "evf2",
    "cat": "V / F",
    "diff": "dificil",
    "q": "¿Cuál de estas afirmaciones sobre la topología de Anillo es FALSA?",
    "opts": [
      "En el anillo no existe concentrador central",
      "Cada nodo se conecta exactamente con otros 2 nodos",
      "Todas las computadoras se conectan a un hub central",
      "Los datos viajan en una sola dirección por el lazo"
    ],
    "correct": 2,
    "feedback": "<strong>FALSA: 'Todas se conectan a un hub central'</strong> — esa descripción es la topología <strong>Estrella</strong>, no el Anillo.<br><br>En el <strong>Anillo</strong>: no existe concentrador, cada nodo se conecta exactamente con otros 2 (anterior y siguiente), y los datos viajan en una sola dirección por el lazo cerrado. Confundir estas dos topologías es el error más común del tema."
  },
  {
    "id": "ex2e1",
    "cat": "Eje 2",
    "diff": "facil",
    "q": "¿Qué arquitectura de CPU usa la gran mayoría de los celulares y tablets actuales?",
    "opts": [
      "CISC — x86",
      "RISC — ARM",
      "Von Neumann extendida",
      "CISC — MIPS"
    ],
    "correct": 1,
    "feedback": "<strong>ARM</strong> es arquitectura <strong>RISC</strong> (Reduced Instruction Set Computer): pocas instrucciones simples, de longitud fija, ejecutadas en 1 ciclo — ideal para la eficiencia energética que necesita un celular.<br><br>Intel <strong>x86</strong> (PCs, laptops) es <strong>CISC</strong>: instrucciones complejas y de longitud variable, cada una puede tardar varios ciclos pero hacer más en un solo paso."
  },
  {
    "id": "ex2e2",
    "cat": "Eje 2",
    "diff": "facil",
    "q": "¿En qué fase del ciclo Fetch-Decode-Execute se copia la instrucción de memoria al IR?",
    "opts": [
      "DECODE",
      "EXECUTE",
      "FETCH",
      "STORE"
    ],
    "correct": 2,
    "feedback": "En <strong>FETCH</strong>: <strong>MAR←CP</strong> (dirección de la próxima instrucción), <strong>MBR←MEM[MAR]</strong> (se trae de memoria), <strong>IR←MBR</strong> (se copia al registro de instrucción), <strong>CP←CP+1</strong> (avanza al siguiente).<br><br>Después sigue <strong>DECODE</strong> (la UC interpreta el opcode) y <strong>EXECUTE</strong> (se realiza la operación). Este ciclo es la base de la máquina hipotética: lo repetiste 4 veces con IN → ADD → STORE → OUT."
  },
  {
    "id": "ex2e3",
    "cat": "Eje 2",
    "diff": "media",
    "q": "¿Qué diferencia fundamental tiene la arquitectura Harvard respecto a Von Neumann?",
    "opts": [
      "Harvard usa más registros internos",
      "Harvard separa físicamente memoria de instrucciones y datos con buses independientes",
      "Harvard no tiene Unidad de Control",
      "Harvard procesa instrucciones CISC más eficientemente"
    ],
    "correct": 1,
    "feedback": "<strong>Harvard</strong> separa físicamente la memoria y el bus de instrucciones del de datos — cada uno independiente. Así la CPU busca la próxima instrucción mientras procesa datos al mismo tiempo, eliminando el cuello de botella de Von Neumann (que usa memoria y bus únicos y compartidos).<br><br>Harvard se usa en <strong>microcontroladores y DSPs</strong> (<strong>Arduino</strong>, <strong>PICs</strong>); Von Neumann es el modelo clásico de las PCs."
  },
  {
    "id": "ex2e4",
    "cat": "Eje 2",
    "diff": "media",
    "q": "¿Cuál es la salida de una compuerta XOR cuando ambas entradas son iguales?",
    "opts": [
      "Siempre 1",
      "Siempre 0",
      "Depende del valor",
      "Igual a la primera entrada"
    ],
    "correct": 1,
    "feedback": "<strong>XOR</strong>: salida = 1 solo cuando las entradas son <em>diferentes</em>. Si son iguales (ambas 0 o ambas 1) → salida = <strong>0</strong>.<br><br>Es la base de los <strong>sumadores</strong> binarios (suma sin acarreo) y del cifrado simétrico. Su opuesta, <strong>XNOR</strong>, da 1 cuando las entradas coinciden."
  },
  {
    "id": "ex2e5",
    "cat": "Eje 2",
    "diff": "media",
    "q": "¿Cuál es la diferencia entre circuito combinacional y secuencial?",
    "opts": [
      "Los combinacionales son más rápidos",
      "Combinacionales dependen solo de entradas actuales; secuenciales también del estado anterior (tienen memoria)",
      "Combinacionales usan NAND; secuenciales usan NOR",
      "No hay diferencia funcional"
    ],
    "correct": 1,
    "feedback": "<strong>Combinacional:</strong> la salida depende únicamente de las entradas actuales, sin memoria — no recuerda estados anteriores. Ejemplos: sumadores, multiplexores, la ALU.<br><br><strong>Secuencial:</strong> la salida depende de las entradas actuales <em>y</em> del estado anterior — tiene memoria (flip-flops, latches). Los registros de la CPU (CP, AC, IR, MAR, MBR) son circuitos secuenciales."
  },
  {
    "id": "ex2e6",
    "cat": "Eje 2",
    "diff": "media",
    "q": "¿Qué es el pipeline en una CPU?",
    "opts": [
      "Caché especializada para instrucciones",
      "Técnica que ejecuta múltiples instrucciones superpuestas en distintas fases simultáneamente",
      "Bus de alta velocidad entre CPU y RAM",
      "Canal entre núcleos en CPU multinúcleo"
    ],
    "correct": 1,
    "feedback": "<strong>Pipeline</strong>: ejecuta múltiples instrucciones superpuestas en distintas fases al mismo tiempo — mientras una está en EXECUTE, la siguiente está en DECODE y la siguiente en FETCH. Como una línea de ensamblaje.<br><br>Sin pipeline, 3 instrucciones tardan <strong>9 ciclos</strong>; con pipeline, <strong>5</strong>. Mejora el <strong>throughput</strong> pero introduce riesgos (<strong>hazards</strong>) de datos, control y estructurales que pueden romper el flujo."
  },
  {
    "id": "ex2e7",
    "cat": "Eje 2",
    "diff": "dificil",
    "q": "¿Cuál es el complemento a 2 de 00000101 (5 en decimal)?",
    "opts": [
      "11111010",
      "11111011",
      "10000101",
      "11111100"
    ],
    "correct": 1,
    "feedback": "1) Invertir bits: 00000101 → <strong>11111010</strong><br>2) Sumar 1: → <strong>11111011</strong><br><br>El complemento a 2 permite representar negativos con una sola representación del cero, y sumar positivos y negativos con el mismo circuito — el bit más significativo (MSB) indica el signo: 0=positivo, 1=negativo."
  },
  {
    "id": "ex2e8",
    "cat": "Eje 2",
    "diff": "dificil",
    "q": "¿Cuál es la compuerta lógica universal con la que sola se puede construir cualquier circuito?",
    "opts": [
      "AND",
      "OR",
      "XOR",
      "NAND"
    ],
    "correct": 3,
    "feedback": "<strong>NAND</strong> (AND negado) y <strong>NOR</strong> (OR negado) son las únicas compuertas <strong>universales</strong>: con solo una de ellas se puede construir NOT, AND, OR y cualquier función booleana.<br><br>Esto simplifica muchísimo la fabricación de chips — en vez de fabricar varios tipos de compuertas, alcanza con replicar una sola."
  },
  {
    "id": "ex2e9",
    "cat": "Eje 2",
    "diff": "dificil",
    "q": "¿Qué diferencia hay entre paralelismo y concurrencia?",
    "opts": [
      "Son sinónimos",
      "Paralelismo = ejecución literal simultánea en múltiple hardware; concurrencia = múltiples tareas progresando en el mismo período, no necesariamente al mismo instante",
      "Concurrencia requiere múltiples núcleos; paralelismo no",
      "Paralelismo es software; concurrencia es hardware"
    ],
    "correct": 1,
    "feedback": "<strong>Paralelismo:</strong> múltiples tareas ejecutándose literalmente al mismo instante, en distintos procesadores o núcleos — requiere hardware múltiple.<br><br><strong>Concurrencia:</strong> múltiples tareas progresan en el mismo período pero no necesariamente en el mismo instante; un solo núcleo puede alternar entre ellas dando ilusión de simultaneidad. El <strong>multinúcleo</strong> (varios núcleos en un chip) es la forma más común de lograr paralelismo real hoy."
  },
  {
    "id": "ex3e1",
    "cat": "Eje 3",
    "diff": "facil",
    "q": "¿Quién inventó la World Wide Web y en qué año?",
    "opts": [
      "Vint Cerf, 1974",
      "Tim Berners-Lee, 1991",
      "Bill Gates, 1985",
      "Steve Jobs, 1989"
    ],
    "correct": 1,
    "feedback": "<strong>Tim Berners-Lee</strong> inventó la <strong>World Wide Web</strong> en <strong>1991</strong> en el <strong>CERN</strong> — un sistema de páginas web que corre sobre Internet, que ya existía antes.<br><br><strong>Vint Cerf</strong> y <strong>Bob Kahn</strong> crearon <strong>TCP/IP</strong> en <strong>1974</strong>, el protocolo que interconecta las redes. No confundir: Internet es la infraestructura, la WWW es una aplicación que corre sobre ella (igual que el correo o el FTP)."
  },
  {
    "id": "ex3e2",
    "cat": "Eje 3",
    "diff": "facil",
    "q": "¿Cuál fue la primera red de computadoras de la historia?",
    "opts": [
      "Internet",
      "WWW",
      "ARPANET",
      "Ethernet"
    ],
    "correct": 2,
    "feedback": "<strong>ARPANET</strong> (<strong>1969</strong>), creada por <strong>DARPA</strong>, fue la primera red de computadoras — conectaba <strong>4 universidades</strong> de EE.UU.<br><br>Se diseñó con <strong>enrutamiento descentralizado</strong> para sobrevivir ataques nucleares (si un nodo caía, la red seguía funcionando por otro camino). Es el origen directo de lo que hoy es Internet."
  },
  {
    "id": "ex3e3",
    "cat": "Eje 3",
    "diff": "media",
    "q": "¿Cuál es la diferencia principal entre un Switch y un Hub?",
    "opts": [
      "El Hub es más rápido",
      "El Switch envía datos solo al puerto destino; el Hub los reenvía a todos los puertos",
      "El Hub conecta redes distintas; el Switch conecta la misma red",
      "No hay diferencia funcional"
    ],
    "correct": 1,
    "feedback": "<strong>Hub:</strong> reenvía la señal a <strong>todos</strong> los puertos, sin inteligencia — todos los dispositivos reciben todos los mensajes. Obsoleto.<br><br><strong>Switch:</strong> aprende las direcciones <strong>MAC</strong> de cada puerto y envía los datos <strong>solo</strong> al destinatario correcto. Opera en la Capa 2 (Enlace) y es el dispositivo central de las LANs modernas — más eficiente y seguro que el Hub."
  },
  {
    "id": "ex3e4",
    "cat": "Eje 3",
    "diff": "media",
    "q": "En el modelo Cliente/Servidor, ¿quién inicia siempre la comunicación?",
    "opts": [
      "El servidor",
      "El cliente",
      "Cualquiera de los dos",
      "El router"
    ],
    "correct": 1,
    "feedback": "<strong>Siempre el cliente</strong> inicia la comunicación — el servidor permanece pasivo, esperando solicitudes en una dirección fija y conocida.<br><br>Ejemplo: tu navegador (cliente) pide una página por HTTP; el servidor web la devuelve. El servidor puede atender a múltiples clientes a la vez, pero nunca inicia el contacto. Desventaja del modelo: el servidor es un <strong>punto único de fallo</strong>."
  },
  {
    "id": "ex3e5",
    "cat": "Eje 3",
    "diff": "media",
    "q": "¿Cuál es la característica que distingue al modelo P2P del Cliente/Servidor?",
    "opts": [
      "P2P requiere más servidores",
      "En P2P cada nodo actúa como cliente Y servidor simultáneamente — no hay roles fijos",
      "P2P solo funciona en redes locales",
      "P2P es más lento por no tener servidor central"
    ],
    "correct": 1,
    "feedback": "En <strong>P2P</strong> no hay roles fijos: cada nodo (peer) actúa como cliente <em>y</em> servidor al mismo tiempo, sin servidor central — los recursos están distribuidos entre todos los participantes.<br><br>Es descentralizado y muy tolerante a fallos (si un peer cae, los demás siguen), pero más difícil de controlar. Ejemplos: <strong>BitTorrent</strong>, blockchain/Bitcoin, VoIP."
  },
  {
    "id": "ex3e6",
    "cat": "Eje 3",
    "diff": "media",
    "q": "¿Qué es el handover en computación móvil?",
    "opts": [
      "Apagar y encender el WiFi",
      "Cambiar de una celda de red a otra sin interrumpir la conexión",
      "Transferir archivos por Bluetooth",
      "Autenticarse en una red WiFi"
    ],
    "correct": 1,
    "feedback": "<strong>Handover:</strong> cuando tu celular cambia de una <strong>celda de red</strong> (antena) a otra mientras te movés, sin que se corte la llamada o la conexión de datos.<br><br>Es una de las características clave de la computación móvil, junto con la conectividad inalámbrica (WiFi, 4G/5G) y los recursos limitados (batería, procesamiento) frente a una PC de escritorio."
  },
  {
    "id": "ex3e7",
    "cat": "Eje 3",
    "diff": "dificil",
    "q": "¿Cuál es la diferencia entre Internet y la World Wide Web?",
    "opts": [
      "Son lo mismo con distintos nombres",
      "Internet es la infraestructura de red global; la WWW es una aplicación (páginas web) que corre sobre Internet",
      "La WWW reemplazó a ARPANET",
      "Internet es inalámbrico; la WWW usa cables"
    ],
    "correct": 1,
    "feedback": "<strong>Internet</strong>: infraestructura global de redes interconectadas mediante <strong>TCP/IP</strong> — el 'cableado' físico y lógico del mundo.<br><br><strong>WWW</strong>: un sistema de páginas web (HTTP/HTML) que es solo <em>una</em> de las aplicaciones que corren sobre Internet — junto con correo, FTP y videollamadas, que también usan Internet pero no son la WWW."
  },
  {
    "id": "ex3e8",
    "cat": "Eje 3",
    "diff": "dificil",
    "q": "¿Cuál es la característica fundamental de la computación distribuida?",
    "opts": [
      "Todas las computadoras comparten la misma memoria física",
      "Múltiples computadoras independientes trabajan coordinadamente apareciendo como un sistema único",
      "Solo funciona con el mismo fabricante y SO",
      "Necesita un servidor central coordinador"
    ],
    "correct": 1,
    "feedback": "<strong>Computación distribuida:</strong> múltiples computadoras independientes, conectadas en red, cooperan y aparecen ante el usuario como <strong>un sistema único</strong> (transparencia). Ejemplos: Google Search, Netflix, blockchain.<br><br>Diferencia clave con multiprocesador: cada nodo distribuido tiene su <strong>propia memoria</strong> en máquinas distintas; en un multiprocesador, los procesadores comparten memoria física."
  },
  {
    "id": "ex4e1",
    "cat": "Eje 4",
    "diff": "facil",
    "q": "¿Cuál es la red de mayor cobertura geográfica?",
    "opts": [
      "PAN",
      "LAN",
      "MAN",
      "WAN"
    ],
    "correct": 3,
    "feedback": "<strong>WAN (Wide Area Network):</strong> cobertura de países o continentes, usando infraestructura de telecomunicaciones (fibra, satélite). El ejemplo más grande es <strong>Internet</strong>.<br><br>Escala completa: <strong>PAN</strong> (personal, metros) → <strong>LAN</strong> (local, un edificio) → <strong>MAN</strong> (metropolitana, una ciudad) → <strong>WAN</strong> (amplia, países)."
  },
  {
    "id": "ex4e2",
    "cat": "Eje 4",
    "diff": "facil",
    "q": "¿Qué dispositivo asigna automáticamente direcciones IP a los dispositivos de una red?",
    "opts": [
      "DNS",
      "Router",
      "DHCP",
      "Switch"
    ],
    "correct": 2,
    "feedback": "<strong>DHCP (Dynamic Host Configuration Protocol)</strong> asigna automáticamente IP, máscara de red, gateway y DNS a cada dispositivo que se conecta.<br><br>Sin DHCP, habría que configurar manualmente la IP en cada equipo. El router de tu casa suele tener el servidor DHCP integrado — por eso tu celular obtiene IP apenas se conecta al WiFi."
  },
  {
    "id": "ex4e3",
    "cat": "Eje 4",
    "diff": "media",
    "q": "¿Cuál es la diferencia entre TCP y UDP?",
    "opts": [
      "TCP es más rápido; UDP es más confiable",
      "TCP garantiza entrega confiable y ordenada; UDP es sin conexión, más rápido pero sin garantía de entrega",
      "TCP solo funciona en LAN; UDP funciona en Internet",
      "Son exactamente iguales, solo difieren en el nombre"
    ],
    "correct": 1,
    "feedback": "<strong>TCP:</strong> orientado a conexión, garantiza entrega completa y en orden (<strong>3-way handshake</strong>, retransmite si hay pérdidas) — usado en HTTP, email, FTP.<br><br><strong>UDP:</strong> sin conexión, no garantiza entrega pero es más rápido — usado en streaming, videojuegos, DNS y VoIP, donde la velocidad importa más que la confiabilidad total."
  },
  {
    "id": "ex4e4",
    "cat": "Eje 4",
    "diff": "media",
    "q": "¿Para qué sirve la máscara de red?",
    "opts": [
      "Para cifrar el tráfico de red",
      "Para determinar qué parte de una IP identifica la red y qué parte el host",
      "Para asignar IPs automáticamente a los dispositivos",
      "Para traducir nombres de dominio a IPs"
    ],
    "correct": 1,
    "feedback": "La <strong>máscara de red</strong> es un número de 32 bits que divide la IP en dos partes: bits en <strong>1</strong> = parte de <strong>red</strong>, bits en <strong>0</strong> = parte de <strong>host</strong> (dispositivo).<br><br>Ejemplo: con máscara <strong>255.255.255.0 (/24)</strong>, los primeros 3 octetos identifican la red y el último identifica al host — hasta 254 dispositivos posibles. Dos IPs con distinta red necesitan un router para comunicarse."
  },
  {
    "id": "ex4e5",
    "cat": "Eje 4",
    "diff": "media",
    "q": "¿Qué protocolo traduce nombres de dominio (google.com) a direcciones IP?",
    "opts": [
      "DHCP",
      "HTTP",
      "DNS",
      "FTP"
    ],
    "correct": 2,
    "feedback": "<strong>DNS (Domain Name System)</strong> traduce nombres legibles (google.com) a direcciones IP numéricas (ej: 142.250.80.46). Opera en el puerto <strong>53</strong>.<br><br>Sin DNS tendrías que memorizar la IP de cada sitio que visitás. Es uno de los protocolos esenciales de Internet, junto con DHCP (asigna IPs) y HTTP (transfiere páginas)."
  },
  {
    "id": "ex4e6",
    "cat": "Eje 4",
    "diff": "media",
    "q": "¿Cuál es el estándar IEEE para redes LAN inalámbricas (WiFi)?",
    "opts": [
      "IEEE 802.3",
      "IEEE 802.15",
      "IEEE 802.11",
      "IEEE 802.1"
    ],
    "correct": 2,
    "feedback": "<strong>IEEE 802.11</strong> es el estándar <strong>WiFi</strong>. Versiones: 802.11n (WiFi 4), 802.11ac (WiFi 5, 5 GHz, hasta 3.5 Gbps), 802.11ax (WiFi 6, más eficiente en redes congestionadas).<br><br>Para no confundir: <strong>IEEE 802.3</strong> = Ethernet cableada, <strong>IEEE 802.15</strong> = Bluetooth. Todos son estándares del <strong>IEEE</strong> que garantizan que equipos de distintos fabricantes funcionen juntos."
  },
  {
    "id": "ex4e7",
    "cat": "Eje 4",
    "diff": "dificil",
    "q": "¿Qué es NAT y por qué es necesario?",
    "opts": [
      "Es un protocolo de cifrado para redes WiFi",
      "Permite que múltiples dispositivos con IPs privadas compartan una sola IP pública para acceder a Internet",
      "Es el protocolo que asigna IPs automáticamente en una red",
      "Es un tipo de firewall que filtra paquetes por dirección MAC"
    ],
    "correct": 1,
    "feedback": "<strong>NAT (Network Address Translation)</strong>: el router traduce las IPs privadas de todos los dispositivos de tu red (192.168.x.x) a la <strong>única IP pública</strong> que asigna tu proveedor de Internet.<br><br>Es necesario porque las direcciones IPv4 públicas son limitadas — sin NAT, cada dispositivo necesitaría su propia IP pública. El router que hace NAT es también el <strong>gateway</strong> de tu red local."
  },
  {
    "id": "ex4e8",
    "cat": "Eje 4",
    "diff": "dificil",
    "q": "¿Cuál es la ventaja principal de la fibra óptica sobre el cable UTP?",
    "opts": [
      "La fibra óptica es más económica y fácil de instalar",
      "La fibra óptica transmite usando luz, ofreciendo mayor velocidad, mayor distancia y total inmunidad a interferencias electromagnéticas",
      "La fibra óptica solo funciona en redes LAN",
      "La fibra óptica es compatible con todos los dispositivos sin adaptadores"
    ],
    "correct": 1,
    "feedback": "La <strong>fibra óptica</strong> transmite datos como <strong>pulsos de luz</strong> (no electricidad): velocidad altísima (hasta Tbps), largas distancias sin degradación de la señal y <strong>inmunidad total</strong> a interferencias electromagnéticas.<br><br>El <strong>UTP</strong> (par trenzado) usa electricidad: más económico y fácil de instalar, pero limitado en velocidad (hasta 10 Gbps en Cat6A) y distancia frente a la fibra."
  },
  {
    "id": "ex5e1",
    "cat": "Eje 5",
    "diff": "facil",
    "q": "¿Cuáles son los 3 pilares fundamentales de la ciberseguridad (tríada CIA)?",
    "opts": [
      "Confidencialidad, Integridad, Disponibilidad",
      "Cifrado, Identificación, Autenticación",
      "Control, Inspección, Auditoría",
      "Certificación, Intrusión, Autorización"
    ],
    "correct": 0,
    "feedback": "<strong>Tríada CIA:</strong> <strong>C</strong>onfidencialidad (solo acceden los autorizados — cifrado, control de acceso), <strong>I</strong>ntegridad (los datos no fueron alterados sin autorización — hashes, firmas digitales), <strong>D</strong>isponibilidad (los sistemas están accesibles cuando se necesitan — redundancia, backups).<br><br>Son los tres pilares estándar de toda la industria de ciberseguridad."
  },
  {
    "id": "ex5e2",
    "cat": "Eje 5",
    "diff": "facil",
    "q": "¿Qué tipo de malware cifra los archivos del usuario y exige un pago para recuperarlos?",
    "opts": [
      "Virus",
      "Gusano (Worm)",
      "Ransomware",
      "Spyware"
    ],
    "correct": 2,
    "feedback": "<strong>Ransomware</strong> (ransom = rescate): cifra los archivos de la víctima y exige un pago, generalmente en criptomonedas, para dar la clave de descifrado. Ejemplos: WannaCry, LockBit.<br><br>Se distingue de otros malware: el <strong>virus</strong> necesita un archivo huésped; el <strong>gusano</strong> se propaga solo por la red; el <strong>spyware</strong> espía sin cifrar nada. El ransomware es de los más dañinos económicamente."
  },
  {
    "id": "ex5e3",
    "cat": "Eje 5",
    "diff": "media",
    "q": "¿Cuál es la diferencia entre criptografía simétrica y asimétrica?",
    "opts": [
      "La simétrica usa más claves; la asimétrica usa menos",
      "La simétrica usa la misma clave para cifrar y descifrar; la asimétrica usa un par de claves (pública y privada)",
      "La simétrica es más segura; la asimétrica es más rápida",
      "No hay diferencia real, solo de nomenclatura"
    ],
    "correct": 1,
    "feedback": "<strong>Simétrica:</strong> misma clave para cifrar y descifrar. Rápida, pero el problema es cómo compartir esa clave de forma segura. Ej: <strong>AES</strong>.<br><br><strong>Asimétrica:</strong> par de claves — <strong>pública</strong> (cifra, se comparte libremente) y <strong>privada</strong> (descifra, se guarda en secreto). Más lenta, pero resuelve el problema de distribución de claves. Ej: <strong>RSA</strong>. HTTPS usa ambas combinadas."
  },
  {
    "id": "ex5e4",
    "cat": "Eje 5",
    "diff": "media",
    "q": "¿Qué es la Ingeniería Social en el contexto de la ciberseguridad?",
    "opts": [
      "Una técnica para construir redes más eficientes usando algoritmos de IA",
      "Técnicas psicológicas para manipular personas y obtener información confidencial sin explotar vulnerabilidades técnicas",
      "El proceso de diseñar sistemas operativos seguros",
      "Un tipo de firewall que analiza el comportamiento de los usuarios"
    ],
    "correct": 1,
    "feedback": "La <strong>Ingeniería Social</strong> explota el <strong>factor humano</strong> — el eslabón más débil de la seguridad — en lugar de vulnerabilidades técnicas. No ataca sistemas, ataca personas.<br><br>Técnicas principales: <strong>phishing</strong> (correos/sitios falsos para robar credenciales), <strong>pretexting</strong> (inventar una historia para ganar confianza), <strong>baiting</strong> (dejar USBs infectados). El antivirus no protege contra esto — la mejor defensa es la educación del usuario."
  },
  {
    "id": "ex5e5",
    "cat": "Eje 5",
    "diff": "media",
    "q": "¿Qué propiedad de la firma digital garantiza que el firmante no puede negar haber firmado?",
    "opts": [
      "Confidencialidad",
      "Integridad",
      "No repudio",
      "Disponibilidad"
    ],
    "correct": 2,
    "feedback": "El <strong>no repudio</strong> garantiza que el firmante no puede negar haber firmado un documento, porque solo él posee la <strong>clave privada</strong> usada para generarla.<br><br>Junto con <strong>autenticidad</strong> (solo el dueño de la clave privada pudo firmar) e <strong>integridad</strong> (cualquier modificación cambia el hash y la firma deja de coincidir), son las tres propiedades que garantiza la firma digital."
  },
  {
    "id": "ex5e6",
    "cat": "Eje 5",
    "diff": "dificil",
    "q": "¿Cómo funciona la firma digital paso a paso?",
    "opts": [
      "Se escanea la firma manuscrita y se adjunta al documento digital",
      "Se genera un hash del documento, se cifra con la clave privada del firmante; el receptor verifica descifrando con la clave pública y comparando hashes",
      "Se cifra todo el documento con la clave pública del receptor",
      "Se usa un certificado del gobierno para sellar el documento"
    ],
    "correct": 1,
    "feedback": "1) El firmante genera un <strong>hash</strong> del documento.<br>2) Cifra ese hash con su <strong>clave privada</strong> → esa es la firma digital.<br>3) El receptor la descifra con la <strong>clave pública</strong> del firmante y obtiene el hash.<br>4) Calcula el hash del documento recibido y lo compara — si coinciden, el documento es <strong>auténtico e íntegro</strong>. Garantiza autenticidad, integridad y no repudio."
  },
  {
    "id": "ex5e7",
    "cat": "Eje 5",
    "diff": "dificil",
    "q": "¿Cuál es la diferencia entre un virus y un gusano (worm)?",
    "opts": [
      "Un virus es más peligroso que un gusano",
      "El virus necesita un archivo huésped para propagarse; el gusano se propaga automáticamente por la red sin necesitar huésped",
      "El gusano cifra archivos; el virus los borra",
      "Son exactamente lo mismo con distintos nombres"
    ],
    "correct": 1,
    "feedback": "<strong>Virus:</strong> necesita adjuntarse a un archivo <strong>huésped</strong> y se propaga solo cuando ese archivo se ejecuta.<br><br><strong>Gusano (Worm):</strong> se propaga <strong>automáticamente</strong> por la red explotando vulnerabilidades, sin necesitar ningún archivo huésped — por eso puede propagarse mucho más rápido y consumir gran cantidad de ancho de banda y recursos."
  }
];

// Variantes de preguntas de examen (mismo formato que EQ, generadas desde el campo "a" de Q)
const EQ_VARIANTS = [
  {
    "id": "xv1",
    "cat": "Eje 1",
    "diff": "media",
    "q": "¿Qué computador es el ejemplo clásico de la 3ª generación (circuitos integrados)?",
    "opts": [
      "ENIAC",
      "IBM 360",
      "Intel 4004",
      "Un computador con tubos de vacío de 1945"
    ],
    "correct": 1,
    "feedback": "El <strong>IBM 360</strong> es el ejemplo de la <strong>3ª generación</strong> (<strong>1964-1971</strong>), basada en <strong>circuitos integrados</strong>: varios transistores en un único chip de silicio. En esta etapa aparecen los <strong>sistemas operativos</strong> y los primeros <strong>lenguajes de alto nivel</strong>.<br><br>Los otros ejemplos clave: <strong>ENIAC</strong> (1945) es de la 1ª generación e <strong>Intel 4004</strong> (1971) es el primer microprocesador comercial, de la 4ª."
  },
  {
    "id": "xv2",
    "cat": "Eje 1",
    "diff": "dificil",
    "q": "Si se retira la pila CR2032 de la placa madre, ¿qué ocurre?",
    "opts": [
      "El CMOS pierde fecha, hora y orden de arranque; el BIOS/UEFI no se borra",
      "Se borra el BIOS/UEFI y la placa queda inutilizable",
      "Se pierde todo el contenido del disco duro",
      "La RAM deja de ser volátil y conserva sus datos"
    ],
    "correct": 0,
    "feedback": "La pila <strong>CR2032</strong> alimenta la memoria <strong>CMOS</strong>, que guarda la <strong>fecha, la hora y el orden de arranque</strong> mientras el equipo está apagado. Sin ella, esa configuración vuelve a valores de fábrica.<br><br>El <strong>BIOS/UEFI</strong> NO se borra: está en una <strong>memoria flash</strong> independiente."
  },
  {
    "id": "xv3",
    "cat": "Eje 1",
    "diff": "facil",
    "q": "¿A qué valor decimal equivale FF en hexadecimal?",
    "opts": [
      "15",
      "256",
      "128",
      "255"
    ],
    "correct": 3,
    "feedback": "<strong>FF</strong> en hexadecimal es <strong>11111111</strong> en binario, que equivale a <strong>255</strong> en decimal. Cada dígito hexadecimal representa <strong>4 bits</strong>: F = 15 = 1111, y dos F forman un byte completo (<strong>8 bits</strong>).<br><br>El hexadecimal usa los dígitos <strong>0-9 y A-F</strong> (A=10 hasta F=15) y aparece en direcciones de memoria, colores web (#FF5733) y código máquina."
  },
  {
    "id": "xv4",
    "cat": "Eje 1",
    "diff": "media",
    "q": "¿Qué limitación de disco tiene el BIOS clásico frente a UEFI?",
    "opts": [
      "Solo soporta discos de hasta 2 GB; UEFI hasta 2 TB",
      "No puede arrancar desde SSD; UEFI sí",
      "Solo soporta discos de hasta 2 TB (tabla de particiones MBR); UEFI usa GPT",
      "Solo arranca desde USB; UEFI desde discos internos"
    ],
    "correct": 2,
    "feedback": "El <strong>BIOS</strong> clásico usa <strong>MBR</strong> y solo soporta discos de hasta <strong>2 TB</strong>, con interfaz de texto y arranque lento. <strong>UEFI</strong> usa <strong>GPT</strong> (discos mayores a 2 TB), tiene interfaz gráfica con mouse, arranque más rápido (<strong>Fast Boot</strong>) e incluye <strong>Secure Boot</strong> contra malware en el arranque."
  },
  {
    "id": "xv5",
    "cat": "Eje 2",
    "diff": "media",
    "q": "En un pipeline, ¿qué tipo de hazard ocurre cuando dos instrucciones necesitan el mismo recurso al mismo tiempo?",
    "opts": [
      "Hazard de datos",
      "Hazard estructural",
      "Hazard de control",
      "Hazard de caché"
    ],
    "correct": 1,
    "feedback": "Un <strong>hazard estructural</strong> aparece cuando dos instrucciones necesitan el <strong>mismo recurso</strong> a la vez.<br><br>Los tres hazards del pipeline: <strong>de datos</strong> (una instrucción necesita el resultado de la anterior, todavía sin terminar), <strong>de control</strong> (los saltos condicionales rompen el flujo) y <strong>estructural</strong> (conflicto por un recurso)."
  },
  {
    "id": "xv6",
    "cat": "Eje 2",
    "diff": "media",
    "q": "¿Qué sistema multiprocesador conecta computadoras completas por red, cada una con su propia memoria y su propio SO?",
    "opts": [
      "Cluster",
      "SMP",
      "NUMA",
      "Multinúcleo"
    ],
    "correct": 0,
    "feedback": "Un <strong>cluster</strong> está formado por <strong>computadoras completas</strong> conectadas por una red de alta velocidad; cada nodo tiene <strong>su propia memoria y su propio SO</strong>. Se usa en supercomputadoras.<br><br>En cambio, <strong>SMP</strong> comparte memoria y bus entre varios procesadores, y en <strong>NUMA</strong> cada procesador tiene memoria local pero puede acceder a la de otros. La clave: si comparten memoria física o no."
  },
  {
    "id": "xv7",
    "cat": "Eje 2",
    "diff": "dificil",
    "q": "¿En qué tres partes divide el estándar IEEE 754 un número de punto flotante?",
    "opts": [
      "Parte entera, parte decimal y base",
      "Bit de paridad, dato y checksum",
      "Opcode, operando y dirección",
      "Signo, exponente y mantisa"
    ],
    "correct": 3,
    "feedback": "<strong>IEEE 754</strong> representa los números de <strong>punto flotante</strong> en 32 o 64 bits y los divide en <strong>signo, exponente y mantisa</strong>. Es el <strong>float/double</strong> de la programación.<br><br>No confundir con <strong>ASCII</strong> (texto en 7 bits), <strong>UTF-8</strong> (todos los idiomas) o <strong>BCD</strong> (cada dígito decimal en 4 bits)."
  },
  {
    "id": "xv8",
    "cat": "Eje 2",
    "diff": "facil",
    "q": "¿Cuántos caracteres puede representar el código ASCII estándar?",
    "opts": [
      "256 caracteres (8 bits)",
      "1.024 caracteres (10 bits)",
      "128 caracteres (7 bits)",
      "Más de 1,1 millones de caracteres"
    ],
    "correct": 2,
    "feedback": "<strong>ASCII</strong> representa <strong>128 caracteres</strong> con <strong>7 bits</strong>: letras inglesas, dígitos y puntuación. Fue el primer estándar universal de codificación de texto.<br><br>Los más de <strong>1,1 millones</strong> de caracteres corresponden a <strong>Unicode/UTF-8</strong>, que es compatible con ASCII en sus primeros 128 caracteres."
  },
  {
    "id": "xv9",
    "cat": "Eje 3",
    "diff": "media",
    "q": "¿Quiénes desarrollaron los protocolos TCP/IP y en qué año?",
    "opts": [
      "Tim Berners-Lee, 1991",
      "Vint Cerf y Bob Kahn, 1974",
      "Vint Cerf y Bob Kahn, 1984",
      "DARPA, 1969"
    ],
    "correct": 1,
    "feedback": "<strong>Vint Cerf y Bob Kahn</strong> desarrollaron <strong>TCP/IP</strong> en <strong>1974</strong>: el lenguaje común que permite interconectar redes distintas.<br><br>No mezclar fechas: <strong>ARPANET</strong> (1969), <strong>DNS</strong> (1984), <strong>WWW</strong> (1991, Tim Berners-Lee en el CERN)."
  },
  {
    "id": "xv10",
    "cat": "Eje 3",
    "diff": "media",
    "q": "¿En qué año se creó el DNS (Sistema de Nombres de Dominio)?",
    "opts": [
      "1984",
      "1969",
      "1974",
      "1991"
    ],
    "correct": 0,
    "feedback": "El <strong>DNS</strong> se creó en <strong>1984</strong> y traduce nombres legibles (google.com) a <strong>direcciones IP</strong> numéricas.<br><br>Línea de tiempo: <strong>ARPANET</strong> 1969 → <strong>TCP/IP</strong> 1974 → <strong>DNS</strong> 1984 → <strong>WWW</strong> 1991."
  },
  {
    "id": "xv11",
    "cat": "Eje 3",
    "diff": "dificil",
    "q": "¿Qué empresa popularizó la frase \"La red es la computadora\" y en qué año?",
    "opts": [
      "IBM, 1964",
      "Intel, 1971",
      "Google, 1998",
      "Sun Microsystems, 1984"
    ],
    "correct": 3,
    "feedback": "La frase <strong>\"La red es la computadora\"</strong> es de <strong>Sun Microsystems</strong> (<strong>1984</strong>) y resume la <strong>computación centrada en redes</strong>: procesamiento, almacenamiento y aplicaciones residen en la red, no en el dispositivo local.<br><br>Esa idea evolucionó hacia el <strong>Cloud Computing</strong> actual (AWS, Google Cloud, Azure)."
  },
  {
    "id": "xv12",
    "cat": "Eje 4",
    "diff": "media",
    "q": "¿Cuántos hosts como máximo admite una red con máscara 255.255.255.0 (/24)?",
    "opts": [
      "255",
      "256",
      "254",
      "65.534"
    ],
    "correct": 2,
    "feedback": "Con <strong>255.255.255.0 (/24)</strong> los primeros 3 octetos identifican la red y el último el host: hasta <strong>254 hosts</strong>.<br><br>Para comparar: <strong>/16</strong> (255.255.0.0) admite hasta <strong>65.534</strong> hosts y <strong>/8</strong> (255.0.0.0) hasta unos <strong>16 millones</strong>."
  },
  {
    "id": "xv13",
    "cat": "Eje 4",
    "diff": "dificil",
    "q": "Un dispositivo tiene la IP 192.168.1.100 y la máscara 255.255.255.0. ¿Cuál es su dirección de red?",
    "opts": [
      "192.168.0.0",
      "192.168.1.0",
      "192.168.1.100",
      "192.168.1.255"
    ],
    "correct": 1,
    "feedback": "Se aplica un <strong>AND bit a bit</strong> entre la IP y la máscara: los bits en 1 de la máscara conservan la parte de <strong>red</strong> y los bits en 0 la parte de <strong>host</strong>. Resultado: red <strong>192.168.1.0</strong>, host <strong>100</strong>.<br><br>Ese dispositivo solo puede comunicarse directamente con equipos <strong>192.168.1.x</strong>; para otras redes necesita un <strong>router</strong>."
  },
  {
    "id": "xv14",
    "cat": "Eje 4",
    "diff": "facil",
    "q": "¿Qué puertos usan por defecto HTTP y HTTPS?",
    "opts": [
      "80 (HTTP) y 443 (HTTPS)",
      "21 (HTTP) y 20 (HTTPS)",
      "53 (HTTP) y 80 (HTTPS)",
      "443 (HTTP) y 80 (HTTPS)"
    ],
    "correct": 0,
    "feedback": "<strong>HTTP</strong> usa el puerto <strong>80</strong> y <strong>HTTPS</strong> (que agrega cifrado <strong>SSL/TLS</strong>) el <strong>443</strong>.<br><br>Otros puertos para recordar: <strong>DNS</strong> 53 y <strong>FTP</strong> 20 y 21."
  },
  {
    "id": "xv15",
    "cat": "Eje 4",
    "diff": "media",
    "q": "¿Qué categoría de cable UTP soporta velocidades de hasta 10 Gbps?",
    "opts": [
      "Cat5e",
      "Cat6",
      "Cat3",
      "Cat6A"
    ],
    "correct": 3,
    "feedback": "<strong>Cat6A</strong> llega a <strong>10 Gbps</strong>. Las categorías: <strong>Cat5e</strong> (100 Mbps), <strong>Cat6</strong> (1 Gbps) y <strong>Cat6A</strong> (10 Gbps).<br><br>El <strong>par trenzado</strong> (UTP/STP) es el medio más común en redes LAN: económico y fácil de instalar."
  },
  {
    "id": "xv16",
    "cat": "Eje 4",
    "diff": "dificil",
    "q": "¿Qué protocolo de enrutamiento usa el algoritmo de estado de enlace y es más complejo que RIP?",
    "opts": [
      "RIP",
      "BGP",
      "OSPF",
      "DHCP"
    ],
    "correct": 2,
    "feedback": "<strong>OSPF</strong> es de <strong>estado de enlace</strong> y más complejo que <strong>RIP</strong>, que es sencillo y de <strong>distancia vector</strong>.<br><br><strong>BGP</strong> es el que se usa en Internet entre proveedores. <strong>DHCP</strong> no es de enrutamiento: asigna IPs automáticamente."
  },
  {
    "id": "xv17",
    "cat": "Eje 5",
    "diff": "dificil",
    "q": "¿Qué ley argentina le da validez legal a la firma digital?",
    "opts": [
      "Ley 25.326",
      "Ley 25.506",
      "Ley 26.388",
      "Ley 11.723"
    ],
    "correct": 1,
    "feedback": "En Argentina la <strong>firma digital</strong> tiene validez legal por la <strong>Ley 25.506</strong>. Se usa en facturas electrónicas, contratos digitales y software.<br><br>Recordá que no es una firma escaneada: es un proceso criptográfico con <strong>clave privada</strong> que garantiza <strong>autenticidad, integridad y no repudio</strong>."
  },
  {
    "id": "xv18",
    "cat": "Eje 5",
    "diff": "media",
    "q": "¿Cómo se llama el phishing dirigido específicamente a ejecutivos?",
    "opts": [
      "Whaling",
      "Spear phishing",
      "Vishing",
      "Baiting"
    ],
    "correct": 0,
    "feedback": "El <strong>whaling</strong> es el phishing dirigido a <strong>ejecutivos</strong>. El <strong>spear phishing</strong> apunta a una <strong>persona específica</strong>, y el <strong>vishing</strong> es phishing por <strong>llamada telefónica</strong>.<br><br>Todas son técnicas de <strong>Ingeniería Social</strong>: atacan personas, no sistemas."
  },
  {
    "id": "xv19",
    "cat": "Eje 5",
    "diff": "facil",
    "q": "¿Cuál de estos algoritmos es de criptografía simétrica?",
    "opts": [
      "RSA",
      "ECC",
      "SHA-256",
      "AES"
    ],
    "correct": 3,
    "feedback": "<strong>AES</strong> (junto con DES y 3DES) es <strong>simétrico</strong>: usa la <strong>misma clave</strong> para cifrar y descifrar, y es rápido.<br><br><strong>RSA</strong> y <strong>ECC</strong> son <strong>asimétricos</strong> (par de claves pública/privada) y <strong>SHA-256</strong> es una función <strong>hash</strong> (unidireccional, para verificar integridad). HTTPS combina simétrica y asimétrica."
  },
  {
    "id": "xv20",
    "cat": "Eje 5",
    "diff": "media",
    "q": "Un atacante deja pendrives infectados en un lugar público esperando que alguien los conecte. ¿Qué técnica de Ingeniería Social es?",
    "opts": [
      "Tailgating",
      "Pretexting",
      "Baiting",
      "Vishing"
    ],
    "correct": 2,
    "feedback": "Dejar dispositivos infectados (USB, CD) en lugares públicos es <strong>baiting</strong>: se usa la curiosidad como \"carnada\".<br><br>Otras técnicas: <strong>pretexting</strong> (historia falsa para ganar confianza), <strong>vishing</strong> (phishing por llamada) y <strong>tailgating</strong> (acceso físico siguiendo a alguien autorizado)."
  },
  {
    "id": "xv21",
    "cat": "Von Neumann",
    "diff": "facil",
    "q": "¿Quién propuso la arquitectura de Von Neumann y en qué año?",
    "opts": [
      "Alan Turing, 1936",
      "El matemático John von Neumann, 1945",
      "Intel, 1971",
      "IBM, 1964"
    ],
    "correct": 1,
    "feedback": "La arquitectura fue propuesta por el matemático <strong>John von Neumann</strong> en <strong>1945</strong>. Introdujo el concepto de <strong>programa almacenado</strong>: las instrucciones residen en memoria igual que los datos, lo que permite modificar el programa en tiempo de ejecución."
  },
  {
    "id": "xv22",
    "cat": "Von Neumann",
    "diff": "media",
    "q": "¿Qué registro contiene la dirección de memoria de la próxima instrucción a ejecutar?",
    "opts": [
      "CP (Contador de Programa)",
      "IR (Registro de Instrucción)",
      "AC (Acumulador)",
      "MAR (Memory Address Register)"
    ],
    "correct": 0,
    "feedback": "El <strong>CP</strong> guarda la dirección de la <strong>próxima instrucción</strong> y se incrementa automáticamente después de cada <strong>fetch</strong>.<br><br>El <strong>IR</strong> contiene la instrucción que se está ejecutando ahora, el <strong>AC</strong> guarda resultados de la ALU y el <strong>MAR</strong> la dirección de memoria a leer o escribir."
  },
  {
    "id": "xv23",
    "cat": "Von Neumann",
    "diff": "media",
    "q": "¿Qué registro guarda la dirección de memoria que se quiere leer o escribir?",
    "opts": [
      "MBR (Memory Buffer Register)",
      "CP (Contador de Programa)",
      "AC (Acumulador)",
      "MAR (Memory Address Register)"
    ],
    "correct": 3,
    "feedback": "El <strong>MAR</strong> actúa como \"puntero\" al acceder a la memoria principal. El <strong>MBR</strong>, en cambio, guarda el <strong>dato</strong> leído o por escribir.<br><br>Regla para el oral: <strong>CP</strong> e <strong>IR</strong> son para instrucciones; <strong>MAR</strong> y <strong>MBR</strong> son para datos en tránsito desde/hacia la memoria."
  },
  {
    "id": "xv24",
    "cat": "Topologías",
    "diff": "media",
    "q": "¿Cuántos enlaces se necesitan en una malla completa (full mesh) de 5 nodos?",
    "opts": [
      "5",
      "15",
      "10",
      "20"
    ],
    "correct": 2,
    "feedback": "En una malla completa de <strong>n nodos</strong> se necesitan <strong>n(n-1)/2</strong> enlaces. Con <strong>5 nodos</strong>: 5×4/2 = <strong>10 enlaces</strong>.<br><br>La <strong>malla parcial</strong> conecta cada nodo con varios pero no todos: equilibra redundancia y costo."
  },
  {
    "id": "xv25",
    "cat": "Topologías",
    "diff": "facil",
    "q": "¿Qué topología combina varias estrellas organizadas de forma jerárquica?",
    "opts": [
      "Bus",
      "Árbol",
      "Anillo",
      "Malla"
    ],
    "correct": 1,
    "feedback": "La topología de <strong>Árbol</strong> combina <strong>estrellas jerárquicas</strong>: nodo raíz, nodos intermedios y nodos hoja. Es muy <strong>escalable</strong>, pero si cae un nodo intermedio o la raíz, cae todo lo que depende de él.<br><br>Contraste: <strong>Malla</strong> = más redundante; <strong>Árbol</strong> = más escalable."
  },
  {
    "id": "xv26",
    "cat": "Topologías",
    "diff": "dificil",
    "q": "¿Qué estándar de Ethernet antiguo, con cable coaxial, usaba topología de bus?",
    "opts": [
      "10BASE-2",
      "10BASE-T",
      "100BASE-TX",
      "1000BASE-T"
    ],
    "correct": 0,
    "feedback": "<strong>10BASE-2</strong> (coaxial) fue una red Ethernet típica de <strong>topología de bus</strong>. Hoy está en desuso, reemplazada por la topología en <strong>estrella con switches</strong> sobre cable UTP."
  },
  {
    "id": "xv27",
    "cat": "Topologías",
    "diff": "media",
    "q": "En la topología de Anillo, ¿en qué sentido viajan los datos?",
    "opts": [
      "En ambas direcciones por un cable central",
      "Siempre a través de un concentrador",
      "Directamente a todos los nodos a la vez",
      "En una sola dirección, de nodo en nodo"
    ],
    "correct": 3,
    "feedback": "En el <strong>Anillo</strong> los datos viajan de nodo en nodo en <strong>una sola dirección</strong>, sin concentrador. Ventaja: <strong>sin colisiones</strong> y acceso ordenado al medio. Desventaja: si falla un nodo o enlace, puede interrumpirse toda la red.<br><br>En el <strong>Bus</strong>, en cambio, los datos viajan en <strong>ambas direcciones</strong> por el cable central."
  },
  {
    "id": "xv28",
    "cat": "OSI/TCP-IP",
    "diff": "media",
    "q": "¿Qué capas del modelo OSI se combinan en la capa Aplicación de TCP/IP?",
    "opts": [
      "Transporte, Red y Enlace (capas 4, 3 y 2)",
      "Red y Física (capas 3 y 1)",
      "Aplicación, Presentación y Sesión (capas 7, 6 y 5)",
      "Solo Aplicación (capa 7)"
    ],
    "correct": 2,
    "feedback": "Las capas <strong>5 (Sesión)</strong>, <strong>6 (Presentación)</strong> y <strong>7 (Aplicación)</strong> del OSI se combinan en la capa <strong>Aplicación</strong> de TCP/IP, que tiene <strong>4 capas</strong> en total."
  },
  {
    "id": "xv29",
    "cat": "OSI/TCP-IP",
    "diff": "media",
    "q": "¿Con qué unidad de datos y qué tipo de direcciones trabaja la capa de Enlace de datos (capa 2)?",
    "opts": [
      "Paquetes y direcciones IP",
      "Tramas y direcciones MAC",
      "Bits y señales eléctricas",
      "Segmentos y números de puerto"
    ],
    "correct": 1,
    "feedback": "La capa 2 (<strong>Enlace de datos</strong>) trabaja con <strong>tramas</strong> y <strong>direcciones MAC</strong>, transmitiendo entre nodos directamente conectados. El <strong>switch</strong> opera en esta capa.<br><br>La capa 3 (Red) usa paquetes e <strong>IP</strong>, y la capa 1 (Física) transmite <strong>bits</strong>."
  },
  {
    "id": "xv30",
    "cat": "OSI/TCP-IP",
    "diff": "facil",
    "q": "¿Qué capa del modelo OSI se ocupa del formato, el cifrado y la compresión de los datos?",
    "opts": [
      "Capa 6 – Presentación",
      "Capa 5 – Sesión",
      "Capa 4 – Transporte",
      "Capa 2 – Enlace de datos"
    ],
    "correct": 0,
    "feedback": "La capa <strong>6 – Presentación</strong> se encarga del <strong>formato, cifrado y compresión</strong> de los datos, traduciendo entre formatos de red y de aplicación.<br><br>La capa <strong>5 – Sesión</strong> gestiona el inicio, mantenimiento y cierre de las conexiones entre aplicaciones."
  },
  {
    "id": "xv31",
    "cat": "Karnaugh",
    "diff": "media",
    "q": "¿Qué forma canónica se obtiene al agrupar los 0s en un mapa de Karnaugh?",
    "opts": [
      "SOP — Suma de Productos (minterms)",
      "Forma binaria",
      "Forma hexadecimal",
      "POS — Producto de Sumas (maxterms)"
    ],
    "correct": 3,
    "feedback": "Agrupar <strong>0s</strong> da la forma <strong>POS</strong> (Producto de Sumas): términos <strong>OR conectados por AND</strong>, llamada forma canónica de <strong>maxterms</strong>.<br><br>Agrupar <strong>1s</strong> da <strong>SOP</strong> (Suma de Productos, minterms). Ambas representan la misma función booleana."
  },
  {
    "id": "xv32",
    "cat": "Karnaugh",
    "diff": "facil",
    "q": "¿Cuántas variables se cancelan al formar un grupo de 4 celdas?",
    "opts": [
      "1 variable",
      "3 variables",
      "2 variables",
      "4 variables"
    ],
    "correct": 2,
    "feedback": "El patrón de cancelación: grupo de <strong>2</strong> celdas → se cancela <strong>1</strong> variable; grupo de <strong>4</strong> → <strong>2</strong>; grupo de <strong>8</strong> → <strong>3</strong>; grupo de <strong>16</strong> → <strong>4</strong> (función constante = 1).<br><br>Se apoya en la propiedad <strong>A + Ā = 1</strong>."
  },
  {
    "id": "xv33",
    "cat": "Karnaugh",
    "diff": "dificil",
    "q": "En un mapa de Karnaugh, ¿qué significa que los bordes opuestos son adyacentes (wrap-around)?",
    "opts": [
      "Los grupos de 3 celdas son válidos",
      "Se pueden agrupar celdas de bordes opuestos del mapa",
      "Una celda no puede pertenecer a más de un grupo",
      "Solo se agrupan celdas en el centro del mapa"
    ],
    "correct": 1,
    "feedback": "Con el <strong>wrap-around</strong>, los bordes opuestos del mapa son <strong>adyacentes</strong>, así que se pueden agrupar celdas de esos bordes.<br><br>Otras reglas: los grupos pueden <strong>solaparse</strong>, siempre se buscan primero los grupos más grandes posibles y su tamaño debe ser <strong>potencia de 2</strong>."
  },
  {
    "id": "xv34",
    "cat": "V / F",
    "diff": "media",
    "q": "¿Cuál de estas afirmaciones sobre la memoria virtual es VERDADERA?",
    "opts": [
      "Es una técnica del SO que usa espacio en disco (archivo de paginación o swap) para simular más RAM",
      "Es un módulo físico de RAM más lento que se instala en la placa",
      "Es más rápida que la RAM porque usa el disco",
      "Elimina por completo el riesgo de thrashing"
    ],
    "correct": 0,
    "feedback": "La <strong>memoria virtual</strong> NO es un componente físico ni es RAM: es una técnica del <strong>SO</strong> que mueve páginas inactivas a un <strong>archivo de paginación</strong> (Windows) o <strong>swap</strong> (Linux).<br><br>Es mucho más lenta que la RAM y, si se abusa de ella, produce <strong>thrashing</strong>."
  },
  {
    "id": "xv35",
    "cat": "V / F",
    "diff": "media",
    "q": "¿Cuál de estas afirmaciones sobre las compuertas lógicas es FALSA?",
    "opts": [
      "NAND es una compuerta universal",
      "NOT invierte el valor de la entrada",
      "NOR da 1 solo cuando todas sus entradas son 0",
      "La compuerta XOR da 1 cuando ambas entradas son iguales"
    ],
    "correct": 3,
    "feedback": "La falsa es la de <strong>XOR</strong>: da <strong>1 cuando las entradas son diferentes</strong> y 0 cuando son iguales. La que da 1 con entradas iguales es <strong>XNOR</strong>.<br><br><strong>NAND</strong> y <strong>NOR</strong> son compuertas <strong>universales</strong>."
  },
  {
    "id": "xv36",
    "cat": "V / F",
    "diff": "media",
    "q": "¿Cuál de estas afirmaciones sobre la topología de Bus es VERDADERA?",
    "opts": [
      "Usa un concentrador central",
      "Es la topología más tolerante a fallos",
      "Todos los nodos reciben los datos, pero solo el destinatario los procesa",
      "Cada nodo se conecta exactamente a otros dos"
    ],
    "correct": 2,
    "feedback": "En el <strong>Bus</strong> los datos viajan por un <strong>cable central compartido (backbone)</strong>: todos los reciben pero solo el destinatario los procesa. Si el cable falla, cae toda la red, y dos transmisiones simultáneas producen una <strong>colisión</strong>.<br><br>El concentrador es de la <strong>Estrella</strong>, la mayor tolerancia a fallos es de la <strong>Malla</strong> y \"exactamente 2 vecinos\" es del <strong>Anillo</strong>."
  },
  {
    "id": "xv37",
    "cat": "V / F",
    "diff": "dificil",
    "q": "¿Cuál de estas afirmaciones sobre los modelos OSI y TCP/IP es FALSA?",
    "opts": [
      "OSI tiene 7 capas y TCP/IP tiene 4",
      "El modelo OSI entra en funcionamiento cuando TCP/IP falla",
      "TCP/IP es el modelo práctico que mueve Internet",
      "OSI se usa como referencia para diagnosticar problemas de red"
    ],
    "correct": 1,
    "feedback": "Es falso que <strong>OSI</strong> \"aparezca\" cuando TCP/IP falla: OSI es solo una <strong>referencia conceptual</strong> (ISO) para entender, diseñar y diagnosticar redes, no un sistema activo.<br><br>TCP/IP (<strong>DARPA</strong>) es el modelo que realmente opera en Internet."
  }
];
