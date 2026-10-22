export interface ImpactMetric {
  value: string;
  label: string;
  unitHint?: string;
}

export interface FeatureNarrative {
  title: string;
  description: string;
}

export interface AnatomicalHotspot {
  id: number;
  title: string;
  description: string;
  x: number; // percentage 0-100 on studio anatomical diagram
  y: number; // percentage 0-100 on studio anatomical diagram
  zone: string;
}

export interface BentoCardSpec {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  aspectRatio: '1:1' | '16:9';
  isHeroBento?: boolean;
  materialTag: string;
  bananaPrompt: string;
}

export interface FieldDeploymentSpec {
  title: string;
  locationBadge: string;
  narrative: string;
  imagePath: string;
  bananaPrompt: string;
  environmentalMetrics: { label: string; value: string }[];
  industries: string[];
}

export interface TechnicalSpecItem {
  parameter: string;
  value: string;
  group: 'Identity & Compliance' | 'Performance & Mechanics' | 'Materials & Ergonomics' | 'Dimensions & Warranty';
}

export interface ProductData {
  id: string;
  indexNumber: string;
  slug: string;
  route: string;
  name: string;
  shortTitle: string;
  modelCode: string;
  catalogSpecCode?: string;
  category: 'Bionic Exoskeleton Series' | 'Smart Ergonomic Sensing Series' | 'Personal Thermal Management Series';
  subCategory: string;
  pillarId: 'exoskeletons' | 'sensing' | 'thermal';
  headline: string;
  overview: string;
  studioImage: string;
  studioAspect: '3:4' | '16:9';
  studioBananaPrompt: string;
  datasheetPath: string;
  datasheetDocId: string;
  secondaryStudioImage?: string;
  secondaryStudioCaption?: string;
  secondaryStudioBananaPrompt?: string;
  metrics: ImpactMetric[];
  features: FeatureNarrative[];
  hotspots: AnatomicalHotspot[];
  bentoCards: BentoCardSpec[];
  deployment: FieldDeploymentSpec;
  specifications: TechnicalSpecItem[];
  quickCompare: {
    mechanism: string;
    capacityOrTemp: string;
    powerOrCycle: string;
    netWeight: string;
    primaryApplication: string;
  };
}

export const MASTER_LIGHTING_FORMULA =
  'German Bionic Studio Standard — Solid or subtly gradated #0B0A0A Deep Graphite Warm Charcoal background, dual-point studio lighting with 3200K warm amber tungsten rim illumination tracing hardware edges and metallic chamfers, paired with soft diffused neutral key fill. Shot on Hasselblad H6D-100c, 100mm f/4 macro/portrait lens, ultra-sharp industrial product photography, tack sharp focus, clean reflections.';

export const PRODUCTS: ProductData[] = [
  {
    id: 'power-ua',
    indexNumber: '01',
    slug: 'power-ua',
    route: '/products/power-ua',
    name: 'Passive Upper Limb Exoskeleton',
    shortTitle: 'Overhead Bionic Armor',
    modelCode: 'LC Power-U/A',
    catalogSpecCode: 'LC Power-U/P',
    category: 'Bionic Exoskeleton Series',
    subCategory: 'Overhead Zero-Power Carbon Armor',
    pillarId: 'exoskeletons',
    headline: 'Overhead Bionic Armor. Pure Mechanical Relief.',
    overview:
      'Engineered with a pure mechanical bionic structure for precise directional assistance, the LC Power-U/A is lightweight, highly reliable, and adaptable to complex industrial environments. Featuring multi-level adjustments to fit diverse body types, it is purpose-built for automotive assembly, power maintenance, construction, aircraft repair, and agricultural picking—dramatically reducing shoulder and arm muscle load while elevating operational efficiency and all-day comfort.',
    studioImage: '/assets/products/power-ua/studio-main.webp',
    studioAspect: '3:4',
    datasheetPath: '/datasheets/LONGGUARD_LC-Power-UA_Datasheet.pdf',
    datasheetDocId: 'LG-DS-2026-01',
    studioBananaPrompt:
      '3/4 studio hero render of the LC Power-U/A Passive Upper Limb Exoskeleton mounted on a matte dark-slate torso mannequin. Aerospace carbon fiber spine, anodized aviation aluminum 4-gear shoulder joints, wear-resistant matte black Oxford harness, and contoured 3D lumbar belt. Illuminated by 3200K warm amber tungsten rim lighting against a solid #0B0A0A deep graphite charcoal backdrop. Shot on Hasselblad H6D-100c, 100mm f/4.',
    metrics: [
      { value: '8kg', label: 'Maximum Overhead Assist Capacity' },
      { value: '< 2kg', label: 'Ultra-Light Aerospace Carbon Fiber Spine' },
      { value: '100%', label: 'Passive Zero-Power Operation (Zero Battery Risk)' },
      { value: '4 Angles', label: 'Multi-Gear Articulation (50°, 70°, 90°, 110°/115°)' },
    ],
    features: [
      {
        title: 'Featherlight Carbon Frame',
        description:
          'Aerospace carbon fiber paired with wear-resistant Oxford cloth delivers unmatched rigidity at sub-2kg weight, ensuring unrestricted arm mobility.',
      },
      {
        title: 'Intrinsically Safe Zero-Power',
        description:
          '100% mechanical elastic energy storage eliminates battery maintenance, charging downtime, and spark hazards across continuous multi-shift operations.',
      },
      {
        title: 'High-Efficiency Musculoskeletal Offloading',
        description:
          'Slashing deltoid muscle strain by up to 8kg, directly extending worker endurance and preventing chronic shoulder disorders.',
      },
      {
        title: 'Minimalist Industrial Durability',
        description:
          'High-strength anodized aluminum joints withstand rigorous impacts, dust, and continuous industrial wear.',
      },
    ],
    hotspots: [
      {
        id: 1,
        title: '4-Gear Shoulder Joint',
        description:
          'Semi-automatic mechanical assist engages instantly as arms elevate, with locks at 50°, 70°, 90°, 110°/115°.',
        x: 69,
        y: 21,
        zone: 'Glenohumeral Articulation Unit',
      },
      {
        id: 2,
        title: 'Quick-Release Chest & Dorsal Harness',
        description:
          'Ergonomic snap buckles enable rapid donning and doffing in under 15 seconds.',
        x: 48,
        y: 23,
        zone: 'Thoracic Cross-Lock Harness',
      },
      {
        id: 3,
        title: 'Telescoping Carbon Back Bar',
        description:
          'High-tensile carbon fiber back spine seamlessly adjusts to different torso lengths.',
        x: 56,
        y: 36,
        zone: 'Dorsal Carbon Spine',
      },
      {
        id: 4,
        title: 'Quick-Release Armrest Cuffs',
        description:
          'Cuffed ergonomic armrests with yellow buckle and blue quick-release tab provide immediate escape.',
        x: 72,
        y: 32,
        zone: 'Humeral Support Cradle',
      },
      {
        id: 5,
        title: 'Contoured 3D Lumbar Belt',
        description:
          'Breathable air-mesh waist belt distributes harness load evenly across the pelvic girdle.',
        x: 49,
        y: 45,
        zone: 'Pelvic Load-Transfer Girdle',
      },
    ],
    bentoCards: [
      {
        id: 'bento-gear-joint',
        title: '4-Angle Semi-Automatic Mechanical Shoulder Joint',
        subtitle: 'Precision Aviation Aluminum Ratchet Architecture',
        description:
          'CNC-machined aviation aluminum alloy housing encloses a 3-gear, 4-angle (50°, 70°, 90°, 110°/115°) semi-automatic locking ratchet that engages silently as the operator raises their arms overhead and disengages smoothly on descent.',
        imagePath: '/assets/products/power-ua/bento-gear-joint.webp',
        aspectRatio: '1:1',
        isHeroBento: true,
        materialTag: 'Aviation Aluminum Alloy • 4-Angle Lock',
        bananaPrompt:
          'Extreme macro studio photography of the LC Power-U/A anodized aviation aluminum 4-gear mechanical shoulder joint showing precision CNC chamfers and angle markings (50°, 70°, 90°, 115°). 3200K warm amber tungsten edge rim light over #0B0A0A deep warm charcoal background, Hasselblad H6D-100c 100mm f/4 macro.',
      },
      {
        id: 'bento-carbon-spine',
        title: 'Aerospace Carbon Fiber Telescoping Spine',
        subtitle: 'Sub-2kg High-Rigidity Dorsal Frame',
        description:
          'Multi-directional woven aerospace carbon fiber spine resists torsional flex while transferring up to 8kg of overhead tool weight down to the pelvic belt.',
        imagePath: '/assets/products/power-ua/bento-carbon-spine.webp',
        aspectRatio: '1:1',
        materialTag: 'T700 Aerospace Carbon Fiber',
        bananaPrompt:
          'Macro detail shot of the woven aerospace carbon fiber telescoping dorsal spine bar of the LC Power-U/A exoskeleton with warm 3200K golden amber rim reflection on the carbon weave, set against #0B0A0A warm graphite studio backdrop.',
      },
      {
        id: 'bento-armrest-harness',
        title: 'Quick-Release Armrest Cuffs & 3D Air-Mesh',
        subtitle: 'Wear-Resistant Oxford & Breathable Lining',
        description:
          'Engineered with tear-resistant industrial Oxford outer fabric and 3D honeycomb air-mesh inner lining for rapid emergency release and 8-hour thermal ventilation.',
        imagePath: '/assets/products/power-ua/bento-armrest-harness.webp',
        aspectRatio: '1:1',
        materialTag: 'Oxford Outer + 3D Honeycomb Mesh',
        bananaPrompt:
          'Close-up studio photograph of the LC Power-U/A ergonomic quick-release armrest cuff and breathable 3D air-mesh padding with matte black Oxford fabric. Warm 3200K tungsten rim lighting over #0B0A0A background.',
      },
    ],
    deployment: {
      title: 'Underbody Automotive Assembly & Overhead Torque Operations',
      locationBadge: 'Automotive Final Assembly Line • Overhead Chassis Station',
      narrative:
        'Inside modern automotive assembly plants, technicians execute thousands of overhead fastening cycles per shift beneath elevated vehicle chassis. The LC Power-U/A locks in mechanical support at 50° to 115°, neutralizing the weight of pneumatic torque wrenches and eliminating deltoid fatigue without requiring a single watt of electrical power.',
      imagePath: '/assets/products/power-ua/action-automotive.webp',
      bananaPrompt:
        'Editorial industrial photography of an automotive assembly technician wearing the matte black LC Power-U/A Passive Upper Limb Exoskeleton while working overhead beneath an elevated vehicle chassis with a torque tool. Warm 3200K tungsten workshop lighting with dark graphite industrial shadows, Hasselblad medium format look.',
      environmentalMetrics: [
        { label: 'Deltoid EMG Reduction', value: 'Up to 8kg Offload' },
        { label: 'Donning / Doffing Time', value: '< 15 Seconds' },
        { label: 'Power & Charging Downtime', value: '0 Hours (100% Passive)' },
      ],
      industries: [
        'Automotive Assembly',
        'Power Maintenance',
        'Construction',
        'Aircraft Repair',
        'Agricultural Harvesting',
      ],
    },
    specifications: [
      { parameter: 'Model', value: 'LC Power-U/A (Spec Code: LC Power-U/P)', group: 'Identity & Compliance' },
      { parameter: 'Color', value: 'Industrial Matte Black', group: 'Identity & Compliance' },
      { parameter: 'Target Users', value: 'Workers with prolonged arm-raising and overhead tasks', group: 'Identity & Compliance' },
      { parameter: 'Applications', value: 'Automotive assembly, power maintenance, construction, aircraft repair, agricultural harvesting', group: 'Identity & Compliance' },
      { parameter: 'Structural Materials', value: 'Carbon fiber + aviation aluminum alloy', group: 'Materials & Ergonomics' },
      { parameter: 'Assistance Capacity', value: 'Max. 8kg', group: 'Performance & Mechanics' },
      { parameter: 'Locking Mode', value: 'Semi-automatic mechanical locking', group: 'Performance & Mechanics' },
      { parameter: 'Assistance Gears', value: '3 gears (4-angle engagement)', group: 'Performance & Mechanics' },
      { parameter: 'Assistance / Unlocking Angles', value: '50°, 70°, 90°, 110°/115°', group: 'Performance & Mechanics' },
      { parameter: 'Outer Fabric', value: 'Wear-resistant Oxford fabric', group: 'Materials & Ergonomics' },
      { parameter: 'Lining Fabric', value: 'Breathable 3D mesh fabric', group: 'Materials & Ergonomics' },
      { parameter: 'Sizes', value: 'Standard Size / Plus Size', group: 'Dimensions & Warranty' },
      { parameter: 'Net Weight', value: '< 2kg', group: 'Dimensions & Warranty' },
      { parameter: 'Package Dimensions', value: '50 × 40 × 12cm', group: 'Dimensions & Warranty' },
      { parameter: 'Optional Accessories', value: 'Ergonomic neck support collar', group: 'Dimensions & Warranty' },
      { parameter: 'Warranty', value: '1-Year Official Industrial Warranty', group: 'Dimensions & Warranty' },
    ],
    quickCompare: {
      mechanism: 'Passive Mechanical Carbon + 4-Angle Ratchet',
      capacityOrTemp: 'Max. 8kg Overhead Assist',
      powerOrCycle: '100% Passive (0V)',
      netWeight: '< 2kg',
      primaryApplication: 'Automotive Assembly, Power Grid, Aircraft Repair',
    },
  },
  {
    id: 'flex-w',
    indexNumber: '02',
    slug: 'flex-w',
    route: '/products/flex-w',
    name: 'Flexible Waist Exoskeleton',
    shortTitle: 'Unpowered Smart Lumbar Belt',
    modelCode: 'LC Flex-W',
    category: 'Bionic Exoskeleton Series',
    subCategory: '30kg Dynamic Lumbar Assist',
    pillarId: 'exoskeletons',
    headline: 'The Unpowered Smart Belt. Up to 30kg Dynamic Lumbar Thrust.',
    overview:
      'This lightweight, unpowered lumbar exoskeleton is designed for frequent bending and lifting tasks. It stores and releases energy via elastic material deformation, acting as a biomechanical "smart belt" to deliver upward assistive thrust during bending. Significantly reduces lumbar strain, offloads spinal disc compression, and mitigates occupational lower-back injury risks.',
    studioImage: '/assets/products/flex-w/studio-main.webp',
    studioAspect: '3:4',
    datasheetPath: '/datasheets/LONGGUARD_LC-Flex-W_Datasheet.pdf',
    datasheetDocId: 'LG-DS-2026-02',
    studioBananaPrompt:
      '3/4 studio product render of the LC Flex-W Flexible Waist Exoskeleton in Tactical Black fitted on an athletic dark-graphite mannequin torso and upper thighs. Shows integrated back-lumbar support bracket, high-resilience polyester latex elastic core, and bilateral thigh linkage straps with 3200K warm amber tungsten rim lighting over #0B0A0A background.',
    metrics: [
      { value: '0–30kg', label: 'Dynamic Upward Lumbar Assist Range' },
      { value: '≤ 1kg', label: 'Ultra-Slim Wearable Profile' },
      { value: '160–190cm', label: 'Broad Ergonomic Height Adaptation' },
      { value: '0V', label: 'Non-Powered Fail-Safe Kinetic Energy Storage' },
    ],
    features: [
      {
        title: 'Sub-1kg Minimalist Chassis',
        description:
          'Breathable textile construction conforms naturally to the torso, guaranteeing sweat-free comfort throughout an 8-hour shift.',
      },
      {
        title: 'Unrestricted Agility',
        description:
          'Conforms to body contours without rigid metal hip constraints, preserving full freedom for walking, crouching, climbing, and driving.',
      },
      {
        title: 'Dynamic Erector Spinae Offloading',
        description:
          'Progressively builds elastic tension as the user bends forward, releasing explosive upward thrust upon standing.',
      },
      {
        title: 'Spinal Pressure Equilibrium',
        description:
          'Distributes acute lumbar point loads across the thoracic spine and thighs, preventing occupational disc herniation.',
      },
    ],
    hotspots: [
      {
        id: 1,
        title: 'Multi-Height Adjustable Back',
        description:
          'Telescoping shoulder tension system accommodates operator heights from 160cm to 190cm.',
        x: 47,
        y: 23,
        zone: 'Thoracic Tension Anchor',
      },
      {
        id: 2,
        title: 'Flank Articulation Routing',
        description:
          'Soft flexible strap pathways eliminate hip pinching during extreme deep squats.',
        x: 41,
        y: 38,
        zone: 'Lateral Oblique Guide',
      },
      {
        id: 3,
        title: 'Thickened 3D Lumbar Cushion',
        description:
          'Ergonomic multi-layer pad cushions the lower spine and distributes back loads.',
        x: 48,
        y: 36,
        zone: 'L1–L5 Decompression Pad',
      },
      {
        id: 4,
        title: 'Fail-Safe Elastic Core',
        description:
          'High-resilience polyester latex fibers ensure lifetime durability in wet or dusty workplaces.',
        x: 50,
        y: 46,
        zone: 'Kinetic Deformation Band',
      },
      {
        id: 5,
        title: 'Bilateral Thigh Traction Straps',
        description:
          'Integrated lumbar support bracket linked to bilateral thigh cuffs for smooth 0–30kg load transfer.',
        x: 52,
        y: 57,
        zone: 'Femoral Linkage Cuffs',
      },
    ],
    bentoCards: [
      {
        id: 'bento-lumbar-cushion',
        title: 'Integrated Back-Lumbar Support Bracket & 3D Cushion',
        subtitle: 'L1–L5 Spinal Disc Decompression Matrix',
        description:
          'An ergonomic multi-layer 3D honeycomb lumbar cushion houses the integrated back-lumbar support bracket, stabilizing the lower spine while venting heat and moisture during high-frequency warehouse sorting.',
        imagePath: '/assets/products/flex-w/bento-lumbar-cushion.webp',
        aspectRatio: '1:1',
        isHeroBento: true,
        materialTag: '3D Breathable Mesh + Lumbar Bracket',
        bananaPrompt:
          'Studio macro photograph of the LC Flex-W thickened 3D lumbar decompression cushion and integrated back-lumbar support bracket. Warm 3200K golden amber rim illumination highlighting the 3D honeycomb mesh weave against a #0B0A0A deep charcoal background.',
      },
      {
        id: 'bento-latex-straps',
        title: 'High-Resilience Polyester Latex Fiber Core',
        subtitle: 'Progressive 0–30kg Kinetic Energy Storage',
        description:
          'Engineered elastic polyester latex fibers store mechanical potential energy during forward trunk flexion and return up to 30kg of smooth upward assistive thrust.',
        imagePath: '/assets/products/flex-w/bento-latex-straps.webp',
        aspectRatio: '1:1',
        materialTag: 'High-Resilience Polyester Latex',
        bananaPrompt:
          'Macro close-up of the high-resilience elastic polyester latex fiber tension bands of the LC Flex-W exoskeleton under tension, lit with warm 3200K amber rim light on a #0B0A0A warm graphite surface.',
      },
      {
        id: 'bento-thigh-cuffs',
        title: 'Bilateral Thigh Linkage Strap System',
        subtitle: 'Zero-Pinch Squat & Forklift Agility',
        description:
          'Soft wear-resistant Oxford thigh cuffs anchor the kinetic load pathway without rigid metal hip hinges, allowing operators to transition directly from lifting to driving forklifts.',
        imagePath: '/assets/products/flex-w/bento-thigh-cuffs.webp',
        aspectRatio: '1:1',
        materialTag: 'Wear-Resistant Tactical Oxford',
        bananaPrompt:
          'Studio detail shot of the LC Flex-W bilateral thigh linkage cuffs and matte black tactical buckles with 3200K warm tungsten edge lighting over #0B0A0A background.',
      },
    ],
    deployment: {
      title: 'High-Frequency Logistics Hubs & Airport Baggage Handling',
      locationBadge: 'Smart Logistics Fulfillment Center • Palletizing Zone',
      narrative:
        'In high-throughput logistics sorting centers and airport baggage bays, handlers perform hundreds of deep bends and heavy lifts every hour. Weighing ≤1kg with zero rigid hip bars, the LC Flex-W acts as a second set of erector spinae muscles—delivering up to 30kg of upward lumbar assist while permitting natural walking, climbing, and vehicle operation.',
      imagePath: '/assets/products/flex-w/action-logistics.webp',
      bananaPrompt:
        'Cinematic industrial photography of a warehouse logistics operator wearing the Tactical Black LC Flex-W Flexible Waist Exoskeleton lifting a heavy crate in a modern dark-toned fulfillment center illuminated by warm 3200K amber industrial lighting.',
      environmentalMetrics: [
        { label: 'Dynamic Upward Assist', value: '0–30kg Adjustable' },
        { label: 'Total Wearable Weight', value: '≤ 1.0kg' },
        { label: 'Operator Height Range', value: '160–190cm' },
      ],
      industries: [
        'Industrial Logistics',
        'Airport Baggage Handling',
        'Medical & Elderly Care',
        'Frequent Bending Operations',
      ],
    },
    specifications: [
      { parameter: 'Model', value: 'LC Flex-W', group: 'Identity & Compliance' },
      { parameter: 'Color', value: 'Tactical Black', group: 'Identity & Compliance' },
      { parameter: 'Target Users', value: 'Manual laborers, warehouse operators, logistics handlers, caregivers', group: 'Identity & Compliance' },
      { parameter: 'Applications', value: 'Industrial logistics, airport baggage, medical elderly care, frequent bending operations', group: 'Identity & Compliance' },
      { parameter: 'Assistance Type', value: 'Non-powered passive mechanical', group: 'Performance & Mechanics' },
      { parameter: 'Applicable Height', value: '160–190cm', group: 'Dimensions & Warranty' },
      { parameter: 'Assistance Range', value: '0–30kg (dynamically adjustable)', group: 'Performance & Mechanics' },
      { parameter: 'Energy Storage Medium', value: 'High-resilience elastic polyester latex fiber', group: 'Materials & Ergonomics' },
      { parameter: 'Core Structure', value: 'Integrated back-lumbar support bracket + bilateral thigh linkage strap system', group: 'Performance & Mechanics' },
      { parameter: 'Outer Fabric', value: 'Wear-resistant Oxford fabric', group: 'Materials & Ergonomics' },
      { parameter: 'Lining Fabric', value: 'Breathable 3D mesh fabric', group: 'Materials & Ergonomics' },
      { parameter: 'Sizes', value: 'Standard Size / Plus Size', group: 'Dimensions & Warranty' },
      { parameter: 'Net Weight', value: '≤ 1kg', group: 'Dimensions & Warranty' },
      { parameter: 'Package Dimensions', value: '40 × 30 × 10cm', group: 'Dimensions & Warranty' },
      { parameter: 'Warranty', value: '1-Year Official Industrial Warranty', group: 'Dimensions & Warranty' },
    ],
    quickCompare: {
      mechanism: 'Passive Elastic Polyester Latex + Thigh Linkage',
      capacityOrTemp: '0–30kg Dynamic Lumbar Assist',
      powerOrCycle: '100% Passive (0V)',
      netWeight: '≤ 1kg',
      primaryApplication: 'Logistics, Airport Baggage, Medical Caregiving',
    },
  },
  {
    id: 'gloves-01',
    indexNumber: '03',
    slug: 'gloves-01',
    route: '/products/gloves-01',
    name: 'Wrist Repetitive Work Assessment Glove',
    shortTitle: 'Edge-AI Biometric Diagnostic Glove',
    modelCode: 'LC Gloves-01',
    category: 'Smart Ergonomic Sensing Series',
    subCategory: 'GBZ 336-2025 Edge-AI Biometrics',
    pillarId: 'sensing',
    headline: 'Edge-AI Biometric Glove. GBZ 336-2025 Carpal Tunnel Risk Diagnostics.',
    overview:
      'Designed for manufacturing jobs with repetitive forceful wrist movements, the LC Gloves-01 strictly complies with GBZ 336-2025 Diagnostic Criteria for Occupational Carpal Tunnel Syndrome. Equipped with dual-posture IMU sensors (dorsal hand + wrist cuff) and onboard edge-AI computing, it tracks wrist angles, valid work motions, operation frequency, duration, and load intensity in real time. Supports wireless data upload and tablet analytics for ergonomic risk quantification and workstation optimization.',
    studioImage: '/assets/products/gloves-01/studio-main.webp',
    studioAspect: '3:4',
    datasheetPath: '/datasheets/LONGGUARD_LC-Gloves-01_Datasheet.pdf',
    datasheetDocId: 'LG-DS-2026-03',
    studioBananaPrompt:
      '3/4 studio hero render of the LC Gloves-01 Wrist Repetitive Work Assessment Glove on an articulated prosthetic hand. Technical light grey breathable knit glove with matte white dorsal IMU sensor pod, secondary wrist reference IMU pod, black trim, and exposed half-finger tactile cutouts. Lit with 3200K warm amber tungsten rim illumination on #0B0A0A deep warm charcoal background.',
    secondaryStudioImage: '/assets/products/gloves-01/tablet-telemetry-ui.webp',
    secondaryStudioCaption:
      'Companion Industrial Tablet Analytics Suite — Real-time dual-channel flexion/extension & radial/ulnar deviation waveform telemetry with automated GBZ 336-2025 occupational carpal tunnel risk grading.',
    secondaryStudioBananaPrompt:
      'Studio product shot of an industrial rugged tablet displaying the LC Gloves-01 companion diagnostic software interface with warm amber and titanium white real-time wrist angle waveforms (flexion/extension, radial/ulnar deviation, 24/min motion counter, GBZ 336-2025 compliance report) beside the LC Gloves-01 on a #0B0A0A dark graphite desk.',
    metrics: [
      { value: '≤ ±0.1°', label: 'Static IMU Measurement Precision' },
      { value: '±180°', label: 'Full Multi-Axis Range of Motion' },
      { value: '200g', label: 'Featherlight Ergonomic Form Factor' },
      { value: '24/min', label: 'Automated Valid Motion Frequency Tracking' },
    ],
    features: [
      {
        title: 'Dual-Point Attitude Sensing',
        description:
          'Differential sensing architecture cancels whole-arm movement artifacts, isolating pure wrist flexion, extension, and deviation.',
      },
      {
        title: 'Onboard Edge-AI Processing',
        description:
          'Glove micro-controller calculates angles, counts valid cycles, and compiles metrics locally with zero latency.',
      },
      {
        title: 'Wireless Tablet Telemetry',
        description:
          'Real-time Bluetooth/Wi-Fi data stream to companion PC/tablet suite generates exportable diagnostic risk reports.',
      },
      {
        title: 'Industrial-Grade Anti-Interference',
        description:
          'Shielded against electromagnetic noise and machine vibration in automotive and electronics plants.',
      },
    ],
    hotspots: [
      {
        id: 1,
        title: 'Half-Finger Tactile Cutouts',
        description:
          'Exposed fingertips preserve fine touch for delicate assembly of miniature screws and electronics.',
        x: 49,
        y: 31,
        zone: 'Distal Phalangeal Cutouts',
      },
      {
        id: 2,
        title: 'Zero-Slack Dorsal Pod Mount',
        description:
          'High-stretch elastic fabric locks the primary IMU sensor firmly over the metacarpals.',
        x: 50,
        y: 52,
        zone: 'Primary Metacarpal IMU Node',
      },
      {
        id: 3,
        title: 'Lightweight 200g Architecture',
        description:
          'Minimizes muscle load during continuous 8-hour ergonomic audits.',
        x: 68,
        y: 47,
        zone: 'Breathable Technical Knit Chassis',
      },
      {
        id: 4,
        title: 'Adjustable Secondary Wristband',
        description:
          'Anchors the reference IMU sensor across varied wrist circumferences.',
        x: 36,
        y: 78,
        zone: 'Radiocarpal Reference Strap',
      },
      {
        id: 5,
        title: 'Companion Diagnostic Software & Reference IMU',
        description:
          'Secondary wrist IMU pod streams real-time dual-channel waveforms for flexion/extension, radial/ulnar deviation, and GBZ 336-2025 risk grading.',
        x: 50,
        y: 80,
        zone: 'Wireless Edge-AI Telemetry Link',
      },
    ],
    bentoCards: [
      {
        id: 'bento-imu-pod',
        title: 'Dual-Posture Differential IMU Sensor Pods',
        subtitle: '≤ ±0.1° Static Accuracy & Edge-AI Microcontroller',
        description:
          'By pairing a dorsal metacarpal IMU with a wrist-cuff reference IMU, the onboard edge-AI processor rejects gross arm motion and isolates true wrist flexion/extension and radial/ulnar deviation past the 15° recognition threshold.',
        imagePath: '/assets/products/gloves-01/bento-imu-pod.webp',
        aspectRatio: '1:1',
        isHeroBento: true,
        materialTag: 'Dual Differential IMU • ≤ ±0.1° Precision',
        bananaPrompt:
          'Extreme macro studio shot of the matte white dorsal IMU sensor pod and wrist reference pod on the LC Gloves-01, illuminated by 3200K warm amber rim lighting against a #0B0A0A deep warm charcoal background.',
      },
      {
        id: 'bento-half-finger-knit',
        title: 'High-Stretch Technical Knit & Half-Finger Cutouts',
        subtitle: 'Zero-Slip Sensor Lock with Full Fingertip Dexterity',
        description:
          '200g breathable technical grey textile keeps IMU sensors locked without skin migration while leaving fingertips free for micro-fasteners and soldering.',
        imagePath: '/assets/products/gloves-01/bento-half-finger-knit.webp',
        aspectRatio: '1:1',
        materialTag: 'Technical Grey Anti-Slip Textile',
        bananaPrompt:
          'Close-up macro studio photograph of the LC Gloves-01 half-finger tactile cutouts and black reinforced trim stitching with 3200K warm tungsten rim light on #0B0A0A background.',
      },
      {
        id: 'bento-tablet-telemetry',
        title: 'GBZ 336-2025 Diagnostic Waveform Analytics Suite',
        subtitle: 'Real-Time Frequency (24/min) & Duration Quantification',
        description:
          'Streams real-time wrist kinematics to an industrial tablet PC to log daily working hours, valid motion counts, and automated occupational carpal tunnel syndrome risk reports.',
        imagePath: '/assets/products/gloves-01/tablet-telemetry-ui.webp',
        aspectRatio: '16:9',
        materialTag: 'GBZ 336-2025 Compliant Analytics',
        bananaPrompt:
          'Studio photograph of the companion industrial tablet PC running the LC Gloves-01 GBZ 336-2025 diagnostic waveform dashboard in warm amber and titanium typography over #0B0A0A dark UI.',
      },
    ],
    deployment: {
      title: 'Precision Electronics Assembly & Occupational Health Audits',
      locationBadge: '3C Electronics Manufacturing Line • Ergonomic Audit Station',
      narrative:
        'Occupational disease prevention hospitals, third-party ergonomic testing agencies, and manufacturing EHS teams deploy the LC Gloves-01 directly on live production lines. As operators assemble precision components, the glove captures every flexion, extension, and ulnar deviation above the customizable 15° threshold—delivering legally defensible GBZ 336-2025 compliance reports.',
      imagePath: '/assets/products/gloves-01/action-electronics.webp',
      bananaPrompt:
        'Editorial industrial photograph of an electronics assembly technician wearing the LC Gloves-01 biometric assessment glove while assembling precision circuit components, with an occupational ergonomist monitoring the companion tablet waveform nearby. Warm 3200K tungsten studio lighting.',
      environmentalMetrics: [
        { label: 'Diagnostic Standard', value: 'GBZ 336-2025 Compliant' },
        { label: 'Static Angle Accuracy', value: '≤ ±0.1° (±180° Range)' },
        { label: 'Standard Motion Threshold', value: '15° / 24 Motions·min⁻¹' },
      ],
      industries: [
        'Occupational Disease Prevention Hospitals',
        'Third-Party Ergonomic Testing Agencies',
        '3C Electronics & Automotive Assembly Audits',
        'Industrial Workstation Optimization',
      ],
    },
    specifications: [
      { parameter: 'Model', value: 'LC Gloves-01', group: 'Identity & Compliance' },
      { parameter: 'Color', value: 'Technical Light Grey with Matte White Sensor Pods & Black Trim', group: 'Identity & Compliance' },
      { parameter: 'Compliance', value: 'GBZ 336-2025 Diagnostic Criteria for Occupational Carpal Tunnel Syndrome', group: 'Identity & Compliance' },
      { parameter: 'Applications', value: 'Occupational disease prevention hospitals, third-party testing agencies, manufacturing workstation audits', group: 'Identity & Compliance' },
      { parameter: 'Recognition Threshold', value: '15° (customizable)', group: 'Performance & Mechanics' },
      { parameter: 'Angle Range', value: '±180°', group: 'Performance & Mechanics' },
      { parameter: 'Static Accuracy', value: '≤ ±0.1°', group: 'Performance & Mechanics' },
      { parameter: 'Frequency Counting', value: 'Automatically counts valid motions (standard: 24 motions/min)', group: 'Performance & Mechanics' },
      { parameter: 'Duration Tracking', value: 'Daily working hour accumulation', group: 'Performance & Mechanics' },
      { parameter: 'Measurement Dimensions', value: 'Wrist flexion/extension, radial/ulnar deviation angles', group: 'Performance & Mechanics' },
      { parameter: 'Sizes', value: 'M, L, XL (customizable)', group: 'Dimensions & Warranty' },
      { parameter: 'Net Weight', value: '200g', group: 'Dimensions & Warranty' },
      { parameter: 'Package Dimensions', value: '23 × 17 × 8cm', group: 'Dimensions & Warranty' },
      { parameter: 'Optional Accessories', value: 'Industrial Tablet PC (with pre-installed analytics suite) / Action Camera', group: 'Dimensions & Warranty' },
      { parameter: 'Warranty', value: '1-Year Official Industrial Warranty', group: 'Dimensions & Warranty' },
    ],
    quickCompare: {
      mechanism: 'Dual-IMU Differential Sensing + Edge-AI MCU',
      capacityOrTemp: '≤ ±0.1° Static Accuracy (±180° Range)',
      powerOrCycle: 'Real-Time Wireless Telemetry (24/min)',
      netWeight: '200g',
      primaryApplication: 'GBZ 336-2025 Audits, Hospitals, Manufacturing QA',
    },
  },
  {
    id: 'frost-pcm-a',
    indexNumber: '04',
    slug: 'frost-pcm-a',
    route: '/products/frost-pcm-a',
    name: 'PCM Cooling Vest (Transparent TPU Edition)',
    shortTitle: 'Bio-Based C17 Phase Change Armor',
    modelCode: 'LC Frost-PCM/A',
    category: 'Personal Thermal Management Series',
    subCategory: 'Passive Bio-Based C17 Constant Comfort',
    pillarId: 'thermal',
    headline: 'Bio-Based Phase Change Armor. Constant 22.08°C Torso Comfort.',
    overview:
      'Built with high-energy-density Phase Change Material (PCM) that absorbs body heat at a constant comfort temperature (~23°C), the LC Frost-PCM/A delivers gentle, long-lasting torso cooling. A single cold-storage cycle provides 1–2 hours of relief in 35°C high-heat environments. Reusable thousands of times—an intrinsically safe, wire-free personal micro-climate.',
    studioImage: '/assets/products/frost-pcm-a/studio-main.webp',
    studioAspect: '3:4',
    datasheetPath: '/datasheets/LONGGUARD_LC-Frost-PCM-A_Datasheet.pdf',
    datasheetDocId: 'LG-DS-2026-04',
    studioBananaPrompt:
      '3/4 studio hero render of the LC Frost-PCM/A Transparent TPU PCM Cooling Vest on a dark graphite torso form. Crystal-clear high-strength TPU encapsulated grid cells filled with crystalline bio-based C17 phase change material, dual black side-release webbing buckles. Lit with 3200K warm amber tungsten edge light refracting through the translucent PCM cells on #0B0A0A background.',
    metrics: [
      { value: '22.08°C', label: 'Constant Phase Change Comfort Temperature' },
      { value: '225 J/g', label: 'High Latent Heat of Fusion' },
      { value: '0.55kg', label: 'Ultra-Lightweight Transparent TPU Chassis' },
      { value: '1–2 Hours', label: 'Continuous Cooling per Charge Cycle' },
    ],
    features: [
      {
        title: 'Gentle Human-Comfort Cooling',
        description:
          'Operates at 22.08°C, completely preventing skin vasoconstriction or frostbite risks caused by traditional 0°C ice packs.',
      },
      {
        title: '100% Passive & Intrinsically Safe',
        description:
          'Requires no batteries, fans, or wires. Zero electrical hazards in cleanrooms, hazardous gas zones, and wet areas.',
      },
      {
        title: 'Zero-Degradation C17 Formulation',
        description:
          'Pure bio-based C17 n-alkane PCM withstands thousands of freeze-thaw cycles without performance loss.',
      },
      {
        title: 'Plant-Derived & Biodegradable',
        description:
          '100% biomass formulation, non-petroleum derived, environmentally safe and non-toxic.',
      },
    ],
    hotspots: [
      {
        id: 1,
        title: 'Fast-Cooling Grid Matrix',
        description:
          'Independent encapsulated PCM cells conform across the chest and back for maximum heat exchange area.',
        x: 50,
        y: 48,
        zone: 'Anterior & Dorsal C17 Cell Matrix',
      },
      {
        id: 2,
        title: 'Universal Adjustable Buckles',
        description:
          'Dual side-release black webbing buckles adapt to all body sizes and uniform styles.',
        x: 84,
        y: 66,
        zone: 'Lateral Tension Fasteners',
      },
      {
        id: 3,
        title: 'Medical-Grade TPU Shell',
        description:
          'Waterproof and oil-resistant transparent film enables instant sanitization and wipe-down cleaning.',
        x: 36,
        y: 38,
        zone: 'High-Frequency Welded TPU Encapsulation',
      },
      {
        id: 4,
        title: 'Low-Profile Under-Layer Cut',
        description:
          'Ultra-slim 0.55kg profile fits seamlessly under hazmat suits, cleanroom suits, or high-vis vests.',
        x: 72,
        y: 18,
        zone: '0.55kg Sub-Suit Ergonomic Cut',
      },
    ],
    bentoCards: [
      {
        id: 'bento-pcm-crystals',
        title: 'Bio-Based C17 n-Alkane Phase Change Matrix',
        subtitle: '225 J/g Latent Heat of Fusion at Constant 22.08°C',
        description:
          'Plant-derived C17 phase change crystals transition between solid and liquid at an exact 22.08°C plateau, absorbing 225 J/g of metabolic heat without causing cold shock or condensation dampness.',
        imagePath: '/assets/products/frost-pcm-a/bento-pcm-crystals.webp',
        aspectRatio: '1:1',
        isHeroBento: true,
        materialTag: '100% Bio-Based C17 PCM • 225 J/g',
        bananaPrompt:
          'Extreme macro studio photography of translucent bio-based C17 phase change material crystal lattice inside a clear TPU capsule, glowing softly with 3200K warm amber tungsten rim light against a #0B0A0A deep warm charcoal background.',
      },
      {
        id: 'bento-tpu-weld',
        title: 'High-Strength Medical-Grade TPU RF Welded Seams',
        subtitle: 'Waterproof, Oil-Resistant & Instant Wipe-Down Sanitization',
        description:
          'High-frequency welded Thermoplastic Polyurethane (TPU) grid channels resist puncture, chemical splashes, and biological contamination for sterile medical and cleanroom deployment.',
        imagePath: '/assets/products/frost-pcm-a/bento-tpu-weld.webp',
        aspectRatio: '1:1',
        materialTag: 'High-Strength Transparent TPU',
        bananaPrompt:
          'Macro close-up of the high-frequency RF welded transparent TPU seams of the LC Frost-PCM/A cooling vest with warm 3200K amber rim highlights on #0B0A0A background.',
      },
      {
        id: 'bento-side-buckle',
        title: 'Universal Dual Side-Release Webbing System',
        subtitle: 'One-Size-Fits-All Under-Suit Ergonomics',
        description:
          'Low-profile acetal buckles and heavy-duty webbing secure the 0.55kg vest beneath sealed hazmat or cleanroom coveralls with zero bulk.',
        imagePath: '/assets/products/frost-pcm-a/bento-side-buckle.webp',
        aspectRatio: '1:1',
        materialTag: 'Dual Side-Release Tactical Buckles',
        bananaPrompt:
          'Studio macro shot of the matte black dual side-release buckles and webbing attached to the transparent TPU shell of the LC Frost-PCM/A vest, lit with 3200K warm tungsten rim light.',
      },
    ],
    deployment: {
      title: 'Sealed Cleanrooms, Medical PPE & High-Heat Sanitation Operations',
      locationBadge: 'Semiconductor Cleanroom & Bio-Safety Level PPE Deployment',
      narrative:
        'Operators wearing impermeable hazmat suits, medical PPE coveralls, or cleanroom bunny suits cannot rely on evaporative sweat cooling or fan-blown air. At just 0.55kg, the crystal-transparent LC Frost-PCM/A slips cleanly beneath sealed outer garments, maintaining a constant 22.08°C micro-climate for 1–2 hours per cycle and recharging in 60 minutes at -18°C.',
      imagePath: '/assets/products/frost-pcm-a/action-cleanroom.webp',
      bananaPrompt:
        'Editorial industrial photograph of a cleanroom specialist equipping the transparent LC Frost-PCM/A cooling vest beneath a protective coverall in a high-tech facility with warm 3200K tungsten rim lighting and deep graphite shadows.',
      environmentalMetrics: [
        { label: 'Phase Change Plateau', value: '22.08°C Constant' },
        { label: 'Latent Heat Capacity', value: '225 J/g' },
        { label: 'Fast Freezer Recharge', value: '1 Hour at -18°C' },
      ],
      industries: [
        'Extreme High-Temperature Environments',
        'Semiconductor & Pharma Cleanrooms',
        'Medical PPE & Bio-Safety Teams',
        'Municipal Sanitation & Hazmat',
      ],
    },
    specifications: [
      { parameter: 'Model', value: 'LC Frost-PCM/A', group: 'Identity & Compliance' },
      { parameter: 'Color', value: 'Crystal Transparent (customizable PCM dye options)', group: 'Identity & Compliance' },
      { parameter: 'Target Users', value: 'Workers in extreme high-temperature environments, cleanrooms, medical PPE, sanitation', group: 'Identity & Compliance' },
      { parameter: 'Heat of Fusion', value: '225 J/g', group: 'Performance & Mechanics' },
      { parameter: 'Phase Change Temperature', value: '22.08°C', group: 'Performance & Mechanics' },
      { parameter: 'Cooling Duration', value: '1–2 hours (reference based on labor intensity and ambient temperature)', group: 'Performance & Mechanics' },
      { parameter: 'Cold Storage Recharge Time', value: 'Frozen at -18°C for 1 hour, OR refrigerated at 0–4°C for 1–2 hours', group: 'Performance & Mechanics' },
      { parameter: 'Shell Material', value: 'High-strength Thermoplastic Polyurethane (TPU)', group: 'Materials & Ergonomics' },
      { parameter: 'Size', value: 'One Size Fits All', group: 'Dimensions & Warranty' },
      { parameter: 'Net Weight', value: '0.55kg', group: 'Dimensions & Warranty' },
      { parameter: 'Package Dimensions', value: '40 × 30 × 10cm', group: 'Dimensions & Warranty' },
      { parameter: 'Optional Accessories', value: 'Custom PCM dye colors', group: 'Dimensions & Warranty' },
      { parameter: 'Warranty', value: '1-Year Official Industrial Warranty', group: 'Dimensions & Warranty' },
    ],
    quickCompare: {
      mechanism: 'Passive Bio-Based C17 PCM in Transparent TPU',
      capacityOrTemp: '22.08°C Constant (225 J/g)',
      powerOrCycle: '1–2h Cooling / 1h Recharge (-18°C)',
      netWeight: '0.55kg',
      primaryApplication: 'Cleanrooms, Medical PPE, Under-Suit Hazmat',
    },
  },
  {
    id: 'frost-pcm-g',
    indexNumber: '05',
    slug: 'frost-pcm-g',
    route: '/products/frost-pcm-g',
    name: 'Flame Retardant PCM Cooling Vest',
    shortTitle: 'Antistatic & Flame-Retardant PCM Armor',
    modelCode: 'LC Frost-PCM/G',
    category: 'Personal Thermal Management Series',
    subCategory: 'Hazardous Area Passive Thermal Shield',
    pillarId: 'thermal',
    headline: 'Antistatic & Flame-Retardant PCM Armor. Passive Cooling for Hazardous Frontlines.',
    overview:
      'Engineered with high-energy-density Phase Change Material absorbing heat at constant ~23°C and encapsulated within an antistatic, flame-retardant outer shell. Designed for petrochemical, foundry, welding, and utility operations where spark hazards, explosive dust, and extreme heat converge.',
    studioImage: '/assets/products/frost-pcm-g/studio-main.webp',
    studioAspect: '3:4',
    datasheetPath: '/datasheets/LONGGUARD_LC-Frost-PCM-G_Datasheet.pdf',
    datasheetDocId: 'LG-DS-2026-05',
    studioBananaPrompt:
      '3/4 studio hero render of the LC Frost-PCM/G Flame Retardant PCM Cooling Vest in Industrial Grey with dual 360-degree high-visibility silver retro-reflective bands and wide hook-and-loop cummerbund on a dark graphite mannequin. Warm 3200K amber tungsten rim lighting over #0B0A0A deep warm charcoal background.',
    metrics: [
      { value: '22.08°C', label: 'Non-Irritating Phase Change Comfort Zone' },
      { value: '225 J/g', label: 'Latent Heat Storage Capacity' },
      { value: '360°', label: 'High-Visibility Retro-Reflective Safety Bands' },
      { value: '0V', label: 'Zero-Spark Intrinsically Safe Passive Cooling' },
    ],
    features: [
      {
        title: 'Flame-Retardant & Antistatic Protection',
        description:
          'Heavy-duty industrial twill fabric repels slag, sparks, and static charge accumulation.',
      },
      {
        title: 'Constant 22.08°C Thermal Regulation',
        description:
          'Maintains continuous core cooling without cold shock during heavy manual labor in 35°C+ ambient heat.',
      },
      {
        title: 'High-Stability C17 Biomass Core',
        description:
          'Thousands of thermal cycles without degradation; non-toxic and eco-friendly.',
      },
      {
        title: 'Night & Low-Light Visibility',
        description:
          'Dual high-visibility silver reflective bands provide 360° safety in roadworks and dark industrial plants.',
      },
    ],
    hotspots: [
      {
        id: 1,
        title: 'FR & Antistatic Outer Weave',
        description:
          'Rugged ripstop fabric resists tearing, abrasions, and molten metal splatter.',
        x: 38,
        y: 34,
        zone: 'Flame-Retardant Industrial Twill Shell',
      },
      {
        id: 2,
        title: 'Elastic Magic-Tape Waistband',
        description:
          'Wide industrial hook-and-loop cummerbund fits securely across all torso builds.',
        x: 33,
        y: 73,
        zone: 'Heavy-Duty Cummerbund Fastener',
      },
      {
        id: 3,
        title: 'Modular PCM Thermal Pockets',
        description:
          'Dedicated internal compartments hold sealed PCM packs tight against the core.',
        x: 57,
        y: 22,
        zone: 'Internal C17 Thermal Pack Bays',
      },
      {
        id: 4,
        title: 'Dual Safety Warning Reflective Bands',
        description:
          '3M-grade retro-reflective stripes across the chest and waist ensure field visibility.',
        x: 48,
        y: 54,
        zone: '360° Retro-Reflective Warning Strips',
      },
    ],
    bentoCards: [
      {
        id: 'bento-fr-fabric',
        title: 'Antistatic & Flame-Retardant Ripstop Outer Shell',
        subtitle: 'Zero-Spark Protection for EX Hazardous Zones',
        description:
          'Specially treated antistatic and flame-retardant industrial weave dissipates electrostatic charges and resists welding splatter, enabling safe core cooling inside petrochemical refineries and gas plants.',
        imagePath: '/assets/products/frost-pcm-g/bento-fr-fabric.webp',
        aspectRatio: '1:1',
        isHeroBento: true,
        materialTag: 'FR & Antistatic Industrial Twill',
        bananaPrompt:
          'Extreme macro studio photograph of the LC Frost-PCM/G antistatic flame-retardant industrial grey ripstop fabric weave with carbon anti-static grid fibers catching 3200K warm amber rim light on #0B0A0A background.',
      },
      {
        id: 'bento-reflective-bands',
        title: 'Dual 360° Retro-Reflective Safety Warning Bands',
        subtitle: 'High-Contrast Night & Tunnel Visibility',
        description:
          'Wide silver retro-reflective bands wrap 360° around the chest and waist, ensuring immediate operator recognition in low-light refineries, tunnels, and night-shift roadworks.',
        imagePath: '/assets/products/frost-pcm-g/bento-reflective-bands.webp',
        aspectRatio: '1:1',
        materialTag: '360° Retro-Reflective Trim',
        bananaPrompt:
          'Macro close-up of the silver retro-reflective safety stripe stitched onto the industrial grey flame-retardant shell of the LC Frost-PCM/G vest under warm 3200K tungsten rim lighting.',
      },
      {
        id: 'bento-velcro-waist',
        title: 'Modular Internal PCM Bays & Elastic Waistband',
        subtitle: 'Rapid Hot-Swap Pack Replacement Between Shifts',
        description:
          'Internal thermal compartments allow crews to swap freshly recharged 22.08°C C17 PCM packs in seconds while the wide magic-tape waistband locks the vest closely to the torso.',
        imagePath: '/assets/products/frost-pcm-g/bento-velcro-waist.webp',
        aspectRatio: '1:1',
        materialTag: 'Modular PCM Bays • 0.96kg Total',
        bananaPrompt:
          'Studio detail photograph of the LC Frost-PCM/G wide industrial hook-and-loop cummerbund and internal modular PCM pocket liner with warm 3200K amber edge lighting over #0B0A0A background.',
      },
    ],
    deployment: {
      title: 'Petrochemical Refineries, Welding Bays & Night-Shift Utilities',
      locationBadge: 'EX-Rated Petrochemical Cracking Unit • High-Heat Zone',
      narrative:
        'In explosion-proof (EX) petrochemical zones and active welding shops, electronic batteries and brushed motors pose unacceptable ignition risks. The LC Frost-PCM/G pairs 0V passive 22.08°C phase-change cooling with an antistatic, flame-retardant outer shell and 360° reflective bands—delivering uncompromising thermal relief where electronics are forbidden.',
      imagePath: '/assets/products/frost-pcm-g/action-refinery.webp',
      bananaPrompt:
        'Editorial industrial photograph of a petrochemical refinery engineer wearing the LC Frost-PCM/G Flame Retardant PCM Cooling Vest with reflective bands during a night-shift inspection amid warm 3200K amber refinery lights and dark graphite steel structures.',
      environmentalMetrics: [
        { label: 'Ignition & Spark Hazard', value: '0V Intrinsically Safe' },
        { label: 'Phase Change Comfort', value: '22.08°C (225 J/g)' },
        { label: 'Complete Vest Weight', value: '0.96kg' },
      ],
      industries: [
        'Petrochemical & Oil Refining',
        'Metallurgy & Welding Operations',
        'Power Grid & Substation Maintenance',
        'High-Temperature Night-Shift Engineering',
      ],
    },
    specifications: [
      { parameter: 'Model', value: 'LC Frost-PCM/G', group: 'Identity & Compliance' },
      { parameter: 'Color', value: 'Industrial Grey with High-Visibility Reflective Trim (customizable)', group: 'Identity & Compliance' },
      { parameter: 'Target Users', value: 'Petrochemical, metallurgy, welding, power grid, and high-temperature night-shift workers', group: 'Identity & Compliance' },
      { parameter: 'Heat of Fusion', value: '225 J/g', group: 'Performance & Mechanics' },
      { parameter: 'Phase Change Temperature', value: '22.08°C', group: 'Performance & Mechanics' },
      { parameter: 'Cooling Duration', value: '1–2 hours (reference based on labor intensity and ambient temp)', group: 'Performance & Mechanics' },
      { parameter: 'Cold Storage Recharge Time', value: 'Frozen at -18°C for 1 hour, OR refrigerated at 0–4°C for 1–2 hours', group: 'Performance & Mechanics' },
      { parameter: 'Fabric Material', value: 'Antistatic and flame-retardant fabric', group: 'Materials & Ergonomics' },
      { parameter: 'Sizes', value: 'Standard Size / Plus Size', group: 'Dimensions & Warranty' },
      { parameter: 'Net Weight', value: '0.96kg', group: 'Dimensions & Warranty' },
      { parameter: 'Package Dimensions', value: '40 × 30 × 10cm', group: 'Dimensions & Warranty' },
      { parameter: 'Warranty', value: '1-Year Official Industrial Warranty', group: 'Dimensions & Warranty' },
    ],
    quickCompare: {
      mechanism: 'Passive Bio-Based C17 PCM in Antistatic FR Shell',
      capacityOrTemp: '22.08°C Constant (225 J/g)',
      powerOrCycle: '1–2h Cooling / 0V Intrinsically Safe',
      netWeight: '0.96kg',
      primaryApplication: 'Petrochemical, Welding, Metallurgy, Night Shift',
    },
  },
  {
    id: 'frost-tec-w',
    indexNumber: '06',
    slug: 'frost-tec-w',
    route: '/products/frost-tec-w',
    name: 'Semiconductor Water Cooling Vest',
    shortTitle: '80W Active Liquid + Dual Airflow Chiller',
    modelCode: 'LC Frost-TEC/W',
    category: 'Personal Thermal Management Series',
    subCategory: '80W Active Liquid + Dual Airflow',
    pillarId: 'thermal',
    headline: '80W Active Thermoelectric Chiller. Closed-Loop Liquid + Dual Airflow.',
    overview:
      'An active wearable cooling device powered by solid-state thermoelectric cooling (TEC) chips and a closed-loop water circulation system. Delivers steady, multi-level adjustable torso cooling within 2 minutes of startup. Integrates a quiet rear turbine exhaust fan and dual chest air-supply fans for all-day facial and torso dryness in firefighting, construction, power maintenance, and sanitation.',
    studioImage: '/assets/products/frost-tec-w/studio-dual-view.webp',
    studioAspect: '16:9',
    datasheetPath: '/datasheets/LONGGUARD_LC-Frost-TEC-W_Datasheet.pdf',
    datasheetDocId: 'LG-DS-2026-06',
    studioBananaPrompt:
      '16:9 dual-angle studio hero render (front and rear views side by side) of the LC Frost-TEC/W Semiconductor Water Cooling Vest in Technical Grey. Front shows V-neck antistatic FR shell and dual chest air-supply fan pockets; rear showcases the sleek silver 80W TEC chiller module with black turbine exhaust fan. 3200K warm amber tungsten rim lighting over #0B0A0A background.',
    metrics: [
      { value: '80W', label: 'Active Thermoelectric Cooling Capacity' },
      { value: '2 min', label: 'Fast Thermal Stabilization Time' },
      { value: '24V', label: 'High-Efficiency Chiller Architecture' },
      { value: '2–4 Hours', label: 'Continuous Shift Battery Endurance' },
    ],
    features: [
      {
        title: 'Precision Active Temperature Regulation',
        description:
          'Thermoelectric chiller actively draws heat away from circulating liquid, overcoming passive melting limitations.',
      },
      {
        title: 'Dual-Zone Forced-Air Evaporation',
        description:
          'Rear turbine expels heat while dual front fans direct air toward the neck and face to accelerate sweat evaporation.',
      },
      {
        title: 'Extended Field Battery Life',
        description:
          '24V lithium power supply delivers 1–2 hours on a single pack and up to 4 hours with dual batteries.',
      },
      {
        title: 'Leak-Proof Sealed Liquid Channels',
        description:
          'Industrial TPU tubing resists high pressures, twisting, and rough site conditions without leaking.',
      },
    ],
    hotspots: [
      {
        id: 1,
        title: 'Antistatic FR V-Neck Shell',
        description:
          'Soft, protective industrial grey fabric resistant to heat and static hazards.',
        x: 25,
        y: 36,
        zone: 'Anterior Flame-Retardant Chassis',
      },
      {
        id: 2,
        title: 'Side Compression Straps',
        description:
          'Ergonomic tensioners pull cooling water channels tight against the torso.',
        x: 45,
        y: 74,
        zone: 'Bilateral Thermal Contact Tensioners',
      },
      {
        id: 3,
        title: 'Rear 80W TEC Chiller Module',
        description:
          'Sleek silver casing with black turbine fan stabilizes water temperatures within 2 minutes.',
        x: 75,
        y: 65,
        zone: 'Dorsal 24V / 80W Thermoelectric Core',
      },
      {
        id: 4,
        title: 'Dual Front Air-Supply Pockets',
        description:
          'Front utility pockets hold batteries while driving cooling airflow up toward the chin and chest.',
        x: 16,
        y: 77,
        zone: 'Anterior Updraft Air-Supply Modules',
      },
    ],
    bentoCards: [
      {
        id: 'bento-tec-chiller',
        title: 'Dorsal 80W Solid-State TEC Chiller & Turbine Exhaust',
        subtitle: '24V / 100W Architecture • Stable Chilled Loop in 2 Minutes',
        description:
          'Mounted ergonomically on the back, the silver-anodized 80W thermoelectric module chills internal circulating water within 2 minutes while a quiet radial turbine exhausts rejected heat away from the operator.',
        imagePath: '/assets/products/frost-tec-w/bento-tec-chiller.webp',
        aspectRatio: '1:1',
        isHeroBento: true,
        materialTag: '80W TEC Chiller • 2-Min Stabilization',
        bananaPrompt:
          'Extreme macro studio photograph of the rear silver-anodized 80W TEC chiller module and black radial turbine exhaust fan on the LC Frost-TEC/W vest, lit by 3200K warm amber rim lighting against #0B0A0A background.',
      },
      {
        id: 'bento-front-air-vents',
        title: 'Dual Chest Forced-Air Supply Fans',
        subtitle: 'Upward Facial & Neck Sweat Evaporation',
        description:
          'Integrated front pocket blowers channel fresh airflow upward across the chest, neck, and face, combining internal conductive liquid cooling with external convective drying.',
        imagePath: '/assets/products/frost-tec-w/bento-front-air-vents.webp',
        aspectRatio: '1:1',
        materialTag: 'Dual Anterior Updraft Fans',
        bananaPrompt:
          'Close-up studio shot of the dual front air-supply fan vents and utility battery pockets on the LC Frost-TEC/W vest with 3200K warm tungsten rim light.',
      },
      {
        id: 'bento-tpu-water-loop',
        title: 'Medical/Industrial TPU Closed-Loop Water Liner',
        subtitle: 'Kink-Resistant High-Pressure Micro-Fluidic Network',
        description:
          'Serpentine TPU micro-channels distribute chilled water evenly across the core and may be paired with supplemental PCM cooling packs for extreme thermal spikes.',
        imagePath: '/assets/products/frost-tec-w/bento-tpu-water-loop.webp',
        aspectRatio: '1:1',
        materialTag: 'Closed-Loop TPU Fluidic Liner',
        bananaPrompt:
          'Studio macro photograph of the internal medical/industrial TPU water-channel cooling liner of the LC Frost-TEC/W vest glowing subtly under 3200K warm amber rim light on #0B0A0A background.',
      },
    ],
    deployment: {
      title: 'High-Voltage Power Grid Maintenance, Firefighting & Heavy Construction',
      locationBadge: '500kV Substation Transformer Overhaul • Summer Peak Load',
      narrative:
        'When power grid crews and firefighters operate in 40°C+ radiant heat, passive ice packs can melt before a complex maintenance task finishes. The LC Frost-TEC/W combines 80W of active thermoelectric liquid chilling with dual chest fans that sweep cooling airflow across the neck and face—sustaining peak cognitive alertness for 2 to 4 hours.',
      imagePath: '/assets/products/frost-tec-w/action-power-grid.webp',
      bananaPrompt:
        'Editorial industrial photograph of a power grid maintenance engineer wearing the Technical Grey LC Frost-TEC/W Semiconductor Water Cooling Vest while inspecting high-voltage substation equipment at dusk with 3200K warm amber work lights.',
      environmentalMetrics: [
        { label: 'Active Cooling Output', value: '80W (24V / 100W Rated)' },
        { label: 'Loop Stabilization', value: '2 Minutes' },
        { label: 'Continuous Endurance', value: '2–4 Hours (Dual Battery)' },
      ],
      industries: [
        'Power Grid & Substation Maintenance',
        'Firefighting & Emergency Rescue',
        'Public Security & Traffic Control',
        'Heavy Construction & Municipal Sanitation',
      ],
    },
    specifications: [
      { parameter: 'Model', value: 'LC Frost-TEC/W', group: 'Identity & Compliance' },
      { parameter: 'Color', value: 'Technical Grey (customizable)', group: 'Identity & Compliance' },
      { parameter: 'Target Users', value: 'Firefighting, public security, power grid, construction, sanitation in extreme heat', group: 'Identity & Compliance' },
      { parameter: 'Cooling Capacity', value: '80W', group: 'Performance & Mechanics' },
      { parameter: 'Rated Voltage', value: '24V', group: 'Performance & Mechanics' },
      { parameter: 'Rated Power', value: '100W', group: 'Performance & Mechanics' },
      { parameter: 'Cooling Response Time', value: 'Stable in 2 min', group: 'Performance & Mechanics' },
      { parameter: 'Battery Life', value: '1–2 hours single battery (2–4 hours continuous system endurance)', group: 'Performance & Mechanics' },
      { parameter: 'Outer Fabric', value: 'Antistatic and flame-retardant fabric', group: 'Materials & Ergonomics' },
      { parameter: 'Lining Fabric', value: 'Medical/industrial TPU water-channel liner', group: 'Materials & Ergonomics' },
      { parameter: 'Size', value: 'One Size Fits All', group: 'Dimensions & Warranty' },
      { parameter: 'Net Weight', value: '< 3kg', group: 'Dimensions & Warranty' },
      { parameter: 'Package Dimensions', value: '40 × 30 × 10cm', group: 'Dimensions & Warranty' },
      { parameter: 'Optional Accessories', value: 'Supplemental PCM cooling packs', group: 'Dimensions & Warranty' },
      { parameter: 'Warranty', value: '1-Year Official Industrial Warranty', group: 'Dimensions & Warranty' },
    ],
    quickCompare: {
      mechanism: 'Active 80W TEC Liquid Loop + Dual Chest Fans',
      capacityOrTemp: '80W Active Cooling (Stable in 2 min)',
      powerOrCycle: '24V / 100W • 2–4h Endurance',
      netWeight: '< 3kg',
      primaryApplication: 'Firefighting, Power Grid, Heavy Construction',
    },
  },
  {
    id: 'frost-tec-d',
    indexNumber: '07',
    slug: 'frost-tec-d',
    route: '/products/frost-tec-d',
    name: 'Direct Cooling Semiconductor Vest',
    shortTitle: '2-Second Instant Solid-State Peltier Vest',
    modelCode: 'LC Frost-TEC/D',
    category: 'Personal Thermal Management Series',
    subCategory: '2-Second Instant Solid-State Peltier',
    pillarId: 'thermal',
    headline: '2-Second Instant Peltier Cooling. Zero Water, Zero Refrigerant, 8-Hour Endurance.',
    overview:
      'Leveraging the solid-state Peltier effect via direct-contact TEC modules, the LC Frost-TEC/D requires no ice, liquid coolant, or compressor. Direct-contact thermal conduction plates absorb torso heat immediately upon power-on—stabilizing in just 2 seconds—while whisper-quiet fans dissipate waste heat. Features a breathable mesh chassis and high-visibility reflective stripes for industrial inspection, medical PPE, and outdoor operations.',
    studioImage: '/assets/products/frost-tec-d/studio-dual-view.webp',
    studioAspect: '16:9',
    datasheetPath: '/datasheets/LONGGUARD_LC-Frost-TEC-D_Datasheet.pdf',
    datasheetDocId: 'LG-DS-2026-07',
    studioBananaPrompt:
      '16:9 dual-view studio hero render of the LC Frost-TEC/D Direct Cooling Semiconductor Vest in Tactical Grey Mesh with Neon Yellow Hi-Vis Reflective Trim and Black Straps. Shows the 4-pod direct-contact Peltier TEC conduction plates, quick-release yellow chest buckles, and chest controller dial. 3200K warm amber tungsten rim illumination on #0B0A0A background.',
    metrics: [
      { value: '2 Seconds', label: 'Ultra-Fast Solid-State Cooling Stabilization' },
      { value: '0 Liquid', label: 'Completely Dry Direct Conduction (Zero Leakage Risk)' },
      { value: '2–8 Hours', label: 'Extended Modular Battery Operation' },
      { value: '> 20,000 Hours', label: 'Solid-State Semiconductor Lifespan' },
    ],
    features: [
      {
        title: 'Instant 2-Second Solid-State Conduction',
        description:
          'Direct Peltier contact plates cool immediately upon activation with zero pre-freezing or water refilling.',
      },
      {
        title: 'Whisper-Quiet Vibration-Free Operation',
        description:
          'Low-noise axial cooling fans eliminate compressor drone and pump vibrations for quiet inspections.',
      },
      {
        title: 'Up to 8-Hour Modular Power',
        description:
          'Low 60W power draw enables 2–8 hours of runtime (2 hours per lightweight battery pack).',
      },
      {
        title: 'Zero Maintenance & 20,000-Hour Longevity',
        description:
          'Solid-state architecture eliminates hoses, refrigerants, and pumps for leak-proof durability.',
      },
    ],
    hotspots: [
      {
        id: 1,
        title: '4-Pod Direct-Contact TEC Array',
        description:
          'Four Peltier conduction plates positioned on the upper back deliver instantaneous cooling directly to the skin.',
        x: 28,
        y: 30,
        zone: 'Quad Dorsal Solid-State Peltier Array',
      },
      {
        id: 2,
        title: 'Quick-Release Yellow Chest Buckles',
        description:
          'High-visibility chest fasteners and rear bungee cord ensure a snug, non-restrictive fit.',
        x: 25,
        y: 63,
        zone: 'Hi-Vis Anterior Fastening Harness',
      },
      {
        id: 3,
        title: 'Chest Controller & Low-Noise Fans',
        description:
          'Chest-mounted circular dial provides intuitive multi-stage thermal regulation.',
        x: 36,
        y: 34,
        zone: 'Rotary Thermal Dial & Axial Heat Sinks',
      },
      {
        id: 4,
        title: 'Detachable Washable Hi-Vis Mesh',
        description:
          'Breathable antistatic mesh with neon-yellow and silver reflective stripes; electronics detach easily for washing.',
        x: 74,
        y: 54,
        zone: 'Modular Washable Antistatic Mesh Chassis',
      },
    ],
    bentoCards: [
      {
        id: 'bento-peltier-plates',
        title: '4-Pod Direct-Contact Solid-State Peltier Conduction Array',
        subtitle: '45W Cooling Capacity • Instant 2-Second Thermal Drop',
        description:
          'Four anodized aluminum thermal conduction plates coupled directly to solid-state semiconductor chips pull heat from the upper back within 2 seconds of power-on—zero water, zero pumps, and >20,000 hours of chip lifespan.',
        imagePath: '/assets/products/frost-tec-d/bento-peltier-plates.webp',
        aspectRatio: '1:1',
        isHeroBento: true,
        materialTag: '4-Pod Solid-State Peltier • >20,000h Lifespan',
        bananaPrompt:
          'Macro studio photograph of the 4 anodized direct-contact Peltier cooling plates and whisper-quiet axial heat-sink fans of the LC Frost-TEC/D vest, illuminated by 3200K warm amber tungsten rim lighting over #0B0A0A background.',
      },
      {
        id: 'bento-yellow-buckles',
        title: 'Quick-Release Hi-Vis Chest Buckles & Elastic Bungee Tension',
        subtitle: 'Constant Conduction Plate Skin Contact During Motion',
        description:
          'High-visibility yellow quick-release buckles and rear dynamic bungee lacing maintain optimal contact pressure between the 4 Peltier pods and the operator’s upper back.',
        imagePath: '/assets/products/frost-tec-d/bento-yellow-buckles.webp',
        aspectRatio: '1:1',
        materialTag: 'Hi-Vis Quick-Release Fasteners',
        bananaPrompt:
          'Close-up studio detail of the LC Frost-TEC/D quick-release yellow chest buckles and neon-yellow/silver reflective trim on tactical grey mesh, lit by 3200K warm amber rim light.',
      },
      {
        id: 'bento-mesh-controller',
        title: 'Chest Rotary Controller & Modular Washable Mesh',
        subtitle: '12V / 60W Low-Draw Architecture for 2–8 Hour Runtimes',
        description:
          'Intuitive chest-mounted rotary dial adjusts solid-state cooling intensity on the fly, while the entire electronic harness detaches so the antistatic FR mesh vest can be washed.',
        imagePath: '/assets/products/frost-tec-d/bento-mesh-controller.webp',
        aspectRatio: '1:1',
        materialTag: 'Detachable Washable Antistatic FR Mesh',
        bananaPrompt:
          'Macro studio shot of the chest-mounted circular thermal controller dial and breathable antistatic mesh of the LC Frost-TEC/D vest with warm 3200K tungsten rim lighting on #0B0A0A background.',
      },
    ],
    deployment: {
      title: 'Railway Track Inspection, Outdoor Security & Mobile Field Patrols',
      locationBadge: 'High-Speed Rail Corridor Inspection • 8-Hour Patrol Shift',
      narrative:
        'Mobile inspection engineers, traffic officers, and outdoor security personnel need immediate cooling without carrying water reservoirs or waiting for freezer packs. Weighing ~1.7kg and stabilizing in just 2 seconds on a 12V battery system, the LC Frost-TEC/D delivers up to 8 hours of dry, whisper-quiet solid-state cooling across long field patrols.',
      imagePath: '/assets/products/frost-tec-d/action-track-inspection.webp',
      bananaPrompt:
        'Editorial industrial photograph of a railway infrastructure inspection engineer wearing the LC Frost-TEC/D Direct Cooling Semiconductor Vest with neon-yellow hi-vis reflective trim along a rail corridor under warm 3200K golden hour rim light.',
      environmentalMetrics: [
        { label: 'Thermal Stabilization', value: '2 Seconds (Instant)' },
        { label: 'Modular Battery Runtime', value: '2–8 Hours (12V / 60W)' },
        { label: 'Semiconductor Lifespan', value: '> 20,000 Hours' },
      ],
      industries: [
        'Industrial & Railway Track Inspection',
        'Medical PPE & Mobile Clinics',
        'Outdoor Traffic & Aviation Ground Crew',
        'Security & Patrol Personnel',
      ],
    },
    specifications: [
      { parameter: 'Model', value: 'LC Frost-TEC/D', group: 'Identity & Compliance' },
      { parameter: 'Color', value: 'Tactical Grey Mesh with Neon Yellow Hi-Vis Reflective Trim & Black Straps (Black Option)', group: 'Identity & Compliance' },
      { parameter: 'Target Users', value: 'Industrial inspection, medical PPE, outdoor traffic, security personnel', group: 'Identity & Compliance' },
      { parameter: 'Cooling Capacity', value: '45W', group: 'Performance & Mechanics' },
      { parameter: 'Rated Voltage', value: '12V', group: 'Performance & Mechanics' },
      { parameter: 'Rated Power', value: '60W', group: 'Performance & Mechanics' },
      { parameter: 'Cooling Response Time', value: 'Instant cooling, stable in 2s', group: 'Performance & Mechanics' },
      { parameter: 'Battery Life', value: '2–8 hours (2 hours per single battery pack)', group: 'Performance & Mechanics' },
      { parameter: 'Chip Lifespan', value: '> 20,000 hours', group: 'Performance & Mechanics' },
      { parameter: 'Outer Fabric', value: 'Antistatic and flame-retardant breathable mesh (modular detachable & washable)', group: 'Materials & Ergonomics' },
      { parameter: 'Sizes', value: 'Standard Size / Plus Size', group: 'Dimensions & Warranty' },
      { parameter: 'Net Weight', value: '~1.7kg', group: 'Dimensions & Warranty' },
      { parameter: 'Package Dimensions', value: '40 × 30 × 10cm', group: 'Dimensions & Warranty' },
      { parameter: 'Warranty', value: '1-Year Official Industrial Warranty', group: 'Dimensions & Warranty' },
    ],
    quickCompare: {
      mechanism: '4-Pod Direct-Contact Solid-State Peltier (Dry)',
      capacityOrTemp: '45W Direct Conduction (2s Instant)',
      powerOrCycle: '12V / 60W • 2–8h Modular Runtime',
      netWeight: '~1.7kg',
      primaryApplication: 'Industrial Inspection, Traffic, Security, Medical PPE',
    },
  },
  {
    id: 'frost-acc-w',
    indexNumber: '08',
    slug: 'frost-acc-w',
    route: '/products/frost-acc-w',
    name: 'Compressor Water Cooling Vest',
    shortTitle: '300W Extreme Micro-Inverter Chiller',
    modelCode: 'LC Frost-ACC/W',
    category: 'Personal Thermal Management Series',
    subCategory: '300W Extreme Micro-Inverter Chiller',
    pillarId: 'thermal',
    headline: '300W Active Micro-Inverter Refrigeration for Extreme Heat Hazards.',
    overview:
      'The flagship of the LC Frost line, the LC Frost-ACC/W integrates a miniature inverter refrigeration compressor with a closed-loop chilled liquid circulation network. Delivering an industry-leading 60–300W of active cooling capacity, a wide temperature adjustment range, and unwavering constant-temperature output, it is the ultimate protective cooling armor for extreme metallurgy, firefighting, and confined-space operations.',
    studioImage: '/assets/products/frost-acc-w/studio-main.webp',
    studioAspect: '3:4',
    datasheetPath: '/datasheets/LONGGUARD_LC-Frost-ACC-W_Datasheet.pdf',
    datasheetDocId: 'LG-DS-2026-08',
    studioBananaPrompt:
      '3/4 studio hero render of the flagship LC Frost-ACC/W Compressor Water Cooling Vest in Industrial Grey with Black Trim on a dark graphite mannequin, paired with its compact 24V miniature inverter refrigeration compressor unit and sealed liquid coupling line. Lit by 3200K warm amber tungsten rim illumination on #0B0A0A background.',
    metrics: [
      { value: '60–300W', label: 'Heavy-Duty Active Compressor Refrigeration' },
      { value: '< 4kg', label: 'Ergonomically Balanced Wearable Chiller Unit' },
      { value: '3 min', label: 'Rapid High-Capacity Chilled Loop Stabilization' },
      { value: '100%', label: 'Sealed Leak-Proof Liquid Circuit' },
    ],
    features: [
      {
        title: '300W Extreme Active Refrigeration',
        description:
          'Micro-inverter compressor rapidly chills circulating water upon startup with multi-stage digital temperature regulation.',
      },
      {
        title: 'Under-4kg Integrated Mobility',
        description:
          'Compact cooling architecture balances weight along the lower torso for unrestricted mobility in tight quarters.',
      },
      {
        title: 'Intensive 2–4 Hour Shift Endurance',
        description:
          'High-capacity 24V lithium battery system sustains heavy-duty refrigeration across grueling shifts.',
      },
      {
        title: 'Shockproof & Sealed Fluidics',
        description:
          'Rugged liquid couplings and pressurized TPU bladders withstand heavy impacts, vibration, and site washdowns.',
      },
    ],
    hotspots: [
      {
        id: 1,
        title: 'Flame-Retardant V-Neck Outer Shell',
        description:
          'Minimalist grey antistatic shell with heavy-duty center zipper fits comfortably over base layers.',
        x: 23,
        y: 40,
        zone: 'Antistatic FR V-Neck Armor Shell',
      },
      {
        id: 2,
        title: 'Bilateral Compression Webbing',
        description:
          'Side tension straps maximize thermal contact between the internal chilled TPU bladder and torso.',
        x: 50,
        y: 52,
        zone: 'Bilateral Torso Compression Straps',
      },
      {
        id: 3,
        title: 'Micro-Inverter Compressor Chiller',
        description:
          '24V miniature compressor core stabilizes chilled water circulation within 3 minutes.',
        x: 75,
        y: 74,
        zone: '60–300W Micro-Inverter Refrigeration Core',
      },
      {
        id: 4,
        title: 'Internal TPU Cooling Bladder & Insulated Loop',
        description:
          'Closed-loop liquid network paired with breathable 3D lining prevents condensation accumulation.',
        x: 43,
        y: 76,
        zone: 'Pressurized Closed-Loop TPU Bladder',
      },
    ],
    bentoCards: [
      {
        id: 'bento-micro-compressor',
        title: '24V Miniature Inverter Refrigeration Compressor Core',
        subtitle: '60–300W Active Cooling Output • 110W Rated Power',
        description:
          'Unlike standard thermoelectric coolers, the LC Frost-ACC/W utilizes a true vapor-compression micro-inverter cycle capable of delivering up to 300W of refrigeration power—maintaining cold liquid circulation even in 50°C+ foundry radiation.',
        imagePath: '/assets/products/frost-acc-w/bento-micro-compressor.webp',
        aspectRatio: '1:1',
        isHeroBento: true,
        materialTag: '60–300W Micro-Inverter Compressor',
        bananaPrompt:
          'Extreme macro studio cutaway render of the 24V miniature inverter refrigeration compressor chiller module of the LC Frost-ACC/W vest, showing precision copper/titanium heat exchanger coils and matte black housing under 3200K warm amber rim lighting on #0B0A0A background.',
      },
      {
        id: 'bento-sealed-bladder',
        title: 'High-Durability Pressurized TPU Liquid Cooling Bladder',
        subtitle: '100% Leak-Proof Fluidics with 3D Anti-Condensation Lining',
        description:
          'High-density serpentine TPU cooling bladder maximizes torso contact surface area while an inner breathable 3D mesh barrier prevents skin clamminess.',
        imagePath: '/assets/products/frost-acc-w/bento-sealed-bladder.webp',
        aspectRatio: '1:1',
        materialTag: 'Pressurized TPU Liquid Bladder',
        bananaPrompt:
          'Studio macro photograph of the pressurized high-durability TPU liquid cooling bladder and quick-disconnect dry-break fluid couplings of the LC Frost-ACC/W vest, lit by 3200K warm amber rim lighting.',
      },
      {
        id: 'bento-zipper-flame-shell',
        title: 'Antistatic Flame-Retardant Shell & Heavy-Duty Center Zipper',
        subtitle: '< 4kg Balanced Ergonomics for Confined Spaces',
        description:
          'Industrial grey antistatic and flame-retardant outer fabric with reinforced black trim and bilateral compression straps resists sparks, slag, and heavy abrasion.',
        imagePath: '/assets/products/frost-acc-w/bento-zipper-flame-shell.webp',
        aspectRatio: '1:1',
        materialTag: 'Antistatic FR Shell • < 4kg Total',
        bananaPrompt:
          'Close-up studio photograph of the LC Frost-ACC/W industrial grey antistatic flame-retardant V-neck shell, heavy-duty center zipper, and bilateral compression webbing under 3200K warm tungsten rim light.',
      },
    ],
    deployment: {
      title: 'Extreme Metallurgy Foundries, Firefighting & Confined-Space Operations',
      locationBadge: 'Blast Furnace & Molten Metal Casting Bay • >45°C Ambient',
      narrative:
        'In blast furnace casting bays, heavy equipment cabs without HVAC, and deep confined-space rescue missions, radiant heat loads overwhelm conventional cooling vests. Delivering 60–300W of active vapor-compression refrigeration in a <4kg wearable package, the LC Frost-ACC/W stabilizes chilled water within 3 minutes and protects core body temperature under the most punishing industrial conditions on earth.',
      imagePath: '/assets/products/frost-acc-w/action-foundry.webp',
      bananaPrompt:
        'Cinematic industrial photograph of a metallurgy foundry specialist wearing the LC Frost-ACC/W Compressor Water Cooling Vest inside a dark steel casting plant illuminated by warm 3200K amber molten metal glow.',
      environmentalMetrics: [
        { label: 'Active Refrigeration Range', value: '60–300W (24V / 110W)' },
        { label: 'Chilled Loop Stabilization', value: '3 Minutes' },
        { label: 'Complete System Weight', value: '< 4.0kg' },
      ],
      industries: [
        'Metallurgy & Smelting Foundries',
        'Firefighting & Hazmat Rescue',
        'Confined-Space & Tunnel Engineering',
        'Unconditioned Heavy Equipment Cabs',
      ],
    },
    specifications: [
      { parameter: 'Model', value: 'LC Frost-ACC/W', group: 'Identity & Compliance' },
      { parameter: 'Color', value: 'Industrial Grey with Black Trim', group: 'Identity & Compliance' },
      { parameter: 'Target Users', value: 'Extreme high-temperature environments (metallurgy, foundry, firefighting, heavy equipment cabs)', group: 'Identity & Compliance' },
      { parameter: 'Cooling Capacity', value: '60–300W', group: 'Performance & Mechanics' },
      { parameter: 'Rated Voltage', value: '24V', group: 'Performance & Mechanics' },
      { parameter: 'Rated Power', value: '110W', group: 'Performance & Mechanics' },
      { parameter: 'Cooling Response Time', value: 'Stable in 3 min', group: 'Performance & Mechanics' },
      { parameter: 'Battery Life', value: '1–2 hours single battery (2–4 hours system continuous operation)', group: 'Performance & Mechanics' },
      { parameter: 'Outer Fabric', value: 'Antistatic and flame-retardant fabric', group: 'Materials & Ergonomics' },
      { parameter: 'Lining Fabric', value: 'High-durability TPU liquid cooling bladder', group: 'Materials & Ergonomics' },
      { parameter: 'Size', value: 'One Size Fits All', group: 'Dimensions & Warranty' },
      { parameter: 'Net Weight', value: '< 4kg', group: 'Dimensions & Warranty' },
      { parameter: 'Package Dimensions', value: '40 × 30 × 10cm', group: 'Dimensions & Warranty' },
      { parameter: 'Warranty', value: '1-Year Official Industrial Warranty', group: 'Dimensions & Warranty' },
    ],
    quickCompare: {
      mechanism: 'Active Micro-Inverter Compressor + Closed-Loop Liquid',
      capacityOrTemp: '60–300W Active Refrigeration (Stable in 3 min)',
      powerOrCycle: '24V / 110W • 2–4h Continuous',
      netWeight: '< 4kg',
      primaryApplication: 'Extreme Metallurgy, Foundry, Firefighting, Confined Spaces',
    },
  },
];

export const HERO_COMPOSITE_ASSET = {
  path: '/assets/hero/hero-composite-main.webp',
  aspectRatio: '16:9',
  title: 'LONGGUARD Flagship Trio — Bionic Exoskeleton, Edge-AI Biometric Glove & 300W Micro-Inverter Thermal Armor',
  bananaPrompt:
    '16:9 flagship commercial studio composite photograph of LONGGUARD TECHNOLOGY hardware trio: center-left LC Power-U/A Carbon Upper Limb Exoskeleton, center-right LC Frost-ACC/W 300W Compressor Cooling Vest, and foreground LC Gloves-01 Edge-AI Biometric Glove on dark matte pedestals. Dramatic 3200K warm amber tungsten rim lighting tracing carbon fiber weaves and anodized aluminum chamfers against a solid #0B0A0A deep warm graphite charcoal backdrop. Shot on Hasselblad H6D-100c, 100mm f/4.',
};

export const BRAND_CREDENTIALS = {
  globalBrand: 'LONGGUARD TECHNOLOGY',
  legalEntity: 'Guangdong Langcheng Technology Co., Ltd.',
  rdCenter: 'Intelligent Protection Technology R&D Center',
  institute: 'GDUT Institute of CNC Equipment Collaborative Innovation',
  fullAffiliation:
    'Intelligent Protection Technology R&D Center — GDUT Institute of CNC Equipment Collaborative Innovation',
  address:
    'Room 81-516 / B1-516, GDUT Institute of CNC Equipment Innovation, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China.',
  hotlineDisplay: '+86 159-8917-5854',
  hotlineRaw: '+86 15989175854',
  email: '1094099100@qq.com',
  warrantyBadge: '1-Year Official Industrial Warranty',
  warrantyFull: '1-Year Official Industrial Manufacturer Warranty Across All Hardware',
  masterCatalogPdfPath: '/datasheets/LONGGUARD_2026_Master_Catalog.pdf',
  copyright:
    '© 2026 Guangdong Langcheng Technology Co., Ltd. (LONGGUARD TECHNOLOGY). All Rights Reserved.',
};
