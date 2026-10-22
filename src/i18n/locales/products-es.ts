import type { ProductTranslationsMap } from '../types';

export const PRODUCTS_ES: ProductTranslationsMap = {
  'power-ua': {
    name: 'Exoesqueleto Pasivo de Miembros Superiores',
    shortTitle: 'Armadura Biónica para Trabajos en Altura',
    category: 'Serie de Exoesqueletos Biónicos',
    subCategory: 'Armadura de Carbono Sin Energía para Trabajos por Encima de la Cabeza',
    headline: 'Armadura Biónica Superior. Alivio Mecánico Puro.',
    overview:
      'Diseñado con una estructura biónica puramente mecánica para brindar asistencia direccional precisa, el LC Power-U/A es ligero, altamente fiable y adaptable a entornos industriales complejos. Con ajustes multinivel para adaptarse a diversas morfologías corporales, está concebido específicamente para ensamblaje automotriz, mantenimiento eléctrico, construcción, reparación aeronáutica y recolección agrícola, reduciendo drásticamente la carga muscular en hombros y brazos mientras eleva la eficiencia operativa y el confort durante toda la jornada.',
    metrics: [
      { value: '8kg', label: 'Capacidad Máxima de Asistencia Superior' },
      { value: '< 2kg', label: 'Columna Ultraligera de Fibra de Carbono Aeroespacial' },
      { value: '100%', label: 'Operación Pasiva Sin Energía (Cero Riesgo de Batería)' },
      { value: '4 Ángulos', label: 'Articulación Multiposición (50°, 70°, 90°, 110°/115°)' },
    ],
    features: [
      {
        title: 'Chasis Ultraligero de Carbono',
        description:
          'La fibra de carbono aeroespacial combinada con tejido Oxford resistente al desgaste ofrece una rigidez inigualable con un peso inferior a 2 kg, garantizando movilidad irrestricta de los brazos.',
      },
      {
        title: 'Seguridad Intrínseca Sin Alimentación Eléctrica',
        description:
          'El almacenamiento de energía elástica 100% mecánica elimina el mantenimiento de baterías, los tiempos de inactividad por carga y los riesgos de chispas en operaciones continuas de múltiples turnos.',
      },
      {
        title: 'Descarga Musculoesquelética de Alta Eficiencia',
        description:
          'Reduce la tensión del músculo deltoides hasta en 8 kg, prolongando directamente la resistencia del operario y previniendo trastornos crónicos de hombro.',
      },
      {
        title: 'Durabilidad Industrial Minimalista',
        description:
          'Las articulaciones de aluminio anodizado de alta resistencia soportan impactos rigurosos, polvo y desgaste industrial continuo.',
      },
    ],
    hotspots: [
      {
        title: 'Articulación de Hombro de 4 Posiciones',
        description:
          'La asistencia mecánica semiautomática se activa instantáneamente al elevar los brazos, con bloqueos a 50°, 70°, 90° y 110°/115°.',
        zone: 'Unidad de Articulación Glenohumeral',
      },
      {
        title: 'Arnés Pectoral y Dorsal de Liberación Rápida',
        description:
          'Las hebillas ergonómicas a presión permiten colocarse y retirarse el equipo en menos de 15 segundos.',
        zone: 'Arnés Torácico de Bloqueo Cruzado',
      },
      {
        title: 'Barra Dorsal Telescópica de Carbono',
        description:
          'La columna dorsal de fibra de carbono de alta resistencia a la tracción se ajusta con precisión a distintas longitudes de torso.',
        zone: 'Columna Dorsal de Carbono',
      },
      {
        title: 'Brazaletes de Soporte de Liberación Rápida',
        description:
          'Los soportes ergonómicos para brazos con hebilla amarilla y lengüeta azul de liberación rápida permiten una salida inmediata.',
        zone: 'Cuna de Soporte Humeral',
      },
      {
        title: 'Cinturón Lumbar Contorneado 3D',
        description:
          'El cinturón de malla transpirable distribuye la carga del arnés de manera uniforme hacia la cintura pélvica.',
        zone: 'Faja Pélvica de Transferencia de Carga',
      },
    ],
    bentoCards: [
      {
        title: 'Articulación Mecánica Semiautomática de Hombro de 4 Ángulos',
        subtitle: 'Arquitectura de Trinquete en Aluminio de Aviación de Precisión',
        description:
          'La carcasa de aleación de aluminio de aviación mecanizada por CNC alberga un trinquete de bloqueo semiautomático de 3 marchas y 4 ángulos (50°, 70°, 90°, 110°/115°) que se acopla silenciosamente cuando el operario eleva los brazos y se desacopla suavemente al descenderlos.',
        materialTag: 'Aleación de Aluminio de Aviación • Bloqueo de 4 Ángulos',
      },
      {
        title: 'Columna Telescópica de Fibra de Carbono Aeroespacial',
        subtitle: 'Estructura Dorsal de Alta Rigidez Inferior a 2 kg',
        description:
          'La columna de fibra de carbono aeroespacial tejida multidireccionalmente resiste la flexión torsional mientras transfiere hasta 8 kg de peso de herramientas hacia el cinturón pélvico.',
        materialTag: 'Fibra de Carbono Aeroespacial T700',
      },
      {
        title: 'Brazaletes de Liberación Rápida y Malla 3D Transpirable',
        subtitle: 'Tejido Oxford Resistente al Desgaste y Forro Ventilado',
        description:
          'Diseñado con tejido exterior Oxford industrial resistente al desgarro y forro interior de malla de aire en panal 3D para liberación rápida de emergencia y ventilación térmica durante turnos de 8 horas.',
        materialTag: 'Exterior Oxford + Malla de Panal 3D',
      },
    ],
    deployment: {
      title: 'Ensamblaje de Bajos de Carrocería Automotriz y Operaciones de Torque Superior',
      locationBadge: 'Línea de Ensamblaje Final Automotriz • Estación de Chasis Elevado',
      narrative:
        'En las plantas modernas de ensamblaje automotriz, los técnicos ejecutan miles de ciclos de fijación por encima de la cabeza por turno bajo chasis elevados. El LC Power-U/A bloquea el soporte mecánico entre 50° y 115°, neutralizando el peso de las llaves dinamométricas neumáticas y eliminando la fatiga del deltoides sin requerir un solo vatio de energía eléctrica.',
      environmentalMetrics: [
        { label: 'Reducción EMG del Deltoides', value: 'Hasta 8kg de Descarga' },
        { label: 'Tiempo de Colocación / Retiro', value: '< 15 Segundos' },
        { label: 'Inactividad por Carga Eléctrica', value: '0 Horas (100% Pasivo)' },
      ],
      industries: [
        'Ensamblaje Automotriz',
        'Mantenimiento de Redes Eléctricas',
        'Construcción',
        'Reparación Aeronáutica',
        'Cosecha Agrícola',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Power-U/A (Código de esp.: LC Power-U/P)' },
      { parameter: 'Color', value: 'Negro Mate Industrial' },
      { parameter: 'Usuarios Objetivo', value: 'Trabajadores con tareas prolongadas de elevación de brazos y trabajo sobre la cabeza' },
      { parameter: 'Aplicaciones', value: 'Ensamblaje automotriz, mantenimiento eléctrico, construcción, reparación aeronáutica, cosecha agrícola' },
      { parameter: 'Materiales Estructurales', value: 'Fibra de carbono + aleación de aluminio de aviación' },
      { parameter: 'Capacidad de Asistencia', value: 'Máx. 8kg' },
      { parameter: 'Modo de Bloqueo', value: 'Bloqueo mecánico semiautomático' },
      { parameter: 'Niveles de Asistencia', value: '3 niveles (acoplamiento en 4 ángulos)' },
      { parameter: 'Ángulos de Asistencia / Desbloqueo', value: '50°, 70°, 90°, 110°/115°' },
      { parameter: 'Tejido Exterior', value: 'Tejido Oxford resistente al desgaste' },
      { parameter: 'Tejido de Forro', value: 'Malla transpirable 3D' },
      { parameter: 'Tallas', value: 'Talla Estándar / Talla Grande' },
      { parameter: 'Peso Neto', value: '< 2kg' },
      { parameter: 'Dimensiones del Empaque', value: '50 × 40 × 12cm' },
      { parameter: 'Accesorios Opcionales', value: 'Collarín ergonómico de soporte cervical' },
      { parameter: 'Garantía', value: 'Garantía Industrial Oficial de 1 Año' },
    ],
    quickCompare: {
      mechanism: 'Carbono Mecánico Pasivo + Trinquete de 4 Ángulos',
      capacityOrTemp: 'Asistencia Superior Máx. 8kg',
      powerOrCycle: '100% Pasivo (0V)',
      netWeight: '< 2kg',
      primaryApplication: 'Ensamblaje Automotriz, Red Eléctrica, Reparación Aeronáutica',
    },
  },
  'flex-w': {
    name: 'Exoesqueleto Lumbar Flexible',
    shortTitle: 'Cinturón Lumbar Inteligente Sin Energía',
    category: 'Serie de Exoesqueletos Biónicos',
    subCategory: 'Asistencia Lumbar Dinámica de 30kg',
    headline: 'El Cinturón Inteligente Sin Baterías. Hasta 30kg de Impulso Lumbar Dinámico.',
    overview:
      'Este exoesqueleto lumbar ligero y sin alimentación eléctrica está diseñado para tareas frecuentes de flexión y levantamiento de cargas. Almacena y libera energía mediante la deformación elástica de sus materiales, actuando como un "cinturón inteligente" biomecánico para proporcionar impulso ascendente de asistencia al inclinarse. Reduce significativamente la tensión lumbar, descarga la compresión de los discos intervertebrales y mitiga el riesgo de lesiones ocupacionales en la espalda baja.',
    metrics: [
      { value: '0–30kg', label: 'Rango de Asistencia Lumbar Ascendente Dinámica' },
      { value: '≤ 1kg', label: 'Perfil Portátil Ultradelgado' },
      { value: '160–190cm', label: 'Amplia Adaptación Ergonómica de Estatura' },
      { value: '0V', label: 'Almacenamiento de Energía Cinética a Prueba de Fallos Sin Energía' },
    ],
    features: [
      {
        title: 'Chasis Minimalista Inferior a 1 kg',
        description:
          'La construcción textil transpirable se adapta naturalmente al torso, garantizando comodidad libre de sudor durante un turno completo de 8 horas.',
      },
      {
        title: 'Agilidad Sin Restricciones',
        description:
          'Se adapta al contorno corporal sin restricciones metálicas rígidas en la cadera, preservando total libertad para caminar, agacharse, subir escaleras y conducir.',
      },
      {
        title: 'Descarga Dinámica de los Músculos Erectores de la Columna',
        description:
          'Acumula tensión elástica progresivamente a medida que el usuario se inclina hacia adelante, liberando un impulso ascendente potente al incorporarse.',
      },
      {
        title: 'Equilibrio de Presión Espinal',
        description:
          'Distribuye las cargas puntuales agudas de la zona lumbar entre la columna torácica y los muslos, previniendo hernias discales ocupacionales.',
      },
    ],
    hotspots: [
      {
        title: 'Espalda Ajustable en Múltiples Alturas',
        description:
          'El sistema telescópico de tensión en los hombros se adapta a estaturas de operarios de 160 cm a 190 cm.',
        zone: 'Anclaje de Tensión Torácica',
      },
      {
        title: 'Enrutamiento de Articulación Lateral',
        description:
          'Las trayectorias de correas flexibles y suaves eliminan los pellizcos en la cadera durante sentadillas profundas extremas.',
        zone: 'Guía Oblicua Lateral',
      },
      {
        title: 'Almohadilla Lumbar 3D Engrosada',
        description:
          'La almohadilla ergonómica multicapa amortigua la parte baja de la columna y distribuye las cargas dorsales.',
        zone: 'Almohadilla de Descompresión L1–L5',
      },
      {
        title: 'Núcleo Elástico a Prueba de Fallos',
        description:
          'Las fibras de látex de poliéster de alta resiliencia aseguran durabilidad de por vida en entornos húmedos o polvorientos.',
        zone: 'Banda de Deformación Cinética',
      },
      {
        title: 'Correas Bilaterales de Tracción en Muslos',
        description:
          'Soporte lumbar integrado vinculado a musleras bilaterales para una transferencia de carga fluida de 0 a 30 kg.',
        zone: 'Musleras de Enlace Femoral',
      },
    ],
    bentoCards: [
      {
        title: 'Soporte Dorso-Lumbar Integrado y Almohadilla 3D',
        subtitle: 'Matriz de Descompresión de Discos Intervertebrales L1–L5',
        description:
          'Una almohadilla lumbar ergonómica multicapa en panal 3D aloja el soporte dorso-lumbar integrado, estabilizando la columna inferior mientras disipa el calor y la humedad durante la clasificación de almacén de alta frecuencia.',
        materialTag: 'Malla Transpirable 3D + Soporte Lumbar',
      },
      {
        title: 'Núcleo de Fibra de Látex de Poliéster de Alta Resiliencia',
        subtitle: 'Almacenamiento Progresivo de Energía Cinética de 0 a 30 kg',
        description:
          'Las fibras elásticas de látex de poliéster de ingeniería almacenan energía potencial mecánica durante la flexión anterior del tronco y devuelven hasta 30 kg de impulso ascendente suave.',
        materialTag: 'Látex de Poliéster de Alta Resiliencia',
      },
      {
        title: 'Sistema Bilateral de Correas de Enlace para Muslos',
        subtitle: 'Sentadilla Sin Pellizcos y Agilidad en Montacargas',
        description:
          'Las musleras suaves de tejido Oxford resistente al desgaste anclan la vía de carga cinética sin bisagras metálicas rígidas en la cadera, permitiendo a los operarios pasar directamente del levantamiento de cargas a la conducción de montacargas.',
        materialTag: 'Tejido Oxford Táctico Resistente al Desgaste',
      },
    ],
    deployment: {
      title: 'Centros Logísticos de Alta Frecuencia y Manejo de Equipaje Aeroportuario',
      locationBadge: 'Centro Inteligente de Distribución Logística • Zona de Paletizado',
      narrative:
        'En los centros de clasificación logística de alto rendimiento y plataformas de equipaje aeroportuario, los operarios realizan cientos de flexiones profundas y levantamientos pesados cada hora. Con un peso ≤1 kg y sin barras rígidas en la cadera, el LC Flex-W actúa como un segundo conjunto de músculos erectores de la columna, entregando hasta 30 kg de asistencia lumbar ascendente sin limitar la marcha natural, el ascenso ni la operación de vehículos.',
      environmentalMetrics: [
        { label: 'Asistencia Ascendente Dinámica', value: '0–30kg Ajustable' },
        { label: 'Peso Total del Equipo', value: '≤ 1.0kg' },
        { label: 'Rango de Estatura del Operario', value: '160–190cm' },
      ],
      industries: [
        'Logística Industrial',
        'Manejo de Equipaje Aeroportuario',
        'Atención Médica y Geriátrica',
        'Operaciones de Flexión Frecuente',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Flex-W' },
      { parameter: 'Color', value: 'Negro Táctico' },
      { parameter: 'Usuarios Objetivo', value: 'Trabajadores manuales, operadores de almacén, manipuladores logísticos, cuidadores' },
      { parameter: 'Aplicaciones', value: 'Logística industrial, equipaje aeroportuario, atención médica geriátrica, operaciones de flexión frecuente' },
      { parameter: 'Tipo de Asistencia', value: 'Mecánica pasiva sin alimentación eléctrica' },
      { parameter: 'Estatura Aplicable', value: '160–190cm' },
      { parameter: 'Rango de Asistencia', value: '0–30kg (ajustable dinámicamente)' },
      { parameter: 'Medio de Almacenamiento de Energía', value: 'Fibra elástica de látex de poliéster de alta resiliencia' },
      { parameter: 'Estructura Principal', value: 'Soporte dorso-lumbar integrado + sistema bilateral de correas de enlace para muslos' },
      { parameter: 'Tejido Exterior', value: 'Tejido Oxford resistente al desgaste' },
      { parameter: 'Tejido de Forro', value: 'Malla transpirable 3D' },
      { parameter: 'Tallas', value: 'Talla Estándar / Talla Grande' },
      { parameter: 'Peso Neto', value: '≤ 1kg' },
      { parameter: 'Dimensiones del Empaque', value: '40 × 30 × 10cm' },
      { parameter: 'Garantía', value: 'Garantía Industrial Oficial de 1 Año' },
    ],
    quickCompare: {
      mechanism: 'Látex de Poliéster Elástico Pasivo + Enlace Femoral',
      capacityOrTemp: 'Asistencia Lumbar Dinámica 0–30kg',
      powerOrCycle: '100% Pasivo (0V)',
      netWeight: '≤ 1kg',
      primaryApplication: 'Logística, Equipaje Aeroportuario, Cuidado Médico',
    },
  },
  'gloves-01': {
    name: 'Guante de Evaluación de Trabajo Repetitivo de Muñeca',
    shortTitle: 'Guante de Diagnóstico Biométrico con IA en el Borde',
    category: 'Serie de Detección Ergonómica Inteligente',
    subCategory: 'Biometría Edge-AI conforme a GBZ 336-2025',
    headline: 'Guante Biométrico con Edge-AI. Diagnóstico de Riesgo de Túnel Carpiano GBZ 336-2025.',
    overview:
      'Diseñado para puestos de manufactura con movimientos repetitivos y forzados de muñeca, el LC Gloves-01 cumple estrictamente con la norma GBZ 336-2025 Criterios de Diagnóstico para el Síndrome del Túnel Carpiano Ocupacional. Equipado con sensores IMU de doble postura (dorso de la mano + muñequera) y computación IA en el borde integrada, registra en tiempo real los ángulos de la muñeca, movimientos laborales válidos, frecuencia de operación, duración e intensidad de carga. Admite carga inalámbrica de datos y análisis en tableta para la cuantificación de riesgos ergonómicos y optimización de estaciones de trabajo.',
    secondaryStudioCaption:
      'Suite Analítica para Tableta Industrial — Telemetría de formas de onda en tiempo real de doble canal para flexión/extensión y desviación radial/cubital con clasificación automatizada de riesgo de túnel carpiano ocupacional según GBZ 336-2025.',
    metrics: [
      { value: '≤ ±0.1°', label: 'Precisión de Medición IMU Estática' },
      { value: '±180°', label: 'Rango Completo de Movimiento Multieje' },
      { value: '200g', label: 'Factor de Forma Ergonómico Ultraligero' },
      { value: '24/min', label: 'Seguimiento Automatizado de Frecuencia de Movimientos Válidos' },
    ],
    features: [
      {
        title: 'Detección de Actitud de Doble Punto',
        description:
          'La arquitectura de detección diferencial cancela los artefactos de movimiento de todo el brazo, aislando la flexión, extensión y desviación puras de la muñeca.',
      },
      {
        title: 'Procesamiento Edge-AI Integrado',
        description:
          'El microcontrolador del guante calcula ángulos, contabiliza ciclos válidos y compila métricas localmente con latencia cero.',
      },
      {
        title: 'Telemetría Inalámbrica en Tableta',
        description:
          'La transmisión de datos en tiempo real por Bluetooth/Wi-Fi hacia la suite de PC/tableta genera informes de riesgo diagnóstico exportables.',
      },
      {
        title: 'Antiinterferencia de Grado Industrial',
        description:
          'Blindado contra ruido electromagnético y vibración de maquinaria en plantas automotrices y electrónicas.',
      },
    ],
    hotspots: [
      {
        title: 'Recortes Táctiles de Medio Dedo',
        description:
          'Las yemas de los dedos expuestas preservan el tacto fino para el ensamblaje delicado de tornillos en miniatura y componentes electrónicos.',
        zone: 'Recortes Falángicos Distales',
      },
      {
        title: 'Montaje Dorsal de Sensor Sin Holgura',
        description:
          'El tejido elástico de alta elongación fija firmemente el sensor IMU primario sobre los huesos metacarpianos.',
        zone: 'Nodo IMU Metacarpiano Primario',
      },
      {
        title: 'Arquitectura Ligera de 200 g',
        description:
          'Minimiza la carga muscular durante auditorías ergonómicas continuas de 8 horas.',
        zone: 'Chasis de Punto Técnico Transpirable',
      },
      {
        title: 'Muñequera Secundaria Ajustable',
        description:
          'Ancla el sensor IMU de referencia en diversos perímetros de muñeca.',
        zone: 'Correa de Referencia Radiocarpiana',
      },
      {
        title: 'Software de Diagnóstico e IMU de Referencia',
        description:
          'El módulo IMU secundario de muñeca transmite formas de onda de doble canal en tiempo real para flexión/extensión, desviación radial/cubital y evaluación de riesgo GBZ 336-2025.',
        zone: 'Enlace Inalámbrico de Telemetría Edge-AI',
      },
    ],
    bentoCards: [
      {
        title: 'Módulos Sensores IMU Diferenciales de Doble Postura',
        subtitle: 'Precisión Estática ≤ ±0.1° y Microcontrolador Edge-AI',
        description:
          'Al emparejar un IMU metacarpiano dorsal con un IMU de referencia en la muñequera, el procesador Edge-AI integrado descarta el movimiento general del brazo y aísla la verdadera flexión/extensión y desviación radial/cubital de la muñeca por encima del umbral de reconocimiento de 15°.',
        materialTag: 'Doble IMU Diferencial • Precisión ≤ ±0.1°',
      },
      {
        title: 'Tejido Técnico de Alta Elasticidad y Diseño de Medio Dedo',
        subtitle: 'Bloqueo de Sensor Antideslizante con Destreza Total en las Yemas',
        description:
          'El textil técnico gris transpirable de 200 g mantiene los sensores IMU fijos sin desplazamiento sobre la piel mientras deja libres las yemas de los dedos para microfijaciones y soldadura.',
        materialTag: 'Textil Gris Técnico Antideslizante',
      },
      {
        title: 'Suite Analítica de Formas de Onda de Diagnóstico GBZ 336-2025',
        subtitle: 'Cuantificación en Tiempo Real de Frecuencia (24/min) y Duración',
        description:
          'Transmite la cinemática de la muñeca en tiempo real a una tableta PC industrial para registrar las horas de trabajo diarias, el conteo de movimientos válidos y los informes automatizados de riesgo de síndrome del túnel carpiano ocupacional.',
        materialTag: 'Analítica Conforme a GBZ 336-2025',
      },
    ],
    deployment: {
      title: 'Ensamblaje Electrónico de Precisión y Auditorías de Salud Ocupacional',
      locationBadge: 'Línea de Manufactura Electrónica 3C • Estación de Auditoría Ergonómica',
      narrative:
        'Hospitales de prevención de enfermedades profesionales, agencias externas de evaluación ergonómica y equipos de EHS en manufactura despliegan el LC Gloves-01 directamente en líneas de producción activas. Mientras los operarios ensamblan componentes de precisión, el guante captura cada flexión, extensión y desviación cubital que supere el umbral personalizable de 15°, generando informes de cumplimiento GBZ 336-2025 con validez técnica y legal.',
      environmentalMetrics: [
        { label: 'Estándar de Diagnóstico', value: 'Conforme a GBZ 336-2025' },
        { label: 'Precisión Angular Estática', value: '≤ ±0.1° (Rango ±180°)' },
        { label: 'Umbral Estándar de Movimiento', value: '15° / 24 Movimientos·min⁻¹' },
      ],
      industries: [
        'Hospitales de Prevención de Enfermedades Ocupacionales',
        'Agencias de Certificación y Ensayos Ergonómicos',
        'Auditorías de Ensamblaje Automotriz y Electrónica 3C',
        'Optimización de Estaciones de Trabajo Industriales',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Gloves-01' },
      { parameter: 'Color', value: 'Gris Claro Técnico con Módulos de Sensores Blanco Mate y Ribetes Negros' },
      { parameter: 'Cumplimiento Normativo', value: 'Criterios de Diagnóstico GBZ 336-2025 para el Síndrome del Túnel Carpiano Ocupacional' },
      { parameter: 'Aplicaciones', value: 'Hospitales de salud ocupacional, agencias de inspección independientes, auditorías de puestos de manufactura' },
      { parameter: 'Umbral de Reconocimiento', value: '15° (personalizable)' },
      { parameter: 'Rango Angular', value: '±180°' },
      { parameter: 'Precisión Estática', value: '≤ ±0.1°' },
      { parameter: 'Conteo de Frecuencia', value: 'Contabiliza automáticamente movimientos válidos (estándar: 24 movimientos/min)' },
      { parameter: 'Seguimiento de Duración', value: 'Acumulación diaria de horas efectivas de trabajo' },
      { parameter: 'Dimensiones de Medición', value: 'Ángulos de flexión/extensión y desviación radial/cubital de muñeca' },
      { parameter: 'Tallas', value: 'M, L, XL (personalizable)' },
      { parameter: 'Peso Neto', value: '200g' },
      { parameter: 'Dimensiones del Empaque', value: '23 × 17 × 8cm' },
      { parameter: 'Accesorios Opcionales', value: 'Tableta PC Industrial (con suite analítica preinstalada) / Cámara de Acción' },
      { parameter: 'Garantía', value: 'Garantía Industrial Oficial de 1 Año' },
    ],
    quickCompare: {
      mechanism: 'Detección Diferencial Doble IMU + MCU Edge-AI',
      capacityOrTemp: 'Precisión Estática ≤ ±0.1° (Rango ±180°)',
      powerOrCycle: 'Telemetría Inalámbrica en Tiempo Real (24/min)',
      netWeight: '200g',
      primaryApplication: 'Auditorías GBZ 336-2025, Hospitales, Control Ergonómico',
    },
  },
  'frost-pcm-a': {
    name: 'Chaleco de Enfriamiento PCM (Edición TPU Transparente)',
    shortTitle: 'Armadura de Cambio de Fase C17 de Base Biológica',
    category: 'Serie de Gestión Térmica Personal',
    subCategory: 'Confort Constante Pasivo con C17 de Base Biológica',
    headline: 'Armadura de Cambio de Fase Biológica. Confort Constante de 22.08°C en el Torso.',
    overview:
      'Fabricado con Material de Cambio de Fase (PCM) de alta densidad energética que absorbe el calor corporal a una temperatura constante de confort (~23°C), el LC Frost-PCM/A proporciona un enfriamiento suave y duradero en el torso. Un solo ciclo de almacenamiento en frío brinda de 1 a 2 horas de alivio en entornos de calor extremo de 35°C. Reutilizable miles de veces: un microclima personal intrínsecamente seguro y libre de cables.',
    metrics: [
      { value: '22.08°C', label: 'Temperatura Constante de Confort por Cambio de Fase' },
      { value: '225 J/g', label: 'Alto Calor Latente de Fusión' },
      { value: '0.55kg', label: 'Chasis Ultraligero de TPU Transparente' },
      { value: '1–2 Horas', label: 'Enfriamiento Continuo por Ciclo de Carga' },
    ],
    features: [
      {
        title: 'Enfriamiento Suave de Confort Humano',
        description:
          'Opera a 22.08°C, previniendo por completo la vasoconstricción cutánea o los riesgos de congelación causados por las bolsas de hielo tradicionales a 0°C.',
      },
      {
        title: '100% Pasivo e Intrínsecamente Seguro',
        description:
          'No requiere baterías, ventiladores ni cables. Cero riesgos eléctricos en salas limpias, zonas con gases peligrosos y áreas húmedas.',
      },
      {
        title: 'Formulación C17 Sin Degradación',
        description:
          'El PCM puro de n-alcano C17 de base biológica soporta miles de ciclos de congelación y descongelación sin pérdida de rendimiento.',
      },
      {
        title: 'De Origen Vegetal y Biodegradable',
        description:
          'Formulación 100% de biomasa, no derivada del petróleo, segura para el medio ambiente y no tóxica.',
      },
    ],
    hotspots: [
      {
        title: 'Matriz Reticular de Enfriamiento Rápido',
        description:
          'Las celdas independientes de PCM encapsulado se adaptan al pecho y la espalda para maximizar el área de intercambio térmico.',
        zone: 'Matriz Celular C17 Anterior y Dorsal',
      },
      {
        title: 'Hebillas Ajustables Universales',
        description:
          'Las hebillas laterales dobles de liberación rápida con correas negras se adaptan a todas las complexiones y uniformes.',
        zone: 'Tensores Laterales de Sujeción',
      },
      {
        title: 'Cubierta de TPU de Grado Médico',
        description:
          'La película transparente impermeable y resistente al aceite permite una desinfección instantánea y limpieza rápida con paño.',
        zone: 'Encapsulado de TPU Soldado por Alta Frecuencia',
      },
      {
        title: 'Corte de Bajo Perfil para Uso Interior',
        description:
          'El perfil ultradelgado de 0.55 kg se ajusta perfectamente bajo trajes Hazmat, trajes de sala limpia o chalecos de alta visibilidad.',
        zone: 'Corte Ergonómico Interior de 0.55kg',
      },
    ],
    bentoCards: [
      {
        title: 'Matriz de Cambio de Fase de n-Alcano C17 de Base Biológica',
        subtitle: 'Calor Latente de Fusión de 225 J/g a 22.08°C Constantes',
        description:
          'Los cristales de cambio de fase C17 derivados de plantas transicionan entre sólido y líquido en una meseta exacta de 22.08°C, absorbiendo 225 J/g de calor metabólico sin provocar choque térmico ni humedad por condensación.',
        materialTag: 'PCM C17 100% de Base Biológica • 225 J/g',
      },
      {
        title: 'Costuras de TPU de Grado Médico Soldadas por Radiofrecuencia',
        subtitle: 'Impermeable, Resistente al Aceite y Desinfección Instantánea',
        description:
          'Los canales reticulares de Poliuretano Termoplástico (TPU) soldados por alta frecuencia resisten perforaciones, salpicaduras químicas y contaminación biológica para despliegues estériles médicos y en salas limpias.',
        materialTag: 'TPU Transparente de Alta Resistencia',
      },
      {
        title: 'Sistema Universal de Correas con Doble Hebilla Lateral',
        subtitle: 'Ergonomía Talla Única para Uso Bajo Trajes Protectores',
        description:
          'Las hebillas de acetal de bajo perfil y las correas de alta resistencia aseguran el chaleco de 0.55 kg debajo de trajes herméticos para materiales peligrosos o salas limpias sin añadir volumen.',
        materialTag: 'Hebillas Tácticas Dobles de Liberación Lateral',
      },
    ],
    deployment: {
      title: 'Salas Limpias Selladas, EPI Médico y Operaciones de Saneamiento en Alto Calor',
      locationBadge: 'Sala Limpia de Semiconductores y Despliegue de EPI de Bioseguridad',
      narrative:
        'Los operarios que visten trajes impermeables para materiales peligrosos, monos de EPI médico o trajes integrales de sala limpia no pueden depender del enfriamiento evaporativo del sudor ni de ventiladores. Con solo 0.55 kg, el LC Frost-PCM/A transparente como el cristal se desliza limpiamente bajo las prendas exteriores selladas, manteniendo un microclima constante de 22.08°C durante 1 a 2 horas por ciclo y recargándose en 60 minutos a -18°C.',
      environmentalMetrics: [
        { label: 'Meseta de Cambio de Fase', value: '22.08°C Constantes' },
        { label: 'Capacidad de Calor Latente', value: '225 J/g' },
        { label: 'Recarga Rápida en Congelador', value: '1 Hora a -18°C' },
      ],
      industries: [
        'Entornos de Temperatura Extremadamente Alta',
        'Salas Limpias Farmacéuticas y de Semiconductores',
        'Equipos de Bioseguridad y EPI Médico',
        'Saneamiento Municipal y Materiales Peligrosos (Hazmat)',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-PCM/A' },
      { parameter: 'Color', value: 'Transparente Cristal (opciones de tinte PCM personalizables)' },
      { parameter: 'Usuarios Objetivo', value: 'Trabajadores en entornos de calor extremo, salas limpias, EPI médico, saneamiento' },
      { parameter: 'Calor de Fusión', value: '225 J/g' },
      { parameter: 'Temperatura de Cambio de Fase', value: '22.08°C' },
      { parameter: 'Duración de Enfriamiento', value: '1–2 horas (referencia según intensidad laboral y temperatura ambiente)' },
      { parameter: 'Tiempo de Recarga en Frío', value: 'Congelado a -18°C durante 1 hora, O refrigerado a 0–4°C durante 1–2 horas' },
      { parameter: 'Material de la Cubierta', value: 'Poliuretano Termoplástico (TPU) de alta resistencia' },
      { parameter: 'Talla', value: 'Talla Única Ajustable' },
      { parameter: 'Peso Neto', value: '0.55kg' },
      { parameter: 'Dimensiones del Empaque', value: '40 × 30 × 10cm' },
      { parameter: 'Accesorios Opcionales', value: 'Colores de tinte PCM personalizados' },
      { parameter: 'Garantía', value: 'Garantía Industrial Oficial de 1 Año' },
    ],
    quickCompare: {
      mechanism: 'PCM C17 Biológico Pasivo en TPU Transparente',
      capacityOrTemp: '22.08°C Constantes (225 J/g)',
      powerOrCycle: '1–2h Enfriamiento / 1h Recarga (-18°C)',
      netWeight: '0.55kg',
      primaryApplication: 'Salas Limpias, EPI Médico, Uso Bajo Traje Hazmat',
    },
  },
  'frost-pcm-g': {
    name: 'Chaleco de Enfriamiento PCM Ignífugo',
    shortTitle: 'Armadura PCM Antiestática e Ignífuga',
    category: 'Serie de Gestión Térmica Personal',
    subCategory: 'Escudo Térmico Pasivo para Zonas Peligrosas',
    headline: 'Armadura PCM Antiestática e Ignífuga. Enfriamiento Pasivo para Frentes Peligrosos.',
    overview:
      'Diseñado con Material de Cambio de Fase de alta densidad energética que absorbe el calor a una temperatura constante de ~23°C y encapsulado dentro de una cubierta exterior antiestática e ignífuga. Concebido para operaciones petroquímicas, fundiciones, soldadura y servicios públicos donde convergen riesgos de chispas, polvo explosivo y calor extremo.',
    metrics: [
      { value: '22.08°C', label: 'Zona de Confort de Cambio de Fase No Irritante' },
      { value: '225 J/g', label: 'Capacidad de Almacenamiento de Calor Latente' },
      { value: '360°', label: 'Bandas de Seguridad Retrorreflectantes de Alta Visibilidad' },
      { value: '0V', label: 'Enfriamiento Pasivo Intrínsecamente Seguro Cero Chispas' },
    ],
    features: [
      {
        title: 'Protección Ignífuga y Antiestática',
        description:
          'El tejido de sarga industrial de alta resistencia repele escoria, chispas y acumulación de carga estática.',
      },
      {
        title: 'Regulación Térmica Constante a 22.08°C',
        description:
          'Mantiene un enfriamiento continuo del torso sin choque térmico durante trabajos manuales pesados en ambientes de más de 35°C.',
      },
      {
        title: 'Núcleo de Biomasa C17 de Alta Estabilidad',
        description:
          'Miles de ciclos térmicos sin degradación; no tóxico y ecológico.',
      },
      {
        title: 'Visibilidad Nocturna y en Baja Iluminación',
        description:
          'Las dobles bandas reflectantes plateadas de alta visibilidad brindan seguridad en 360° en obras viales y plantas industriales oscuras.',
      },
    ],
    hotspots: [
      {
        title: 'Tejido Exterior Ignífugo y Antiestático',
        description:
          'El tejido ripstop robusto resiste desgarros, abrasiones y salpicaduras de metal fundido.',
        zone: 'Cubierta de Sarga Industrial Ignífuga',
      },
      {
        title: 'Faja Elástica con Cierre de Contacto',
        description:
          'La faja ancha industrial de velcro se ajusta con firmeza a todo tipo de complexiones de torso.',
        zone: 'Cierre de Faja de Alta Resistencia',
      },
      {
        title: 'Bolsillos Térmicos Modulares para PCM',
        description:
          'Los compartimentos internos dedicados mantienen los paquetes de PCM sellados firmemente adheridos al torso.',
        zone: 'Compartimentos Internos para Bloques Térmicos C17',
      },
      {
        title: 'Bandas Reflectantes Dobles de Advertencia de Seguridad',
        description:
          'Las franjas retrorreflectantes de grado 3M en el pecho y la cintura aseguran la visibilidad en campo.',
        zone: 'Franjas de Advertencia Retrorreflectantes de 360°',
      },
    ],
    bentoCards: [
      {
        title: 'Cubierta Exterior Ripstop Antiestática e Ignífuga',
        subtitle: 'Protección Cero Chispas para Zonas Peligrosas EX',
        description:
          'El tejido industrial antiestático e ignífugo especialmente tratado disipa las cargas electrostáticas y resiste las salpicaduras de soldadura, permitiendo un enfriamiento seguro del torso dentro de refinerías petroquímicas y plantas de gas.',
        materialTag: 'Sarga Industrial Ignífuga y Antiestática',
      },
      {
        title: 'Bandas Dobles de Advertencia de Seguridad Retrorreflectantes de 360°',
        subtitle: 'Visibilidad de Alto Contraste en Turnos Nocturnos y Túneles',
        description:
          'Las anchas bandas retrorreflectantes plateadas rodean el pecho y la cintura en 360°, garantizando el reconocimiento inmediato del operario en refinerías con poca luz, túneles y obras viales nocturnas.',
        materialTag: 'Ribete Retrorreflectante de 360°',
      },
      {
        title: 'Compartimentos Internos Modulares de PCM y Cintura Elástica',
        subtitle: 'Reemplazo Rápido de Paquetes en Caliente Entre Turnos',
        description:
          'Los compartimentos térmicos internos permiten a las cuadrillas intercambiar paquetes de PCM C17 recién recargados a 22.08°C en segundos, mientras que la ancha banda abdominal de velcro fija el chaleco estrechamente al torso.',
        materialTag: 'Bolsillos PCM Modulares • 0.96kg Total',
      },
    ],
    deployment: {
      title: 'Refinerías Petroquímicas, Naves de Soldadura y Servicios Públicos Nocturnos',
      locationBadge: 'Unidad de Craqueo Petroquímico Clasificación EX • Zona de Alto Calor',
      narrative:
        'En zonas petroquímicas a prueba de explosiones (EX) y talleres de soldadura activos, las baterías electrónicas y los motores con escobillas representan riesgos de ignición inaceptables. El LC Frost-PCM/G combina enfriamiento pasivo de cambio de fase a 22.08°C (0V) con una cubierta exterior antiestática e ignífuga y bandas reflectantes de 360°, brindando alivio térmico sin concesiones donde la electrónica está prohibida.',
      environmentalMetrics: [
        { label: 'Riesgo de Ignición y Chispas', value: '0V Intrínsecamente Seguro' },
        { label: 'Confort de Cambio de Fase', value: '22.08°C (225 J/g)' },
        { label: 'Peso Total del Chaleco', value: '0.96kg' },
      ],
      industries: [
        'Petroquímica y Refinación de Petróleo',
        'Operaciones de Metalurgia y Soldadura',
        'Mantenimiento de Redes Eléctricas y Subestaciones',
        'Ingeniería de Turno Nocturno a Alta Temperatura',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-PCM/G' },
      { parameter: 'Color', value: 'Gris Industrial con Ribete Reflectante de Alta Visibilidad (personalizable)' },
      { parameter: 'Usuarios Objetivo', value: 'Trabajadores de petroquímica, metalurgia, soldadura, red eléctrica y turnos nocturnos de alta temperatura' },
      { parameter: 'Calor de Fusión', value: '225 J/g' },
      { parameter: 'Temperatura de Cambio de Fase', value: '22.08°C' },
      { parameter: 'Duración de Enfriamiento', value: '1–2 horas (referencia según intensidad laboral y temperatura ambiente)' },
      { parameter: 'Tiempo de Recarga en Frío', value: 'Congelado a -18°C durante 1 hora, O refrigerado a 0–4°C durante 1–2 horas' },
      { parameter: 'Material del Tejido', value: 'Tejido antiestático e ignífugo' },
      { parameter: 'Tallas', value: 'Talla Estándar / Talla Grande' },
      { parameter: 'Peso Neto', value: '0.96kg' },
      { parameter: 'Dimensiones del Empaque', value: '40 × 30 × 10cm' },
      { parameter: 'Garantía', value: 'Garantía Industrial Oficial de 1 Año' },
    ],
    quickCompare: {
      mechanism: 'PCM C17 Biológico Pasivo en Cubierta Ignífuga Antiestática',
      capacityOrTemp: '22.08°C Constantes (225 J/g)',
      powerOrCycle: '1–2h Enfriamiento / 0V Intrínsecamente Seguro',
      netWeight: '0.96kg',
      primaryApplication: 'Petroquímica, Soldadura, Metalurgia, Turno Nocturno',
    },
  },
  'frost-tec-w': {
    name: 'Chaleco de Enfriamiento por Agua con Semiconductores',
    shortTitle: 'Enfriador Activo de Líquido de 80W + Doble Flujo de Aire',
    category: 'Serie de Gestión Térmica Personal',
    subCategory: 'Líquido Activo de 80W + Doble Flujo de Aire',
    headline: 'Enfriador Termoeléctrico Activo de 80W. Circuito Cerrado de Líquido + Doble Flujo de Aire.',
    overview:
      'Un dispositivo portátil de enfriamiento activo impulsado por chips de refrigeración termoeléctrica de estado sólido (TEC) y un sistema de circulación de agua en circuito cerrado. Proporciona un enfriamiento constante y ajustable en múltiples niveles para el torso en los 2 minutos posteriores al encendido. Integra un silencioso ventilador de turbina de escape trasero y dos ventiladores frontales de suministro de aire en el pecho para mantener el rostro y el torso secos durante todo el día en extinción de incendios, construcción, mantenimiento eléctrico y saneamiento.',
    metrics: [
      { value: '80W', label: 'Capacidad de Enfriamiento Termoeléctrico Activo' },
      { value: '2 min', label: 'Tiempo de Estabilización Térmica Rápida' },
      { value: '24V', label: 'Arquitectura de Enfriador de Alta Eficiencia' },
      { value: '2–4 Horas', label: 'Autonomía de Batería Continua en Turno' },
    ],
    features: [
      {
        title: 'Regulación Activa de Temperatura de Precisión',
        description:
          'El enfriador termoeléctrico extrae activamente el calor del líquido circulante, superando las limitaciones del derretimiento pasivo.',
      },
      {
        title: 'Evaporación por Aire Forzado de Doble Zona',
        description:
          'La turbina trasera expulsa el calor mientras los dos ventiladores frontales dirigen el aire hacia el cuello y el rostro para acelerar la evaporación del sudor.',
      },
      {
        title: 'Autonomía Extendida de Batería en Campo',
        description:
          'La fuente de alimentación de litio de 24V ofrece de 1 a 2 horas con una sola batería y hasta 4 horas con baterías dobles.',
      },
      {
        title: 'Canales de Líquido Sellados a Prueba de Fugas',
        description:
          'Las tuberías de TPU industrial resisten altas presiones, torsiones y condiciones exigentes en obra sin presentar fugas.',
      },
    ],
    hotspots: [
      {
        title: 'Cubierta con Cuello en V Ignífuga y Antiestática',
        description:
          'Tejido gris industrial suave y protector, resistente al calor y a los riesgos electrostáticos.',
        zone: 'Chasis Anterior Ignífugo',
      },
      {
        title: 'Correas de Compresión Lateral',
        description:
          'Los tensores ergonómicos ajustan los canales de agua de enfriamiento firmemente contra el torso.',
        zone: 'Tensores Bilaterales de Contacto Térmico',
      },
      {
        title: 'Módulo Enfriador TEC Trasero de 80W',
        description:
          'Carcasa plateada estilizada con ventilador de turbina negro que estabiliza la temperatura del agua en 2 minutos.',
        zone: 'Núcleo Termoeléctrico Dorsal de 24V / 80W',
      },
      {
        title: 'Bolsillos Frontales Dobles con Suministro de Aire',
        description:
          'Los bolsillos utilitarios frontales alojan las baterías mientras impulsan flujo de aire fresco hacia la barbilla y el pecho.',
        zone: 'Módulos Anteriores de Flujo de Aire Ascendente',
      },
    ],
    bentoCards: [
      {
        title: 'Enfriador TEC Dorsal de Estado Sólido de 80W y Turbina de Escape',
        subtitle: 'Arquitectura de 24V / 100W • Circuito Refrigerado Estable en 2 Minutos',
        description:
          'Montado ergonómicamente en la espalda, el módulo termoeléctrico anodizado en plata de 80W enfría el agua circulante interna en 2 minutos, mientras una silenciosa turbina radial expulsa el calor disipado lejos del operario.',
        materialTag: 'Enfriador TEC de 80W • Estabilización en 2 Min',
      },
      {
        title: 'Ventiladores Dobles de Suministro de Aire Forzado en el Pecho',
        subtitle: 'Evaporación Ascendente del Sudor en Rostro y Cuello',
        description:
          'Los sopladores integrados en los bolsillos frontales canalizan aire fresco hacia arriba a través del pecho, el cuello y el rostro, combinando el enfriamiento líquido conductivo interno con el secado convectivo externo.',
        materialTag: 'Ventiladores Dobles Anteriores de Corriente Ascendente',
      },
      {
        title: 'Forro de Agua en Circuito Cerrado de TPU Médico/Industrial',
        subtitle: 'Red Microfluídica de Alta Presión Resistente a Acodamientos',
        description:
          'Los microcanales de TPU en serpentina distribuyen el agua enfriada de manera uniforme por el torso y pueden combinarse con paquetes de enfriamiento PCM suplementarios para picos térmicos extremos.',
        materialTag: 'Forro Fluídico de TPU en Circuito Cerrado',
      },
    ],
    deployment: {
      title: 'Mantenimiento de Redes Eléctricas de Alta Tensión, Extinción de Incendios y Construcción Pesada',
      locationBadge: 'Revisión de Transformador en Subestación de 500kV • Pico de Carga Estival',
      narrative:
        'Cuando las cuadrillas de la red eléctrica y los bomberos operan bajo un calor radiante superior a 40°C, las bolsas de hielo pasivas pueden derretirse antes de que finalice una tarea compleja de mantenimiento. El LC Frost-TEC/W combina 80W de enfriamiento líquido termoeléctrico activo con dos ventiladores en el pecho que impulsan aire fresco hacia el cuello y el rostro, manteniendo la máxima alerta cognitiva durante 2 a 4 horas.',
      environmentalMetrics: [
        { label: 'Potencia de Enfriamiento Activo', value: '80W (24V / 100W Nominales)' },
        { label: 'Estabilización del Circuito', value: '2 Minutos' },
        { label: 'Autonomía Continua', value: '2–4 Horas (Doble Batería)' },
      ],
      industries: [
        'Mantenimiento de Redes Eléctricas y Subestaciones',
        'Extinción de Incendios y Rescate de Emergencia',
        'Seguridad Pública y Control de Tráfico',
        'Construcción Pesada y Saneamiento Municipal',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-TEC/W' },
      { parameter: 'Color', value: 'Gris Técnico (personalizable)' },
      { parameter: 'Usuarios Objetivo', value: 'Bomberos, seguridad pública, red eléctrica, construcción, saneamiento en calor extremo' },
      { parameter: 'Capacidad de Enfriamiento', value: '80W' },
      { parameter: 'Voltaje Nominal', value: '24V' },
      { parameter: 'Potencia Nominal', value: '100W' },
      { parameter: 'Tiempo de Respuesta de Enfriamiento', value: 'Estable en 2 min' },
      { parameter: 'Autonomía de Batería', value: '1–2 horas con batería individual (2–4 horas de autonomía continua del sistema)' },
      { parameter: 'Tejido Exterior', value: 'Tejido antiestático e ignífugo' },
      { parameter: 'Tejido de Forro', value: 'Forro con canales de agua de TPU médico/industrial' },
      { parameter: 'Talla', value: 'Talla Única Ajustable' },
      { parameter: 'Peso Neto', value: '< 3kg' },
      { parameter: 'Dimensiones del Empaque', value: '40 × 30 × 10cm' },
      { parameter: 'Accesorios Opcionales', value: 'Paquetes suplementarios de enfriamiento PCM' },
      { parameter: 'Garantía', value: 'Garantía Industrial Oficial de 1 Año' },
    ],
    quickCompare: {
      mechanism: 'Circuito Líquido TEC Activo de 80W + Ventiladores Dobles en Pecho',
      capacityOrTemp: 'Enfriamiento Activo de 80W (Estable en 2 min)',
      powerOrCycle: '24V / 100W • Autonomía de 2–4h',
      netWeight: '< 3kg',
      primaryApplication: 'Bomberos, Red Eléctrica, Construcción Pesada',
    },
  },
  'frost-tec-d': {
    name: 'Chaleco Semiconductor de Enfriamiento Directo',
    shortTitle: 'Chaleco Peltier de Estado Sólido Instantáneo en 2 Segundos',
    category: 'Serie de Gestión Térmica Personal',
    subCategory: 'Peltier de Estado Sólido Instantáneo en 2 Segundos',
    headline: 'Enfriamiento Peltier Instantáneo en 2 Segundos. Cero Agua, Cero Refrigerante, 8 Horas de Autonomía.',
    overview:
      'Aprovechando el efecto Peltier de estado sólido mediante módulos TEC de contacto directo, el LC Frost-TEC/D no requiere hielo, refrigerante líquido ni compresor. Las placas de conducción térmica de contacto directo absorben el calor del torso inmediatamente al encenderse —estabilizándose en solo 2 segundos— mientras ventiladores ultrasilenciosos disipan el calor residual. Cuenta con un chasis de malla transpirable y franjas reflectantes de alta visibilidad para inspección industrial, EPI médico y operaciones al aire libre.',
    metrics: [
      { value: '2 Segundos', label: 'Estabilización Ultrarrápida de Enfriamiento de Estado Sólido' },
      { value: '0 Líquido', label: 'Conducción Directa Completamente Seca (Cero Riesgo de Fugas)' },
      { value: '2–8 Horas', label: 'Operación Extendida con Batería Modular' },
      { value: '> 20,000 Horas', label: 'Vida Útil del Semiconductor de Estado Sólido' },
    ],
    features: [
      {
        title: 'Conducción Instantánea de Estado Sólido en 2 Segundos',
        description:
          'Las placas de contacto directo Peltier enfrían inmediatamente tras la activación sin necesidad de precongelación ni recarga de agua.',
      },
      {
        title: 'Operación Ultrasilenciosa y Sin Vibraciones',
        description:
          'Los ventiladores axiales de bajo ruido eliminan el zumbido de compresores y las vibraciones de bombas para inspecciones silenciosas.',
      },
      {
        title: 'Hasta 8 Horas de Energía Modular',
        description:
          'El bajo consumo de 60W permite de 2 a 8 horas de autonomía (2 horas por cada paquete de batería ligero).',
      },
      {
        title: 'Cero Mantenimiento y 20,000 Horas de Vida Útil',
        description:
          'La arquitectura de estado sólido elimina mangueras, refrigerantes y bombas para una durabilidad a prueba de fugas.',
      },
    ],
    hotspots: [
      {
        title: 'Matriz TEC de Contacto Directo de 4 Módulos',
        description:
          'Cuatro placas de conducción Peltier posicionadas en la parte superior de la espalda entregan enfriamiento instantáneo directamente sobre la piel.',
        zone: 'Matriz Dorsal Cuádruple Peltier de Estado Sólido',
      },
      {
        title: 'Hebillas Pectorales Amarillas de Liberación Rápida',
        description:
          'Los cierres pectorales de alta visibilidad y el cordón elástico trasero aseguran un ajuste ceñido y sin restricciones.',
        zone: 'Arnés de Sujeción Anterior de Alta Visibilidad',
      },
      {
        title: 'Controlador en el Pecho y Ventiladores de Bajo Ruido',
        description:
          'El dial circular montado en el pecho proporciona una regulación térmica intuitiva de múltiples etapas.',
        zone: 'Dial Térmico Giratorio y Disipadores Axiales',
      },
      {
        title: 'Malla Desmontable y Lavable de Alta Visibilidad',
        description:
          'Malla antiestática transpirable con franjas reflectantes amarillo neón y plata; los componentes electrónicos se desmontan fácilmente para el lavado.',
        zone: 'Chasis Modular Lavable de Malla Antiestática',
      },
    ],
    bentoCards: [
      {
        title: 'Matriz de Conducción Peltier de Estado Sólido de Contacto Directo de 4 Módulos',
        subtitle: 'Capacidad de Enfriamiento de 45W • Descenso Térmico Instantáneo en 2 Segundos',
        description:
          'Cuatro placas de conducción térmica de aluminio anodizado acopladas directamente a chips semiconductores de estado sólido extraen el calor de la parte superior de la espalda en los 2 segundos posteriores al encendido: cero agua, cero bombas y más de 20,000 horas de vida útil del chip.',
        materialTag: 'Peltier de Estado Sólido de 4 Módulos • Vida Útil >20,000h',
      },
      {
        title: 'Hebillas Pectorales de Alta Visibilidad y Tensión Elástica Bungee',
        subtitle: 'Contacto Constante de las Placas de Conducción con la Piel en Movimiento',
        description:
          'Las hebillas amarillas de liberación rápida de alta visibilidad y el cordón elástico dinámico trasero mantienen una presión de contacto óptima entre los 4 módulos Peltier y la espalda superior del operario.',
        materialTag: 'Cierres de Liberación Rápida de Alta Visibilidad',
      },
      {
        title: 'Controlador Giratorio en el Pecho y Malla Modular Lavable',
        subtitle: 'Arquitectura de Bajo Consumo de 12V / 60W para 2 a 8 Horas de Autonomía',
        description:
          'El intuitivo dial giratorio montado en el pecho ajusta la intensidad del enfriamiento de estado sólido sobre la marcha, mientras que todo el arnés electrónico se desmonta para poder lavar el chaleco de malla antiestática e ignífuga.',
        materialTag: 'Malla Ignífuga Antiestática Desmontable y Lavable',
      },
    ],
    deployment: {
      title: 'Inspección de Vías Férreas, Seguridad Exterior y Patrullas Móviles de Campo',
      locationBadge: 'Inspección de Corredor Ferroviario de Alta Velocidad • Turno de Patrulla de 8 Horas',
      narrative:
        'Los ingenieros de inspección móvil, agentes de tráfico y personal de seguridad al aire libre necesitan enfriamiento inmediato sin cargar depósitos de agua ni esperar paquetes congelados. Con un peso de ~1.7 kg y estabilización en solo 2 segundos mediante un sistema de batería de 12V, el LC Frost-TEC/D ofrece hasta 8 horas de enfriamiento de estado sólido seco y ultrasilencioso durante largas patrullas de campo.',
      environmentalMetrics: [
        { label: 'Estabilización Térmica', value: '2 Segundos (Instantáneo)' },
        { label: 'Autonomía de Batería Modular', value: '2–8 Horas (12V / 60W)' },
        { label: 'Vida Útil del Semiconductor', value: '> 20,000 Horas' },
      ],
      industries: [
        'Inspección Industrial y de Vías Férreas',
        'EPI Médico y Clínicas Móviles',
        'Control de Tráfico Exterior y Personal de Tierra en Aviación',
        'Personal de Seguridad y Patrullaje',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-TEC/D' },
      { parameter: 'Color', value: 'Malla Gris Táctica con Ribete Reflectante Amarillo Neón de Alta Visibilidad y Correas Negras (Opción en Negro)' },
      { parameter: 'Usuarios Objetivo', value: 'Inspección industrial, EPI médico, tráfico exterior, personal de seguridad' },
      { parameter: 'Capacidad de Enfriamiento', value: '45W' },
      { parameter: 'Voltaje Nominal', value: '12V' },
      { parameter: 'Potencia Nominal', value: '60W' },
      { parameter: 'Tiempo de Respuesta de Enfriamiento', value: 'Enfriamiento instantáneo, estable en 2s' },
      { parameter: 'Autonomía de Batería', value: '2–8 horas (2 horas por cada paquete de batería individual)' },
      { parameter: 'Vida Útil del Chip', value: '> 20,000 horas' },
      { parameter: 'Tejido Exterior', value: 'Malla transpirable antiestática e ignífuga (modular, desmontable y lavable)' },
      { parameter: 'Tallas', value: 'Talla Estándar / Talla Grande' },
      { parameter: 'Peso Neto', value: '~1.7kg' },
      { parameter: 'Dimensiones del Empaque', value: '40 × 30 × 10cm' },
      { parameter: 'Garantía', value: 'Garantía Industrial Oficial de 1 Año' },
    ],
    quickCompare: {
      mechanism: 'Peltier de Estado Sólido de Contacto Directo de 4 Módulos (Seco)',
      capacityOrTemp: 'Conducción Directa de 45W (Instantáneo en 2s)',
      powerOrCycle: '12V / 60W • Autonomía Modular de 2–8h',
      netWeight: '~1.7kg',
      primaryApplication: 'Inspección Industrial, Tráfico, Seguridad, EPI Médico',
    },
  },
  'frost-acc-w': {
    name: 'Chaleco de Enfriamiento por Agua con Compresor',
    shortTitle: 'Enfriador Extremo con Microinversor de 300W',
    category: 'Serie de Gestión Térmica Personal',
    subCategory: 'Enfriador Extremo con Microinversor de 300W',
    headline: 'Refrigeración Activa con Microinversor de 300W para Riesgos de Calor Extremo.',
    overview:
      'El buque insignia de la línea LC Frost, el LC Frost-ACC/W integra un compresor de refrigeración con inversor en miniatura y una red de circulación de líquido enfriado en circuito cerrado. Con una capacidad de enfriamiento activo líder en la industria de 60 a 300W, un amplio rango de ajuste de temperatura y una salida de temperatura constante inquebrantable, es la armadura de enfriamiento protectora definitiva para metalurgia extrema, extinción de incendios y operaciones en espacios confinados.',
    metrics: [
      { value: '60–300W', label: 'Refrigeración Activa por Compresor de Alto Rendimiento' },
      { value: '< 4kg', label: 'Unidad Enfriadora Portátil Ergonómicamente Equilibrada' },
      { value: '3 min', label: 'Estabilización Rápida del Circuito Refrigerado de Alta Capacidad' },
      { value: '100%', label: 'Circuito de Líquido Sellado a Prueba de Fugas' },
    ],
    features: [
      {
        title: 'Refrigeración Activa Extrema de 300W',
        description:
          'El compresor con microinversor enfría rápidamente el agua circulante desde el arranque con regulación digital de temperatura en múltiples etapas.',
      },
      {
        title: 'Movilidad Integrada Inferior a 4 kg',
        description:
          'La arquitectura de enfriamiento compacta equilibra el peso en la parte inferior del torso para una movilidad sin restricciones en espacios reducidos.',
      },
      {
        title: 'Autonomía Intensiva de 2 a 4 Horas por Turno',
        description:
          'El sistema de batería de litio de alta capacidad de 24V mantiene la refrigeración de alto rendimiento durante turnos extenuantes.',
      },
      {
        title: 'Fluídica Sellada y Resistente a Impactos',
        description:
          'Los acoplamientos de líquido robustos y las cámaras de TPU presurizadas soportan impactos fuertes, vibraciones y lavados en planta.',
      },
    ],
    hotspots: [
      {
        title: 'Cubierta Exterior Ignífuga con Cuello en V',
        description:
          'Cubierta antiestática gris minimalista con cremallera central de alta resistencia que se ajusta cómodamente sobre las capas base.',
        zone: 'Cubierta Protectora con Cuello en V Ignífuga y Antiestática',
      },
      {
        title: 'Correas de Compresión Bilateral',
        description:
          'Las correas tensoras laterales maximizan el contacto térmico entre la cámara interna de TPU enfriada y el torso.',
        zone: 'Correas Bilaterales de Compresión de Torso',
      },
      {
        title: 'Enfriador por Compresor con Microinversor',
        description:
          'El núcleo del compresor en miniatura de 24V estabiliza la circulación de agua enfriada en 3 minutos.',
        zone: 'Núcleo de Refrigeración con Microinversor de 60–300W',
      },
      {
        title: 'Cámara Interna de Enfriamiento de TPU y Circuito Aislado',
        description:
          'La red de líquido en circuito cerrado combinada con un forro 3D transpirable evita la acumulación de condensación.',
        zone: 'Cámara de TPU Presurizada en Circuito Cerrado',
      },
    ],
    bentoCards: [
      {
        title: 'Núcleo de Compresor de Refrigeración con Inversor en Miniatura de 24V',
        subtitle: 'Potencia de Enfriamiento Activo de 60–300W • 110W de Potencia Nominal',
        description:
          'A diferencia de los enfriadores termoeléctricos estándar, el LC Frost-ACC/W utiliza un verdadero ciclo de compresión de vapor con microinversor capaz de entregar hasta 300W de potencia frigorífica, manteniendo la circulación de líquido frío incluso bajo radiación de fundición superior a 50°C.',
        materialTag: 'Compresor con Microinversor de 60–300W',
      },
      {
        title: 'Cámara Presurizada de Enfriamiento Líquido de TPU de Alta Durabilidad',
        subtitle: 'Fluídica 100% a Prueba de Fugas con Forro 3D Anticondensación',
        description:
          'La cámara de enfriamiento de TPU en serpentina de alta densidad maximiza el área de superficie de contacto con el torso, mientras que una barrera interior de malla 3D transpirable evita la humedad en la piel.',
        materialTag: 'Cámara de Líquido de TPU Presurizada',
      },
      {
        title: 'Cubierta Antiestática e Ignífuga y Cremallera Central de Alta Resistencia',
        subtitle: 'Ergonomía Equilibrada < 4kg para Espacios Confinados',
        description:
          'El tejido exterior gris industrial antiestático e ignífugo con ribetes negros reforzados y correas de compresión bilateral resiste chispas, escoria y abrasión severa.',
        materialTag: 'Cubierta Ignífuga Antiestática • < 4kg Total',
      },
    ],
    deployment: {
      title: 'Fundiciones Metalúrgicas Extremas, Extinción de Incendios y Espacios Confinados',
      locationBadge: 'Alto Horno y Nave de Colada de Metal Fundido • Ambiente >45°C',
      narrative:
        'En las naves de colada de altos hornos, cabinas de maquinaria pesada sin climatización y misiones de rescate profundo en espacios confinados, las cargas de calor radiante superan a los chalecos de enfriamiento convencionales. Entregando de 60 a 300W de refrigeración activa por compresión de vapor en un equipo portátil de menos de 4 kg, el LC Frost-ACC/W estabiliza el agua enfriada en 3 minutos y protege la temperatura corporal central bajo las condiciones industriales más exigentes del planeta.',
      environmentalMetrics: [
        { label: 'Rango de Refrigeración Activa', value: '60–300W (24V / 110W)' },
        { label: 'Estabilización del Circuito Frío', value: '3 Minutos' },
        { label: 'Peso Completo del Sistema', value: '< 4.0kg' },
      ],
      industries: [
        'Fundiciones Metalúrgicas y de Fundición',
        'Extinción de Incendios y Rescate Hazmat',
        'Ingeniería de Túneles y Espacios Confinados',
        'Cabinas de Maquinaria Pesada Sin Climatización',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-ACC/W' },
      { parameter: 'Color', value: 'Gris Industrial con Ribetes Negros' },
      { parameter: 'Usuarios Objetivo', value: 'Entornos de temperatura extremadamente alta (metalurgia, fundición, bomberos, cabinas de maquinaria pesada)' },
      { parameter: 'Capacidad de Enfriamiento', value: '60–300W' },
      { parameter: 'Voltaje Nominal', value: '24V' },
      { parameter: 'Potencia Nominal', value: '110W' },
      { parameter: 'Tiempo de Respuesta de Enfriamiento', value: 'Estable en 3 min' },
      { parameter: 'Autonomía de Batería', value: '1–2 horas con batería individual (2–4 horas de operación continua del sistema)' },
      { parameter: 'Tejido Exterior', value: 'Tejido antiestático e ignífugo' },
      { parameter: 'Tejido de Forro', value: 'Cámara de enfriamiento líquido de TPU de alta durabilidad' },
      { parameter: 'Talla', value: 'Talla Única Ajustable' },
      { parameter: 'Peso Neto', value: '< 4kg' },
      { parameter: 'Dimensiones del Empaque', value: '40 × 30 × 10cm' },
      { parameter: 'Garantía', value: 'Garantía Industrial Oficial de 1 Año' },
    ],
    quickCompare: {
      mechanism: 'Compresor Activo con Microinversor + Líquido en Circuito Cerrado',
      capacityOrTemp: 'Refrigeración Activa de 60–300W (Estable en 3 min)',
      powerOrCycle: '24V / 110W • 2–4h Continuas',
      netWeight: '< 4kg',
      primaryApplication: 'Metalurgia Extrema, Fundición, Bomberos, Espacios Confinados',
    },
  },
};
