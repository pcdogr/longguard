import type { ProductTranslationsMap } from '../types';

export const PRODUCTS_IT: ProductTranslationsMap = {
  'power-ua': {
    name: 'Esoscheletro Passivo per Arti Superiori',
    shortTitle: 'Armatura Bionica per Lavori Sopratesta',
    category: 'Serie Esoscheletri Bionici',
    subCategory: 'Armatura in Carbonio Zero-Power per Lavori Sopratesta',
    headline: 'Armatura Bionica Sopratesta. Puro Sollievo Meccanico.',
    overview:
      'Progettato con una struttura bionica puramente meccanica per un’assistenza direzionale precisa, LC Power-U/A è leggero, altamente affidabile e adattabile ad ambienti industriali complessi. Dotato di regolazioni multilivello per adattarsi a diverse corporature, è concepito specificamente per l’assemblaggio automobilistico, la manutenzione elettrica, l’edilizia, la riparazione aeronautica e la raccolta agricola, riducendo drasticamente il carico muscolare su spalle e braccia e migliorando l’efficienza operativa e il comfort per l’intera giornata.',
    metrics: [
      { value: '8kg', label: 'Capacità Massima di Assistenza Sopratesta' },
      { value: '< 2kg', label: 'Colonna Dorsale Ultraleggera in Fibra di Carbonio Aerospaziale' },
      { value: '100%', label: 'Funzionamento Passivo Zero-Power (Zero Rischi Batteria)' },
      { value: '4 Angoli', label: 'Articolazione Multi-Posizione (50°, 70°, 90°, 110°/115°)' },
    ],
    features: [
      {
        title: 'Telaio Ultraleggero in Carbonio',
        description:
          'La fibra di carbonio aerospaziale abbinata al tessuto Oxford resistente all’usura offre una rigidità impareggiabile con un peso inferiore a 2 kg, garantendo piena libertà di movimento delle braccia.',
      },
      {
        title: 'Sicurezza Intrinseca Senza Alimentazione',
        description:
          'L’accumulo di energia elastica 100% meccanica elimina la manutenzione delle batterie, i tempi di fermo per la ricarica e il rischio di scintille durante operazioni continue su più turni.',
      },
      {
        title: 'Scarico Muscolo-Scheletrico ad Alta Efficienza',
        description:
          'Riduce lo sforzo del muscolo deltoide fino a 8 kg, prolungando direttamente la resistenza dell’operatore e prevenendo patologie croniche della spalla.',
      },
      {
        title: 'Durabilità Industriale Minimalista',
        description:
          'Gli snodi in alluminio anodizzato ad alta resistenza sopportano urti gravosi, polvere e usura industriale continua.',
      },
    ],
    hotspots: [
      {
        title: 'Snodo Spalla a 4 Posizioni',
        description:
          'L’assistenza meccanica semiautomatica si innesta istantaneamente al sollevamento delle braccia, con blocchi a 50°, 70°, 90° e 110°/115°.',
        zone: 'Unità di Articolazione Gleno-Omerale',
      },
      {
        title: 'Imbracatura Toracica e Dorsale a Sgancio Rapido',
        description:
          'Le fibbie ergonomiche a scatto consentono di indossare e rimuovere il dispositivo in meno di 15 secondi.',
        zone: 'Imbracatura Toracica a Blocco Incrociato',
      },
      {
        title: 'Barra Dorsale Telescopica in Carbonio',
        description:
          'La colonna dorsale in fibra di carbonio ad alta resistenza alla trazione si adatta perfettamente a diverse lunghezze del busto.',
        zone: 'Colonna Dorsale in Carbonio',
      },
      {
        title: 'Braccioli di Supporto a Sgancio Rapido',
        description:
          'I supporti ergonomici per le braccia con fibbia gialla e linguetta blu di sgancio rapido garantiscono un’uscita immediata.',
        zone: 'Culla di Supporto Omerale',
      },
      {
        title: 'Cintura Lombare Sagomata 3D',
        description:
          'La cintura in rete traspirante distribuisce il carico dell’imbracatura in modo uniforme sul cingolo pelvico.',
        zone: 'Fascia Pelvica di Trasferimento del Carico',
      },
    ],
    bentoCards: [
      {
        title: 'Snodo Meccanico Semiautomatico della Spalla a 4 Angoli',
        subtitle: 'Architettura a Cricchetto di Precisione in Alluminio Aeronautico',
        description:
          'L’alloggiamento in lega di alluminio aeronautico lavorato a CNC racchiude un cricchetto di bloccaggio semiautomatico a 3 rapporti e 4 angoli (50°, 70°, 90°, 110°/115°) che si innesta silenziosamente quando l’operatore solleva le braccia e si disinnesta dolcemente in fase di discesa.',
        materialTag: 'Lega di Alluminio Aeronautico • Blocco a 4 Angoli',
      },
      {
        title: 'Colonna Telescopica in Fibra di Carbonio Aerospaziale',
        subtitle: 'Struttura Dorsale ad Alta Rigidità Inferiore a 2 kg',
        description:
          'La colonna in fibra di carbonio aerospaziale a trama multidirezionale resiste alla flessione torsionale trasferendo fino a 8 kg di peso degli utensili sopratesta verso la cintura pelvica.',
        materialTag: 'Fibra di Carbonio Aerospaziale T700',
      },
      {
        title: 'Braccioli a Sgancio Rapido e Rete 3D Traspirante',
        subtitle: 'Tessuto Oxford Antiusura e Fodera Ventilata',
        description:
          'Progettato con tessuto esterno Oxford industriale antistrappo e fodera interna in rete a nido d’ape 3D per uno sgancio rapido di emergenza e ventilazione termica per turni di 8 ore.',
        materialTag: 'Esterno Oxford + Rete a Nido d’Ape 3D',
      },
    ],
    deployment: {
      title: 'Assemblaggio Sottoscocca Automotive e Operazioni di Serraggio Sopratesta',
      locationBadge: 'Linea di Assemblaggio Finale Automotive • Stazione Telaio Sopratesta',
      narrative:
        'All’interno dei moderni stabilimenti di assemblaggio automobilistico, i tecnici eseguono migliaia di cicli di fissaggio sopratesta per turno sotto le scocche sollevate dei veicoli. LC Power-U/A blocca il supporto meccanico tra 50° e 115°, neutralizzando il peso degli avvitatori dinamometrici pneumatici ed eliminando l’affaticamento del deltoide senza richiedere un solo watt di energia elettrica.',
      environmentalMetrics: [
        { label: 'Riduzione EMG Deltoide', value: 'Fino a 8kg di Scarico' },
        { label: 'Tempo di Vestizione / Svestizione', value: '< 15 Secondi' },
        { label: 'Fermo Macchina per Ricarica', value: '0 Ore (100% Passivo)' },
      ],
      industries: [
        'Assemblaggio Automotive',
        'Manutenzione Reti Elettriche',
        'Edilizia e Costruzioni',
        'Riparazione Aeronautica',
        'Raccolta Agricola',
      ],
    },
    specifications: [
      { parameter: 'Modello', value: 'LC Power-U/A (Codice Spec.: LC Power-U/P)' },
      { parameter: 'Colore', value: 'Nero Opaco Industriale' },
      { parameter: 'Utenti Destinatari', value: 'Operatori impegnati in lavori prolungati a braccia sollevate e sopratesta' },
      { parameter: 'Applicazioni', value: 'Assemblaggio automotive, manutenzione elettrica, edilizia, riparazione aeronautica, raccolta agricola' },
      { parameter: 'Materiali Strutturali', value: 'Fibra di carbonio + lega di alluminio aeronautico' },
      { parameter: 'Capacità di Assistenza', value: 'Max. 8kg' },
      { parameter: 'Modalità di Bloccaggio', value: 'Bloccaggio meccanico semiautomatico' },
      { parameter: 'Livelli di Assistenza', value: '3 rapporti (innesto su 4 angoli)' },
      { parameter: 'Angoli di Assistenza / Sblocco', value: '50°, 70°, 90°, 110°/115°' },
      { parameter: 'Tessuto Esterno', value: 'Tessuto Oxford resistente all’usura' },
      { parameter: 'Tessuto Fodera', value: 'Tessuto a rete 3D traspirante' },
      { parameter: 'Taglie', value: 'Taglia Standard / Taglia Plus' },
      { parameter: 'Peso Netto', value: '< 2kg' },
      { parameter: 'Dimensioni Imballo', value: '50 × 40 × 12cm' },
      { parameter: 'Accessori Opzionali', value: 'Collare ergonomico di supporto cervicale' },
      { parameter: 'Garanzia', value: 'Garanzia Industriale Ufficiale di 1 Anno' },
    ],
    quickCompare: {
      mechanism: 'Carbonio Meccanico Passivo + Cricchetto a 4 Angoli',
      capacityOrTemp: 'Assistenza Sopratesta Max. 8kg',
      powerOrCycle: '100% Passivo (0V)',
      netWeight: '< 2kg',
      primaryApplication: 'Assemblaggio Automotive, Rete Elettrica, Riparazione Aerei',
    },
  },
  'flex-w': {
    name: 'Esoscheletro Lombare Flessibile',
    shortTitle: 'Cintura Lombare Intelligente Non Alimentata',
    category: 'Serie Esoscheletri Bionici',
    subCategory: 'Assistenza Lombare Dinamica fino a 30kg',
    headline: 'La Cintura Intelligente Senza Batterie. Fino a 30kg di Spinta Lombare Dinamica.',
    overview:
      'Questo esoscheletro lombare leggero e privo di alimentazione elettrica è progettato per attività frequenti di flessione e sollevamento carichi. Accumula e rilascia energia tramite la deformazione elastica dei materiali, agendo come una "cintura intelligente" biomeccanica per fornire una spinta assistita verso l’alto durante il piegamento. Riduce significativamente lo sforzo lombare, scarica la compressione dei dischi vertebrali e mitiga il rischio di infortuni professionali alla bassa schiena.',
    metrics: [
      { value: '0–30kg', label: 'Range di Assistenza Lombare Dinamica Verso l’Alto' },
      { value: '≤ 1kg', label: 'Profilo Indossabile Ultrasottile' },
      { value: '160–190cm', label: 'Ampia Adattabilità Ergonomica per Statura' },
      { value: '0V', label: 'Accumulo di Energia Cinetica Fail-Safe Non Alimentato' },
    ],
    features: [
      {
        title: 'Struttura Minimalista Inferiore a 1 kg',
        description:
          'La costruzione tessile traspirante si conforma naturalmente al busto, garantendo un comfort asciutto durante l’intero turno di 8 ore.',
      },
      {
        title: 'Agilità Senza Restrizioni',
        description:
          'Segue i contorni del corpo senza vincoli metallici rigidi sui fianchi, preservando la piena libertà di camminare, accovacciarsi, salire scale e guidare.',
      },
      {
        title: 'Scarico Dinamico dei Muscoli Erettori Spinali',
        description:
          'Accumula progressivamente tensione elastica mentre l’utente si piega in avanti, rilasciando una spinta esplosiva verso l’alto al momento di rialzarsi.',
      },
      {
        title: 'Equilibrio della Pressione Spinale',
        description:
          'Distribuisce i carichi puntuali acuti della zona lombare tra la colonna toracica e le cosce, prevenendo l’ernia del disco professionale.',
      },
    ],
    hotspots: [
      {
        title: 'Schienale Regolabile Multi-Altezza',
        description:
          'Il sistema telescopico di tensione sulle spalle si adatta a operatori di statura compresa tra 160 cm e 190 cm.',
        zone: 'Ancoraggio di Tensione Toracica',
      },
      {
        title: 'Guida di Articolazione Laterale',
        description:
          'I percorsi morbidi e flessibili delle cinghie eliminano lo schiacciamento dell’anca durante gli squat profondi estremi.',
        zone: 'Guida Obliqua Laterale',
      },
      {
        title: 'Cuscino Lombare 3D Ispessito',
        description:
          'Il cuscinetto ergonomico multistrato ammortizza la parte inferiore della colonna vertebrale e distribuisce i carichi dorsali.',
        zone: 'Cuscinetto di Decompressione L1–L5',
      },
      {
        title: 'Nucleo Elastico Fail-Safe',
        description:
          'Le fibre di lattice di poliestere ad alta resilienza assicurano una durata illimitata in ambienti di lavoro umidi o polverosi.',
        zone: 'Fascia di Deformazione Cinetica',
      },
      {
        title: 'Cinghie Bilaterali di Trazione sulle Cosce',
        description:
          'Staffa di supporto lombare integrata collegata ai cosciali bilaterali per un trasferimento fluido del carico da 0 a 30 kg.',
        zone: 'Cosciali di Collegamento Femorale',
      },
    ],
    bentoCards: [
      {
        title: 'Staffa di Supporto Dorso-Lombare Integrata e Cuscino 3D',
        subtitle: 'Matrice di Decompressione dei Dischi Spinali L1–L5',
        description:
          'Un cuscino lombare ergonomico multistrato a nido d’ape 3D alloggia la staffa di supporto dorso-lombare integrata, stabilizzando la bassa colonna vertebrale e dissipando calore e umidità durante lo smistamento ad alta frequenza in magazzino.',
        materialTag: 'Rete Traspirante 3D + Staffa Lombare',
      },
      {
        title: 'Nucleo in Fibra di Lattice di Poliestere ad Alta Resilienza',
        subtitle: 'Accumulo Progressivo di Energia Cinetica da 0 a 30 kg',
        description:
          'Le fibre elastiche ingegnerizzate in lattice di poliestere immagazzinano energia potenziale meccanica durante la flessione anteriore del tronco e restituiscono fino a 30 kg di spinta assistita fluida verso l’alto.',
        materialTag: 'Lattice di Poliestere ad Alta Resilienza',
      },
      {
        title: 'Sistema di Cinghie di Collegamento Bilaterali per Cosce',
        subtitle: 'Squat Senza Punti di Pressione e Agilità sui Muletti',
        description:
          'I morbidi cosciali in tessuto Oxford resistente all’usura ancorano il percorso del carico cinetico senza cerniere metalliche rigide sui fianchi, consentendo agli operatori di passare direttamente dal sollevamento carichi alla guida di carrelli elevatori.',
        materialTag: 'Oxford Tattico Resistente all’Usura',
      },
    ],
    deployment: {
      title: 'Hub Logistici ad Alta Frequenza e Movimentazione Bagagli Aeroportuali',
      locationBadge: 'Centro Logistico Intelligente • Zona di Pallettizzazione',
      narrative:
        'Nei centri di smistamento logistico ad alta produttività e nelle aree bagagli degli aeroporti, gli addetti eseguono centinaia di piegamenti profondi e sollevamenti pesanti ogni ora. Con un peso ≤1 kg e zero barre rigide sui fianchi, LC Flex-W agisce come una seconda muscolatura erettrice spinale, erogando fino a 30 kg di assistenza lombare verso l’alto pur consentendo di camminare, salire e guidare veicoli con naturalezza.',
      environmentalMetrics: [
        { label: 'Assistenza Dinamica Verso l’Alto', value: '0–30kg Regolabile' },
        { label: 'Peso Totale Indossabile', value: '≤ 1.0kg' },
        { label: 'Statura Operatore Compatibile', value: '160–190cm' },
      ],
      industries: [
        'Logistica Industriale',
        'Movimentazione Bagagli Aeroportuali',
        'Assistenza Medica e Geriatrica',
        'Operazioni con Piegamenti Frequenti',
      ],
    },
    specifications: [
      { parameter: 'Modello', value: 'LC Flex-W' },
      { parameter: 'Colore', value: 'Nero Tattico' },
      { parameter: 'Utenti Destinatari', value: 'Lavoratori manuali, operatori di magazzino, addetti alla logistica, operatori socio-sanitari' },
      { parameter: 'Applicazioni', value: 'Logistica industriale, bagagli aeroportuali, assistenza medica e anziani, operazioni con flessioni frequenti' },
      { parameter: 'Tipo di Assistenza', value: 'Meccanica passiva non alimentata' },
      { parameter: 'Statura Applicabile', value: '160–190cm' },
      { parameter: 'Range di Assistenza', value: '0–30kg (regolabile dinamicamente)' },
      { parameter: 'Mezzo di Accumulo Energia', value: 'Fibra elastica in lattice di poliestere ad alta resilienza' },
      { parameter: 'Struttura Principale', value: 'Staffa di supporto dorso-lombare integrata + sistema bilaterale di cinghie per cosce' },
      { parameter: 'Tessuto Esterno', value: 'Tessuto Oxford resistente all’usura' },
      { parameter: 'Tessuto Fodera', value: 'Tessuto a rete 3D traspirante' },
      { parameter: 'Taglie', value: 'Taglia Standard / Taglia Plus' },
      { parameter: 'Peso Netto', value: '≤ 1kg' },
      { parameter: 'Dimensioni Imballo', value: '40 × 30 × 10cm' },
      { parameter: 'Garanzia', value: 'Garanzia Industriale Ufficiale di 1 Anno' },
    ],
    quickCompare: {
      mechanism: 'Lattice di Poliestere Elastico Passivo + Cinghie Cosce',
      capacityOrTemp: 'Assistenza Lombare Dinamica 0–30kg',
      powerOrCycle: '100% Passivo (0V)',
      netWeight: '≤ 1kg',
      primaryApplication: 'Logistica, Bagagli Aeroportuali, Assistenza Sanitaria',
    },
  },
  'gloves-01': {
    name: 'Guanto di Valutazione per Lavori Ripetitivi del Polso',
    shortTitle: 'Guanto Diagnostico Biometrico Edge-AI',
    category: 'Serie Sensoristica Ergonomica Intelligente',
    subCategory: 'Biometria Edge-AI conforme a GBZ 336-2025',
    headline: 'Guanto Biometrico Edge-AI. Diagnostica del Rischio di Tunnel Carpale GBZ 336-2025.',
    overview:
      'Progettato per mansioni manifatturiere con movimenti ripetitivi e forzati del polso, LC Gloves-01 rispetta rigorosamente i Criteri Diagnostici GBZ 336-2025 per la Sindrome del Tunnel Carpale Professionale. Dotato di sensori IMU a doppia postura (dorso della mano + polsino) ed elaborazione Edge-AI integrata, monitora in tempo reale gli angoli del polso, i movimenti di lavoro validi, la frequenza operativa, la durata e l’intensità del carico. Supporta il caricamento dati wireless e l’analisi su tablet per la quantificazione del rischio ergonomico e l’ottimizzazione delle postazioni di lavoro.',
    secondaryStudioCaption:
      'Suite di Analisi su Tablet Industriale — Telemetria delle forme d’onda in tempo reale a doppio canale per flessione/estensione e deviazione radiale/ulnare con classificazione automatica del rischio di tunnel carpale professionale secondo GBZ 336-2025.',
    metrics: [
      { value: '≤ ±0.1°', label: 'Precisione di Misurazione Statica IMU' },
      { value: '±180°', label: 'Range Completo di Movimento Multi-Asse' },
      { value: '200g', label: 'Fattore di Forma Ergonomico Ultraleggero' },
      { value: '24/min', label: 'Tracciamento Automatico della Frequenza di Movimenti Validi' },
    ],
    features: [
      {
        title: 'Rilevamento di Assetto a Doppio Punto',
        description:
          'L’architettura di rilevamento differenziale annulla gli artefatti di movimento dell’intero braccio, isolando la pura flessione, estensione e deviazione del polso.',
      },
      {
        title: 'Elaborazione Edge-AI Integrata',
        description:
          'Il microcontrollore integrato nel guanto calcola gli angoli, conta i cicli validi e compila le metriche localmente a latenza zero.',
      },
      {
        title: 'Telemetria Wireless su Tablet',
        description:
          'Lo streaming dati in tempo reale via Bluetooth/Wi-Fi verso la suite per PC/tablet genera report diagnostici sul rischio esportabili.',
      },
      {
        title: 'Anti-Interferenza di Grado Industriale',
        description:
          'Schermato contro i disturbi elettromagnetici e le vibrazioni dei macchinari negli stabilimenti automobilistici ed elettronici.',
      },
    ],
    hotspots: [
      {
        title: 'Aperture Tattili a Mezzo Dito',
        description:
          'I polpastrelli scoperti preservano la sensibilità tattile fine per l’assemblaggio delicato di microviti e componenti elettronici.',
        zone: 'Aperture Falangee Distali',
      },
      {
        title: 'Supporto Dorsale Sensore Zero-Gioco',
        description:
          'Il tessuto elastico ad alta estensibilità blocca saldamente il sensore IMU primario sopra i metatarsi/metacarpi.',
        zone: 'Nodo IMU Metacarpale Primario',
      },
      {
        title: 'Architettura Leggera da 200 g',
        description:
          'Riduce al minimo il carico muscolare durante audit ergonomici continui di 8 ore.',
        zone: 'Struttura in Maglia Tecnica Traspirante',
      },
      {
        title: 'Polsino Secondario Regolabile',
        description:
          'Ancora il sensore IMU di riferimento su diverse circonferenze del polso.',
        zone: 'Cinturino di Riferimento Radiocarpale',
      },
      {
        title: 'Software Diagnostico e IMU di Riferimento',
        description:
          'Il modulo IMU secondario sul polso trasmette forme d’onda a doppio canale in tempo reale per flessione/estensione, deviazione radiale/ulnare e valutazione del rischio GBZ 336-2025.',
        zone: 'Collegamento Telemetrico Wireless Edge-AI',
      },
    ],
    bentoCards: [
      {
        title: 'Moduli Sensori IMU Differenziali a Doppia Postura',
        subtitle: 'Precisione Statica ≤ ±0.1° e Microcontrollore Edge-AI',
        description:
          'Accoppiando un sensore IMU metacarpale dorsale con un IMU di riferimento sul polsino, il processore Edge-AI integrato scarta il movimento globale del braccio e isola la reale flessione/estensione e deviazione radiale/ulnare del polso oltre la soglia di riconoscimento di 15°.',
        materialTag: 'Doppio IMU Differenziale • Precisione ≤ ±0.1°',
      },
      {
        title: 'Maglia Tecnica ad Alta Elasticità e Design a Mezzo Dito',
        subtitle: 'Blocco Sensore Antiscivolo con Piena Destrezza dei Polpastrelli',
        description:
          'Il tessuto tecnico grigio traspirante da 200 g mantiene i sensori IMU bloccati senza slittamenti sulla pelle, lasciando liberi i polpastrelli per micro-fissaggi e saldature.',
        materialTag: 'Tessuto Tecnico Grigio Antiscivolo',
      },
      {
        title: 'Suite di Analisi delle Forme d’Onda Diagnostiche GBZ 336-2025',
        subtitle: 'Quantificazione in Tempo Reale di Frequenza (24/min) e Durata',
        description:
          'Trasmette in tempo reale la cinematica del polso a un tablet PC industriale per registrare le ore lavorative giornaliere, il conteggio dei movimenti validi e i report automatizzati sul rischio di sindrome del tunnel carpale professionale.',
        materialTag: 'Analisi Conforme a GBZ 336-2025',
      },
    ],
    deployment: {
      title: 'Assemblaggio Elettronico di Precisione e Audit di Medicina del Lavoro',
      locationBadge: 'Linea di Produzione Elettronica 3C • Stazione di Audit Ergonomico',
      narrative:
        'Gli istituti di medicina del lavoro, gli enti certificatori di ergonomia e i team EHS manifatturieri impiegano LC Gloves-01 direttamente sulle linee di produzione attive. Mentre gli operatori assemblano componenti di precisione, il guanto acquisisce ogni flessione, estensione e deviazione ulnare sopra la soglia personalizzabile di 15°, fornendo report di conformità GBZ 336-2025 legalmente validi.',
      environmentalMetrics: [
        { label: 'Standard Diagnostico', value: 'Conforme a GBZ 336-2025' },
        { label: 'Precisione Angolare Statica', value: '≤ ±0.1° (Range ±180°)' },
        { label: 'Soglia Movimento Standard', value: '15° / 24 Movimenti·min⁻¹' },
      ],
      industries: [
        'Istituti e Ospedali di Medicina del Lavoro',
        'Enti Terzi di Certificazione e Test Ergonomici',
        'Audit Linee Assemblaggio Automotive ed Elettronica 3C',
        'Ottimizzazione Ergonomica delle Postazioni Industriali',
      ],
    },
    specifications: [
      { parameter: 'Modello', value: 'LC Gloves-01' },
      { parameter: 'Colore', value: 'Grigio Chiaro Tecnico con Moduli Sensori Bianco Opaco e Finiture Nere' },
      { parameter: 'Conformità', value: 'Criteri Diagnostici GBZ 336-2025 per la Sindrome del Tunnel Carpale Professionale' },
      { parameter: 'Applicazioni', value: 'Ospedali per la prevenzione delle malattie professionali, enti di collaudo terzi, audit postazioni manifatturiere' },
      { parameter: 'Soglia di Riconoscimento', value: '15° (personalizzabile)' },
      { parameter: 'Range Angolare', value: '±180°' },
      { parameter: 'Precisione Statica', value: '≤ ±0.1°' },
      { parameter: 'Conteggio Frequenza', value: 'Conta automaticamente i movimenti validi (standard: 24 movimenti/min)' },
      { parameter: 'Tracciamento Durata', value: 'Accumulo giornaliero delle ore lavorative effettive' },
      { parameter: 'Dimensioni di Misura', value: 'Angoli di flessione/estensione e deviazione radiale/ulnare del polso' },
      { parameter: 'Taglie', value: 'M, L, XL (personalizzabile)' },
      { parameter: 'Peso Netto', value: '200g' },
      { parameter: 'Dimensioni Imballo', value: '23 × 17 × 8cm' },
      { parameter: 'Accessori Opzionali', value: 'Tablet PC Industriale (con suite di analisi preinstallata) / Action Camera' },
      { parameter: 'Garanzia', value: 'Garanzia Industriale Ufficiale di 1 Anno' },
    ],
    quickCompare: {
      mechanism: 'Rilevamento Differenziale Doppio IMU + MCU Edge-AI',
      capacityOrTemp: 'Precisione Statica ≤ ±0.1° (Range ±180°)',
      powerOrCycle: 'Telemetria Wireless in Tempo Reale (24/min)',
      netWeight: '200g',
      primaryApplication: 'Audit GBZ 336-2025, Medicina del Lavoro, Qualità Manifatturiera',
    },
  },
  'frost-pcm-a': {
    name: 'Gilet Raffrescante PCM (Edizione TPU Trasparente)',
    shortTitle: 'Armatura a Cambio di Fase C17 Bio-Based',
    category: 'Serie Gestione Termica Personale',
    subCategory: 'Comfort Costante Passivo con C17 Bio-Based',
    headline: 'Armatura a Cambio di Fase Bio-Based. Comfort Toracico Costante a 22.08°C.',
    overview:
      'Realizzato con Materiale a Cambio di Fase (PCM) ad alta densità energetica che assorbe il calore corporeo a una temperatura costante di comfort (~23°C), LC Frost-PCM/A offre un raffrescamento del busto delicato e duraturo. Un singolo ciclo di accumulo del freddo fornisce 1–2 ore di sollievo in ambienti ad alta temperatura fino a 35°C. Riutilizzabile migliaia di volte: un microclima personale intrinsecamente sicuro e senza cavi.',
    metrics: [
      { value: '22.08°C', label: 'Temperatura Costante di Comfort a Cambio di Fase' },
      { value: '225 J/g', label: 'Elevato Calore Latente di Fusione' },
      { value: '0.55kg', label: 'Struttura Ultraleggera in TPU Trasparente' },
      { value: '1–2 Ore', label: 'Raffrescamento Continuo per Ciclo di Carica' },
    ],
    features: [
      {
        title: 'Raffrescamento Delicato a Misura d’Uomo',
        description:
          'Opera a 22.08°C, prevenendo completamente la vasocostrizione cutanea o i rischi di congelamento causati dai tradizionali accumulatori di ghiaccio a 0°C.',
      },
      {
        title: '100% Passivo e Intrinsecamente Sicuro',
        description:
          'Non richiede batterie, ventole o cavi. Zero rischi elettrici in camere bianche, zone con gas pericolosi e ambienti umidi.',
      },
      {
        title: 'Formulazione C17 a Degradazione Zero',
        description:
          'Il puro PCM n-alcano C17 di origine biologica sopporta migliaia di cicli di congelamento-scongelamento senza perdita di prestazioni.',
      },
      {
        title: 'Di Origine Vegetale e Biodegradabile',
        description:
          'Formulazione 100% da biomassa, non derivata dal petrolio, ecologica e atossica.',
      },
    ],
    hotspots: [
      {
        title: 'Matrice a Griglia a Raffreddamento Rapido',
        description:
          'Le celle indipendenti di PCM incapsulato si conformano al petto e alla schiena per massimizzare la superficie di scambio termico.',
        zone: 'Matrice Cellulare C17 Anteriore e Dorsale',
      },
      {
        title: 'Fibbie Regolabili Universali',
        description:
          'Le doppie fibbie laterali a sgancio rapido con cinghie nere si adattano a tutte le corporature e tipologie di divisa.',
        zone: 'Elementi di Fissaggio Laterali a Tensione',
      },
      {
        title: 'Guscio in TPU di Grado Medicale',
        description:
          'Il film trasparente impermeabile e resistente agli oli consente una sanificazione istantanea e una rapida pulizia a panno.',
        zone: 'Incapsulamento in TPU Saldato ad Alta Frequenza',
      },
      {
        title: 'Taglio Sottotuta a Basso Profilo',
        description:
          'Il profilo ultrasottile da 0.55 kg si adatta perfettamente sotto tute Hazmat, tute da camera bianca o gilet ad alta visibilità.',
        zone: 'Taglio Ergonomico Sottotuta da 0.55kg',
      },
    ],
    bentoCards: [
      {
        title: 'Matrice a Cambio di Fase in n-Alcano C17 Bio-Based',
        subtitle: 'Calore Latente di Fusione di 225 J/g a 22.08°C Costanti',
        description:
          'I cristalli a cambio di fase C17 di origine vegetale transitano tra stato solido e liquido a un plateau esatto di 22.08°C, assorbendo 225 J/g di calore metabolico senza causare shock da freddo o umidità da condensa.',
        materialTag: 'PCM C17 100% Bio-Based • 225 J/g',
      },
      {
        title: 'Cuciture in TPU di Grado Medicale Saldate a Radiofrequenza',
        subtitle: 'Impermeabile, Resistente agli Oli e Sanificazione Istantanea',
        description:
          'I canali a griglia in Poliuretano Termoplastico (TPU) saldati ad alta frequenza resistono a perforazioni, schizzi chimici e contaminazione biologica per impieghi sterili in ambito medico e in camera bianca.',
        materialTag: 'TPU Trasparente ad Alta Resistenza',
      },
      {
        title: 'Sistema Universale di Cinghie con Doppia Fibbia Laterale',
        subtitle: 'Ergonomia Taglia Unica per Impiego Sottotuta',
        description:
          'Le fibbie in resina acetalica a basso profilo e le cinghie ad alta resistenza fissano il gilet da 0.55 kg sotto tute sigillate Hazmat o da camera bianca con ingombro nullo.',
        materialTag: 'Doppie Fibbie Tattiche a Sgancio Laterale',
      },
    ],
    deployment: {
      title: 'Camere Bianche Sigillate, DPI Medici e Operazioni di Sanificazione ad Alto Calore',
      locationBadge: 'Camera Bianca Semiconduttori e Impiego DPI di Biosicurezza',
      narrative:
        'Gli operatori che indossano tute impermeabili Hazmat, tute integrali DPI mediche o tute da camera bianca non possono affidarsi al raffreddamento evaporativo del sudore o all’aria soffiata da ventole. Con soli 0.55 kg, il trasparentissimo LC Frost-PCM/A scivola agevolmente sotto gli indumenti protettivi sigillati, mantenendo un microclima costante a 22.08°C per 1–2 ore a ciclo e ricaricandosi in 60 minuti a -18°C.',
      environmentalMetrics: [
        { label: 'Plateau di Cambio Fase', value: '22.08°C Costanti' },
        { label: 'Capacità di Calore Latente', value: '225 J/g' },
        { label: 'Ricarica Rapida in Freezer', value: '1 Ora a -18°C' },
      ],
      industries: [
        'Ambienti a Temperatura Estremamente Elevata',
        'Camere Bianche Semiconduttori e Farmaceutiche',
        'Team DPI Medici e Biosicurezza',
        'Sanificazione Municipale e Interventi Hazmat',
      ],
    },
    specifications: [
      { parameter: 'Modello', value: 'LC Frost-PCM/A' },
      { parameter: 'Colore', value: 'Cristallo Trasparente (opzioni di colorazione PCM personalizzabili)' },
      { parameter: 'Utenti Destinatari', value: 'Operatori in ambienti a calore estremo, camere bianche, DPI medici, sanificazione' },
      { parameter: 'Calore di Fusione', value: '225 J/g' },
      { parameter: 'Temperatura di Cambio Fase', value: '22.08°C' },
      { parameter: 'Durata Raffrescamento', value: '1–2 ore (valore di riferimento in base all’intensità del lavoro e alla temperatura ambiente)' },
      { parameter: 'Tempo di Ricarica a Freddo', value: 'In congelatore a -18°C per 1 ora, OPPURE in frigorifero a 0–4°C per 1–2 ore' },
      { parameter: 'Materiale Guscio', value: 'Poliuretano Termoplastico (TPU) ad alta resistenza' },
      { parameter: 'Taglia', value: 'Taglia Unica Universale' },
      { parameter: 'Peso Netto', value: '0.55kg' },
      { parameter: 'Dimensioni Imballo', value: '40 × 30 × 10cm' },
      { parameter: 'Accessori Opzionali', value: 'Colorazioni PCM personalizzate' },
      { parameter: 'Garanzia', value: 'Garanzia Industriale Ufficiale di 1 Anno' },
    ],
    quickCompare: {
      mechanism: 'PCM C17 Bio-Based Passivo in TPU Trasparente',
      capacityOrTemp: '22.08°C Costanti (225 J/g)',
      powerOrCycle: '1–2h Raffrescamento / 1h Ricarica (-18°C)',
      netWeight: '0.55kg',
      primaryApplication: 'Camere Bianche, DPI Medici, Sottotuta Hazmat',
    },
  },
  'frost-pcm-g': {
    name: 'Gilet Raffrescante PCM Ignifugo',
    shortTitle: 'Armatura PCM Antistatica e Ignifuga',
    category: 'Serie Gestione Termica Personale',
    subCategory: 'Scudo Termico Passivo per Aree Pericolose',
    headline: 'Armatura PCM Antistatica e Ignifuga. Raffrescamento Passivo per Linee Operative Pericolose.',
    overview:
      'Progettato con Materiale a Cambio di Fase ad alta densità energetica che assorbe il calore a una temperatura costante di ~23°C e racchiuso in un guscio esterno antistatico e ignifugo. Concepito per operazioni petrolchimiche, fonderie, saldatura e servizi di pubblica utilità dove convergono rischi di scintille, polveri esplosive e calore estremo.',
    metrics: [
      { value: '22.08°C', label: 'Zona di Comfort a Cambio di Fase Non Irritante' },
      { value: '225 J/g', label: 'Capacità di Accumulo di Calore Latente' },
      { value: '360°', label: 'Bande di Sicurezza Retroriflettenti ad Alta Visibilità' },
      { value: '0V', label: 'Raffrescamento Passivo Intrinsecamente Sicuro Zero Scintille' },
    ],
    features: [
      {
        title: 'Protezione Ignifuga e Antistatica',
        description:
          'Il robusto tessuto twill industriale respinge scorie, scintille e l’accumulo di cariche elettrostatiche.',
      },
      {
        title: 'Regolazione Termica Costante a 22.08°C',
        description:
          'Mantiene un raffrescamento continuo del busto senza shock termico durante lavori manuali pesanti con temperature ambiente oltre i 35°C.',
      },
      {
        title: 'Nucleo in Biomassa C17 ad Alta Stabilità',
        description:
          'Migliaia di cicli termici senza degradazione; atossico ed ecologico.',
      },
      {
        title: 'Visibilità Notturna e in Scarsa Illuminazione',
        description:
          'Le doppie bande riflettenti argentate ad alta visibilità garantiscono sicurezza a 360° nei cantieri stradali e negli impianti industriali bui.',
      },
    ],
    hotspots: [
      {
        title: 'Trama Esterna Ignifuga e Antistatica',
        description:
          'Il robusto tessuto ripstop resiste a strappi, abrasioni e schizzi di metallo fuso.',
        zone: 'Guscio Industriale in Twill Ignifugo',
      },
      {
        title: 'Fascia Lombare Elastica con Chiusura a Strappo',
        description:
          'L’ampia fascia addominale industriale in velcro aderisce saldamente a tutte le corporature.',
        zone: 'Chiusura Fascia Addominale ad Alta Resistenza',
      },
      {
        title: 'Tasche Termiche Modulari per PCM',
        description:
          'Gli scomparti interni dedicati mantengono i pacchi PCM sigillati ben aderenti al busto.',
        zone: 'Alloggiamenti Interni per Moduli Termici C17',
      },
      {
        title: 'Doppie Bande Riflettenti di Segnalazione di Sicurezza',
        description:
          'Le strisce retroriflettenti di grado 3M sul petto e in vita assicurano la visibilità sul campo.',
        zone: 'Strisce di Segnalazione Retroriflettenti a 360°',
      },
    ],
    bentoCards: [
      {
        title: 'Guscio Esterno Ripstop Antistatico e Ignifugo',
        subtitle: 'Protezione Zero Scintille per Zone Pericolose EX',
        description:
          'Il tessuto industriale antistatico e ignifugo appositamente trattato dissipa le cariche elettrostatiche e resiste agli schizzi di saldatura, consentendo un raffrescamento sicuro del busto all’interno di raffinerie petrolchimiche e impianti gas.',
        materialTag: 'Twill Industriale Ignifugo e Antistatico',
      },
      {
        title: 'Doppie Bande di Sicurezza Retroriflettenti a 360°',
        subtitle: 'Visibilità ad Alto Contrasto di Notte e in Galleria',
        description:
          'Le ampie bande retroriflettenti argentate avvolgono a 360° il torace e la vita, garantendo il riconoscimento immediato dell’operatore in raffinerie poco illuminate, gallerie e cantieri stradali notturni.',
        materialTag: 'Finiture Retroriflettenti a 360°',
      },
      {
        title: 'Alloggiamenti Interni Modulari PCM e Fascia Elastica in Vita',
        subtitle: 'Sostituzione Rapida a Caldo dei Pacchi tra i Turni',
        description:
          'Gli scomparti termici interni consentono alle squadre di sostituire in pochi secondi i pacchi PCM C17 a 22.08°C appena ricaricati, mentre l’ampia fascia in velcro blocca il gilet saldamente al busto.',
        materialTag: 'Tasche PCM Modulari • 0.96kg Totali',
      },
    ],
    deployment: {
      title: 'Raffinerie Petrolchimiche, Reparti Saldatura e Servizi Pubblici Notturni',
      locationBadge: 'Unità di Cracking Petrolchimico Certificata EX • Zona ad Alto Calore',
      narrative:
        'Nelle zone petrolchimiche antideflagranti (EX) e nelle officine di saldatura attive, le batterie elettroniche e i motori a spazzole comportano rischi di innesco inaccettabili. LC Frost-PCM/G abbina il raffrescamento passivo a cambio di fase a 22.08°C (0V) a un guscio esterno antistatico e ignifugo e bande riflettenti a 360°, offrendo un sollievo termico senza compromessi laddove l’elettronica è vietata.',
      environmentalMetrics: [
        { label: 'Rischio di Innesco e Scintille', value: '0V Intrinsecamente Sicuro' },
        { label: 'Comfort a Cambio di Fase', value: '22.08°C (225 J/g)' },
        { label: 'Peso Completo del Gilet', value: '0.96kg' },
      ],
      industries: [
        'Petrolchimica e Raffinazione Petrolifera',
        'Metallurgia e Operazioni di Saldatura',
        'Manutenzione Reti Elettriche e Sottostazioni',
        'Ingegneria su Turni Notturni ad Alta Temperatura',
      ],
    },
    specifications: [
      { parameter: 'Modello', value: 'LC Frost-PCM/G' },
      { parameter: 'Colore', value: 'Grigio Industriale con Finiture Riflettenti ad Alta Visibilità (personalizzabile)' },
      { parameter: 'Utenti Destinatari', value: 'Operatori petrolchimici, metallurgici, saldatori, addetti alla rete elettrica e turnisti notturni ad alta temperatura' },
      { parameter: 'Calore di Fusione', value: '225 J/g' },
      { parameter: 'Temperatura di Cambio Fase', value: '22.08°C' },
      { parameter: 'Durata Raffrescamento', value: '1–2 ore (riferimento in base all’intensità del lavoro e alla temperatura ambiente)' },
      { parameter: 'Tempo di Ricarica a Freddo', value: 'In congelatore a -18°C per 1 ora, OPPURE in frigorifero a 0–4°C per 1–2 ore' },
      { parameter: 'Materiale Tessuto', value: 'Tessuto antistatico e ignifugo' },
      { parameter: 'Taglie', value: 'Taglia Standard / Taglia Plus' },
      { parameter: 'Peso Netto', value: '0.96kg' },
      { parameter: 'Dimensioni Imballo', value: '40 × 30 × 10cm' },
      { parameter: 'Garanzia', value: 'Garanzia Industriale Ufficiale di 1 Anno' },
    ],
    quickCompare: {
      mechanism: 'PCM C17 Bio-Based Passivo in Guscio Ignifugo Antistatico',
      capacityOrTemp: '22.08°C Costanti (225 J/g)',
      powerOrCycle: '1–2h Raffrescamento / 0V Intrinsecamente Sicuro',
      netWeight: '0.96kg',
      primaryApplication: 'Petrolchimica, Saldatura, Metallurgia, Turni Notturni',
    },
  },
  'frost-tec-w': {
    name: 'Gilet Raffrescante ad Acqua a Semiconduttore',
    shortTitle: 'Chiller Attivo a Liquido da 80W + Doppio Flusso d’Aria',
    category: 'Serie Gestione Termica Personale',
    subCategory: 'Liquido Attivo da 80W + Doppio Flusso d’Aria',
    headline: 'Chiller Termoelettrico Attivo da 80W. Liquido a Circuito Chiuso + Doppio Flusso d’Aria.',
    overview:
      'Un dispositivo indossabile di raffrescamento attivo alimentato da chip di raffreddamento termoelettrico allo stato solido (TEC) e da un sistema di circolazione dell’acqua a circuito chiuso. Eroga un raffrescamento del busto stabile e regolabile su più livelli entro 2 minuti dall’accensione. Integra una silenziosa ventola a turbina di scarico posteriore e doppie ventole anteriori di mandata d’aria sul petto per mantenere viso e busto asciutti tutto il giorno nelle operazioni antincendio, nell’edilizia, nella manutenzione elettrica e nella sanificazione.',
    metrics: [
      { value: '80W', label: 'Capacità di Raffreddamento Termoelettrico Attivo' },
      { value: '2 min', label: 'Tempo di Stabilizzazione Termica Rapida' },
      { value: '24V', label: 'Architettura Chiller ad Alta Efficienza' },
      { value: '2–4 Ore', label: 'Autonomia Continua della Batteria sul Turno' },
    ],
    features: [
      {
        title: 'Regolazione Attiva di Precisione della Temperatura',
        description:
          'Il chiller termoelettrico sottrae attivamente calore al liquido circolante, superando i limiti dello scioglimento passivo.',
      },
      {
        title: 'Evaporazione ad Aria Forzata a Doppia Zona',
        description:
          'La turbina posteriore espelle il calore mentre le due ventole anteriori dirigono l’aria verso il collo e il viso per accelerare l’evaporazione del sudore.',
      },
      {
        title: 'Autonomia Estesa della Batteria sul Campo',
        description:
          'L’alimentazione al litio da 24V garantisce 1–2 ore con un singolo pacco batteria e fino a 4 ore con doppia batteria.',
      },
      {
        title: 'Canali del Liquido Sigillati a Tenuta Stagna',
        description:
          'I tubi in TPU industriale resistono ad alte pressioni, torsioni e condizioni di cantiere gravose senza perdite.',
      },
    ],
    hotspots: [
      {
        title: 'Guscio con Scollo a V Ignifugo e Antistatico',
        description:
          'Tessuto grigio industriale morbido e protettivo, resistente al calore e ai rischi elettrostatici.',
        zone: 'Struttura Anteriore Ignifuga',
      },
      {
        title: 'Cinghie di Compressione Laterale',
        description:
          'I tenditori ergonomici fanno aderire saldamente i canali dell’acqua di raffreddamento al busto.',
        zone: 'Tenditori Bilaterali di Contatto Termico',
      },
      {
        title: 'Modulo Chiller TEC Posteriore da 80W',
        description:
          'Elegante alloggiamento argentato con ventola a turbina nera che stabilizza la temperatura dell’acqua in 2 minuti.',
        zone: 'Nucleo Termoelettrico Dorsale da 24V / 80W',
      },
      {
        title: 'Doppie Tasche Anteriori con Mandata d’Aria',
        description:
          'Le tasche anteriori portautensili alloggiano le batterie spingendo un flusso d’aria fresca verso il mento e il torace.',
        zone: 'Moduli Anteriori di Ventilazione Ascendente',
      },
    ],
    bentoCards: [
      {
        title: 'Chiller TEC Dorsale allo Stato Solido da 80W e Turbina di Scarico',
        subtitle: 'Architettura da 24V / 100W • Circuito Refrigerato Stabile in 2 Minuti',
        description:
          'Montato ergonomicamente sulla schiena, il modulo termoelettrico anodizzato argento da 80W raffredda l’acqua circolante interna entro 2 minuti, mentre una silenziosa turbina radiale espelle il calore sottratto lontano dall’operatore.',
        materialTag: 'Chiller TEC da 80W • Stabilizzazione in 2 Min',
      },
      {
        title: 'Doppie Ventole Toraciche ad Aria Forzata',
        subtitle: 'Evaporazione Ascendente del Sudore su Viso e Collo',
        description:
          'I soffianti integrati nelle tasche anteriori convogliano aria fresca verso l’alto lungo il petto, il collo e il viso, combinando il raffreddamento conduttivo interno a liquido con l’asciugatura convettiva esterna.',
        materialTag: 'Doppie Ventole Anteriori a Flusso Ascendente',
      },
      {
        title: 'Fodera ad Acqua a Circuito Chiuso in TPU Medicale/Industriale',
        subtitle: 'Rete Microfluidica ad Alta Pressione Anti-Strozzamento',
        description:
          'I microcanali a serpentina in TPU distribuiscono l’acqua refrigerata in modo uniforme sul busto e possono essere abbinati a pacchi di raffreddamento PCM supplementari per picchi termici estremi.',
        materialTag: 'Fodera Fluidica in TPU a Circuito Chiuso',
      },
    ],
    deployment: {
      title: 'Manutenzione Reti Elettriche ad Alta Tensione, Antincendio ed Edilizia Pesante',
      locationBadge: 'Revisione Trasformatore Sottostazione 500kV • Picco di Carico Estivo',
      narrative:
        'Quando le squadre della rete elettrica e i vigili del fuoco operano sotto un calore radiante superiore a 40°C, gli accumulatori di ghiaccio passivi possono sciogliersi prima del termine di un intervento complesso. LC Frost-TEC/W combina 80W di raffreddamento attivo a liquido termoelettrico con doppie ventole toraciche che indirizzano aria fresca su collo e viso, mantenendo la massima lucidità cognitiva per 2–4 ore.',
      environmentalMetrics: [
        { label: 'Potenza Raffreddamento Attivo', value: '80W (24V / 100W Nominali)' },
        { label: 'Stabilizzazione Circuito', value: '2 Minuti' },
        { label: 'Autonomia Continua', value: '2–4 Ore (Doppia Batteria)' },
      ],
      industries: [
        'Manutenzione Reti Elettriche e Sottostazioni',
        'Vigili del Fuoco e Soccorso d’Emergenza',
        'Sicurezza Pubblica e Controllo del Traffico',
        'Edilizia Pesante e Sanificazione Municipale',
      ],
    },
    specifications: [
      { parameter: 'Modello', value: 'LC Frost-TEC/W' },
      { parameter: 'Colore', value: 'Grigio Tecnico (personalizzabile)' },
      { parameter: 'Utenti Destinatari', value: 'Vigili del fuoco, sicurezza pubblica, rete elettrica, edilizia, sanificazione in condizioni di caldo estremo' },
      { parameter: 'Capacità di Raffreddamento', value: '80W' },
      { parameter: 'Tensione Nominale', value: '24V' },
      { parameter: 'Potenza Nominale', value: '100W' },
      { parameter: 'Tempo di Risposta Raffreddamento', value: 'Stabile in 2 min' },
      { parameter: 'Autonomia Batteria', value: '1–2 ore con batteria singola (2–4 ore di autonomia continua di sistema)' },
      { parameter: 'Tessuto Esterno', value: 'Tessuto antistatico e ignifugo' },
      { parameter: 'Tessuto Fodera', value: 'Fodera con canali d’acqua in TPU medicale/industriale' },
      { parameter: 'Taglia', value: 'Taglia Unica Universale' },
      { parameter: 'Peso Netto', value: '< 3kg' },
      { parameter: 'Dimensioni Imballo', value: '40 × 30 × 10cm' },
      { parameter: 'Accessori Opzionali', value: 'Pacchi di raffreddamento PCM supplementari' },
      { parameter: 'Garanzia', value: 'Garanzia Industriale Ufficiale di 1 Anno' },
    ],
    quickCompare: {
      mechanism: 'Circuito Liquido TEC Attivo da 80W + Doppie Ventole Toraciche',
      capacityOrTemp: 'Raffreddamento Attivo da 80W (Stabile in 2 min)',
      powerOrCycle: '24V / 100W • Autonomia 2–4h',
      netWeight: '< 3kg',
      primaryApplication: 'Antincendio, Rete Elettrica, Edilizia Pesante',
    },
  },
  'frost-tec-d': {
    name: 'Gilet a Semiconduttore a Raffreddamento Diretto',
    shortTitle: 'Gilet Peltier allo Stato Solido Istantaneo in 2 Secondi',
    category: 'Serie Gestione Termica Personale',
    subCategory: 'Peltier allo Stato Solido Istantaneo in 2 Secondi',
    headline: 'Raffreddamento Peltier Istantaneo in 2 Secondi. Zero Acqua, Zero Refrigerante, 8 Ore di Autonomia.',
    overview:
      'Sfruttando l’effetto Peltier allo stato solido tramite moduli TEC a contatto diretto, LC Frost-TEC/D non richiede ghiaccio, liquido refrigerante né compressore. Le piastre di conduzione termica a contatto diretto assorbono il calore del busto immediatamente all’accensione — stabilizzandosi in soli 2 secondi — mentre ventole ultrasilenziose dissipano il calore di scarto. Dotato di struttura in rete traspirante e bande riflettenti ad alta visibilità per ispezioni industriali, DPI medici e operazioni all’aperto.',
    metrics: [
      { value: '2 Secondi', label: 'Stabilizzazione Ultrarapida del Raffreddamento allo Stato Solido' },
      { value: '0 Liquidi', label: 'Conduzione Diretta Completamente a Secco (Zero Rischio Perdite)' },
      { value: '2–8 Ore', label: 'Operatività Estesa con Batteria Modulare' },
      { value: '> 20,000 Ore', label: 'Vita Utile del Semiconduttore allo Stato Solido' },
    ],
    features: [
      {
        title: 'Conduzione Istantanea allo Stato Solido in 2 Secondi',
        description:
          'Le piastre di contatto diretto Peltier raffreddano immediatamente all’attivazione senza pre-congelamento o rabbocco d’acqua.',
      },
      {
        title: 'Funzionamento Ultrasilenzioso e Senza Vibrazioni',
        description:
          'Le ventole assiali a bassa rumorosità eliminano il ronzio dei compressori e le vibrazioni delle pompe per ispezioni silenziose.',
      },
      {
        title: 'Fino a 8 Ore di Alimentazione Modulare',
        description:
          'Il basso assorbimento da 60W consente 2–8 ore di autonomia (2 ore per ciascun pacco batteria leggero).',
      },
      {
        title: 'Zero Manutenzione e Longevità di 20.000 Ore',
        description:
          'L’architettura allo stato solido elimina tubi, refrigeranti e pompe per una durabilità a prova di perdite.',
      },
    ],
    hotspots: [
      {
        title: 'Matrice TEC a Contatto Diretto a 4 Moduli',
        description:
          'Quattro piastre di conduzione Peltier posizionate sulla parte superiore della schiena erogano un raffreddamento istantaneo direttamente sulla pelle.',
        zone: 'Matrice Dorsale Quadrupla Peltier allo Stato Solido',
      },
      {
        title: 'Fibbie Toraciche Gialle a Sgancio Rapido',
        description:
          'Le chiusure toraciche ad alta visibilità e il cordino elastico posteriore assicurano una vestibilità aderente e non restrittiva.',
        zone: 'Imbracatura Anteriore ad Alta Visibilità',
      },
      {
        title: 'Controller Toracico e Ventole a Bassa Rumorosità',
        description:
          'La manopola circolare montata sul petto fornisce una regolazione termica intuitiva multistadio.',
        zone: 'Manopola Termica Rotante e Dissipatori Assiali',
      },
      {
        title: 'Rete ad Alta Visibilità Rimovibile e Lavabile',
        description:
          'Rete antistatica traspirante con strisce riflettenti giallo neon e argento; l’elettronica si scollega facilmente per il lavaggio.',
        zone: 'Telaio Modulare Lavabile in Rete Antistatica',
      },
    ],
    bentoCards: [
      {
        title: 'Matrice di Conduzione Peltier allo Stato Solido a Contatto Diretto a 4 Moduli',
        subtitle: 'Capacità di Raffreddamento da 45W • Abbattimento Termico Istantaneo in 2 Secondi',
        description:
          'Quattro piastre di conduzione termica in alluminio anodizzato accoppiate direttamente a chip semiconduttori allo stato solido sottraggono calore dalla parte superiore della schiena entro 2 secondi dall’accensione: zero acqua, zero pompe e oltre 20.000 ore di vita utile dei chip.',
        materialTag: 'Peltier Stato Solido a 4 Moduli • Durata >20,000h',
      },
      {
        title: 'Fibbie Toraciche ad Alta Visibilità e Tensione Elastica Bungee',
        subtitle: 'Contatto Costante delle Piastre di Conduzione sulla Pelle in Movimento',
        description:
          'Le fibbie gialle a sgancio rapido ad alta visibilità e l’allacciatura elastica dinamica posteriore mantengono una pressione di contatto ottimale tra i 4 moduli Peltier e la parte superiore della schiena dell’operatore.',
        materialTag: 'Chiusure a Sgancio Rapido ad Alta Visibilità',
      },
      {
        title: 'Controller Rotante sul Petto e Rete Modulare Lavabile',
        subtitle: 'Architettura a Basso Assorbimento da 12V / 60W per 2–8 Ore di Autonomia',
        description:
          'L’intuitiva manopola rotante montata sul petto regola istantaneamente l’intensità del raffreddamento allo stato solido, mentre l’intero cablaggio elettronico si rimuove per consentire il lavaggio del gilet in rete antistatica e ignifuga.',
        materialTag: 'Rete Ignifuga Antistatica Rimovibile e Lavabile',
      },
    ],
    deployment: {
      title: 'Ispezione Linee Ferroviarie, Sicurezza Esterna e Pattugliamenti Mobili sul Campo',
      locationBadge: 'Ispezione Corridoio Ferroviario ad Alta Velocità • Turno di Pattuglia di 8 Ore',
      narrative:
        'Gli ingegneri addetti alle ispezioni mobili, gli agenti della viabilità e il personale di sicurezza all’aperto necessitano di un raffrescamento immediato senza trasportare serbatoi d’acqua o attendere il congelamento dei pacchi. Con un peso di ~1.7 kg e una stabilizzazione in soli 2 secondi su un sistema a batteria da 12V, LC Frost-TEC/D offre fino a 8 ore di raffreddamento allo stato solido asciutto e ultrasilenzioso durante i lunghi pattugliamenti sul campo.',
      environmentalMetrics: [
        { label: 'Stabilizzazione Termica', value: '2 Secondi (Istantaneo)' },
        { label: 'Autonomia Batteria Modulare', value: '2–8 Ore (12V / 60W)' },
        { label: 'Vita Utile Semiconduttore', value: '> 20,000 Ore' },
      ],
      industries: [
        'Ispezione Industriale e Linee Ferroviarie',
        'DPI Medici e Cliniche Mobili',
        'Viabilità Esterna e Personale di Terra Aeroportuale',
        'Personale di Sicurezza e Pattugliamento',
      ],
    },
    specifications: [
      { parameter: 'Modello', value: 'LC Frost-TEC/D' },
      { parameter: 'Colore', value: 'Rete Grigio Tattico con Finiture Riflettenti Giallo Neon ad Alta Visibilità e Cinghie Nere (Opzione Nero)' },
      { parameter: 'Utenti Destinatari', value: 'Ispezioni industriali, DPI medici, viabilità esterna, personale di sicurezza' },
      { parameter: 'Capacità di Raffreddamento', value: '45W' },
      { parameter: 'Tensione Nominale', value: '12V' },
      { parameter: 'Potenza Nominale', value: '60W' },
      { parameter: 'Tempo di Risposta Raffreddamento', value: 'Raffreddamento istantaneo, stabile in 2s' },
      { parameter: 'Autonomia Batteria', value: '2–8 ore (2 ore per singolo pacco batteria)' },
      { parameter: 'Vita Utile Chip', value: '> 20,000 ore' },
      { parameter: 'Tessuto Esterno', value: 'Rete traspirante antistatica e ignifuga (modulare, rimovibile e lavabile)' },
      { parameter: 'Taglie', value: 'Taglia Standard / Taglia Plus' },
      { parameter: 'Peso Netto', value: '~1.7kg' },
      { parameter: 'Dimensioni Imballo', value: '40 × 30 × 10cm' },
      { parameter: 'Garanzia', value: 'Garanzia Industriale Ufficiale di 1 Anno' },
    ],
    quickCompare: {
      mechanism: 'Peltier Stato Solido a Contatto Diretto a 4 Moduli (a Secco)',
      capacityOrTemp: 'Conduzione Diretta da 45W (Istantaneo in 2s)',
      powerOrCycle: '12V / 60W • Autonomia Modulare 2–8h',
      netWeight: '~1.7kg',
      primaryApplication: 'Ispezioni Industriali, Viabilità, Sicurezza, DPI Medici',
    },
  },
  'frost-acc-w': {
    name: 'Gilet Raffrescante ad Acqua con Compressore',
    shortTitle: 'Chiller Estremo con Micro-Inverter da 300W',
    category: 'Serie Gestione Termica Personale',
    subCategory: 'Chiller Estremo con Micro-Inverter da 300W',
    headline: 'Refrigerazione Attiva con Micro-Inverter da 300W per Rischi di Calore Estremo.',
    overview:
      'Ammiraglia della linea LC Frost, LC Frost-ACC/W integra un compressore frigorifero inverter miniaturizzato con una rete di circolazione del liquido refrigerato a circuito chiuso. Con una capacità di raffreddamento attivo leader del settore da 60 a 300W, un ampio range di regolazione della temperatura e un’erogazione termica costante, rappresenta l’armatura protettiva refrigerante definitiva per metallurgia estrema, antincendio e operazioni in spazi confinati.',
    metrics: [
      { value: '60–300W', label: 'Refrigerazione Attiva a Compressore ad Alte Prestazioni' },
      { value: '< 4kg', label: 'Unità Chiller Indossabile Ergonomicamente Bilanciata' },
      { value: '3 min', label: 'Stabilizzazione Rapida del Circuito Refrigerato ad Alta Capacità' },
      { value: '100%', label: 'Circuito del Liquido Sigillato a Tenuta Stagna' },
    ],
    features: [
      {
        title: 'Refrigerazione Attiva Estrema da 300W',
        description:
          'Il compressore micro-inverter raffredda rapidamente l’acqua in circolazione fin dall’avvio con regolazione digitale multistadio della temperatura.',
      },
      {
        title: 'Mobilità Integrata Inferiore a 4 kg',
        description:
          'L’architettura compatta di raffreddamento bilancia il peso lungo la parte inferiore del busto per una mobilità senza restrizioni negli spazi ristretti.',
      },
      {
        title: 'Autonomia Intensiva di 2–4 Ore sul Turno',
        description:
          'Il sistema di batterie al litio ad alta capacità da 24V sostiene una refrigerazione gravosa durante i turni più impegnativi.',
      },
      {
        title: 'Circuito Fluidico Sigillato e Antiurto',
        description:
          'I robusti raccordi per liquidi e le sacche pressurizzate in TPU resistono a forti urti, vibrazioni e lavaggi in impianto.',
      },
    ],
    hotspots: [
      {
        title: 'Guscio Esterno Ignifugo con Scollo a V',
        description:
          'Guscio antistatico grigio minimalista con cerniera centrale ad alta resistenza che si indossa comodamente sopra gli strati base.',
        zone: 'Guscio Protettivo con Scollo a V Ignifugo e Antistatico',
      },
      {
        title: 'Cinghie di Compressione Bilaterale',
        description:
          'Le cinghie di tensione laterali massimizzano il contatto termico tra la sacca interna refrigerata in TPU e il busto.',
        zone: 'Cinghie Bilaterali di Compressione del Busto',
      },
      {
        title: 'Chiller a Compressore Micro-Inverter',
        description:
          'Il nucleo del compressore miniaturizzato da 24V stabilizza la circolazione dell’acqua refrigerata entro 3 minuti.',
        zone: 'Nucleo Frigorifero Micro-Inverter da 60–300W',
      },
      {
        title: 'Sacca Interna di Raffreddamento in TPU e Circuito Isolato',
        description:
          'La rete di liquido a circuito chiuso abbinata alla fodera 3D traspirante previene l’accumulo di condensa.',
        zone: 'Sacca in TPU Pressurizzata a Circuito Chiuso',
      },
    ],
    bentoCards: [
      {
        title: 'Nucleo Compressore Frigorifero Inverter Miniaturizzato da 24V',
        subtitle: 'Potenza di Raffreddamento Attivo 60–300W • 110W di Potenza Nominale',
        description:
          'A differenza dei comuni raffreddatori termoelettrici, LC Frost-ACC/W utilizza un vero ciclo a compressione di vapore micro-inverter in grado di erogare fino a 300W di potenza frigorifera, mantenendo la circolazione di liquido freddo anche sotto l’irraggiamento di fonderia oltre i 50°C.',
        materialTag: 'Compressore Micro-Inverter da 60–300W',
      },
      {
        title: 'Sacca Pressurizzata di Raffreddamento a Liquido in TPU ad Alta Durabilità',
        subtitle: 'Fluidica 100% a Tenuta Stagna con Fodera 3D Anticondensa',
        description:
          'La sacca di raffreddamento a serpentina ad alta densità in TPU massimizza la superficie di contatto con il busto, mentre una barriera interna in rete 3D traspirante previene la sensazione di umidità sulla pelle.',
        materialTag: 'Sacca per Liquido Pressurizzata in TPU',
      },
      {
        title: 'Guscio Antistatico Ignifugo e Cerniera Centrale ad Alta Resistenza',
        subtitle: 'Ergonomia Bilanciata < 4kg per Spazi Confinati',
        description:
          'Il tessuto esterno grigio industriale antistatico e ignifugo con finiture nere rinforzate e cinghie di compressione bilaterali resiste a scintille, scorie e forti abrasioni.',
        materialTag: 'Guscio Ignifugo Antistatico • < 4kg Totali',
      },
    ],
    deployment: {
      title: 'Fonderie Metallurgiche Estreme, Antincendio e Operazioni in Spazi Confinati',
      locationBadge: 'Altoforno e Reparto Colata Metallo Fuso • Ambiente >45°C',
      narrative:
        'Nei reparti di colata degli altiforni, nelle cabine di mezzi pesanti prive di climatizzazione e nelle missioni di soccorso profondo in spazi confinati, i carichi di calore radiante sopraffanno i gilet raffrescanti convenzionali. Erogando 60–300W di refrigerazione attiva a compressione di vapore in un sistema indossabile inferiore a 4 kg, LC Frost-ACC/W stabilizza l’acqua refrigerata in 3 minuti e protegge la temperatura corporea interna nelle condizioni industriali più estreme della terra.',
      environmentalMetrics: [
        { label: 'Range Refrigerazione Attiva', value: '60–300W (24V / 110W)' },
        { label: 'Stabilizzazione Circuito Freddo', value: '3 Minuti' },
        { label: 'Peso Completo del Sistema', value: '< 4.0kg' },
      ],
      industries: [
        'Fonderie Metallurgiche e Siderurgiche',
        'Vigili del Fuoco e Soccorso Hazmat',
        'Ingegneria delle Gallerie e Spazi Confinati',
        'Cabine di Mezzi Pesanti Non Climatizzate',
      ],
    },
    specifications: [
      { parameter: 'Modello', value: 'LC Frost-ACC/W' },
      { parameter: 'Colore', value: 'Grigio Industriale con Finiture Nere' },
      { parameter: 'Utenti Destinatari', value: 'Ambienti a temperatura estremamente elevata (metallurgia, fonderia, antincendio, cabine mezzi pesanti)' },
      { parameter: 'Capacità di Raffreddamento', value: '60–300W' },
      { parameter: 'Tensione Nominale', value: '24V' },
      { parameter: 'Potenza Nominale', value: '110W' },
      { parameter: 'Tempo di Risposta Raffreddamento', value: 'Stabile in 3 min' },
      { parameter: 'Autonomia Batteria', value: '1–2 ore con batteria singola (2–4 ore di operatività continua del sistema)' },
      { parameter: 'Tessuto Esterno', value: 'Tessuto antistatico e ignifugo' },
      { parameter: 'Tessuto Fodera', value: 'Sacca di raffreddamento a liquido in TPU ad alta durabilità' },
      { parameter: 'Taglia', value: 'Taglia Unica Universale' },
      { parameter: 'Peso Netto', value: '< 4kg' },
      { parameter: 'Dimensioni Imballo', value: '40 × 30 × 10cm' },
      { parameter: 'Garanzia', value: 'Garanzia Industriale Ufficiale di 1 Anno' },
    ],
    quickCompare: {
      mechanism: 'Compressore Attivo Micro-Inverter + Liquido a Circuito Chiuso',
      capacityOrTemp: 'Refrigerazione Attiva 60–300W (Stabile in 3 min)',
      powerOrCycle: '24V / 110W • 2–4h Continue',
      netWeight: '< 4kg',
      primaryApplication: 'Metallurgia Estrema, Fonderia, Antincendio, Spazi Confinati',
    },
  },
};
