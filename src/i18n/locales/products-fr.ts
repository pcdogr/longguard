import type { ProductTranslationsMap } from '../types';

export const PRODUCTS_FR: ProductTranslationsMap = {
  'power-ua': {
    name: 'Exosquelette Passif des Membres Supérieurs',
    shortTitle: 'Armure Bionique pour Travaux en Hauteur',
    category: 'Série Exosquelettes Bioniques',
    subCategory: 'Armure Carbone Zéro Énergie pour Bras Levés',
    headline: 'Armure Bionique Bras Levés. Soulagement Purement Mécanique.',
    overview:
      'Conçu avec une architecture bionique purement mécanique offrant une assistance directionnelle précise, le LC Power-U/A est léger, extrêmement fiable et adaptable aux environnements industriels complexes. Doté de réglages multi-niveaux pour s’adapter à toutes les morphologies, il est spécialement pensé pour l’assemblage automobile, la maintenance électrique, la construction, la réparation aéronautique et la récolte agricole — réduisant drastiquement la charge musculaire des épaules et des bras tout en améliorant l’efficacité opérationnelle et le confort sur toute la journée.',
    metrics: [
      { value: '8 kg', label: 'Capacité maximale d’assistance bras levés' },
      { value: '< 2 kg', label: 'Colonne dorsale ultra-légère en fibre de carbone aérospatiale' },
      { value: '100 %', label: 'Fonctionnement passif sans alimentation (zéro risque batterie)' },
      { value: '4 Angles', label: 'Articulation multi-crans (50°, 70°, 90°, 110°/115°)' },
    ],
    features: [
      {
        title: 'Châssis Carbone Ultra-Léger',
        description:
          'La fibre de carbone aérospatiale associée au tissu Oxford résistant à l’usure offre une rigidité inégalée pour moins de 2 kg, garantissant une liberté de mouvement totale des bras.',
      },
      {
        title: 'Sécurité Intrinsèque Zéro Énergie',
        description:
          'Le stockage d’énergie élastique 100 % mécanique élimine toute maintenance de batterie, tout temps d’arrêt de charge et tout risque d’étincelle lors d’opérations continues en postes multiples.',
      },
      {
        title: 'Décharge Musculo-Squelettique Haute Efficacité',
        description:
          'Réduit la sollicitation des muscles deltoïdes jusqu’à 8 kg, prolongeant directement l’endurance de l’opérateur et prévenant les troubles chroniques de l’épaule.',
      },
      {
        title: 'Durabilité Industrielle Minimaliste',
        description:
          'Les articulations en aluminium aéronautique anodisé haute résistance supportent les chocs sévères, la poussière et l’usure industrielle continue.',
      },
    ],
    hotspots: [
      {
        title: 'Articulation d’Épaule à 4 Crans',
        description:
          'L’assistance mécanique semi-automatique s’engage instantanément à l’élévation des bras, avec verrouillage à 50°, 70°, 90°, 110°/115°.',
        zone: 'Unité d’Articulation Gléno-Humérale',
      },
      {
        title: 'Harnais Pectoral et Dorsal à Dégagement Rapide',
        description:
          'Les boucles ergonomiques à encliquetage permettent un habillage et un retrait rapides en moins de 15 secondes.',
        zone: 'Harnais Thoracique à Verrouillage Croisé',
      },
      {
        title: 'Colonne Dorsale Téléscopique en Carbone',
        description:
          'L’épine dorsale en fibre de carbone haute résistance s’ajuste parfaitement aux différentes longueurs de buste.',
        zone: 'Épine Dorsale en Carbone',
      },
      {
        title: 'Brassards Repose-Bras à Libération Rapide',
        description:
          'Les brassards ergonomiques avec boucle jaune et languette bleue de dégagement rapide assurent une libération immédiate.',
        zone: 'Berceau de Support Huméral',
      },
      {
        title: 'Ceinture Lombaire Contournée 3D',
        description:
          'La ceinture respirante en maille aérée répartit uniformément la charge du harnais sur la ceinture pelvienne.',
        zone: 'Ceinture Pelvienne de Transfert de Charge',
      },
    ],
    bentoCards: [
      {
        title: 'Articulation Mécanique d’Épaule Semi-Automatique à 4 Angles',
        subtitle: 'Architecture à Cliquet de Précision en Aluminium Aéronautique',
        description:
          'Le boîtier en alliage d’aluminium aéronautique usiné CNC renferme un cliquet de verrouillage semi-automatique à 3 vitesses et 4 angles (50°, 70°, 90°, 110°/115°) qui s’enclenche silencieusement lorsque l’opérateur lève les bras et se libère en douceur à la descente.',
        materialTag: 'Alliage d’Aluminium Aéronautique • Verrouillage 4 Angles',
      },
      {
        title: 'Colonne Téléscopique en Fibre de Carbone Aérospatiale',
        subtitle: 'Châssis Dorsal Haute Rigidité < 2 kg',
        description:
          'La colonne en fibre de carbone aérospatiale tissée multidirectionnelle résiste à la torsion tout en transférant jusqu’à 8 kg de poids d’outillage en hauteur vers la ceinture pelvienne.',
        materialTag: 'Fibre de Carbone Aérospatiale T700',
      },
      {
        title: 'Brassards à Libération Rapide & Maille Respirante 3D',
        subtitle: 'Tissu Oxford Anti-Usure & Doublure Ventilée',
        description:
          'Conçu avec un tissu extérieur industriel Oxford indéchirable et une doublure intérieure en maille alvéolée 3D pour un dégagement d’urgence rapide et une ventilation thermique durant 8 heures.',
        materialTag: 'Extérieur Oxford + Maille Alvéolée 3D',
      },
    ],
    deployment: {
      title: 'Assemblage Sous Caisse Automobile & Serrage au Couple en Hauteur',
      locationBadge: 'Ligne d’Assemblage Final Automobile • Poste Châssis en Hauteur',
      narrative:
        'Au sein des usines d’assemblage automobile modernes, les techniciens exécutent des milliers de cycles de vissage les bras levés par poste sous des châssis surélevés. Le LC Power-U/A verrouille un soutien mécanique de 50° à 115°, neutralisant le poids des clés dynamométriques pneumatiques et éliminant la fatigue des deltoïdes sans consommer le moindre watt électrique.',
      environmentalMetrics: [
        { label: 'Réduction EMG Deltoïdes', value: 'Décharge jusqu’à 8 kg' },
        { label: 'Temps d’Habillage / Retrait', value: '< 15 Secondes' },
        { label: 'Arrêt pour Charge Électrique', value: '0 Heure (100 % Passif)' },
      ],
      industries: [
        'Assemblage Automobile',
        'Maintenance des Réseaux Électriques',
        'Construction & BTP',
        'Maintenance Aéronautique (MRO)',
        'Récolte Agricole',
      ],
    },
    specifications: [
      { parameter: 'Modèle', value: 'LC Power-U/A (Code spéc. : LC Power-U/P)' },
      { parameter: 'Couleur', value: 'Noir Mat Industriel' },
      { parameter: 'Utilisateurs Cibles', value: 'Opérateurs effectuant des tâches prolongées bras levés et au-dessus de la tête' },
      { parameter: 'Applications', value: 'Assemblage automobile, maintenance électrique, construction, réparation aéronautique, récolte agricole' },
      { parameter: 'Matériaux Structurels', value: 'Fibre de carbone + alliage d’aluminium aéronautique' },
      { parameter: 'Capacité d’Assistance', value: 'Max. 8 kg' },
      { parameter: 'Mode de Verrouillage', value: 'Verrouillage mécanique semi-automatique' },
      { parameter: 'Niveaux d’Assistance', value: '3 niveaux (engagement sur 4 angles)' },
      { parameter: 'Angles d’Assistance / Déverrouillage', value: '50°, 70°, 90°, 110°/115°' },
      { parameter: 'Tissu Extérieur', value: 'Tissu Oxford résistant à l’usure' },
      { parameter: 'Tissu de Doublure', value: 'Tissu en maille respirante 3D' },
      { parameter: 'Tailles', value: 'Taille Standard / Grande Taille (Plus Size)' },
      { parameter: 'Poids Net', value: '< 2 kg' },
      { parameter: 'Dimensions de l’Emballage', value: '50 × 40 × 12 cm' },
      { parameter: 'Accessoires Optionnels', value: 'Collier ergonomique de soutien cervical' },
      { parameter: 'Garantie', value: 'Garantie Industrielle Officielle de 1 An' },
    ],
    quickCompare: {
      mechanism: 'Carbone Mécanique Passif + Cliquet 4 Angles',
      capacityOrTemp: 'Assistance Bras Levés Max. 8 kg',
      powerOrCycle: '100 % Passif (0 V)',
      netWeight: '< 2 kg',
      primaryApplication: 'Assemblage Auto, Réseau Électrique, Aéronautique',
    },
  },
  'flex-w': {
    name: 'Exosquelette Lombaire Souple',
    shortTitle: 'Ceinture Lombaire Intelligente Sans Batterie',
    category: 'Série Exosquelettes Bioniques',
    subCategory: 'Assistance Lombaire Dynamique de 30 kg',
    headline: 'La Ceinture Intelligente Sans Énergie. Jusqu’à 30 kg de Poussée Lombaire Dynamique.',
    overview:
      'Cet exosquelette lombaire léger et non motorisé est conçu pour les tâches impliquant des flexions et des levages fréquents. Il emmagasine et restitue l’énergie par déformation élastique des matériaux, agissant comme une « ceinture intelligente » biomécanique pour délivrer une poussée ascendante lors de la flexion du buste. Réduit considérablement la fatigue lombaire, décompresse les disques intervertébraux et prévient les risques de lombalgies professionnelles.',
    metrics: [
      { value: '0–30 kg', label: 'Plage d’assistance lombaire ascendante dynamique' },
      { value: '≤ 1 kg', label: 'Profil portable ultra-fin' },
      { value: '160–190 cm', label: 'Large adaptation ergonomique à la taille' },
      { value: '0 V', label: 'Stockage d’énergie cinétique intrinsèquement sûr sans batterie' },
    ],
    features: [
      {
        title: 'Châssis Minimaliste de Moins de 1 kg',
        description:
          'La construction textile respirante épouse naturellement le torse, garantissant un confort sans transpiration tout au long d’un poste de 8 heures.',
      },
      {
        title: 'Agilité Sans Restriction',
        description:
          'Épouse les contours du corps sans charnières métalliques rigides aux hanches, préservant une liberté totale pour marcher, s’accroupir, grimper et conduire un chariot élévateur.',
      },
      {
        title: 'Décharge Dynamique des Muscles Érecteurs du Rachis',
        description:
          'Accumule progressivement une tension élastique lorsque l’utilisateur se penche en avant et libère une poussée ascendante vigoureuse au redressement.',
      },
      {
        title: 'Équilibre des Pressions Vertébrales',
        description:
          'Répartit les charges ponctuelles aiguës du bas du dos sur la colonne thoracique et les cuisses, prévenant les hernies discales professionnelles.',
      },
    ],
    hotspots: [
      {
        title: 'Dos Réglable Multi-Hauteurs',
        description:
          'Le système de tension d’épaule télescopique s’adapte aux opérateurs mesurant de 160 cm à 190 cm.',
        zone: 'Ancrage de Tension Thoracique',
      },
      {
        title: 'Guidage d’Articulation Latérale',
        description:
          'Les passages de sangles souples éliminent tout pincement au niveau des hanches lors des flexions profondes.',
        zone: 'Guide Oblique Latéral',
      },
      {
        title: 'Coussin Lombaire 3D Épaissi',
        description:
          'Le coussin ergonomique multicouche amortit le bas de la colonne vertébrale et répartit les charges dorsales.',
        zone: 'Coussin de Décompression L1–L5',
      },
      {
        title: 'Noyau Élastique à Sécurité Intégrée',
        description:
          'Les fibres de latex polyester haute résilience assurent une durabilité maximale dans les lieux de travail humides ou poussiéreux.',
        zone: 'Bande de Déformation Cinétique',
      },
      {
        title: 'Sangles de Traction Fémorales Bilatérales',
        description:
          'Support dorsal-lombaire intégré relié aux cuissardes bilatérales pour un transfert de charge fluide de 0 à 30 kg.',
        zone: 'Manchettes de Liaison Fémorale',
      },
    ],
    bentoCards: [
      {
        title: 'Support Dorso-Lombaire Intégré & Coussin 3D',
        subtitle: 'Matrice de Décompression Discale L1–L5',
        description:
          'Un coussin lombaire ergonomique multicouche en maille alvéolée 3D intègre l’armature de soutien dorso-lombaire, stabilisant le bas de la colonne tout en évacuant la chaleur et l’humidité lors du tri intensif en entrepôt.',
        materialTag: 'Maille Respirante 3D + Support Lombaire',
      },
      {
        title: 'Noyau en Fibre de Latex Polyester Haute Résilience',
        subtitle: 'Stockage Progressif d’Énergie Cinétique 0–30 kg',
        description:
          'Les fibres élastiques techniques en latex polyester emmagasinent l’énergie potentielle mécanique lors de la flexion avant du tronc et restituent jusqu’à 30 kg de poussée d’assistance ascendante fluide.',
        materialTag: 'Latex Polyester Haute Résilience',
      },
      {
        title: 'Système Bilatéral de Sangles de Liaison aux Cuisses',
        subtitle: 'Accroupissement Sans Pincement & Conduite de Chariot',
        description:
          'Les cuissardes souples en tissu Oxford résistant à l’usure ancrent le chemin de charge cinétique sans charnières métalliques rigides aux hanches, permettant aux opérateurs de passer directement de la manutention à la conduite d’engins.',
        materialTag: 'Oxford Tactique Anti-Usure',
      },
    ],
    deployment: {
      title: 'Plateformes Logistiques Haute Fréquence & Manutention de Bagages Aéroportuaires',
      locationBadge: 'Centre de Préparation Logistique Intelligent • Zone de Palettisation',
      narrative:
        'Dans les centres de tri logistique à haut débit et les soutes à bagages des aéroports, les manutentionnaires effectuent des centaines de flexions profondes et de levages lourds par heure. Pesant ≤ 1 kg sans aucune barre rigide aux hanches, le LC Flex-W agit comme une seconde paire de muscles érecteurs du rachis — délivrant jusqu’à 30 kg d’assistance lombaire tout en permettant de marcher, grimper et conduire naturellement.',
      environmentalMetrics: [
        { label: 'Assistance Ascendante Dynamique', value: '0–30 kg Réglable' },
        { label: 'Poids Total Porté', value: '≤ 1,0 kg' },
        { label: 'Taille de l’Opérateur', value: '160–190 cm' },
      ],
      industries: [
        'Logistique Industrielle & Entrepôts',
        'Manutention de Bagages Aéroportuaires',
        'Soins Médicaux & Assistance aux Personnes Âgées',
        'Opérations à Flexions Fréquentes du Buste',
      ],
    },
    specifications: [
      { parameter: 'Modèle', value: 'LC Flex-W' },
      { parameter: 'Couleur', value: 'Noir Tactique' },
      { parameter: 'Utilisateurs Cibles', value: 'Manutentionnaires, opérateurs d’entrepôt, agents logistiques, personnel soignant' },
      { parameter: 'Applications', value: 'Logistique industrielle, bagages aéroportuaires, soins gériatriques et médicaux, opérations de flexion fréquente' },
      { parameter: 'Type d’Assistance', value: 'Mécanique passive sans alimentation électrique' },
      { parameter: 'Taille Applicable', value: '160–190 cm' },
      { parameter: 'Plage d’Assistance', value: '0–30 kg (réglable dynamiquement)' },
      { parameter: 'Média de Stockage d’Énergie', value: 'Fibre élastique de latex polyester haute résilience' },
      { parameter: 'Structure Principale', value: 'Support dorso-lombaire intégré + système bilatéral de sangles de liaison aux cuisses' },
      { parameter: 'Tissu Extérieur', value: 'Tissu Oxford résistant à l’usure' },
      { parameter: 'Tissu de Doublure', value: 'Tissu en maille respirante 3D' },
      { parameter: 'Tailles', value: 'Taille Standard / Grande Taille (Plus Size)' },
      { parameter: 'Poids Net', value: '≤ 1 kg' },
      { parameter: 'Dimensions de l’Emballage', value: '40 × 30 × 10 cm' },
      { parameter: 'Garantie', value: 'Garantie Industrielle Officielle de 1 An' },
    ],
    quickCompare: {
      mechanism: 'Latex Polyester Élastique Passif + Liaison Fémorale',
      capacityOrTemp: 'Assistance Lombaire Dynamique 0–30 kg',
      powerOrCycle: '100 % Passif (0 V)',
      netWeight: '≤ 1 kg',
      primaryApplication: 'Logistique, Bagages Aéroport, Soins Médicaux',
    },
  },
  'gloves-01': {
    name: 'Gant d’Évaluation des Travaux Répétitifs du Poignet',
    shortTitle: 'Gant de Diagnostic Biométrique Edge-AI',
    category: 'Série Capteurs Ergonomiques Intelligents',
    subCategory: 'Biométrie Edge-AI Conforme GBZ 336-2025',
    headline: 'Gant Biométrique Edge-AI. Diagnostic du Risque de Syndrome du Canal Carpien GBZ 336-2025.',
    overview:
      'Conçu pour les postes manufacturiers impliquant des mouvements répétitifs et forcés du poignet, le LC Gloves-01 est strictement conforme à la norme GBZ 336-2025 (Critères diagnostiques du syndrome du canal carpien professionnel). Équipé de doubles capteurs inertiels IMU (dos de la main + bracelet de poignet) et d’un calcul Edge-AI embarqué, il suit en temps réel les angles du poignet, les mouvements de travail valides, la fréquence d’exécution, la durée et l’intensité de la charge. Prend en charge la transmission sans fil et l’analyse sur tablette pour quantifier les risques ergonomiques et optimiser les postes de travail.',
    secondaryStudioCaption:
      'Suite Analytique sur Tablette Industrielle — Télémétrie en temps réel des courbes double canal de flexion/extension et déviation radiale/ulnaire avec évaluation automatisée du risque de syndrome du canal carpien selon GBZ 336-2025.',
    metrics: [
      { value: '≤ ±0,1°', label: 'Précision de mesure IMU statique' },
      { value: '±180°', label: 'Amplitude complète de mouvement multi-axes' },
      { value: '200 g', label: 'Format ergonomique ultra-léger' },
      { value: '24/min', label: 'Suivi automatisé de la fréquence des mouvements valides' },
    ],
    features: [
      {
        title: 'Détection d’Attitude Différentielle à Deux Points',
        description:
          'L’architecture de détection différentielle élimine les artefacts de mouvement du bras entier pour isoler la flexion, l’extension et la déviation pures du poignet.',
      },
      {
        title: 'Traitement Edge-AI Embarqué',
        description:
          'Le microcontrôleur intégré au gant calcule les angles, compte les cycles valides et compile les indicateurs localement avec une latence nulle.',
      },
      {
        title: 'Télémétrie Sans Fil sur Tablette',
        description:
          'Le flux de données Bluetooth/Wi-Fi en temps réel vers le logiciel PC/tablette génère des rapports diagnostiques de risques exportables.',
      },
      {
        title: 'Anti-Interférence de Qualité Industrielle',
        description:
          'Blindé contre le bruit électromagnétique et les vibrations des machines dans les usines automobiles et électroniques.',
      },
    ],
    hotspots: [
      {
        title: 'Découpes Tactiles Mi-Doigts',
        description:
          'Le bout des doigts dégagé préserve la sensibilité tactile fine pour l’assemblage délicat de micro-vis et de composants électroniques.',
        zone: 'Découpes Phalangiennes Distales',
      },
      {
        title: 'Support Dorsal Sans Jeu',
        description:
          'Le tissu élastique à haute extensibilité verrouille fermement le capteur IMU principal au-dessus des métacarpiens.',
        zone: 'Nœud IMU Métacarpien Principal',
      },
      {
        title: 'Architecture Légère de 200 g',
        description:
          'Minimise la charge musculaire lors des audits ergonomiques continus de 8 heures.',
        zone: 'Châssis en Maille Technique Respirante',
      },
      {
        title: 'Bracelet Secondaire Réglable',
        description:
          'Ancre le capteur IMU de référence sur toutes les circonférences de poignet.',
        zone: 'Sangle de Référence Radio-Carpienne',
      },
      {
        title: 'Logiciel de Diagnostic & IMU de Référence',
        description:
          'Le module IMU secondaire du poignet diffuse en temps réel les courbes double canal de flexion/extension, déviation radiale/ulnaire et cotation du risque GBZ 336-2025.',
        zone: 'Liaison Télémétrique Sans Fil Edge-AI',
      },
    ],
    bentoCards: [
      {
        title: 'Modules Capteurs IMU Différentiels Double Posture',
        subtitle: 'Précision Statique ≤ ±0,1° & Microcontrôleur Edge-AI',
        description:
          'En associant un capteur IMU métacarpien dorsal à un capteur IMU de référence au poignet, le processeur Edge-AI embarqué rejette les mouvements globaux du bras et isole la véritable flexion/extension et déviation radiale/ulnaire du poignet au-delà du seuil de reconnaissance de 15°.',
        materialTag: 'Double IMU Différentiel • Précision ≤ ±0,1°',
      },
      {
        title: 'Maille Technique Haute Extensibilité & Découpes Mi-Doigts',
        subtitle: 'Maintien Anti-Glissement des Capteurs & Dextérité Totale',
        description:
          'Le textile technique gris respirant de 200 g maintient les capteurs IMU verrouillés sans glissement sur la peau tout en laissant le bout des doigts libre pour le micro-vissage et la soudure.',
        materialTag: 'Textile Technique Gris Anti-Glisse',
      },
      {
        title: 'Suite Analytique d’Ondes Diagnostiques GBZ 336-2025',
        subtitle: 'Quantification en Temps Réel de la Fréquence (24/min) & Durée',
        description:
          'Diffuse la cinématique du poignet en temps réel vers une tablette PC industrielle afin d’enregistrer les heures de travail quotidiennes, le nombre de mouvements valides et les rapports automatisés de risque de syndrome du canal carpien.',
        materialTag: 'Analytique Conforme GBZ 336-2025',
      },
    ],
    deployment: {
      title: 'Assemblage Électronique de Précision & Audits de Santé au Travail',
      locationBadge: 'Ligne de Fabrication Électronique 3C • Poste d’Audit Ergonomique',
      narrative:
        'Les hôpitaux de prévention des maladies professionnelles, les organismes tiers de contrôle ergonomique et les équipes HSE industrielles déploient le LC Gloves-01 directement sur les lignes de production en activité. Pendant que les opérateurs assemblent des composants de précision, le gant capture chaque flexion, extension et déviation ulnaire dépassant le seuil personnalisable de 15° — générant des rapports de conformité GBZ 336-2025 juridiquement opposables.',
      environmentalMetrics: [
        { label: 'Norme Diagnostique', value: 'Conforme GBZ 336-2025' },
        { label: 'Précision Angulaire Statique', value: '≤ ±0,1° (Plage ±180°)' },
        { label: 'Seuil de Mouvement Standard', value: '15° / 24 Mouv.·min⁻¹' },
      ],
      industries: [
        'Hôpitaux de Prévention des Maladies Professionnelles',
        'Organismes Tiers d’Inspection Ergonomique',
        'Audits d’Assemblage Électronique 3C & Automobile',
        'Optimisation Ergonomique des Postes de Travail',
      ],
    },
    specifications: [
      { parameter: 'Modèle', value: 'LC Gloves-01' },
      { parameter: 'Couleur', value: 'Gris Clair Technique avec Modules Capteurs Blanc Mat et Bordures Noires' },
      { parameter: 'Conformité Normative', value: 'GBZ 336-2025 Critères Diagnostiques du Syndrome du Canal Carpien Professionnel' },
      { parameter: 'Applications', value: 'Hôpitaux de médecine du travail, agences d’essais ergonomiques, audits de postes manufacturiers' },
      { parameter: 'Seuil de Reconnaissance', value: '15° (personnalisable)' },
      { parameter: 'Plage Angulaire', value: '±180°' },
      { parameter: 'Précision Statique', value: '≤ ±0,1°' },
      { parameter: 'Comptage de Fréquence', value: 'Compte automatiquement les mouvements valides (standard : 24 mouvements/min)' },
      { parameter: 'Suivi de la Durée', value: 'Cumul quotidien des heures de travail effectif' },
      { parameter: 'Dimensions Mesurées', value: 'Angles de flexion/extension du poignet, angles de déviation radiale/ulnaire' },
      { parameter: 'Tailles', value: 'M, L, XL (personnalisable)' },
      { parameter: 'Poids Net', value: '200 g' },
      { parameter: 'Dimensions de l’Emballage', value: '23 × 17 × 8 cm' },
      { parameter: 'Accessoires Optionnels', value: 'Tablette PC Industrielle (avec suite analytique préinstallée) / Caméra d’Action' },
      { parameter: 'Garantie', value: 'Garantie Industrielle Officielle de 1 An' },
    ],
    quickCompare: {
      mechanism: 'Détection Différentielle Double IMU + MCU Edge-AI',
      capacityOrTemp: 'Précision Statique ≤ ±0,1° (Plage ±180°)',
      powerOrCycle: 'Télémétrie Sans Fil Temps Réel (24/min)',
      netWeight: '200 g',
      primaryApplication: 'Audits GBZ 336-2025, Hôpitaux, Qualité Ergonomique',
    },
  },
  'frost-pcm-a': {
    name: 'Gilet Rafraîchissant PCM (Édition TPU Transparent)',
    shortTitle: 'Armure à Changement de Phase Biosourcée C17',
    category: 'Série Gestion Thermique Personnelle',
    subCategory: 'Confort Constant Passif C17 Biosourcé',
    headline: 'Armure à Changement de Phase Biosourcée. Confort Thermique Constant à 22,08 °C.',
    overview:
      'Conçu avec un matériau à changement de phase (PCM) à haute densité énergétique qui absorbe la chaleur corporelle à une température de confort constante (~23 °C), le LC Frost-PCM/A procure un refroidissement doux et durable du buste. Un seul cycle de charge frigorifique offre 1 à 2 heures de soulagement dans des environnements à forte chaleur de 35 °C. Réutilisable des milliers de fois — un microclimat personnel intrinsèquement sûr et sans aucun câble.',
    metrics: [
      { value: '22,08 °C', label: 'Température de confort constante à changement de phase' },
      { value: '225 J/g', label: 'Haute chaleur latente de fusion' },
      { value: '0,55 kg', label: 'Enveloppe transparente en TPU ultra-légère' },
      { value: '1–2 Heures', label: 'Refroidissement continu par cycle de charge' },
    ],
    features: [
      {
        title: 'Refroidissement Physiologique Doux',
        description:
          'Fonctionne à 22,08 °C, éliminant totalement la vasoconstriction cutanée ou les risques d’engelures causés par les packs de glace traditionnels à 0 °C.',
      },
      {
        title: '100 % Passif & Sécurité Intrinsèque',
        description:
          'Ne nécessite ni batterie, ni ventilateur, ni fil. Zéro risque électrique dans les salles blanches, les zones de gaz dangereux et les milieux humides.',
      },
      {
        title: 'Formulation C17 Sans Dégradation',
        description:
          'Le PCM n-alcane C17 pur biosourcé supporte des milliers de cycles de gel-dégel sans perte de performance thermique.',
      },
      {
        title: 'Origine Végétale & Biodégradable',
        description:
          'Formulation issue à 100 % de la biomasse, non dérivée du pétrole, respectueuse de l’environnement et non toxique.',
      },
    ],
    hotspots: [
      {
        title: 'Matrice en Grille à Refroidissement Rapide',
        description:
          'Les cellules PCM encapsulées indépendantes épousent la poitrine et le dos pour une surface d’échange thermique maximale.',
        zone: 'Matrice Cellulaire C17 Antérieure & Dorsale',
      },
      {
        title: 'Boucles Réglables Universelles',
        description:
          'Les doubles boucles latérales à dégagement rapide s’adaptent à toutes les morphologies et à tous les styles d’uniformes.',
        zone: 'Attaches de Tension Latérales',
      },
      {
        title: 'Enveloppe en TPU de Qualité Médicale',
        description:
          'Le film transparent imperméable et résistant aux huiles permet une désinfection et un nettoyage par essuyage instantanés.',
        zone: 'Encapsulation TPU Soudée Haute Fréquence',
      },
      {
        title: 'Coupe Extra-Plate Sous Vêtement',
        description:
          'Le profil ultra-fin de 0,55 kg se glisse parfaitement sous les combinaisons NRBC/Hazmat, les tenues de salle blanche ou les gilets haute visibilité.',
        zone: 'Coupe Ergonomique Sous-Combinaison 0,55 kg',
      },
    ],
    bentoCards: [
      {
        title: 'Matrice à Changement de Phase n-Alcane C17 Biosourcée',
        subtitle: 'Chaleur Latente de Fusion de 225 J/g à Palier Constant de 22,08 °C',
        description:
          'Les cristaux à changement de phase C17 d’origine végétale passent de l’état solide à l’état liquide sur un palier exact de 22,08 °C, absorbant 225 J/g de chaleur métabolique sans choc thermique ni humidité de condensation.',
        materialTag: 'PCM C17 100 % Biosourcé • 225 J/g',
      },
      {
        title: 'Soudures RF en TPU de Qualité Médicale Haute Résistance',
        subtitle: 'Imperméable, Résistant aux Huiles & Désinfection Instantanée',
        description:
          'Les canaux en polyuréthane thermoplastique (TPU) soudés par haute fréquence résistent aux perforations, aux projections chimiques et à la contamination biologique pour un déploiement stérile en milieu médical et salle blanche.',
        materialTag: 'TPU Transparent Haute Résistance',
      },
      {
        title: 'Système Universel à Doubles Boucles Latérales',
        subtitle: 'Ergonomie Taille Unique Sous Combinaison Étanche',
        description:
          'Les boucles extra-plates en acétal et les sangles robustes maintiennent le gilet de 0,55 kg sous des combinaisons étanches ou de salle blanche sans aucun encombrement.',
        materialTag: 'Doubles Boucles Tactiques Latérales',
      },
    ],
    deployment: {
      title: 'Salles Blanches Étanches, EPI Médicaux & Assainissement par Forte Chaleur',
      locationBadge: 'Salle Blanche Semi-Conducteurs & Déploiement sous EPI de Biosécurité',
      narrative:
        'Les opérateurs portant des combinaisons chimiques étanches, des EPI médicaux intégraux ou des tenues de salle blanche ne peuvent pas compter sur l’évaporation de la sueur ni sur une ventilation forcée. Avec seulement 0,55 kg, le gilet transparent LC Frost-PCM/A se glisse aisément sous les tenues étanches, maintenant un microclimat constant à 22,08 °C pendant 1 à 2 heures par cycle et se rechargeant en 60 minutes à -18 °C.',
      environmentalMetrics: [
        { label: 'Palier de Changement de Phase', value: '22,08 °C Constant' },
        { label: 'Capacité de Chaleur Latente', value: '225 J/g' },
        { label: 'Recharge Rapide au Congélateur', value: '1 Heure à -18 °C' },
      ],
      industries: [
        'Environnements à Températures Extrêmement Élevées',
        'Salles Blanches Semi-Conducteurs & Pharmaceutiques',
        'EPI Médicaux & Équipes de Biosécurité',
        'Assainissement Municipal & Interventions Hazmat',
      ],
    },
    specifications: [
      { parameter: 'Modèle', value: 'LC Frost-PCM/A' },
      { parameter: 'Couleur', value: 'Transparent Cristal (options de teinture PCM personnalisables)' },
      { parameter: 'Utilisateurs Cibles', value: 'Travailleurs en environnements très chauds, salles blanches, EPI médicaux, assainissement' },
      { parameter: 'Chaleur Latente de Fusion', value: '225 J/g' },
      { parameter: 'Température de Changement de Phase', value: '22,08 °C' },
      { parameter: 'Durée de Refroidissement', value: '1–2 heures (valeur de référence selon l’intensité du travail et la température ambiante)' },
      { parameter: 'Temps de Recharge Frigorifique', value: 'Congélation à -18 °C pendant 1 heure, OU réfrigération à 0–4 °C pendant 1–2 heures' },
      { parameter: 'Matériau de l’Enveloppe', value: 'Polyuréthane Thermoplastique (TPU) haute résistance' },
      { parameter: 'Taille', value: 'Taille Unique (One Size Fits All)' },
      { parameter: 'Poids Net', value: '0,55 kg' },
      { parameter: 'Dimensions de l’Emballage', value: '40 × 30 × 10 cm' },
      { parameter: 'Accessoires Optionnels', value: 'Coloris de teinture PCM sur mesure' },
      { parameter: 'Garantie', value: 'Garantie Industrielle Officielle de 1 An' },
    ],
    quickCompare: {
      mechanism: 'PCM C17 Biosourcé Passif sous Enveloppe TPU Transparente',
      capacityOrTemp: '22,08 °C Constant (225 J/g)',
      powerOrCycle: '1–2 h Refroidissement / 1 h Recharge (-18 °C)',
      netWeight: '0,55 kg',
      primaryApplication: 'Salles Blanches, EPI Médicaux, Sous Combinaison Étanche',
    },
  },
  'frost-pcm-g': {
    name: 'Gilet Rafraîchissant PCM Ignifuge',
    shortTitle: 'Armure PCM Antistatique & Ignifuge',
    category: 'Série Gestion Thermique Personnelle',
    subCategory: 'Bouclier Thermique Passif pour Zones Dangereuses EX',
    headline: 'Armure PCM Antistatique & Ignifuge. Refroidissement Passif pour Zones à Haut Risque.',
    overview:
      'Conçu avec un matériau à changement de phase à haute densité énergétique absorbant la chaleur à une température constante (~23 °C) et encapsulé dans une enveloppe extérieure antistatique et ignifuge. Pensé pour la pétrochimie, la fonderie, le soudage et les réseaux électriques où convergent risques d’étincelles, poussières explosives et chaleur extrême.',
    metrics: [
      { value: '22,08 °C', label: 'Zone de confort à changement de phase sans irritation' },
      { value: '225 J/g', label: 'Capacité de stockage de chaleur latente' },
      { value: '360°', label: 'Bandes de sécurité rétroréfléchissantes haute visibilité' },
      { value: '0 V', label: 'Refroidissement passif intrinsèquement sûr sans étincelle' },
    ],
    features: [
      {
        title: 'Protection Ignifuge & Antistatique',
        description:
          'Le tissu sergé industriel robuste repousse les scories, les étincelles de soudage et l’accumulation de charges électrostatiques.',
      },
      {
        title: 'Régulation Thermique Constante à 22,08 °C',
        description:
          'Maintient un refroidissement continu du buste sans choc thermique lors des travaux physiques intenses sous des chaleurs ambiantes de plus de 35 °C.',
      },
      {
        title: 'Noyau Biomasse C17 Haute Stabilité',
        description:
          'Des milliers de cycles thermiques sans dégradation ; non toxique et respectueux de l’environnement.',
      },
      {
        title: 'Visibilité Nocturne & Faible Luminosité',
        description:
          'Les doubles bandes rétroréfléchissantes argentées assurent une sécurité à 360° sur les chantiers routiers et dans les usines sombres.',
      },
    ],
    hotspots: [
      {
        title: 'Tissage Extérieur Ignifuge (FR) & Antistatique',
        description:
          'Le tissu ripstop robuste résiste aux déchirures, à l’abrasion et aux projections de métal en fusion.',
        zone: 'Enveloppe en Sergé Industriel Ignifuge',
      },
      {
        title: 'Ceinture Élastique Auto-Agrippante',
        description:
          'La large ceinture industrielle auto-agrippante s’ajuste solidement à toutes les morphologies de buste.',
        zone: 'Fermeture Ventrale Haute Résistance',
      },
      {
        title: 'Poches Thermiques PCM Modulaires',
        description:
          'Des compartiments internes dédiés maintiennent les packs PCM scellés au plus près du torse.',
        zone: 'Compartiments Internes pour Packs C17',
      },
      {
        title: 'Doubles Bandes Rétroréfléchissantes d’Alerte',
        description:
          'Des bandes rétroréfléchissantes de classe 3M sur la poitrine et la taille garantissent la visibilité sur le terrain.',
        zone: 'Bandes d’Avertissement Rétroréfléchissantes 360°',
      },
    ],
    bentoCards: [
      {
        title: 'Enveloppe Extérieure Ripstop Antistatique & Ignifuge',
        subtitle: 'Protection Zéro Étincelle pour Zones Dangereuses ATEX / EX',
        description:
          'Le tissage industriel spécialement traité antistatique et ignifuge dissipe les charges électrostatiques et résiste aux projections de soudure, permettant un refroidissement sûr au cœur des raffineries pétrochimiques et des usines à gaz.',
        materialTag: 'Sergé Industriel Ignifuge & Antistatique',
      },
      {
        title: 'Doubles Bandes de Sécurité Rétroréfléchissantes 360°',
        subtitle: 'Visibilité Haute Contraste de Nuit & en Tunnel',
        description:
          'De larges bandes rétroréfléchissantes argentées entourent la poitrine et la taille à 360°, assurant une reconnaissance immédiate de l’opérateur dans les raffineries peu éclairées, les tunnels et les chantiers de nuit.',
        materialTag: 'Bandes Rétroréfléchissantes 360°',
      },
      {
        title: 'Compartiments PCM Internes Modulaires & Ceinture Élastique',
        subtitle: 'Remplacement Rapide à Chaud des Packs Entre les Postes',
        description:
          'Les compartiments thermiques internes permettent aux équipes de remplacer en quelques secondes les packs PCM C17 à 22,08 °C fraîchement rechargés, tandis que la large ceinture auto-agrippante plaque le gilet contre le buste.',
        materialTag: 'Baies PCM Modulaires • 0,96 kg au Total',
      },
    ],
    deployment: {
      title: 'Raffineries Pétrochimiques, Ateliers de Soudage & Services Publics de Nuit',
      locationBadge: 'Unité de Craquage Pétrochimique Classée EX • Zone de Forte Chaleur',
      narrative:
        'Dans les zones pétrochimiques antidéflagrantes (EX) et les ateliers de soudage en activité, les batteries électroniques et les moteurs à balais présentent des risques d’inflammation inacceptables. Le LC Frost-PCM/G associe un refroidissement à changement de phase passif 0 V à 22,08 °C à une enveloppe extérieure antistatique et ignifuge dotée de bandes réfléchissantes à 360° — offrant un soulagement thermique sans compromis là où l’électronique est interdite.',
      environmentalMetrics: [
        { label: 'Risque d’Étincelle & d’Inflammation', value: '0 V Sécurité Intrinsèque' },
        { label: 'Confort Changement de Phase', value: '22,08 °C (225 J/g)' },
        { label: 'Poids Complet du Gilet', value: '0,96 kg' },
      ],
      industries: [
        'Pétrochimie & Raffinage Pétrolier',
        'Métallurgie & Opérations de Soudage',
        'Maintenance des Réseaux & Sous-Stations Électriques',
        'Ingénierie de Nuit sous Haute Température',
      ],
    },
    specifications: [
      { parameter: 'Modèle', value: 'LC Frost-PCM/G' },
      { parameter: 'Couleur', value: 'Gris Industriel avec Bandes Réfléchissantes Haute Visibilité (personnalisable)' },
      { parameter: 'Utilisateurs Cibles', value: 'Opérateurs de la pétrochimie, de la métallurgie, du soudage, des réseaux électriques et du travail de nuit par forte chaleur' },
      { parameter: 'Chaleur Latente de Fusion', value: '225 J/g' },
      { parameter: 'Température de Changement de Phase', value: '22,08 °C' },
      { parameter: 'Durée de Refroidissement', value: '1–2 heures (référence selon l’intensité du travail et la température ambiante)' },
      { parameter: 'Temps de Recharge Frigorifique', value: 'Congélation à -18 °C pendant 1 heure, OU réfrigération à 0–4 °C pendant 1–2 heures' },
      { parameter: 'Matériau du Tissu', value: 'Tissu industriel antistatique et ignifuge' },
      { parameter: 'Tailles', value: 'Taille Standard / Grande Taille (Plus Size)' },
      { parameter: 'Poids Net', value: '0,96 kg' },
      { parameter: 'Dimensions de l’Emballage', value: '40 × 30 × 10 cm' },
      { parameter: 'Garantie', value: 'Garantie Industrielle Officielle de 1 An' },
    ],
    quickCompare: {
      mechanism: 'PCM C17 Biosourcé Passif en Enveloppe FR Antistatique',
      capacityOrTemp: '22,08 °C Constant (225 J/g)',
      powerOrCycle: '1–2 h Refroidissement / 0 V Sécurité Intrinsèque',
      netWeight: '0,96 kg',
      primaryApplication: 'Pétrochimie, Soudage, Métallurgie, Travail de Nuit',
    },
  },
  'frost-tec-w': {
    name: 'Gilet à Refroidissement par Eau à Semi-Conducteurs',
    shortTitle: 'Refroidisseur Actif 80 W à Liquide + Double Flux d’Air',
    category: 'Série Gestion Thermique Personnelle',
    subCategory: 'Refroidissement Liquide Actif 80 W + Double Flux d’Air',
    headline: 'Refroidisseur Thermoélectrique Actif 80 W. Boucle Liquide Fermée + Double Ventilation.',
    overview:
      'Un dispositif de refroidissement portable actif alimenté par des puces thermoélectriques à semi-conducteurs (TEC) et un circuit d’eau glacée en boucle fermée. Délivre un refroidissement du buste stable et réglable sur plusieurs niveaux en moins de 2 minutes après le démarrage. Intègre une turbine d’extraction dorsale silencieuse et deux ventilateurs pectoraux d’alimentation en air pour garder le visage et le torse au sec toute la journée lors des opérations de lutte contre l’incendie, de construction, de maintenance électrique et d’assainissement.',
    metrics: [
      { value: '80 W', label: 'Puissance de refroidissement thermoélectrique actif' },
      { value: '2 min', label: 'Temps de stabilisation thermique rapide' },
      { value: '24 V', label: 'Architecture de refroidisseur haute efficacité' },
      { value: '2–4 Heures', label: 'Autonomie continue sur batterie en poste' },
    ],
    features: [
      {
        title: 'Régulation Active de Précision de la Température',
        description:
          'Le refroidisseur thermoélectrique extrait activement la chaleur du liquide en circulation, surpassant les limites de fusion des packs passifs.',
      },
      {
        title: 'Évaporation par Air Forcé Double Zone',
        description:
          'La turbine arrière expulse la chaleur tandis que les deux ventilateurs avant dirigent l’air frais vers le cou et le visage pour accélérer l’évaporation de la sueur.',
      },
      {
        title: 'Autonomie Prolongée sur le Terrain',
        description:
          'L’alimentation lithium 24 V offre 1 à 2 heures sur une seule batterie et jusqu’à 4 heures avec un double pack batterie.',
      },
      {
        title: 'Canaux Liquides Scellés Anti-Fuite',
        description:
          'Les tubulures industrielles en TPU résistent aux fortes pressions, aux torsions et aux conditions de chantier difficiles sans aucune fuite.',
      },
    ],
    hotspots: [
      {
        title: 'Enveloppe Col V Ignifuge & Antistatique',
        description:
          'Tissu gris industriel doux et protecteur, résistant à la chaleur et aux risques électrostatiques.',
        zone: 'Châssis Antérieur Ignifuge',
      },
      {
        title: 'Sangles de Compression Latérales',
        description:
          'Les tendeurs ergonomiques plaquent fermement les canaux d’eau glacée contre le torse.',
        zone: 'Tendeurs Bilatéraux de Contact Thermique',
      },
      {
        title: 'Module Refroidisseur TEC Dorsal de 80 W',
        description:
          'Le boîtier argenté profilé avec turbine noire stabilise la température de l’eau en moins de 2 minutes.',
        zone: 'Cœur Thermoélectrique Dorsal 24 V / 80 W',
      },
      {
        title: 'Doubles Poches Avant à Soufflerie d’Air',
        description:
          'Les poches utilitaires avant accueillent les batteries tout en propulsant un flux d’air rafraîchissant vers le menton et la poitrine.',
        zone: 'Modules Antérieurs de Flux d’Air Ascendant',
      },
    ],
    bentoCards: [
      {
        title: 'Refroidisseur TEC Dorsal 80 W à Semi-Conducteurs & Turbine d’Extraction',
        subtitle: 'Architecture 24 V / 100 W • Boucle Refroidie Stable en 2 Minutes',
        description:
          'Monté de façon ergonomique sur le dos, le module thermoélectrique de 80 W en aluminium anodisé argent refroidit l’eau circulant en interne en 2 minutes tandis qu’une turbine radiale silencieuse évacue la chaleur rejetée loin de l’opérateur.',
        materialTag: 'Refroidisseur TEC 80 W • Stabilisation 2 Min',
      },
      {
        title: 'Doubles Ventilateurs Pectoraux à Air Forcé',
        subtitle: 'Évaporation Ascendante de la Sueur du Visage & du Cou',
        description:
          'Les souffleries intégrées aux poches avant canalisent un flux d’air frais vers le haut sur la poitrine, le cou et le visage, combinant le refroidissement liquide conductif interne avec un séchage convectif externe.',
        materialTag: 'Doubles Ventilateurs Ascendants Antérieurs',
      },
      {
        title: 'Doublure Hydraulique en Boucle Fermée en TPU Médical/Industriel',
        subtitle: 'Réseau Micro-Fluidique Haute Pression Anti-Pliure',
        description:
          'Les micro-canaux serpentins en TPU distribuent l’eau glacée uniformément sur le buste et peuvent être associés à des packs de refroidissement PCM supplémentaires lors de pics thermiques extrêmes.',
        materialTag: 'Doublure Fluidique TPU en Boucle Fermée',
      },
    ],
    deployment: {
      title: 'Maintenance des Réseaux Haute Tension, Lutte Incendie & Construction Lourde',
      locationBadge: 'Révision de Transformateur de Sous-Station 500 kV • Pic de Charge Estival',
      narrative:
        'Lorsque les équipes des réseaux électriques et les pompiers interviennent sous une chaleur radiante dépassant 40 °C, les packs de glace passifs peuvent fondre avant la fin d’une opération de maintenance complexe. Le LC Frost-TEC/W combine 80 W de refroidissement liquide thermoélectrique actif avec deux ventilateurs pectoraux qui balaient le cou et le visage d’un flux d’air frais — maintenant une vigilance cognitive optimale pendant 2 à 4 heures.',
      environmentalMetrics: [
        { label: 'Puissance de Refroidissement Actif', value: '80 W (Nominal 24 V / 100 W)' },
        { label: 'Stabilisation de la Boucle', value: '2 Minutes' },
        { label: 'Autonomie Continue', value: '2–4 Heures (Double Batterie)' },
      ],
      industries: [
        'Maintenance des Réseaux & Sous-Stations Électriques',
        'Lutte contre l’Incendie & Secours d’Urgence',
        'Sécurité Publique & Régulation du Trafic',
        'Construction Lourde & Assainissement Urbain',
      ],
    },
    specifications: [
      { parameter: 'Modèle', value: 'LC Frost-TEC/W' },
      { parameter: 'Couleur', value: 'Gris Technique (personnalisable)' },
      { parameter: 'Utilisateurs Cibles', value: 'Pompiers, sécurité publique, réseaux électriques, BTP, assainissement sous chaleur extrême' },
      { parameter: 'Capacité de Refroidissement', value: '80 W' },
      { parameter: 'Tension Nominale', value: '24 V' },
      { parameter: 'Puissance Nominale', value: '100 W' },
      { parameter: 'Temps de Réponse Thermique', value: 'Stable en 2 min' },
      { parameter: 'Autonomie de la Batterie', value: '1–2 heures sur batterie simple (2–4 heures d’endurance système continue)' },
      { parameter: 'Tissu Extérieur', value: 'Tissu antistatique et ignifuge' },
      { parameter: 'Doublure Intérieure', value: 'Doublure à canaux d’eau en TPU médical/industriel' },
      { parameter: 'Taille', value: 'Taille Unique (One Size Fits All)' },
      { parameter: 'Poids Net', value: '< 3 kg' },
      { parameter: 'Dimensions de l’Emballage', value: '40 × 30 × 10 cm' },
      { parameter: 'Accessoires Optionnels', value: 'Packs de refroidissement PCM supplémentaires' },
      { parameter: 'Garantie', value: 'Garantie Industrielle Officielle de 1 An' },
    ],
    quickCompare: {
      mechanism: 'Boucle Liquide Active TEC 80 W + Doubles Ventilateurs',
      capacityOrTemp: 'Refroidissement Actif 80 W (Stable en 2 min)',
      powerOrCycle: '24 V / 100 W • Autonomie 2–4 h',
      netWeight: '< 3 kg',
      primaryApplication: 'Pompiers, Réseau Électrique, Construction Lourde',
    },
  },
  'frost-tec-d': {
    name: 'Gilet à Semi-Conducteurs à Refroidissement Direct',
    shortTitle: 'Gilet Peltier à État Solide Instantané en 2 Secondes',
    category: 'Série Gestion Thermique Personnelle',
    subCategory: 'Refroidissement Peltier Solide Instantané en 2 Secondes',
    headline: 'Refroidissement Peltier Instantané en 2 Secondes. Zéro Eau, Zéro Réfrigérant, 8 Heures d’Autonomie.',
    overview:
      'Exploitant l’effet Peltier à l’état solide via des modules TEC à contact direct, le LC Frost-TEC/D ne nécessite ni glace, ni liquide de refroidissement, ni compresseur. Les plaques de conduction thermique à contact direct absorbent la chaleur du buste immédiatement dès la mise sous tension — se stabilisant en seulement 2 secondes — tandis que des ventilateurs ultra-silencieux dissipent la chaleur résiduelle. Doté d’un châssis en maille respirante et de bandes réfléchissantes haute visibilité pour l’inspection industrielle, les EPI médicaux et les patrouilles extérieures.',
    metrics: [
      { value: '2 Secondes', label: 'Stabilisation ultra-rapide du refroidissement à état solide' },
      { value: '0 Liquide', label: 'Conduction directe totalement sèche (zéro risque de fuite)' },
      { value: '2–8 Heures', label: 'Fonctionnement prolongé sur batteries modulaires' },
      { value: '> 20 000 h', label: 'Durée de vie des puces semi-conductrices à état solide' },
    ],
    features: [
      {
        title: 'Conduction Instantanée à État Solide en 2 Secondes',
        description:
          'Les plaques de contact direct Peltier refroidissent immédiatement dès l’activation, sans pré-congélation ni remplissage d’eau.',
      },
      {
        title: 'Fonctionnement Ultra-Silencieux Sans Vibration',
        description:
          'Les ventilateurs axiaux à faible bruit éliminent le bourdonnement du compresseur et les vibrations de pompe pour des inspections silencieuses.',
      },
      {
        title: 'Alimentation Modulaire Jusqu’à 8 Heures',
        description:
          'La faible consommation de 60 W permet une autonomie de 2 à 8 heures (2 heures par pack batterie léger).',
      },
      {
        title: 'Zéro Maintenance & Longévité de 20 000 Heures',
        description:
          'L’architecture à état solide élimine les tuyaux, les fluides frigorigènes et les pompes pour une durabilité sans fuite.',
      },
    ],
    hotspots: [
      {
        title: 'Matrice TEC à Contact Direct à 4 Modules',
        description:
          'Quatre plaques de conduction Peltier positionnées sur le haut du dos délivrent un refroidissement instantané directement au contact du corps.',
        zone: 'Matrice Dorsale Quadruple Peltier à État Solide',
      },
      {
        title: 'Boucles Pectorales Jaunes à Libération Rapide',
        description:
          'Les attaches pectorales haute visibilité et le cordon élastique arrière assurent un ajustement précis sans entraver les mouvements.',
        zone: 'Harnais de Fixation Antérieur Haute Visibilité',
      },
      {
        title: 'Contrôleur Pectoral & Ventilateurs Silencieux',
        description:
          'La molette circulaire montée sur la poitrine offre une régulation thermique intuitive à plusieurs niveaux.',
        zone: 'Molette Thermique Rotative & Dissipateurs Axiaux',
      },
      {
        title: 'Maille Haute Visibilité Détachable & Lavable',
        description:
          'Maille antistatique respirante avec bandes réfléchissantes jaune fluo et argent ; l’électronique se détache facilement pour le lavage.',
        zone: 'Châssis Modulaire Lavable en Maille Antistatique',
      },
    ],
    bentoCards: [
      {
        title: 'Matrice de Conduction Peltier à Contact Direct à 4 Modules',
        subtitle: 'Capacité de Refroidissement 45 W • Chute Thermique Instantanée en 2 Secondes',
        description:
          'Quatre plaques de conduction thermique en aluminium anodisé couplées directement aux puces semi-conductrices extraient la chaleur du haut du dos en 2 secondes après la mise sous tension — zéro eau, zéro pompe et une durée de vie des puces supérieure à 20 000 heures.',
        materialTag: 'Peltier Solide 4 Modules • Durée de vie > 20 000 h',
      },
      {
        title: 'Boucles Pectorales Haute Visibilité & Tension Élastique Bungee',
        subtitle: 'Contact Cutané Constant des Plaques de Conduction en Mouvement',
        description:
          'Les boucles jaunes haute visibilité à dégagement rapide et le laçage élastique dynamique à l’arrière maintiennent une pression de contact optimale entre les 4 modules Peltier et le haut du dos de l’opérateur.',
        materialTag: 'Attaches Rapides Haute Visibilité',
      },
      {
        title: 'Contrôleur Rotatif Pectoral & Maille Modulaire Lavable',
        subtitle: 'Architecture Basse Consommation 12 V / 60 W pour 2 à 8 Heures d’Autonomie',
        description:
          'La molette rotative intuitive placée sur la poitrine ajuste l’intensité du refroidissement à la volée, tandis que l’ensemble du faisceau électronique se détache pour permettre le lavage du gilet en maille antistatique et ignifuge.',
        materialTag: 'Maille FR Antistatique Détachable & Lavable',
      },
    ],
    deployment: {
      title: 'Inspection des Voies Ferrées, Sécurité Extérieure & Patrouilles Mobiles',
      locationBadge: 'Inspection de Corridor Ferroviaire Grande Vitesse • Patrouille de 8 Heures',
      narrative:
        'Les ingénieurs d’inspection mobiles, les agents de circulation et le personnel de sécurité extérieure ont besoin d’un refroidissement immédiat sans transporter de réservoirs d’eau ni attendre la congélation de packs de glace. Pesant environ 1,7 kg et se stabilisant en seulement 2 secondes sur un système batterie 12 V, le LC Frost-TEC/D délivre jusqu’à 8 heures de refroidissement sec et silencieux lors des longues patrouilles sur le terrain.',
      environmentalMetrics: [
        { label: 'Stabilisation Thermique', value: '2 Secondes (Instantané)' },
        { label: 'Autonomie Batterie Modulaire', value: '2–8 Heures (12 V / 60 W)' },
        { label: 'Longévité Semi-Conducteurs', value: '> 20 000 Heures' },
      ],
      industries: [
        'Inspection Industrielle & Voies Ferrées',
        'EPI Médicaux & Cliniques Mobiles',
        'Circulation Extérieure & Équipes au Sol Aéroportuaires',
        'Personnel de Sécurité & de Patrouille',
      ],
    },
    specifications: [
      { parameter: 'Modèle', value: 'LC Frost-TEC/D' },
      { parameter: 'Couleur', value: 'Maille Gris Tactique avec Bandes Réfléchissantes Jaune Fluo et Sangles Noires (Option Noir disponible)' },
      { parameter: 'Utilisateurs Cibles', value: 'Inspection industrielle, EPI médicaux, circulation extérieure, personnel de sécurité' },
      { parameter: 'Capacité de Refroidissement', value: '45 W' },
      { parameter: 'Tension Nominale', value: '12 V' },
      { parameter: 'Puissance Nominale', value: '60 W' },
      { parameter: 'Temps de Réponse Thermique', value: 'Refroidissement instantané, stable en 2 s' },
      { parameter: 'Autonomie de la Batterie', value: '2–8 heures (2 heures par pack batterie individuel)' },
      { parameter: 'Durée de Vie des Puces', value: '> 20 000 heures' },
      { parameter: 'Tissu Extérieur', value: 'Maille respirante antistatique et ignifuge (modulaire, détachable et lavable)' },
      { parameter: 'Tailles', value: 'Taille Standard / Grande Taille (Plus Size)' },
      { parameter: 'Poids Net', value: '~1,7 kg' },
      { parameter: 'Dimensions de l’Emballage', value: '40 × 30 × 10 cm' },
      { parameter: 'Garantie', value: 'Garantie Industrielle Officielle de 1 An' },
    ],
    quickCompare: {
      mechanism: '4 Modules Peltier à Contact Direct (Sec)',
      capacityOrTemp: 'Conduction Directe 45 W (Instantané 2 s)',
      powerOrCycle: '12 V / 60 W • Autonomie Modulaire 2–8 h',
      netWeight: '~1,7 kg',
      primaryApplication: 'Inspection Industrielle, Circulation, Sécurité, EPI Médicaux',
    },
  },
  'frost-acc-w': {
    name: 'Gilet à Refroidissement par Eau à Compresseur',
    shortTitle: 'Refroidisseur Micro-Inverter Extrême de 300 W',
    category: 'Série Gestion Thermique Personnelle',
    subCategory: 'Refroidisseur à Compresseur Micro-Inverter Extrême 300 W',
    headline: 'Réfrigération Active Micro-Inverter de 300 W pour Risques Thermiques Extrêmes.',
    overview:
      'Fleuron de la gamme LC Frost, le LC Frost-ACC/W intègre un compresseur frigorifique miniature à technologie Inverter avec un réseau de circulation de liquide glacé en boucle fermée. Délivrant une puissance de refroidissement actif inégalée de 60 à 300 W, une large plage de réglage de température et un maintien thermique constant, il constitue l’armure de refroidissement ultime pour la métallurgie extrême, la lutte contre l’incendie et les opérations en espace confiné.',
    metrics: [
      { value: '60–300 W', label: 'Réfrigération active haute puissance par compresseur' },
      { value: '< 4 kg', label: 'Unité de refroidissement portable équilibrée ergonomiquement' },
      { value: '3 min', label: 'Stabilisation rapide de la boucle liquide haute capacité' },
      { value: '100 %', label: 'Circuit liquide scellé totalement étanche' },
    ],
    features: [
      {
        title: 'Réfrigération Active Extrême de 300 W',
        description:
          'Le compresseur micro-inverter refroidit rapidement l’eau en circulation dès le démarrage avec une régulation numérique de la température à plusieurs niveaux.',
      },
      {
        title: 'Mobilité Intégrée de Moins de 4 kg',
        description:
          'L’architecture de refroidissement compacte répartit le poids sur le bas du buste pour une mobilité sans entrave dans les espaces restreints.',
      },
      {
        title: 'Endurance Intensive de 2 à 4 Heures par Poste',
        description:
          'Le système de batterie lithium 24 V haute capacité soutient une réfrigération intensive tout au long des postes les plus éprouvants.',
      },
      {
        title: 'Fluidique Scellée & Résistante aux Chocs',
        description:
          'Les raccords rapides robustes et les poches en TPU sous pression résistent aux impacts lourds, aux vibrations et aux lavages de chantier.',
      },
    ],
    hotspots: [
      {
        title: 'Enveloppe Extérieure Col V Ignifuge',
        description:
          'L’enveloppe grise antistatique minimaliste avec fermeture éclair centrale robuste s’ajuste confortablement sur les sous-vêtements techniques.',
        zone: 'Coque d’Armure Col V Antistatique & Ignifuge',
      },
      {
        title: 'Sangles de Compression Bilatérales',
        description:
          'Les sangles de tension latérales maximisent le contact thermique entre la vessie interne refroidie en TPU et le torse.',
        zone: 'Sangles Bilatérales de Compression du Buste',
      },
      {
        title: 'Refroidisseur à Compresseur Micro-Inverter',
        description:
          'Le cœur à compresseur miniature 24 V stabilise la circulation d’eau glacée en moins de 3 minutes.',
        zone: 'Cœur Frigorifique Micro-Inverter 60–300 W',
      },
      {
        title: 'Poche de Refroidissement Interne en TPU & Boucle Isolée',
        description:
          'Le réseau liquide en boucle fermée associé à une doublure respirante 3D empêche toute accumulation de condensation.',
        zone: 'Vessie TPU Pressurisée en Boucle Fermée',
      },
    ],
    bentoCards: [
      {
        title: 'Cœur à Compresseur Frigorifique Miniature Inverter 24 V',
        subtitle: 'Puissance de Refroidissement Actif 60–300 W • Puissance Nominale 110 W',
        description:
          'Contrairement aux refroidisseurs thermoélectriques standard, le LC Frost-ACC/W utilise un véritable cycle de compression de vapeur micro-inverter capable de délivrer jusqu’à 300 W de puissance frigorifique — maintenant une circulation d’eau froide même sous un rayonnement de fonderie dépassant 50 °C.',
        materialTag: 'Compresseur Micro-Inverter 60–300 W',
      },
      {
        title: 'Vessie de Refroidissement Liquide Pressurisée en TPU Haute Durabilité',
        subtitle: 'Fluidique 100 % Étanche avec Doublure 3D Anti-Condensation',
        description:
          'La poche de refroidissement serpentine haute densité en TPU maximise la surface de contact avec le buste tandis qu’une barrière intérieure en maille respirante 3D évite toute sensation d’humidité sur la peau.',
        materialTag: 'Vessie Liquide Pressurisée en TPU',
      },
      {
        title: 'Enveloppe Ignifuge Antistatique & Zip Central Haute Résistance',
        subtitle: 'Ergonomie Équilibrée < 4 kg pour Espaces Confinés',
        description:
          'Le tissu extérieur gris industriel antistatique et ignifuge avec bordures noires renforcées et sangles de compression bilatérales résiste aux étincelles, au laitier et à l’abrasion sévère.',
        materialTag: 'Enveloppe FR Antistatique • < 4 kg au Total',
      },
    ],
    deployment: {
      title: 'Fonderies Métallurgiques Extrêmes, Lutte Incendie & Espaces Confinés',
      locationBadge: 'Haut Fourneau & Halle de Coulée de Métal en Fusion • Ambiance > 45 °C',
      narrative:
        'Dans les halles de coulée des hauts fourneaux, les cabines d’engins lourds non climatisées et les missions de sauvetage en espace confiné profond, les charges de chaleur radiante submergent les gilets rafraîchissants conventionnels. Délivrant 60 à 300 W de réfrigération active par compression de vapeur dans un ensemble portable de moins de 4 kg, le LC Frost-ACC/W stabilise l’eau glacée en 3 minutes et protège la température corporelle centrale dans les conditions industrielles les plus extrêmes de la planète.',
      environmentalMetrics: [
        { label: 'Plage de Réfrigération Active', value: '60–300 W (24 V / 110 W)' },
        { label: 'Stabilisation Boucle Glacée', value: '3 Minutes' },
        { label: 'Poids Complet du Système', value: '< 4,0 kg' },
      ],
      industries: [
        'Métallurgie & Fonderies de Fusion',
        'Lutte contre l’Incendie & Sauvetage Hazmat',
        'Ingénierie des Espaces Confinés & Tunnels',
        'Cabines d’Engins Lourds Non Climatisées',
      ],
    },
    specifications: [
      { parameter: 'Modèle', value: 'LC Frost-ACC/W' },
      { parameter: 'Couleur', value: 'Gris Industriel avec Bordures Noires' },
      { parameter: 'Utilisateurs Cibles', value: 'Environnements à températures extrêmement élevées (métallurgie, fonderie, pompiers, cabines d’engins lourds)' },
      { parameter: 'Capacité de Refroidissement', value: '60–300 W' },
      { parameter: 'Tension Nominale', value: '24 V' },
      { parameter: 'Puissance Nominale', value: '110 W' },
      { parameter: 'Temps de Réponse Thermique', value: 'Stable en 3 min' },
      { parameter: 'Autonomie de la Batterie', value: '1–2 heures sur batterie simple (2–4 heures en fonctionnement continu du système)' },
      { parameter: 'Tissu Extérieur', value: 'Tissu antistatique et ignifuge' },
      { parameter: 'Doublure Intérieure', value: 'Vessie de refroidissement liquide en TPU haute durabilité' },
      { parameter: 'Taille', value: 'Taille Unique (One Size Fits All)' },
      { parameter: 'Poids Net', value: '< 4 kg' },
      { parameter: 'Dimensions de l’Emballage', value: '40 × 30 × 10 cm' },
      { parameter: 'Garantie', value: 'Garantie Industrielle Officielle de 1 An' },
    ],
    quickCompare: {
      mechanism: 'Compresseur Actif Micro-Inverter + Liquide en Boucle Fermée',
      capacityOrTemp: 'Réfrigération Active 60–300 W (Stable en 3 min)',
      powerOrCycle: '24 V / 110 W • 2–4 h en Continu',
      netWeight: '< 4 kg',
      primaryApplication: 'Métallurgie Extrême, Fonderie, Pompiers, Espaces Confinés',
    },
  },
};
