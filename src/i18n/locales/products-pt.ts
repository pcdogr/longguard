import type { ProductTranslationsMap } from '../types';

export const PRODUCTS_PT: ProductTranslationsMap = {
  'power-ua': {
    name: 'Exoesqueleto Passivo de Membros Superiores',
    shortTitle: 'Armadura Biônica para Trabalhos Acima da Cabeça',
    category: 'Série de Exoesqueletos Biônicos',
    subCategory: 'Armadura de Carbono Zero-Power para Trabalhos Elevados',
    headline: 'Armadura Biônica Superior. Alívio Mecânico Puro.',
    overview:
      'Projetado com uma estrutura biônica puramente mecânica para assistência direcional precisa, o LC Power-U/A é leve, altamente confiável e adaptável a ambientes industriais complexos. Com ajustes multinível para se adequar a diferentes biotipos, foi desenvolvido especificamente para montagem automotiva, manutenção elétrica, construção civil, reparo aeronáutico e colheita agrícola — reduzindo drasticamente a carga muscular nos ombros e braços enquanto eleva a eficiência operacional e o conforto durante todo o turno.',
    metrics: [
      { value: '8kg', label: 'Capacidade Máxima de Assistência Elevada' },
      { value: '< 2kg', label: 'Coluna Ultraleve em Fibra de Carbono Aeroespacial' },
      { value: '100%', label: 'Operação Passiva Sem Energia (Zero Risco de Bateria)' },
      { value: '4 Ângulos', label: 'Articulação Multi-Estágio (50°, 70°, 90°, 110°/115°)' },
    ],
    features: [
      {
        title: 'Estrutura Ultraleve em Carbono',
        description:
          'A fibra de carbono aeroespacial combinada com tecido Oxford resistente ao desgaste oferece rigidez incomparável com peso inferior a 2 kg, garantindo mobilidade irrestrita dos braços.',
      },
      {
        title: 'Segurança Intrínseca Sem Energia Elétrica',
        description:
          'O armazenamento de energia elástica 100% mecânica elimina a manutenção de baterias, o tempo de parada para recarga e os riscos de faíscas em operações contínuas de múltiplos turnos.',
      },
      {
        title: 'Alívio Musculoesquelético de Alta Eficiência',
        description:
          'Reduz a tensão do músculo deltoide em até 8 kg, prolongando diretamente a resistência do trabalhador e prevenindo lesões crônicas nos ombros.',
      },
      {
        title: 'Durabilidade Industrial Minimalista',
        description:
          'As articulações em alumínio anodizado de alta resistência suportam impactos severos, poeira e desgaste industrial contínuo.',
      },
    ],
    hotspots: [
      {
        title: 'Articulação de Ombro de 4 Estágios',
        description:
          'A assistência mecânica semiautomática é acionada instantaneamente ao elevar os braços, com travas em 50°, 70°, 90° e 110°/115°.',
        zone: 'Unidade de Articulação Glenoumeral',
      },
      {
        title: 'Arnês Peitoral e Dorsal de Engate Rápido',
        description:
          'As fivelas ergonômicas de pressão permitem vestir e retirar o equipamento em menos de 15 segundos.',
        zone: 'Arnês Torácico de Travamento Cruzado',
      },
      {
        title: 'Barra Dorsal Telescópica de Carbono',
        description:
          'A coluna dorsal em fibra de carbono de alta resistência à tração ajusta-se perfeitamente a diferentes comprimentos de tronco.',
        zone: 'Coluna Dorsal de Carbono',
      },
      {
        title: 'Braçadeiras de Apoio de Liberação Rápida',
        description:
          'Os apoios ergonômicos de braço com fivela amarela e aba azul de liberação rápida proporcionam saída imediata.',
        zone: 'Berço de Suporte Umeral',
      },
      {
        title: 'Cinto Lombar Anatômico 3D',
        description:
          'O cinto em malha respirável distribui a carga do arnês uniformemente pela cintura pélvica.',
        zone: 'Cinta Pélvica de Transferência de Carga',
      },
    ],
    bentoCards: [
      {
        title: 'Articulação Mecânica Semiautomática do Ombro de 4 Ângulos',
        subtitle: 'Arquitetura de Catraca de Precisão em Alumínio Aeronáutico',
        description:
          'A carcaça em liga de alumínio aeronáutico usinada em CNC abriga uma catraca de travamento semiautomático de 3 marchas e 4 ângulos (50°, 70°, 90°, 110°/115°) que engata silenciosamente quando o operador eleva os braços e desengata suavemente na descida.',
        materialTag: 'Liga de Alumínio Aeronáutico • Trava de 4 Ângulos',
      },
      {
        title: 'Coluna Telescópica em Fibra de Carbono Aeroespacial',
        subtitle: 'Estrutura Dorsal de Alta Rigidez Abaixo de 2 kg',
        description:
          'A coluna de fibra de carbono aeroespacial com trama multidirecional resiste à flexão torcional enquanto transfere até 8 kg de peso de ferramentas suspensas para o cinto pélvico.',
        materialTag: 'Fibra de Carbono Aeroespacial T700',
      },
      {
        title: 'Braçadeiras de Engate Rápido e Malha 3D Respirável',
        subtitle: 'Tecido Oxford Resistente ao Desgaste e Forro Ventilado',
        description:
          'Projetado com tecido externo Oxford industrial resistente ao rasgo e forro interno em malha colmeia 3D para liberação rápida de emergência e ventilação térmica durante jornadas de 8 horas.',
        materialTag: 'Exterior Oxford + Malha Colmeia 3D',
      },
    ],
    deployment: {
      title: 'Montagem Inferior de Carrocerias Automotivas e Operações de Torque Elevado',
      locationBadge: 'Linha de Montagem Final Automotiva • Estação de Chassi Elevado',
      narrative:
        'Dentro das modernas fábricas de montagem automotiva, os técnicos executam milhares de ciclos de fixação acima da cabeça por turno sob chassis elevados. O LC Power-U/A trava o suporte mecânico entre 50° e 115°, neutralizando o peso das parafusadeiras pneumáticas de torque e eliminando a fadiga do deltoide sem exigir um único watt de energia elétrica.',
      environmentalMetrics: [
        { label: 'Redução de EMG do Deltoide', value: 'Alívio de até 8kg' },
        { label: 'Tempo de Colocação / Retirada', value: '< 15 Segundos' },
        { label: 'Parada para Recarga Elétrica', value: '0 Horas (100% Passivo)' },
      ],
      industries: [
        'Montagem Automotiva',
        'Manutenção de Redes Elétricas',
        'Construção Civil',
        'Manutenção Aeronáutica',
        'Colheita Agrícola',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Power-U/A (Código de Esp.: LC Power-U/P)' },
      { parameter: 'Cor', value: 'Preto Fosco Industrial' },
      { parameter: 'Público-Alvo', value: 'Trabalhadores em tarefas prolongadas com braços elevados e acima da cabeça' },
      { parameter: 'Aplicações', value: 'Montagem automotiva, manutenção elétrica, construção civil, reparo aeronáutico, colheita agrícola' },
      { parameter: 'Materiais Estruturais', value: 'Fibra de carbono + liga de alumínio aeronáutico' },
      { parameter: 'Capacidade de Assistência', value: 'Máx. 8kg' },
      { parameter: 'Modo de Travamento', value: 'Travamento mecânico semiautomático' },
      { parameter: 'Níveis de Assistência', value: '3 níveis (acoplamento em 4 ângulos)' },
      { parameter: 'Ângulos de Assistência / Destravamento', value: '50°, 70°, 90°, 110°/115°' },
      { parameter: 'Tecido Externo', value: 'Tecido Oxford resistente ao desgaste' },
      { parameter: 'Tecido do Forro', value: 'Tecido de malha 3D respirável' },
      { parameter: 'Tamanhos', value: 'Tamanho Padrão / Tamanho Grande' },
      { parameter: 'Peso Líquido', value: '< 2kg' },
      { parameter: 'Dimensões da Embalagem', value: '50 × 40 × 12cm' },
      { parameter: 'Acessórios Opcionais', value: 'Colar ergonômico de suporte cervical' },
      { parameter: 'Garantia', value: 'Garantia Industrial Oficial de 1 Ano' },
    ],
    quickCompare: {
      mechanism: 'Carbono Mecânico Passivo + Catraca de 4 Ângulos',
      capacityOrTemp: 'Assistência Elevada Máx. 8kg',
      powerOrCycle: '100% Passivo (0V)',
      netWeight: '< 2kg',
      primaryApplication: 'Montagem Automotiva, Rede Elétrica, Reparo Aeronáutico',
    },
  },
  'flex-w': {
    name: 'Exoesqueleto Lombar Flexível',
    shortTitle: 'Cinto Lombar Inteligente Não Motorizado',
    category: 'Série de Exoesqueletos Biônicos',
    subCategory: 'Assistência Lombar Dinâmica de 30kg',
    headline: 'O Cinto Inteligente Sem Baterias. Até 30kg de Impulso Lombar Dinâmico.',
    overview:
      'Este exoesqueleto lombar leve e sem alimentação elétrica foi projetado para tarefas frequentes de flexão e levantamento de cargas. Ele armazena e libera energia por meio da deformação elástica do material, atuando como um "cinto inteligente" biomecânico para fornecer impulso ascendente de assistência durante a inclinação. Reduz significativamente a tensão lombar, alivia a compressão dos discos vertebrais e mitiga os riscos de lesões ocupacionais na região lombar.',
    metrics: [
      { value: '0–30kg', label: 'Faixa de Assistência Lombar Ascendente Dinâmica' },
      { value: '≤ 1kg', label: 'Perfil Vestível Ultrafino' },
      { value: '160–190cm', label: 'Ampla Adaptação Ergonômica de Estatura' },
      { value: '0V', label: 'Armazenamento de Energia Cinética à Prova de Falhas Sem Energia' },
    ],
    features: [
      {
        title: 'Chassi Minimalista Abaixo de 1 kg',
        description:
          'A construção têxtil respirável molda-se naturalmente ao tronco, garantindo conforto livre de suor durante todo um turno de 8 horas.',
      },
      {
        title: 'Agilidade Sem Restrições',
        description:
          'Adapta-se aos contornos do corpo sem restrições metálicas rígidas no quadril, preservando total liberdade para caminhar, agachar, subir escadas e dirigir.',
      },
      {
        title: 'Alívio Dinâmico dos Músculos Eretores da Espinha',
        description:
          'Acumula tensão elástica progressivamente à medida que o usuário se inclina para a frente, liberando um impulso ascendente vigoroso ao se levantar.',
      },
      {
        title: 'Equilíbrio da Pressão Espinhal',
        description:
          'Distribui cargas pontuais agudas da região lombar entre a coluna torácica e as coxas, prevenindo hérnias de disco ocupacionais.',
      },
    ],
    hotspots: [
      {
        title: 'Costas Ajustáveis em Múltiplas Alturas',
        description:
          'O sistema telescópico de tensão nos ombros acomoda operadores com estatura de 160 cm a 190 cm.',
        zone: 'Ancoragem de Tensão Torácica',
      },
      {
        title: 'Roteamento de Articulação Lateral',
        description:
          'As passagens de tiras macias e flexíveis eliminam o pinçamento do quadril durante agachamentos profundos extremos.',
        zone: 'Guia Oblíqua Lateral',
      },
      {
        title: 'Almofada Lombar 3D Espessa',
        description:
          'A almofada ergonômica multicamadas amortece a coluna inferior e distribui as cargas dorsais.',
        zone: 'Almofada de Descompressão L1–L5',
      },
      {
        title: 'Núcleo Elástico à Prova de Falhas',
        description:
          'As fibras de látex de poliéster de alta resiliência garantem durabilidade vitalícia em locais de trabalho úmidos ou empoeirados.',
        zone: 'Banda de Deformação Cinética',
      },
      {
        title: 'Tiras Bilaterais de Tração nas Coxas',
        description:
          'Suporte lombar integrado conectado a cintas de coxa bilaterais para transferência suave de carga de 0 a 30 kg.',
        zone: 'Cintas de Ligação Femoral',
      },
    ],
    bentoCards: [
      {
        title: 'Suporte Dorso-Lombar Integrado e Almofada 3D',
        subtitle: 'Matriz de Descompressão dos Discos Vertebrais L1–L5',
        description:
          'Uma almofada lombar ergonômica multicamadas em colmeia 3D abriga o suporte dorso-lombar integrado, estabilizando a coluna inferior enquanto dissipa o calor e a umidade durante a triagem de alta frequência em armazéns.',
        materialTag: 'Malha Respirável 3D + Suporte Lombar',
      },
      {
        title: 'Núcleo em Fibra de Látex de Poliéster de Alta Resiliência',
        subtitle: 'Armazenamento Progressivo de Energia Cinética de 0 a 30 kg',
        description:
          'Fibras elásticas de látex de poliéster de engenharia armazenam energia potencial mecânica durante a flexão anterior do tronco e devolvem até 30 kg de impulso ascendente suave.',
        materialTag: 'Látex de Poliéster de Alta Resiliência',
      },
      {
        title: 'Sistema Bilateral de Tiras de Ligação para Coxas',
        subtitle: 'Agachamento Sem Pinçamento e Agilidade em Empilhadeiras',
        description:
          'As cintas de coxa macias em tecido Oxford resistente ao desgaste ancoram o caminho da carga cinética sem dobradiças metálicas rígidas no quadril, permitindo que os operadores passem diretamente do levantamento de cargas para a condução de empilhadeiras.',
        materialTag: 'Oxford Tático Resistente ao Desgaste',
      },
    ],
    deployment: {
      title: 'Centros Logísticos de Alta Frequência e Manuseio de Bagagens em Aeroportos',
      locationBadge: 'Centro Inteligente de Distribuição Logística • Zona de Paletização',
      narrative:
        'Em centros de triagem logística de alto fluxo e pátios de bagagens de aeroportos, os operadores realizam centenas de flexões profundas e levantamentos pesados a cada hora. Pesando ≤1 kg e sem barras rígidas no quadril, o LC Flex-W atua como um segundo conjunto de músculos eretores da espinha — entregando até 30 kg de assistência lombar ascendente enquanto permite caminhar, subir escadas e operar veículos naturalmente.',
      environmentalMetrics: [
        { label: 'Assistência Ascendente Dinâmica', value: '0–30kg Ajustável' },
        { label: 'Peso Total Vestível', value: '≤ 1.0kg' },
        { label: 'Faixa de Estatura do Operador', value: '160–190cm' },
      ],
      industries: [
        'Logística Industrial',
        'Manuseio de Bagagens em Aeroportos',
        'Cuidados Médicos e Geriátricos',
        'Operações de Flexão Frequente',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Flex-W' },
      { parameter: 'Cor', value: 'Preto Tático' },
      { parameter: 'Público-Alvo', value: 'Trabalhadores braçais, operadores de armazém, movimentadores logísticos, cuidadores' },
      { parameter: 'Aplicações', value: 'Logística industrial, bagagem aeroportuária, cuidados médicos e geriátricos, operações de flexão frequente' },
      { parameter: 'Tipo de Assistência', value: 'Mecânica passiva sem alimentação elétrica' },
      { parameter: 'Estatura Aplicável', value: '160–190cm' },
      { parameter: 'Faixa de Assistência', value: '0–30kg (ajustável dinamicamente)' },
      { parameter: 'Meio de Armazenamento de Energia', value: 'Fibra elástica de látex de poliéster de alta resiliência' },
      { parameter: 'Estrutura Principal', value: 'Suporte dorso-lombar integrado + sistema bilateral de tiras de ligação para coxas' },
      { parameter: 'Tecido Externo', value: 'Tecido Oxford resistente ao desgaste' },
      { parameter: 'Tecido do Forro', value: 'Tecido de malha 3D respirável' },
      { parameter: 'Tamanhos', value: 'Tamanho Padrão / Tamanho Grande' },
      { parameter: 'Peso Líquido', value: '≤ 1kg' },
      { parameter: 'Dimensões da Embalagem', value: '40 × 30 × 10cm' },
      { parameter: 'Garantia', value: 'Garantia Industrial Oficial de 1 Ano' },
    ],
    quickCompare: {
      mechanism: 'Látex de Poliéster Elástico Passivo + Ligação nas Coxas',
      capacityOrTemp: 'Assistência Lombar Dinâmica 0–30kg',
      powerOrCycle: '100% Passivo (0V)',
      netWeight: '≤ 1kg',
      primaryApplication: 'Logística, Bagagem Aeroportuária, Cuidados Médicos',
    },
  },
  'gloves-01': {
    name: 'Luva de Avaliação de Trabalho Repetitivo do Punho',
    shortTitle: 'Luva de Diagnóstico Biométrico com Edge-AI',
    category: 'Série de Sensoriamento Ergonômico Inteligente',
    subCategory: 'Biometria Edge-AI em Conformidade com GBZ 336-2025',
    headline: 'Luva Biométrica Edge-AI. Diagnóstico de Risco de Túnel do Carpo GBZ 336-2025.',
    overview:
      'Projetada para funções de manufatura com movimentos repetitivos e forçados do punho, a LC Gloves-01 cumpre rigorosamente os Critérios de Diagnóstico GBZ 336-2025 para Síndrome do Túnel do Carpo Ocupacional. Equipada com sensores IMU de postura dupla (dorso da mão + punho) e computação Edge-AI embarcada, monitora em tempo real os ângulos do punho, movimentos de trabalho válidos, frequência de operação, duração e intensidade de carga. Suporta envio de dados sem fio e análise em tablet para quantificação de riscos ergonômicos e otimização de postos de trabalho.',
    secondaryStudioCaption:
      'Suíte Analítica para Tablet Industrial — Telemetria de formas de onda em tempo real de canal duplo para flexão/extensão e desvio radial/ulnar com classificação automatizada de risco de túnel do carpo ocupacional segundo a norma GBZ 336-2025.',
    metrics: [
      { value: '≤ ±0.1°', label: 'Precisão de Medição Estática IMU' },
      { value: '±180°', label: 'Amplitude Completa de Movimento Multieixo' },
      { value: '200g', label: 'Formato Ergonômico Ultraleve' },
      { value: '24/min', label: 'Rastreamento Automatizado da Frequência de Movimentos Válidos' },
    ],
    features: [
      {
        title: 'Sensoriamento de Atitude de Ponto Duplo',
        description:
          'A arquitetura de sensoriamento diferencial cancela artefatos de movimento do braço inteiro, isolando a pura flexão, extensão e desvio do punho.',
      },
      {
        title: 'Processamento Edge-AI Embarcado',
        description:
          'O microcontrolador da luva calcula ângulos, contabiliza ciclos válidos e compila métricas localmente com latência zero.',
      },
      {
        title: 'Telemetria Sem Fio em Tablet',
        description:
          'A transmissão de dados em tempo real via Bluetooth/Wi-Fi para a suíte de PC/tablet gera relatórios exportáveis de diagnóstico de risco.',
      },
      {
        title: 'Anti-Interferência de Grau Industrial',
        description:
          'Blindada contra ruído eletromagnético e vibração de máquinas em fábricas automotivas e de eletrônicos.',
      },
    ],
    hotspots: [
      {
        title: 'Recortes Táteis de Meio Dedo',
        description:
          'As pontas dos dedos expostas preservam o tato fino para a montagem delicada de microparafusos e componentes eletrônicos.',
        zone: 'Recortes Falangeanos Distais',
      },
      {
        title: 'Suporte Dorsal do Sensor Sem Folga',
        description:
          'O tecido elástico de alta elasticidade trava firmemente o sensor IMU primário sobre os metacarpos.',
        zone: 'Nó IMU Metacarpal Primário',
      },
      {
        title: 'Arquitetura Leve de 200 g',
        description:
          'Minimiza a carga muscular durante auditorias ergonômicas contínuas de 8 horas.',
        zone: 'Chassi em Malha Técnica Respirável',
      },
      {
        title: 'Munhequeira Secundária Ajustável',
        description:
          'Ancora o sensor IMU de referência em diferentes circunferências de punho.',
        zone: 'Cinta de Referência Radiocarpal',
      },
      {
        title: 'Software de Diagnóstico e IMU de Referência',
        description:
          'O módulo IMU secundário no punho transmite formas de onda de canal duplo em tempo real para flexão/extensão, desvio radial/ulnar e classificação de risco GBZ 336-2025.',
        zone: 'Link de Telemetria Sem Fio Edge-AI',
      },
    ],
    bentoCards: [
      {
        title: 'Módulos Sensores IMU Diferenciais de Postura Dupla',
        subtitle: 'Precisão Estática ≤ ±0.1° e Microcontrolador Edge-AI',
        description:
          'Ao combinar um IMU metacarpal dorsal com um IMU de referência na munhequeira, o processador Edge-AI embarcado descarta o movimento global do braço e isola a verdadeira flexão/extensão e desvio radial/ulnar do punho acima do limiar de reconhecimento de 15°.',
        materialTag: 'IMU Diferencial Duplo • Precisão ≤ ±0.1°',
      },
      {
        title: 'Malha Técnica de Alta Elasticidade e Recortes de Meio Dedo',
        subtitle: 'Trava Antiderrapante do Sensor com Destreza Total nas Pontas dos Dedos',
        description:
          'O têxtil técnico cinza respirável de 200 g mantém os sensores IMU travados sem deslizamento sobre a pele, deixando as pontas dos dedos livres para microfixadores e soldagem.',
        materialTag: 'Têxtil Técnico Cinza Antiderrapante',
      },
      {
        title: 'Suíte Analítica de Formas de Onda de Diagnóstico GBZ 336-2025',
        subtitle: 'Quantificação em Tempo Real de Frequência (24/min) e Duração',
        description:
          'Transmite a cinemática do punho em tempo real para um tablet PC industrial para registrar as horas diárias de trabalho, contagens de movimentos válidos e relatórios automatizados de risco de síndrome do túnel do carpo ocupacional.',
        materialTag: 'Análise Compatível com GBZ 336-2025',
      },
    ],
    deployment: {
      title: 'Montagem de Eletrônicos de Precisão e Auditorias de Saúde Ocupacional',
      locationBadge: 'Linha de Manufatura de Eletrônicos 3C • Estação de Auditoria Ergonômica',
      narrative:
        'Hospitais de prevenção de doenças ocupacionais, agências terceirizadas de testes ergonômicos e equipes de SST industrial implantam a LC Gloves-01 diretamente em linhas de produção ativas. Enquanto os operadores montam componentes de precisão, a luva captura cada flexão, extensão e desvio ulnar acima do limiar personalizável de 15° — fornecendo relatórios de conformidade GBZ 336-2025 tecnicamente e legalmente defensáveis.',
      environmentalMetrics: [
        { label: 'Padrão de Diagnóstico', value: 'Compatível com GBZ 336-2025' },
        { label: 'Precisão Angular Estática', value: '≤ ±0.1° (Faixa ±180°)' },
        { label: 'Limiar Padrão de Movimento', value: '15° / 24 Movimentos·min⁻¹' },
      ],
      industries: [
        'Hospitais de Prevenção de Doenças Ocupacionais',
        'Agências de Ensaios e Certificação Ergonômica',
        'Auditorias em Montagem Automotiva e Eletrônicos 3C',
        'Otimização de Postos de Trabalho Industriais',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Gloves-01' },
      { parameter: 'Cor', value: 'Cinza Claro Técnico com Módulos Sensores Branco Fosco e Acabamento Preto' },
      { parameter: 'Conformidade', value: 'Critérios de Diagnóstico GBZ 336-2025 para Síndrome do Túnel do Carpo Ocupacional' },
      { parameter: 'Aplicações', value: 'Hospitais de saúde ocupacional, agências de testes terceirizadas, auditorias de postos de trabalho de manufatura' },
      { parameter: 'Limiar de Reconhecimento', value: '15° (personalizável)' },
      { parameter: 'Faixa de Ângulo', value: '±180°' },
      { parameter: 'Precisão Estática', value: '≤ ±0.1°' },
      { parameter: 'Contagem de Frequência', value: 'Contabiliza automaticamente movimentos válidos (padrão: 24 movimentos/min)' },
      { parameter: 'Rastreamento de Duração', value: 'Acumulação diária da jornada de trabalho efetiva' },
      { parameter: 'Dimensões de Medição', value: 'Ângulos de flexão/extensão e desvio radial/ulnar do punho' },
      { parameter: 'Tamanhos', value: 'M, L, XL (personalizável)' },
      { parameter: 'Peso Líquido', value: '200g' },
      { parameter: 'Dimensões da Embalagem', value: '23 × 17 × 8cm' },
      { parameter: 'Acessórios Opcionais', value: 'Tablet PC Industrial (com suíte analítica pré-instalada) / Câmera de Ação' },
      { parameter: 'Garantia', value: 'Garantia Industrial Oficial de 1 Ano' },
    ],
    quickCompare: {
      mechanism: 'Sensoriamento Diferencial IMU Duplo + MCU Edge-AI',
      capacityOrTemp: 'Precisão Estática ≤ ±0.1° (Faixa ±180°)',
      powerOrCycle: 'Telemetria Sem Fio em Tempo Real (24/min)',
      netWeight: '200g',
      primaryApplication: 'Auditorias GBZ 336-2025, Hospitais, Qualidade Industrial',
    },
  },
  'frost-pcm-a': {
    name: 'Colete de Resfriamento PCM (Edição TPU Transparente)',
    shortTitle: 'Armadura de Mudança de Fase C17 de Base Biológica',
    category: 'Série de Gestão Térmica Pessoal',
    subCategory: 'Conforto Constante Passivo com C17 de Base Biológica',
    headline: 'Armadura de Mudança de Fase Biológica. Conforto Constante de 22.08°C no Tronco.',
    overview:
      'Construído com Material de Mudança de Fase (PCM) de alta densidade energética que absorve o calor corporal a uma temperatura constante de conforto (~23°C), o LC Frost-PCM/A proporciona um resfriamento suave e duradouro para o tronco. Um único ciclo de armazenamento a frio oferece de 1 a 2 horas de alívio em ambientes de calor intenso de 35°C. Reutilizável milhares de vezes — um microclima pessoal intrinsecamente seguro e sem fios.',
    metrics: [
      { value: '22.08°C', label: 'Temperatura Constante de Conforto por Mudança de Fase' },
      { value: '225 J/g', label: 'Alto Calor Latente de Fusão' },
      { value: '0.55kg', label: 'Chassi Ultraleve em TPU Transparente' },
      { value: '1–2 Horas', label: 'Resfriamento Contínuo por Ciclo de Recarga' },
    ],
    features: [
      {
        title: 'Resfriamento Suave de Conforto Humano',
        description:
          'Opera a 22.08°C, prevenindo completamente a vasoconstrição cutânea ou os riscos de queimaduras pelo frio causados por bolsas de gelo tradicionais a 0°C.',
      },
      {
        title: '100% Passivo e Intrinsecamente Seguro',
        description:
          'Não requer baterias, ventoinhas ou cabos. Zero riscos elétricos em salas limpas, zonas de gases perigosos e áreas úmidas.',
      },
      {
        title: 'Formulação C17 Sem Degradação',
        description:
          'O puro PCM de n-alcano C17 de base biológica suporta milhares de ciclos de congelamento e descongelamento sem perda de desempenho.',
      },
      {
        title: 'De Origem Vegetal e Biodegradável',
        description:
          'Formulação 100% de biomassa, não derivada de petróleo, ambientalmente segura e atóxica.',
      },
    ],
    hotspots: [
      {
        title: 'Matriz em Grade de Resfriamento Rápido',
        description:
          'Células independentes de PCM encapsulado moldam-se ao peito e às costas para maximizar a área de troca térmica.',
        zone: 'Matriz Celular C17 Anterior e Dorsal',
      },
      {
        title: 'Fivelas Ajustáveis Universais',
        description:
          'Fivelas duplas de engate rápido lateral com fitas pretas adaptam-se a todos os tamanhos corporais e estilos de uniforme.',
        zone: 'Fixadores Laterais de Tensão',
      },
      {
        title: 'Revestimento em TPU de Grau Médico',
        description:
          'O filme transparente impermeável e resistente a óleo permite higienização instantânea e limpeza rápida com pano.',
        zone: 'Encapsulamento em TPU Soldado por Alta Frequência',
      },
      {
        title: 'Corte de Perfil Baixo para Uso Sob Trajes',
        description:
          'O perfil ultrafino de 0.55 kg ajusta-se perfeitamente sob trajes Hazmat, macacões de sala limpa ou coletes de alta visibilidade.',
        zone: 'Corte Ergonômico Interno de 0.55kg',
      },
    ],
    bentoCards: [
      {
        title: 'Matriz de Mudança de Fase de n-Alcano C17 de Base Biológica',
        subtitle: 'Calor Latente de Fusão de 225 J/g a 22.08°C Constantes',
        description:
          'Os cristais de mudança de fase C17 derivados de plantas alternam entre o estado sólido e líquido em um patamar exato de 22.08°C, absorvendo 225 J/g de calor metabólico sem causar choque térmico ou umidade por condensação.',
        materialTag: 'PCM C17 100% Biológico • 225 J/g',
      },
      {
        title: 'Costuras em TPU de Grau Médico Soldadas por Radiofrequência',
        subtitle: 'Impermeável, Resistente a Óleo e Higienização Instantânea',
        description:
          'Os canais em grade de Poliuretano Termoplástico (TPU) soldados por alta frequência resistem a perfurações, respingos químicos e contaminação biológica para uso estéril médico e em salas limpas.',
        materialTag: 'TPU Transparente de Alta Resistência',
      },
      {
        title: 'Sistema Universal de Fitas com Fivela Dupla Lateral',
        subtitle: 'Ergonomia Tamanho Único para Uso Sob Trajes Selados',
        description:
          'Fivelas de acetal de perfil baixo e fitas de alta resistência prendem o colete de 0.55 kg sob macacões herméticos Hazmat ou de sala limpa sem adicionar volume.',
        materialTag: 'Fivelas Táticas Duplas de Engate Lateral',
      },
    ],
    deployment: {
      title: 'Salas Limpas Seladas, EPI Médico e Operações de Saneamento sob Calor Intenso',
      locationBadge: 'Sala Limpa de Semicondutores e Operação com EPI de Biossegurança',
      narrative:
        'Operadores que vestem trajes impermeáveis para materiais perigosos (Hazmat), macacões de EPI médico ou trajes integrais de sala limpa não podem contar com o resfriamento evaporativo do suor ou ar soprado por ventoinhas. Com apenas 0.55 kg, o cristalino LC Frost-PCM/A desliza perfeitamente sob vestimentas externas seladas, mantendo um microclima constante de 22.08°C por 1 a 2 horas por ciclo e recarregando em 60 minutos a -18°C.',
      environmentalMetrics: [
        { label: 'Patamar de Mudança de Fase', value: '22.08°C Constantes' },
        { label: 'Capacidade de Calor Latente', value: '225 J/g' },
        { label: 'Recarga Rápida em Freezer', value: '1 Hora a -18°C' },
      ],
      industries: [
        'Ambientes de Temperatura Extremamente Alta',
        'Salas Limpas de Semicondutores e Farmacêuticas',
        'Equipes de EPI Médico e Biossegurança',
        'Saneamento Municipal e Materiais Perigosos (Hazmat)',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-PCM/A' },
      { parameter: 'Cor', value: 'Cristal Transparente (opções personalizáveis de corante PCM)' },
      { parameter: 'Público-Alvo', value: 'Trabalhadores em ambientes de calor extremo, salas limpas, EPI médico, saneamento' },
      { parameter: 'Calor de Fusão', value: '225 J/g' },
      { parameter: 'Temperatura de Mudança de Fase', value: '22.08°C' },
      { parameter: 'Duração do Resfriamento', value: '1–2 horas (referência baseada na intensidade do trabalho e temperatura ambiente)' },
      { parameter: 'Tempo de Recarga a Frio', value: 'Congelado a -18°C por 1 hora, OU refrigerado a 0–4°C por 1–2 horas' },
      { parameter: 'Material do Revestimento', value: 'Poliuretano Termoplástico (TPU) de alta resistência' },
      { parameter: 'Tamanho', value: 'Tamanho Único Ajustável' },
      { parameter: 'Peso Líquido', value: '0.55kg' },
      { parameter: 'Dimensões da Embalagem', value: '40 × 30 × 10cm' },
      { parameter: 'Acessórios Opcionais', value: 'Cores personalizadas de corante PCM' },
      { parameter: 'Garantia', value: 'Garantia Industrial Oficial de 1 Ano' },
    ],
    quickCompare: {
      mechanism: 'PCM C17 Biológico Passivo em TPU Transparente',
      capacityOrTemp: '22.08°C Constantes (225 J/g)',
      powerOrCycle: '1–2h Resfriamento / 1h Recarga (-18°C)',
      netWeight: '0.55kg',
      primaryApplication: 'Salas Limpas, EPI Médico, Uso Sob Traje Hazmat',
    },
  },
  'frost-pcm-g': {
    name: 'Colete de Resfriamento PCM Retardante de Chamas',
    shortTitle: 'Armadura PCM Antiestática e Retardante de Chamas',
    category: 'Série de Gestão Térmica Pessoal',
    subCategory: 'Escudo Térmico Passivo para Áreas Classificadas',
    headline: 'Armadura PCM Antiestática e Ignífuga. Resfriamento Passivo para Frentes de Risco.',
    overview:
      'Projetado com Material de Mudança de Fase de alta densidade energética que absorve o calor a uma temperatura constante de ~23°C e encapsulado dentro de um revestimento externo antiestático e retardante de chamas. Desenvolvido para operações petroquímicas, fundições, soldagem e serviços públicos onde riscos de faíscas, poeira explosiva e calor extremo convergem.',
    metrics: [
      { value: '22.08°C', label: 'Zona de Conforto de Mudança de Fase Não Irritante' },
      { value: '225 J/g', label: 'Capacidade de Armazenamento de Calor Latente' },
      { value: '360°', label: 'Faixas de Segurança Retrorrefletivas de Alta Visibilidade' },
      { value: '0V', label: 'Resfriamento Passivo Intrinsecamente Seguro Zero Faíscas' },
    ],
    features: [
      {
        title: 'Proteção Retardante de Chamas e Antiestática',
        description:
          'O tecido de sarja industrial pesado repele escória, faíscas e o acúmulo de carga estática.',
      },
      {
        title: 'Regulação Térmica Constante a 22.08°C',
        description:
          'Mantém o resfriamento contínuo do tronco sem choque térmico durante trabalhos braçais pesados em calor ambiente acima de 35°C.',
      },
      {
        title: 'Núcleo de Biomassa C17 de Alta Estabilidade',
        description:
          'Milhares de ciclos térmicos sem degradação; atóxico e ecologicamente correto.',
      },
      {
        title: 'Visibilidade Noturna e sob Baixa Luminosidade',
        description:
          'Faixas refletivas prateadas duplas de alta visibilidade proporcionam segurança em 360° em obras viárias e plantas industriais escuras.',
      },
    ],
    hotspots: [
      {
        title: 'Trama Externa Ignífuga e Antiestática',
        description:
          'O tecido ripstop robusto resiste a rasgos, abrasões e respingos de metal fundido.',
        zone: 'Revestimento em Sarja Industrial Retardante de Chamas',
      },
      {
        title: 'Cinta Abdominal Elástica com Velcro',
        description:
          'A faixa abdominal larga industrial de fixação aderente ajusta-se com segurança a todos os biotipos.',
        zone: 'Fecho de Cinta Abdominal de Alta Resistência',
      },
      {
        title: 'Bolsos Térmicos Modulares para PCM',
        description:
          'Compartimentos internos dedicados mantêm os pacotes de PCM selados firmemente junto ao tronco.',
        zone: 'Compartimentos Internos para Blocos Térmicos C17',
      },
      {
        title: 'Faixas Refletivas Duplas de Alerta de Segurança',
        description:
          'Listras retrorrefletivas de padrão 3M no peito e na cintura garantem visibilidade em campo.',
        zone: 'Faixas de Alerta Retrorrefletivas 360°',
      },
    ],
    bentoCards: [
      {
        title: 'Revestimento Externo Ripstop Antiestático e Retardante de Chamas',
        subtitle: 'Proteção Zero Faíscas para Zonas Classificadas EX',
        description:
          'A trama industrial antiestática e retardante de chamas especialmente tratada dissipa cargas eletrostáticas e resiste a respingos de solda, permitindo o resfriamento seguro do tronco dentro de refinarias petroquímicas e usinas de gás.',
        materialTag: 'Sarja Industrial Ignífuga e Antiestática',
      },
      {
        title: 'Faixas Duplas de Alerta de Segurança Retrorrefletivas em 360°',
        subtitle: 'Visibilidade de Alto Contraste à Noite e em Túneis',
        description:
          'Faixas retrorrefletivas prateadas largas envolvem o peito e a cintura em 360°, garantindo o reconhecimento imediato do operador em refinarias com pouca luz, túneis e obras rodoviárias no turno noturno.',
        materialTag: 'Acabamento Retrorrefletivo 360°',
      },
      {
        title: 'Compartimentos Internos Modulares de PCM e Cintura Elástica',
        subtitle: 'Substituição Rápida de Pacotes Entre Turnos',
        description:
          'Os compartimentos térmicos internos permitem que as equipes troquem pacotes de PCM C17 recém-recarregados a 22.08°C em segundos, enquanto a cinta larga de velcro trava o colete rente ao tronco.',
        materialTag: 'Compartimentos Modulares PCM • 0.96kg Total',
      },
    ],
    deployment: {
      title: 'Refinarias Petroquímicas, Áreas de Soldagem e Serviços Públicos Noturnos',
      locationBadge: 'Unidade de Craqueamento Petroquímico Classificação EX • Zona de Alto Calor',
      narrative:
        'Em zonas petroquímicas à prova de explosão (EX) e oficinas de soldagem ativas, baterias eletrônicas e motores com escovas representam riscos de ignição inaceitáveis. O LC Frost-PCM/G combina o resfriamento passivo de mudança de fase a 22.08°C (0V) com um revestimento externo antiestático e retardante de chamas e faixas refletivas de 360° — entregando alívio térmico intransigente onde componentes eletrônicos são proibidos.',
      environmentalMetrics: [
        { label: 'Risco de Ignição e Faíscas', value: '0V Intrinsecamente Seguro' },
        { label: 'Conforto de Mudança de Fase', value: '22.08°C (225 J/g)' },
        { label: 'Peso Completo do Colete', value: '0.96kg' },
      ],
      industries: [
        'Petroquímica e Refino de Petróleo',
        'Metalurgia e Operações de Soldagem',
        'Manutenção de Redes Elétricas e Subestações',
        'Engenharia de Turno Noturno sob Alta Temperatura',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-PCM/G' },
      { parameter: 'Cor', value: 'Cinza Industrial com Acabamento Refletivo de Alta Visibilidade (personalizável)' },
      { parameter: 'Público-Alvo', value: 'Trabalhadores de petroquímica, metalurgia, soldagem, rede elétrica e turnos noturnos sob alta temperatura' },
      { parameter: 'Calor de Fusão', value: '225 J/g' },
      { parameter: 'Temperatura de Mudança de Fase', value: '22.08°C' },
      { parameter: 'Duração do Resfriamento', value: '1–2 horas (referência baseada na intensidade do trabalho e temperatura ambiente)' },
      { parameter: 'Tempo de Recarga a Frio', value: 'Congelado a -18°C por 1 hora, OU refrigerado a 0–4°C por 1–2 horas' },
      { parameter: 'Material do Tecido', value: 'Tecido antiestático e retardante de chamas' },
      { parameter: 'Tamanhos', value: 'Tamanho Padrão / Tamanho Grande' },
      { parameter: 'Peso Líquido', value: '0.96kg' },
      { parameter: 'Dimensões da Embalagem', value: '40 × 30 × 10cm' },
      { parameter: 'Garantia', value: 'Garantia Industrial Oficial de 1 Ano' },
    ],
    quickCompare: {
      mechanism: 'PCM C17 Biológico Passivo em Revestimento Ignífugo Antiestático',
      capacityOrTemp: '22.08°C Constantes (225 J/g)',
      powerOrCycle: '1–2h Resfriamento / 0V Intrinsecamente Seguro',
      netWeight: '0.96kg',
      primaryApplication: 'Petroquímica, Soldagem, Metalurgia, Turno Noturno',
    },
  },
  'frost-tec-w': {
    name: 'Colete de Resfriamento a Água por Semicondutor',
    shortTitle: 'Chiller Líquido Ativo de 80W + Duplo Fluxo de Ar',
    category: 'Série de Gestão Térmica Pessoal',
    subCategory: 'Líquido Ativo de 80W + Duplo Fluxo de Ar',
    headline: 'Chiller Termelétrico Ativo de 80W. Circuito Fechado de Líquido + Duplo Fluxo de Ar.',
    overview:
      'Um dispositivo vestível de resfriamento ativo alimentado por chips de resfriamento termelétrico de estado sólido (TEC) e um sistema de circulação de água em circuito fechado. Fornece resfriamento estável e ajustável em múltiplos níveis para o tronco em até 2 minutos após o acionamento. Integra uma silenciosa ventoinha traseira de exaustão a turbina e duas ventoinhas frontais de insuflamento de ar no peito para manter o rosto e o tronco secos durante todo o dia no combate a incêndios, construção civil, manutenção elétrica e saneamento.',
    metrics: [
      { value: '80W', label: 'Capacidade de Resfriamento Termelétrico Ativo' },
      { value: '2 min', label: 'Tempo Rápido de Estabilização Térmica' },
      { value: '24V', label: 'Arquitetura de Chiller de Alta Eficiência' },
      { value: '2–4 Horas', label: 'Autonomia Contínua de Bateria no Turno' },
    ],
    features: [
      {
        title: 'Regulação Ativa de Precisão da Temperatura',
        description:
          'O chiller termelétrico retira ativamente o calor do líquido circulante, superando as limitações do derretimento passivo.',
      },
      {
        title: 'Evaporação por Ar Forçado de Zona Dupla',
        description:
          'A turbina traseira expele o calor enquanto duas ventoinhas frontais direcionam o ar para o pescoço e o rosto a fim de acelerar a evaporação do suor.',
      },
      {
        title: 'Autonomia Estendida de Bateria em Campo',
        description:
          'A fonte de alimentação de lítio de 24V oferece de 1 a 2 horas com uma única bateria e até 4 horas com baterias duplas.',
      },
      {
        title: 'Canais de Líquido Selados à Prova de Vazamentos',
        description:
          'A tubulação em TPU industrial resiste a altas pressões, torções e condições severas de canteiro sem vazar.',
      },
    ],
    hotspots: [
      {
        title: 'Revestimento Gola V Retardante de Chamas e Antiestático',
        description:
          'Tecido cinza industrial macio e protetor, resistente ao calor e a riscos eletrostáticos.',
        zone: 'Chassi Anterior Retardante de Chamas',
      },
      {
        title: 'Tiras de Compressão Lateral',
        description:
          'Tensionadores ergonômicos mantêm os canais de água de resfriamento firmemente encostados ao tronco.',
        zone: 'Tensionadores Bilaterais de Contato Térmico',
      },
      {
        title: 'Módulo Chiller TEC Traseiro de 80W',
        description:
          'Carcaça prateada elegante com ventoinha a turbina preta que estabiliza a temperatura da água em 2 minutos.',
        zone: 'Núcleo Termelétrico Dorsal de 24V / 80W',
      },
      {
        title: 'Bolsos Frontais Duplos com Insuflamento de Ar',
        description:
          'Os bolsos utilitários frontais acomodam as baterias enquanto impulsionam o fluxo de ar frio em direção ao queixo e ao peito.',
        zone: 'Módulos Anteriores de Fluxo de Ar Ascendente',
      },
    ],
    bentoCards: [
      {
        title: 'Chiller TEC Dorsal de Estado Sólido de 80W e Turbina de Exaustão',
        subtitle: 'Arquitetura de 24V / 100W • Circuito Refrigerado Estável em 2 Minutos',
        description:
          'Montado ergonomicamente nas costas, o módulo termelétrico anodizado prateado de 80W resfria a água circulante interna em 2 minutos, enquanto uma turbina radial silenciosa expele o calor rejeitado para longe do operador.',
        materialTag: 'Chiller TEC de 80W • Estabilização em 2 Min',
      },
      {
        title: 'Ventoinhas Duplas de Ar Forçado no Peito',
        subtitle: 'Evaporação Ascendente de Suor para Rosto e Pescoço',
        description:
          'Sopradores integrados nos bolsos frontais canalizam ar fresco para cima pelo peito, pescoço e rosto, combinando o resfriamento líquido condutivo interno com a secagem convectiva externa.',
        materialTag: 'Ventoinhas Duplas Anteriores de Fluxo Ascendente',
      },
      {
        title: 'Forro de Água em Circuito Fechado em TPU Médico/Industrial',
        subtitle: 'Rede Microfluídica de Alta Pressão Resistente a Dobras',
        description:
          'Microcanais serpentinos em TPU distribuem a água resfriada uniformemente pelo tronco e podem ser combinados com pacotes suplementares de resfriamento PCM para picos térmicos extremos.',
        materialTag: 'Forro Fluídico de TPU em Circuito Fechado',
      },
    ],
    deployment: {
      title: 'Manutenção de Redes Elétricas de Alta Tensão, Combate a Incêndios e Construção Pesada',
      locationBadge: 'Revisão de Transformador em Subestação de 500kV • Pico de Carga no Verão',
      narrative:
        'Quando equipes de redes elétricas e bombeiros operam sob calor radiante superior a 40°C, bolsas de gelo passivas podem derreter antes que uma tarefa complexa de manutenção termine. O LC Frost-TEC/W combina 80W de resfriamento líquido termelétrico ativo com ventoinhas duplas no peito que sopram ar fresco pelo pescoço e rosto — mantendo o alerta cognitivo máximo por 2 a 4 horas.',
      environmentalMetrics: [
        { label: 'Potência de Resfriamento Ativo', value: '80W (24V / 100W Nominais)' },
        { label: 'Estabilização do Circuito', value: '2 Minutos' },
        { label: 'Autonomia Contínua', value: '2–4 Horas (Bateria Dupla)' },
      ],
      industries: [
        'Manutenção de Redes Elétricas e Subestações',
        'Combate a Incêndios e Resgate de Emergência',
        'Segurança Pública e Controle de Tráfego',
        'Construção Pesada e Saneamento Municipal',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-TEC/W' },
      { parameter: 'Cor', value: 'Cinza Técnico (personalizável)' },
      { parameter: 'Público-Alvo', value: 'Bombeiros, segurança pública, rede elétrica, construção civil, saneamento sob calor extremo' },
      { parameter: 'Capacidade de Resfriamento', value: '80W' },
      { parameter: 'Tensão Nominal', value: '24V' },
      { parameter: 'Potência Nominal', value: '100W' },
      { parameter: 'Tempo de Resposta de Resfriamento', value: 'Estável em 2 min' },
      { parameter: 'Autonomia da Bateria', value: '1–2 horas com bateria única (2–4 horas de autonomia contínua do sistema)' },
      { parameter: 'Tecido Externo', value: 'Tecido antiestático e retardante de chamas' },
      { parameter: 'Tecido do Forro', value: 'Forro com canais de água em TPU médico/industrial' },
      { parameter: 'Tamanho', value: 'Tamanho Único Ajustável' },
      { parameter: 'Peso Líquido', value: '< 3kg' },
      { parameter: 'Dimensões da Embalagem', value: '40 × 30 × 10cm' },
      { parameter: 'Acessórios Opcionais', value: 'Pacotes suplementares de resfriamento PCM' },
      { parameter: 'Garantia', value: 'Garantia Industrial Oficial de 1 Ano' },
    ],
    quickCompare: {
      mechanism: 'Circuito Líquido TEC Ativo de 80W + Ventoinhas Duplas no Peito',
      capacityOrTemp: 'Resfriamento Ativo de 80W (Estável em 2 min)',
      powerOrCycle: '24V / 100W • Autonomia de 2–4h',
      netWeight: '< 3kg',
      primaryApplication: 'Combate a Incêndios, Rede Elétrica, Construção Pesada',
    },
  },
  'frost-tec-d': {
    name: 'Colete Semicondutor de Resfriamento Direto',
    shortTitle: 'Colete Peltier de Estado Sólido Instantâneo em 2 Segundos',
    category: 'Série de Gestão Térmica Pessoal',
    subCategory: 'Peltier de Estado Sólido Instantâneo em 2 Segundos',
    headline: 'Resfriamento Peltier Instantâneo em 2 Segundos. Zero Água, Zero Refrigerante, 8 Horas de Autonomia.',
    overview:
      'Aproveitando o efeito Peltier de estado sólido por meio de módulos TEC de contato direto, o LC Frost-TEC/D não requer gelo, líquido refrigerante ou compressor. As placas de condução térmica de contato direto absorvem o calor do tronco imediatamente ao ligar — estabilizando em apenas 2 segundos — enquanto ventoinhas ultrassilenciosas dissipam o calor residual. Conta com um chassi em malha respirável e faixas refletivas de alta visibilidade para inspeção industrial, EPI médico e operações ao ar livre.',
    metrics: [
      { value: '2 Segundos', label: 'Estabilização Ultrarrápida do Resfriamento de Estado Sólido' },
      { value: '0 Líquido', label: 'Condução Direta Totalmente Seca (Zero Risco de Vazamento)' },
      { value: '2–8 Horas', label: 'Operação Estendida com Bateria Modular' },
      { value: '> 20,000 Horas', label: 'Vida Útil do Semicondutor de Estado Sólido' },
    ],
    features: [
      {
        title: 'Condução Instantânea de Estado Sólido em 2 Segundos',
        description:
          'As placas de contato direto Peltier resfriam imediatamente após a ativação, sem necessidade de pré-congelamento ou reabastecimento de água.',
      },
      {
        title: 'Operação Ultrassilenciosa e Sem Vibrações',
        description:
          'Ventoinhas axiais de baixo ruído eliminam o zumbido de compressores e as vibrações de bombas para inspeções silenciosas.',
      },
      {
        title: 'Até 8 Horas de Energia Modular',
        description:
          'O baixo consumo de 60W permite de 2 a 8 horas de autonomia (2 horas por cada módulo de bateria leve).',
      },
      {
        title: 'Zero Manutenção e Longevidade de 20.000 Horas',
        description:
          'A arquitetura de estado sólido elimina mangueiras, fluidos refrigerantes e bombas para uma durabilidade à prova de vazamentos.',
      },
    ],
    hotspots: [
      {
        title: 'Matriz TEC de Contato Direto de 4 Módulos',
        description:
          'Quatro placas de condução Peltier posicionadas na parte superior das costas proporcionam resfriamento instantâneo diretamente à pele.',
        zone: 'Matriz Dorsal Quádrupla Peltier de Estado Sólido',
      },
      {
        title: 'Fivelas Peitorais Amarelas de Engate Rápido',
        description:
          'Os fechos peitorais de alta visibilidade e o cordão elástico traseiro garantem um ajuste firme e sem restrições.',
        zone: 'Arnês de Fixação Anterior de Alta Visibilidade',
      },
      {
        title: 'Controlador Peitoral e Ventoinhas de Baixo Ruído',
        description:
          'O seletor circular montado no peito oferece regulação térmica intuitiva em múltiplos estágios.',
        zone: 'Seletor Térmico Rotativo e Dissipadores Axiais',
      },
      {
        title: 'Malha de Alta Visibilidade Destacável e Lavável',
        description:
          'Malha antiestática respirável com faixas refletivas amarelo-neon e prata; os componentes eletrônicos destacam-se facilmente para lavagem.',
        zone: 'Chassi Modular Lavável em Malha Antiestática',
      },
    ],
    bentoCards: [
      {
        title: 'Matriz de Condução Peltier de Estado Sólido de Contato Direto com 4 Módulos',
        subtitle: 'Capacidade de Resfriamento de 45W • Queda Térmica Instantânea em 2 Segundos',
        description:
          'Quatro placas de condução térmica em alumínio anodizado acopladas diretamente a chips semicondutores de estado sólido retiram calor da parte superior das costas em até 2 segundos após ligar — zero água, zero bombas e mais de 20.000 horas de vida útil do chip.',
        materialTag: 'Peltier de Estado Sólido de 4 Módulos • Vida Útil >20,000h',
      },
      {
        title: 'Fivelas Peitorais de Alta Visibilidade e Tensão Elástica Bungee',
        subtitle: 'Contato Constante das Placas de Condução com a Pele em Movimento',
        description:
          'As fivelas amarelas de engate rápido de alta visibilidade e o cordão elástico dinâmico traseiro mantêm a pressão de contato ideal entre os 4 módulos Peltier e a parte superior das costas do operador.',
        materialTag: 'Fechos de Engate Rápido de Alta Visibilidade',
      },
      {
        title: 'Controlador Rotativo no Peito e Malha Modular Lavável',
        subtitle: 'Arquitetura de Baixo Consumo de 12V / 60W para Autonomia de 2 a 8 Horas',
        description:
          'O intuitivo seletor rotativo montado no peito ajusta a intensidade do resfriamento de estado sólido em movimento, enquanto todo o chicote eletrônico se destaca para que o colete em malha antiestática e retardante de chamas possa ser lavado.',
        materialTag: 'Malha Ignífuga Antiestática Destacável e Lavável',
      },
    ],
    deployment: {
      title: 'Inspeção de Vias Férreas, Segurança Externa e Patrulhas Móveis de Campo',
      locationBadge: 'Inspeção de Corredor Ferroviário de Alta Velocidade • Turno de Patrulha de 8 Horas',
      narrative:
        'Engenheiros de inspeção móvel, agentes de trânsito e equipes de segurança ao ar livre precisam de resfriamento imediato sem carregar reservatórios de água ou esperar o congelamento de bolsas térmicas. Pesando ~1.7 kg e estabilizando em apenas 2 segundos em um sistema de bateria de 12V, o LC Frost-TEC/D oferece até 8 horas de resfriamento de estado sólido seco e ultrassilencioso durante longas patrulhas em campo.',
      environmentalMetrics: [
        { label: 'Estabilização Térmica', value: '2 Segundos (Instantâneo)' },
        { label: 'Autonomia de Bateria Modular', value: '2–8 Horas (12V / 60W)' },
        { label: 'Vida Útil do Semicondutor', value: '> 20,000 Horas' },
      ],
      industries: [
        'Inspeção Industrial e de Vias Férreas',
        'EPI Médico e Clínicas Móveis',
        'Controle de Tráfego Externo e Equipes de Solo na Aviação',
        'Equipes de Segurança e Patrulhamento',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-TEC/D' },
      { parameter: 'Cor', value: 'Malha Cinza Tática com Acabamento Refletivo Amarelo-Neon de Alta Visibilidade e Tiras Pretas (Opção em Preto)' },
      { parameter: 'Público-Alvo', value: 'Inspeção industrial, EPI médico, tráfego externo, profissionais de segurança' },
      { parameter: 'Capacidade de Resfriamento', value: '45W' },
      { parameter: 'Tensão Nominal', value: '12V' },
      { parameter: 'Potência Nominal', value: '60W' },
      { parameter: 'Tempo de Resposta de Resfriamento', value: 'Resfriamento instantâneo, estável em 2s' },
      { parameter: 'Autonomia da Bateria', value: '2–8 horas (2 horas por módulo de bateria individual)' },
      { parameter: 'Vida Útil do Chip', value: '> 20,000 horas' },
      { parameter: 'Tecido Externo', value: 'Malha respirável antiestática e retardante de chamas (modular, destacável e lavável)' },
      { parameter: 'Tamanhos', value: 'Tamanho Padrão / Tamanho Grande' },
      { parameter: 'Peso Líquido', value: '~1.7kg' },
      { parameter: 'Dimensões da Embalagem', value: '40 × 30 × 10cm' },
      { parameter: 'Garantia', value: 'Garantia Industrial Oficial de 1 Ano' },
    ],
    quickCompare: {
      mechanism: 'Peltier de Estado Sólido de Contato Direto de 4 Módulos (Seco)',
      capacityOrTemp: 'Condução Direta de 45W (Instantâneo em 2s)',
      powerOrCycle: '12V / 60W • Autonomia Modular de 2–8h',
      netWeight: '~1.7kg',
      primaryApplication: 'Inspeção Industrial, Tráfego, Segurança, EPI Médico',
    },
  },
  'frost-acc-w': {
    name: 'Colete de Resfriamento a Água com Compressor',
    shortTitle: 'Chiller Extremo com Micro-Inversor de 300W',
    category: 'Série de Gestão Térmica Pessoal',
    subCategory: 'Chiller Extremo com Micro-Inversor de 300W',
    headline: 'Refrigeração Ativa com Micro-Inversor de 300W para Riscos de Calor Extremo.',
    overview:
      'O carro-chefe da linha LC Frost, o LC Frost-ACC/W integra um compressor de refrigeração inverter em miniatura a uma rede de circulação de líquido resfriado em circuito fechado. Entregando uma capacidade de resfriamento ativo líder do setor de 60 a 300W, ampla faixa de ajuste de temperatura e saída de temperatura constante inabalável, é a armadura protetora de resfriamento definitiva para metalurgia extrema, combate a incêndios e operações em espaços confinados.',
    metrics: [
      { value: '60–300W', label: 'Refrigeração Ativa por Compressor de Alta Potência' },
      { value: '< 4kg', label: 'Unidade Chiller Vestível Ergonomicamente Equilibrada' },
      { value: '3 min', label: 'Estabilização Rápida do Circuito Refrigerado de Alta Capacidade' },
      { value: '100%', label: 'Circuito de Líquido Selado à Prova de Vazamentos' },
    ],
    features: [
      {
        title: 'Refrigeração Ativa Extrema de 300W',
        description:
          'O compressor micro-inversor resfria rapidamente a água circulante logo na partida com regulação digital de temperatura em múltiplos estágios.',
      },
      {
        title: 'Mobilidade Integrada Abaixo de 4 kg',
        description:
          'A arquitetura compacta de resfriamento equilibra o peso ao longo da parte inferior do tronco para mobilidade irrestrita em locais estreitos.',
      },
      {
        title: 'Autonomia Intensiva de 2 a 4 Horas por Turno',
        description:
          'O sistema de bateria de lítio de alta capacidade de 24V sustenta a refrigeração pesada durante turnos exaustivos.',
      },
      {
        title: 'Sistema Fluídico Selado e Resistente a Impactos',
        description:
          'Engates de líquido robustos e bolsas pressurizadas de TPU suportam impactos fortes, vibração e lavagens em campo.',
      },
    ],
    hotspots: [
      {
        title: 'Revestimento Externo Gola V Retardante de Chamas',
        description:
          'Revestimento antiestático cinza minimalista com zíper central reforçado que se ajusta confortavelmente sobre as camadas de base.',
        zone: 'Revestimento Protetor Gola V Ignífugo e Antiestático',
      },
      {
        title: 'Fitas de Compressão Bilateral',
        description:
          'As tiras de tensão laterais maximizam o contato térmico entre a bolsa interna resfriada de TPU e o tronco.',
        zone: 'Tiras Bilaterais de Compressão do Tronco',
      },
      {
        title: 'Chiller a Compressor com Micro-Inversor',
        description:
          'O núcleo do compressor em miniatura de 24V estabiliza a circulação de água resfriada em até 3 minutos.',
        zone: 'Núcleo de Refrigeração Micro-Inversor de 60–300W',
      },
      {
        title: 'Bolsa Interna de Resfriamento em TPU e Circuito Isolado',
        description:
          'A rede de líquido em circuito fechado combinada com o forro 3D respirável evita o acúmulo de condensação.',
        zone: 'Bolsa de TPU Pressurizada em Circuito Fechado',
      },
    ],
    bentoCards: [
      {
        title: 'Núcleo de Compressor de Refrigeração Inverter em Miniatura de 24V',
        subtitle: 'Potência de Resfriamento Ativo de 60–300W • 110W de Potência Nominal',
        description:
          'Diferentemente dos resfriadores termelétricos comuns, o LC Frost-ACC/W utiliza um verdadeiro ciclo de compressão a vapor com micro-inversor capaz de entregar até 300W de potência frigorífica — mantendo a circulação de líquido frio mesmo sob radiação de fundição superior a 50°C.',
        materialTag: 'Compressor Micro-Inversor de 60–300W',
      },
      {
        title: 'Bolsa Pressurizada de Resfriamento Líquido em TPU de Alta Durabilidade',
        subtitle: 'Fluídica 100% à Prova de Vazamentos com Forro 3D Anticondensação',
        description:
          'A bolsa de resfriamento serpentina em TPU de alta densidade maximiza a área de superfície de contato com o tronco, enquanto uma barreira interna de malha 3D respirável impede a umidade na pele.',
        materialTag: 'Bolsa de Líquido Pressurizada em TPU',
      },
      {
        title: 'Revestimento Antiestático Retardante de Chamas e Zíper Central Reforçado',
        subtitle: 'Ergonomia Equilibrada < 4kg para Espaços Confinados',
        description:
          'O tecido externo cinza industrial antiestático e retardante de chamas com acabamento preto reforçado e tiras de compressão bilateral resiste a faíscas, escória e abrasão severa.',
        materialTag: 'Revestimento Ignífugo Antiestático • < 4kg Total',
      },
    ],
    deployment: {
      title: 'Fundições Metalúrgicas Extremas, Combate a Incêndios e Espaços Confinados',
      locationBadge: 'Alto-Forno e Ala de Fundição de Metal Líquido • Ambiente >45°C',
      narrative:
        'Nas alas de vazamento de altos-fornos, cabines de máquinas pesadas sem ar-condicionado e missões de resgate profundo em espaços confinados, as cargas de calor radiante superam os coletes de resfriamento convencionais. Entregando de 60 a 300W de refrigeração ativa por compressão de vapor em um conjunto vestível com menos de 4 kg, o LC Frost-ACC/W estabiliza a água resfriada em 3 minutos e protege a temperatura corporal central sob as condições industriais mais severas da Terra.',
      environmentalMetrics: [
        { label: 'Faixa de Refrigeração Ativa', value: '60–300W (24V / 110W)' },
        { label: 'Estabilização do Circuito Frio', value: '3 Minutos' },
        { label: 'Peso Completo do Sistema', value: '< 4.0kg' },
      ],
      industries: [
        'Fundições Metalúrgicas e Siderúrgicas',
        'Combate a Incêndios e Resgate Hazmat',
        'Engenharia de Túneis e Espaços Confinados',
        'Cabines de Equipamentos Pesados Sem Climatização',
      ],
    },
    specifications: [
      { parameter: 'Modelo', value: 'LC Frost-ACC/W' },
      { parameter: 'Cor', value: 'Cinza Industrial com Acabamento Preto' },
      { parameter: 'Público-Alvo', value: 'Ambientes de temperatura extremamente alta (metalurgia, fundição, combate a incêndios, cabines de máquinas pesadas)' },
      { parameter: 'Capacidade de Resfriamento', value: '60–300W' },
      { parameter: 'Tensão Nominal', value: '24V' },
      { parameter: 'Potência Nominal', value: '110W' },
      { parameter: 'Tempo de Resposta de Resfriamento', value: 'Estável em 3 min' },
      { parameter: 'Autonomia da Bateria', value: '1–2 horas com bateria única (2–4 horas de operação contínua do sistema)' },
      { parameter: 'Tecido Externo', value: 'Tecido antiestático e retardante de chamas' },
      { parameter: 'Tecido do Forro', value: 'Bolsa de resfriamento líquido em TPU de alta durabilidade' },
      { parameter: 'Tamanho', value: 'Tamanho Único Ajustável' },
      { parameter: 'Peso Líquido', value: '< 4kg' },
      { parameter: 'Dimensões da Embalagem', value: '40 × 30 × 10cm' },
      { parameter: 'Garantia', value: 'Garantia Industrial Oficial de 1 Ano' },
    ],
    quickCompare: {
      mechanism: 'Compressor Ativo Micro-Inversor + Líquido em Circuito Fechado',
      capacityOrTemp: 'Refrigeração Ativa de 60–300W (Estável em 3 min)',
      powerOrCycle: '24V / 110W • 2–4h Contínuas',
      netWeight: '< 4kg',
      primaryApplication: 'Metalurgia Extrema, Fundição, Bombeiros, Espaços Confinados',
    },
  },
};
