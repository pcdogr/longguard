import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');

// Complete 42-asset manifest from Section 6.2
const ASSETS = [
  // 1. Global Hero Composite (1)
  {
    file: 'assets/hero/hero-composite-main.webp',
    width: 1600,
    height: 900,
    type: 'hero-composite',
    model: 'LONGGUARD FLAGSHIP PORTFOLIO',
    title: 'Human-Centric Bionics & Precision Thermal Armor',
    subtitle: 'LC Power-U/A • LC Gloves-01 • LC Frost-ACC/W',
    metric: '3200K Studio Edition',
    accent: '#F59E0B',
  },
  // 2. Product 01: power-ua (5)
  {
    file: 'assets/products/power-ua/studio-main.webp',
    width: 1200,
    height: 1600,
    type: 'studio-exo-upper',
    model: 'LC Power-U/A',
    title: 'Passive Upper Limb Exoskeleton',
    subtitle: 'Aerospace Carbon Spine • 4-Angle Mechanical Shoulder Lock',
    metric: 'Max. 8kg Assist • < 2kg Net Weight',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/power-ua/action-automotive.webp',
    width: 1600,
    height: 900,
    type: 'action-scene',
    model: 'LC Power-U/A • FIELD DEPLOYMENT',
    title: 'Automotive Underbody Assembly & Overhead Torque',
    subtitle: 'Zero-Power Deltoid Offloading at 50° / 70° / 90° / 110°–115°',
    metric: '8kg Overhead Relief • 100% Passive',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/power-ua/bento-gear-joint.webp',
    width: 1000,
    height: 1000,
    type: 'bento-gear',
    model: 'LC Power-U/A • MECHANISM',
    title: '4-Gear Aviation Aluminum Shoulder Joint',
    subtitle: 'Semi-Automatic Ratchet • 50°, 70°, 90°, 110°/115°',
    metric: '3 Gears / 4 Angles',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/power-ua/bento-carbon-spine.webp',
    width: 1000,
    height: 1000,
    type: 'bento-carbon',
    model: 'LC Power-U/A • STRUCTURE',
    title: 'Telescoping Carbon Fiber Dorsal Spine',
    subtitle: 'High-Tensile Multi-Axial Carbon Weave',
    metric: '< 2kg Total Mass',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/power-ua/bento-armrest-harness.webp',
    width: 1000,
    height: 1000,
    type: 'bento-mesh',
    model: 'LC Power-U/A • ERGONOMICS',
    title: 'Quick-Release Armrest Cuffs & 3D Mesh',
    subtitle: 'Wear-Resistant Oxford + Breathable 3D Lining',
    metric: '< 15s Rapid Release',
    accent: '#F59E0B',
  },

  // 3. Product 02: flex-w (5)
  {
    file: 'assets/products/flex-w/studio-main.webp',
    width: 1200,
    height: 1600,
    type: 'studio-exo-waist',
    model: 'LC Flex-W',
    title: 'Flexible Waist Exoskeleton',
    subtitle: 'Integrated Lumbar Support Bracket + Bilateral Thigh Linkage',
    metric: '0–30kg Dynamic Assist • ≤ 1kg',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/flex-w/action-logistics.webp',
    width: 1600,
    height: 900,
    type: 'action-scene',
    model: 'LC Flex-W • FIELD DEPLOYMENT',
    title: 'High-Frequency Logistics & Airport Baggage Handling',
    subtitle: 'Progressive Kinetic Energy Storage & Erector Spinae Offloading',
    metric: '0–30kg Thrust • ≤ 1kg Profile',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/flex-w/bento-lumbar-cushion.webp',
    width: 1000,
    height: 1000,
    type: 'bento-mesh',
    model: 'LC Flex-W • LUMBAR CORE',
    title: 'Thickened 3D Lumbar Decompression Cushion',
    subtitle: 'Integrated Back-Lumbar Support Bracket',
    metric: 'L1–L5 Load Equilibrium',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/flex-w/bento-latex-straps.webp',
    width: 1000,
    height: 1000,
    type: 'bento-straps',
    model: 'LC Flex-W • ENERGY MEDIUM',
    title: 'High-Resilience Polyester Latex Fiber Core',
    subtitle: '0V Non-Powered Fail-Safe Elastic Deformation',
    metric: '0–30kg Dynamic Range',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/flex-w/bento-thigh-cuffs.webp',
    width: 1000,
    height: 1000,
    type: 'bento-buckle',
    model: 'LC Flex-W • MOBILITY',
    title: 'Bilateral Thigh Traction Linkage Cuffs',
    subtitle: 'Zero Rigid Hip Bars • Full Squat & Driving Agility',
    metric: '160–190cm Fit',
    accent: '#F59E0B',
  },

  // 4. Product 03: gloves-01 (5)
  {
    file: 'assets/products/gloves-01/studio-main.webp',
    width: 1200,
    height: 1600,
    type: 'studio-glove',
    model: 'LC Gloves-01',
    title: 'Wrist Repetitive Work Assessment Glove',
    subtitle: 'Dual-Posture Differential IMU • Edge-AI Microcontroller',
    metric: '≤ ±0.1° Accuracy • GBZ 336-2025',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/gloves-01/action-electronics.webp',
    width: 1600,
    height: 900,
    type: 'action-scene',
    model: 'LC Gloves-01 • FIELD DEPLOYMENT',
    title: 'Precision Workstation Ergonomic Audit & Carpal Tunnel Assessment',
    subtitle: 'GBZ 336-2025 Compliant Real-Time Wrist Kinematics & Motion Counting',
    metric: '24 Motions/min • 200g Weight',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/gloves-01/tablet-telemetry-ui.webp',
    width: 1600,
    height: 900,
    type: 'tablet-ui',
    model: 'LC Gloves-01 • ANALYTICS SUITE',
    title: 'Companion Diagnostic Waveform & Risk Grading Dashboard',
    subtitle: 'Real-Time Flexion/Extension & Radial/Ulnar Deviation Telemetry',
    metric: 'GBZ 336-2025 Standard',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/gloves-01/bento-imu-pod.webp',
    width: 1000,
    height: 1000,
    type: 'bento-imu',
    model: 'LC Gloves-01 • SENSING CORE',
    title: 'Dual-Posture Differential IMU Sensor Pod',
    subtitle: 'Dorsal Hand + Wrist Cuff Artifact Cancellation',
    metric: '≤ ±0.1° Static Accuracy',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/gloves-01/bento-half-finger-knit.webp',
    width: 1000,
    height: 1000,
    type: 'bento-mesh',
    model: 'LC Gloves-01 • FORM FACTOR',
    title: 'Half-Finger Tactile Cutouts & Zero-Slack Knit',
    subtitle: '200g Featherlight Chassis for 8-Hour Audits',
    metric: '±180° Full Range',
    accent: '#F59E0B',
  },

  // 5. Product 04: frost-pcm-a (5)
  {
    file: 'assets/products/frost-pcm-a/studio-main.webp',
    width: 1200,
    height: 1600,
    type: 'studio-vest-pcma',
    model: 'LC Frost-PCM/A',
    title: 'Transparent TPU PCM Cooling Vest',
    subtitle: 'Bio-Based C17 Phase Change Matrix • Medical-Grade TPU Shell',
    metric: '22.08°C Constant • 225 J/g',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-pcm-a/action-cleanroom.webp',
    width: 1600,
    height: 900,
    type: 'action-scene',
    model: 'LC Frost-PCM/A • FIELD DEPLOYMENT',
    title: 'Cleanroom, Medical PPE & Impermeable Hazmat Under-Suit Cooling',
    subtitle: 'Wire-Free 22.08°C Thermal Regulation Without Vasoconstriction',
    metric: '0.55kg Ultra-Light • 1–2h Cooling',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-pcm-a/bento-pcm-crystals.webp',
    width: 1000,
    height: 1000,
    type: 'bento-crystals',
    model: 'LC Frost-PCM/A • PHASE CHANGE CORE',
    title: '100% Bio-Based C17 n-Alkane Crystal Matrix',
    subtitle: 'Zero-Degradation Across Thousands of Thermal Cycles',
    metric: '225 J/g Latent Heat',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-pcm-a/bento-tpu-weld.webp',
    width: 1000,
    height: 1000,
    type: 'bento-tpu',
    model: 'LC Frost-PCM/A • ENCAPSULATION',
    title: 'High-Strength RF-Welded Transparent TPU Shell',
    subtitle: 'Waterproof, Oil-Resistant & Wipe-Down Sanitizable',
    metric: '22.08°C Melt Point',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-pcm-a/bento-side-buckle.webp',
    width: 1000,
    height: 1000,
    type: 'bento-buckle',
    model: 'LC Frost-PCM/A • FIT SYSTEM',
    title: 'Universal Dual Side-Release Webbing Buckles',
    subtitle: 'One-Size-Fits-All Low-Profile Under-Layer Cut',
    metric: '0.55kg Net Weight',
    accent: '#F59E0B',
  },

  // 6. Product 05: frost-pcm-g (5)
  {
    file: 'assets/products/frost-pcm-g/studio-main.webp',
    width: 1200,
    height: 1600,
    type: 'studio-vest-pcmg',
    model: 'LC Frost-PCM/G',
    title: 'Flame Retardant PCM Cooling Vest',
    subtitle: 'Antistatic & Flame-Retardant Shell • 360° Reflective Trim',
    metric: '22.08°C • 225 J/g • 0V Safe',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-pcm-g/action-refinery.webp',
    width: 1600,
    height: 900,
    type: 'action-scene',
    model: 'LC Frost-PCM/G • FIELD DEPLOYMENT',
    title: 'Petrochemical Refineries, Metallurgy & Night-Shift Welding',
    subtitle: 'Intrinsically Safe Zero-Spark Passive Cooling in Explosive Gas Zones',
    metric: '360° Hi-Vis • 0.96kg Net Weight',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-pcm-g/bento-fr-fabric.webp',
    width: 1000,
    height: 1000,
    type: 'bento-carbon',
    model: 'LC Frost-PCM/G • OUTER ARMOR',
    title: 'Antistatic & Flame-Retardant Industrial Weave',
    subtitle: 'Repels Welding Slag, Sparks & Electrostatic Accumulation',
    metric: 'EX-Zone Ready',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-pcm-g/bento-reflective-bands.webp',
    width: 1000,
    height: 1000,
    type: 'bento-straps',
    model: 'LC Frost-PCM/G • VISIBILITY',
    title: 'Dual 360° Retro-Reflective Safety Warning Stripes',
    subtitle: 'High-Contrast Night & Low-Light Industrial Recognition',
    metric: '360° Coverage',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-pcm-g/bento-velcro-waist.webp',
    width: 1000,
    height: 1000,
    type: 'bento-buckle',
    model: 'LC Frost-PCM/G • MODULAR CORE',
    title: 'Elastic Cummerbund & Internal PCM Thermal Bays',
    subtitle: 'Rapid Pack Swap for Continuous Multi-Shift Cooling',
    metric: '0.96kg Total Mass',
    accent: '#F59E0B',
  },

  // 7. Product 06: frost-tec-w (5)
  {
    file: 'assets/products/frost-tec-w/studio-dual-view.webp',
    width: 1600,
    height: 900,
    type: 'studio-vest-tecw',
    model: 'LC Frost-TEC/W',
    title: 'Semiconductor Water Cooling Vest (Front & Rear Studio View)',
    subtitle: '80W Solid-State TEC Liquid Chiller + Dual Chest Forced-Air Supply Fans',
    metric: '80W Cooling • 2-Min Stabilization • 24V',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-tec-w/action-power-grid.webp',
    width: 1600,
    height: 900,
    type: 'action-scene',
    model: 'LC Frost-TEC/W • FIELD DEPLOYMENT',
    title: 'High-Voltage Power Grid Maintenance & Firefighting Operations',
    subtitle: 'Closed-Loop Chilled Water Circulation + Upward Facial Airflow',
    metric: '80W Active • 2–4h Endurance',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-tec-w/bento-tec-chiller.webp',
    width: 1000,
    height: 1000,
    type: 'bento-chiller',
    model: 'LC Frost-TEC/W • CHILLER CORE',
    title: 'Rear 80W TEC Chiller & Turbine Exhaust Module',
    subtitle: '24V / 100W Rated Solid-State Liquid Heat Exchanger',
    metric: 'Stable in 2 Min',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-tec-w/bento-front-air-vents.webp',
    width: 1000,
    height: 1000,
    type: 'bento-imu',
    model: 'LC Frost-TEC/W • DUAL AIRFLOW',
    title: 'Dual Chest Air-Supply Fans & Battery Pockets',
    subtitle: 'Accelerates Neck & Facial Sweat Evaporation',
    metric: '2–4h Shift Runtime',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-tec-w/bento-tpu-water-loop.webp',
    width: 1000,
    height: 1000,
    type: 'bento-tpu',
    model: 'LC Frost-TEC/W • FLUIDIC CIRCUIT',
    title: 'Medical/Industrial TPU Closed-Loop Water Liner',
    subtitle: 'Kink-Resistant Pressurized Serpentine Micro-Channels',
    metric: '< 3kg Net Weight',
    accent: '#F59E0B',
  },

  // 8. Product 07: frost-tec-d (5)
  {
    file: 'assets/products/frost-tec-d/studio-dual-view.webp',
    width: 1600,
    height: 900,
    type: 'studio-vest-tecd',
    model: 'LC Frost-TEC/D',
    title: 'Direct Cooling Semiconductor Vest (Front & Rear Studio View)',
    subtitle: '4-Pod Direct-Contact Solid-State Peltier Array • Detachable Washable Hi-Vis Mesh',
    metric: '2s Instant Cooling • 0 Liquid • 2–8h Runtime',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-tec-d/action-track-inspection.webp',
    width: 1600,
    height: 900,
    type: 'action-scene',
    model: 'LC Frost-TEC/D • FIELD DEPLOYMENT',
    title: 'Industrial Track Inspection, Traffic Control & Mobile Security',
    subtitle: 'Zero Water, Zero Refrigerant, Whisper-Quiet Direct Conduction',
    metric: '45W Peltier • >20,000h Lifespan',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-tec-d/bento-peltier-plates.webp',
    width: 1000,
    height: 1000,
    type: 'bento-chiller',
    model: 'LC Frost-TEC/D • SOLID-STATE ARRAY',
    title: '4-Pod Direct-Contact Peltier Conduction Plates',
    subtitle: 'Instant 2-Second Thermal Stabilization on Upper Back',
    metric: '> 20,000h Chip Life',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-tec-d/bento-yellow-buckles.webp',
    width: 1000,
    height: 1000,
    type: 'bento-buckle',
    model: 'LC Frost-TEC/D • HI-VIS HARNESS',
    title: 'Quick-Release Yellow Chest Buckles & Rear Bungee',
    subtitle: 'Constant Conduction Contact During Active Movement',
    metric: '~1.7kg Net Weight',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-tec-d/bento-mesh-controller.webp',
    width: 1000,
    height: 1000,
    type: 'bento-mesh',
    model: 'LC Frost-TEC/D • MODULAR DESIGN',
    title: 'Rotary Chest Controller & Washable FR Mesh',
    subtitle: '12V / 60W Low-Power Architecture • Detachable Electronics',
    metric: '2–8h Modular Power',
    accent: '#F59E0B',
  },

  // 9. Product 08: frost-acc-w (5)
  {
    file: 'assets/products/frost-acc-w/studio-main.webp',
    width: 1200,
    height: 1600,
    type: 'studio-vest-accw',
    model: 'LC Frost-ACC/W',
    title: 'Compressor Water Cooling Vest',
    subtitle: '24V Miniature Inverter Refrigeration Compressor + Sealed Liquid Bladder',
    metric: '60–300W Active Cooling • < 4kg',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-acc-w/action-foundry.webp',
    width: 1600,
    height: 900,
    type: 'action-scene',
    model: 'LC Frost-ACC/W • FIELD DEPLOYMENT',
    title: 'Extreme Metallurgy Foundries, Firefighting & Confined Spaces',
    subtitle: 'Unwavering 60–300W Micro-Inverter Vapor-Compression Chilling',
    metric: '300W Peak • 3-Min Stabilization',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-acc-w/bento-micro-compressor.webp',
    width: 1000,
    height: 1000,
    type: 'bento-compressor',
    model: 'LC Frost-ACC/W • INVERTER CORE',
    title: '24V Miniature Inverter Refrigeration Compressor',
    subtitle: '60–300W Variable Capacity • 110W Rated Power',
    metric: '60–300W Output',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-acc-w/bento-sealed-bladder.webp',
    width: 1000,
    height: 1000,
    type: 'bento-tpu',
    model: 'LC Frost-ACC/W • FLUIDIC BLADDER',
    title: 'Pressurized High-Durability TPU Cooling Bladder',
    subtitle: '100% Sealed Circuit with 3D Anti-Condensation Lining',
    metric: '3-Min Stabilization',
    accent: '#F59E0B',
  },
  {
    file: 'assets/products/frost-acc-w/bento-zipper-flame-shell.webp',
    width: 1000,
    height: 1000,
    type: 'bento-carbon',
    model: 'LC Frost-ACC/W • OUTER SHELL',
    title: 'Antistatic Flame-Retardant V-Neck Armor Shell',
    subtitle: 'Heavy-Duty Center Zipper & Bilateral Compression Webbing',
    metric: '< 4kg Total Mass',
    accent: '#F59E0B',
  },
];

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function renderArtworkShapes(item) {
  const { width: w, height: h, type } = item;
  const cx = w / 2;
  const cy = h / 2;

  if (type === 'hero-composite') {
    return `
      <!-- Pedestal & Studio Floor Reflection -->
      <ellipse cx="${cx}" cy="${h * 0.82}" rx="${w * 0.42}" ry="${h * 0.08}" fill="url(#floorGlow)" opacity="0.8"/>
      <line x1="${w * 0.08}" y1="${h * 0.78}" x2="${w * 0.92}" y2="${h * 0.78}" stroke="#F59E0B" stroke-opacity="0.25" stroke-width="1.5"/>

      <!-- Left Unit: LC Power-U/A Exoskeleton Silhouette -->
      <g transform="translate(${w * 0.23}, ${h * 0.46})">
        <rect x="-70" y="-160" width="140" height="280" rx="28" fill="#161514" stroke="url(#amberRim)" stroke-width="2.5"/>
        <rect x="-12" y="-175" width="24" height="250" rx="8" fill="#22201E" stroke="#F59E0B" stroke-width="2"/>
        <!-- Shoulder Ratchet Joints -->
        <circle cx="-85" cy="-120" r="28" fill="#1C1917" stroke="#F59E0B" stroke-width="3"/>
        <circle cx="-85" cy="-120" r="12" fill="#F59E0B" fill-opacity="0.25" stroke="#F59E0B" stroke-width="1.5"/>
        <circle cx="85" cy="-120" r="28" fill="#1C1917" stroke="#F59E0B" stroke-width="3"/>
        <circle cx="85" cy="-120" r="12" fill="#F59E0B" fill-opacity="0.25" stroke="#F59E0B" stroke-width="1.5"/>
        <!-- Elevated Support Arms -->
        <path d="M-85 -120 L-135 -185 L-115 -200" fill="none" stroke="#E2E8F0" stroke-width="8" stroke-linecap="round"/>
        <path d="M85 -120 L135 -185 L115 -200" fill="none" stroke="#E2E8F0" stroke-width="8" stroke-linecap="round"/>
        <!-- Lumbar Belt -->
        <rect x="-82" y="45" width="164" height="44" rx="14" fill="#1F1D1B" stroke="#F59E0B" stroke-width="2"/>
        <text x="0" y="160" text-anchor="middle" fill="#A8A29E" font-family="Inter, sans-serif" font-size="15" font-weight="600" letter-spacing="2">LC POWER-U/A • 8KG ASSIST</text>
      </g>

      <!-- Center Unit: LC Gloves-01 Edge-AI Biometric Glove -->
      <g transform="translate(${cx}, ${h * 0.50})">
        <circle cx="0" cy="-20" r="135" fill="url(#centerHalo)" opacity="0.55"/>
        <rect x="-78" y="-110" width="156" height="190" rx="36" fill="#242220" stroke="url(#amberRim)" stroke-width="3"/>
        <!-- Half-finger cutouts -->
        <rect x="-62" y="-155" width="24" height="50" rx="8" fill="#1C1917" stroke="#E2E8F0" stroke-width="1.5"/>
        <rect x="-28" y="-168" width="24" height="63" rx="8" fill="#1C1917" stroke="#E2E8F0" stroke-width="1.5"/>
        <rect x="6" y="-164" width="24" height="59" rx="8" fill="#1C1917" stroke="#E2E8F0" stroke-width="1.5"/>
        <rect x="40" y="-148" width="24" height="43" rx="8" fill="#1C1917" stroke="#E2E8F0" stroke-width="1.5"/>
        <!-- Dorsal Primary IMU Pod -->
        <rect x="-36" y="-58" width="72" height="54" rx="12" fill="#F8FAFC" stroke="#F59E0B" stroke-width="2.5"/>
        <circle cx="0" cy="-31" r="10" fill="#0066CC"/>
        <!-- Wrist Secondary IMU Pod -->
        <rect x="-68" y="34" width="136" height="38" rx="10" fill="#181716" stroke="#F59E0B" stroke-width="2"/>
        <rect x="-28" y="41" width="56" height="24" rx="6" fill="#F8FAFC"/>
        <!-- Connection Vector -->
        <line x1="0" y1="-4" x2="0" y2="41" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4 4"/>
        <text x="0" y="125" text-anchor="middle" fill="#F59E0B" font-family="Inter, sans-serif" font-size="15" font-weight="700" letter-spacing="2">LC GLOVES-01 • ≤ ±0.1° IMU</text>
      </g>

      <!-- Right Unit: LC Frost-ACC/W 300W Compressor Cooling Armor -->
      <g transform="translate(${w * 0.77}, ${h * 0.46})">
        <path d="M-85 -155 L-38 -155 L0 -95 L38 -155 L85 -155 L95 95 L-95 95 Z" fill="#1A1918" stroke="url(#amberRim)" stroke-width="2.5"/>
        <!-- Serpentine Chilled Liquid Channels -->
        <path d="M-55 -65 H55 M-60 -30 H60 M-60 5 H60 M-55 40 H55" stroke="#0066CC" stroke-opacity="0.55" stroke-width="5" stroke-linecap="round"/>
        <!-- Micro-Inverter Compressor Unit -->
        <rect x="42" y="-10" width="78" height="115" rx="14" fill="#141312" stroke="#F59E0B" stroke-width="3"/>
        <circle cx="81" cy="35" r="24" fill="#1C1917" stroke="#F59E0B" stroke-width="2"/>
        <circle cx="81" cy="35" r="9" fill="#F59E0B"/>
        <text x="0" y="160" text-anchor="middle" fill="#A8A29E" font-family="Inter, sans-serif" font-size="15" font-weight="600" letter-spacing="2">LC FROST-ACC/W • 300W CHILLER</text>
      </g>
    `;
  }

  if (type === 'studio-exo-upper') {
    return `
      <g transform="translate(${cx}, ${cy - 30})">
        <!-- Mannequin Torso Silhouette -->
        <path d="M-150 -290 C-90 -320, 90 -320, 150 -290 L180 -90 L140 240 L-140 240 L-180 -90 Z" fill="#141312" stroke="#292524" stroke-width="2"/>
        <!-- Telescoping Carbon Fiber Dorsal Spine -->
        <rect x="-22" y="-280" width="44" height="460" rx="12" fill="#1C1917" stroke="url(#amberRim)" stroke-width="3"/>
        <line x1="0" y1="-260" x2="0" y2="160" stroke="#F59E0B" stroke-opacity="0.4" stroke-width="2" stroke-dasharray="8 6"/>
        <!-- 4-Gear Shoulder Ratchet Joints -->
        <circle cx="-165" cy="-235" r="52" fill="#181716" stroke="#F59E0B" stroke-width="3.5"/>
        <circle cx="-165" cy="-235" r="26" fill="#262320" stroke="#E2E8F0" stroke-width="2"/>
        <circle cx="165" cy="-235" r="52" fill="#181716" stroke="#F59E0B" stroke-width="3.5"/>
        <circle cx="165" cy="-235" r="26" fill="#262320" stroke="#E2E8F0" stroke-width="2"/>
        <!-- Angle Calibration Arcs (50°, 70°, 90°, 115°) -->
        <path d="M-230 -235 A65 65 0 0 1 -165 -300" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6 4"/>
        <path d="M230 -235 A65 65 0 0 0 165 -300" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6 4"/>
        <!-- Quick-Release Armrest Cuffs -->
        <path d="M-165 -235 L-265 -140 L-235 -95 L-135 -190 Z" fill="#1F1D1B" stroke="#E2E8F0" stroke-width="2.5"/>
        <path d="M165 -235 L265 -140 L235 -95 L135 -190 Z" fill="#1F1D1B" stroke="#E2E8F0" stroke-width="2.5"/>
        <!-- Quick-Release Chest Harness -->
        <rect x="-125" y="-120" width="250" height="46" rx="12" fill="#1C1917" stroke="#F59E0B" stroke-width="2"/>
        <rect x="-28" y="-126" width="56" height="58" rx="10" fill="#F59E0B" fill-opacity="0.2" stroke="#F59E0B" stroke-width="2.5"/>
        <!-- Contoured 3D Lumbar Belt -->
        <rect x="-168" y="135" width="336" height="96" rx="28" fill="#181716" stroke="url(#amberRim)" stroke-width="3"/>
        <rect x="-130" y="158" width="260" height="50" rx="16" fill="#23201E" stroke="#78716C" stroke-width="1.5"/>
      </g>
    `;
  }

  if (type === 'studio-exo-waist') {
    return `
      <g transform="translate(${cx}, ${cy - 30})">
        <!-- Flexible Torso & Pelvis Silhouette -->
        <path d="M-135 -280 L135 -280 L155 40 L175 300 L55 300 L0 120 L-55 300 L-175 300 L-155 40 Z" fill="#141312" stroke="#292524" stroke-width="2"/>
        <!-- Multi-Height Adjustable Shoulder Straps -->
        <path d="M-95 -270 L-35 -20 L35 -20 L95 -270" fill="none" stroke="url(#amberRim)" stroke-width="26" stroke-linecap="round"/>
        <!-- High-Resilience Elastic Polyester Latex Core -->
        <rect x="-52" y="-160" width="104" height="210" rx="22" fill="#1C1917" stroke="#F59E0B" stroke-width="3"/>
        <line x1="-22" y1="-135" x2="-22" y2="25" stroke="#F59E0B" stroke-width="4"/>
        <line x1="0" y1="-135" x2="0" y2="25" stroke="#E2E8F0" stroke-width="4"/>
        <line x1="22" y1="-135" x2="22" y2="25" stroke="#F59E0B" stroke-width="4"/>
        <!-- Thickened 3D Lumbar Cushion -->
        <rect x="-155" y="-20" width="310" height="125" rx="38" fill="#1F1D1B" stroke="url(#amberRim)" stroke-width="3.5"/>
        <!-- Bilateral Thigh Traction Straps -->
        <rect x="-168" y="165" width="115" height="72" rx="18" fill="#181716" stroke="#F59E0B" stroke-width="3"/>
        <rect x="53" y="165" width="115" height="72" rx="18" fill="#181716" stroke="#F59E0B" stroke-width="3"/>
        <line x1="-110" y1="105" x2="-110" y2="165" stroke="#E2E8F0" stroke-width="8"/>
        <line x1="110" y1="105" x2="110" y2="165" stroke="#E2E8F0" stroke-width="8"/>
      </g>
    `;
  }

  if (type === 'studio-glove') {
    return `
      <g transform="translate(${cx}, ${cy - 30})">
        <!-- Technical Light Grey Glove Chassis -->
        <rect x="-155" y="-190" width="310" height="360" rx="64" fill="#2A2826" stroke="url(#amberRim)" stroke-width="3.5"/>
        <!-- Half-Finger Tactile Cutouts -->
        <rect x="-135" y="-310" width="54" height="130" rx="18" fill="#1C1917" stroke="#E2E8F0" stroke-width="2"/>
        <rect x="-62" y="-345" width="54" height="165" rx="18" fill="#1C1917" stroke="#E2E8F0" stroke-width="2"/>
        <rect x="12" y="-330" width="54" height="150" rx="18" fill="#1C1917" stroke="#E2E8F0" stroke-width="2"/>
        <rect x="85" y="-295" width="54" height="115" rx="18" fill="#1C1917" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M-155 -60 L-245 -140 L-205 -190 L-155 -130 Z" fill="#2A2826" stroke="#F59E0B" stroke-width="2.5"/>
        <!-- Primary Dorsal Matte White IMU Pod -->
        <rect x="-80" y="-95" width="160" height="120" rx="24" fill="#F1F5F9" stroke="#F59E0B" stroke-width="4"/>
        <circle cx="0" cy="-35" r="24" fill="#0B0A0A" stroke="#0066CC" stroke-width="4"/>
        <circle cx="0" cy="-35" r="7" fill="#F59E0B"/>
        <!-- Secondary Wrist Reference IMU Band -->
        <rect x="-145" y="115" width="290" height="86" rx="22" fill="#161514" stroke="#F59E0B" stroke-width="3"/>
        <rect x="-65" y="130" width="130" height="56" rx="14" fill="#F1F5F9" stroke="#0066CC" stroke-width="2.5"/>
        <!-- Differential Angle Telemetry Axis -->
        <line x1="0" y1="25" x2="0" y2="130" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6 6"/>
      </g>
    `;
  }

  if (type === 'tablet-ui') {
    return `
      <g transform="translate(${cx}, ${cy - 15})">
        <!-- Rugged Industrial Tablet Frame -->
        <rect x="-480" y="-260" width="960" height="500" rx="28" fill="#141312" stroke="url(#amberRim)" stroke-width="4"/>
        <rect x="-445" y="-225" width="890" height="430" rx="14" fill="#0B0A0A" stroke="#292524" stroke-width="2"/>
        <!-- Header Bar -->
        <text x="-410" y="-180" fill="#F59E0B" font-family="Inter, sans-serif" font-size="18" font-weight="700" letter-spacing="2">LONGGUARD EDGE-AI TELEMETRY • GBZ 336-2025 DIAGNOSTIC SUITE</text>
        <text x="410" y="-180" text-anchor="end" fill="#E2E8F0" font-family="Inter, sans-serif" font-size="16" font-weight="600">STATIC PRECISION: ≤ ±0.1° | 24 MOTIONS/MIN</text>
        <line x1="-415" y1="-155" x2="415" y2="-155" stroke="#292524" stroke-width="1.5"/>
        <!-- Dual-Channel Waveform 1: Flexion / Extension -->
        <text x="-410" y="-115" fill="#A8A29E" font-family="Inter, sans-serif" font-size="15" font-weight="600">CH-01: WRIST FLEXION / EXTENSION ANGLE (±180° RANGE | 15° THRESHOLD)</text>
        <path d="M-410 -45 Q-360 -120, -310 -45 T-210 -45 T-110 -45 T-10 -45 T90 -45 T190 -45 T290 -45 T390 -45" fill="none" stroke="#F59E0B" stroke-width="3.5"/>
        <!-- Dual-Channel Waveform 2: Radial / Ulnar Deviation -->
        <text x="-410" y="35" fill="#A8A29E" font-family="Inter, sans-serif" font-size="15" font-weight="600">CH-02: RADIAL / ULNAR DEVIATION DIFFERENTIAL IMU STREAM</text>
        <path d="M-410 105 Q-370 55, -330 105 T-250 105 T-170 105 T-90 105 T-10 105 T70 105 T150 105 T230 105 T310 105 T390 105" fill="none" stroke="#0066CC" stroke-width="3.5"/>
      </g>
    `;
  }

  if (type === 'studio-vest-pcma') {
    return `
      <g transform="translate(${cx}, ${cy - 30})">
        <!-- Transparent TPU Cooling Vest Shell -->
        <path d="M-165 -280 L-65 -280 L0 -165 L65 -280 L165 -280 L185 240 L-185 240 Z" fill="#1E293B" fill-opacity="0.35" stroke="url(#amberRim)" stroke-width="3.5"/>
        <!-- 16 Encapsulated Bio-Based C17 PCM Crystal Cells -->
        <g stroke="#F59E0B" stroke-opacity="0.7" stroke-width="2" fill="#E2E8F0" fill-opacity="0.16">
          <rect x="-135" y="-120" width="115" height="68" rx="12"/>
          <rect x="20" y="-120" width="115" height="68" rx="12"/>
          <rect x="-135" y="-34" width="115" height="68" rx="12"/>
          <rect x="20" y="-34" width="115" height="68" rx="12"/>
          <rect x="-135" y="52" width="115" height="68" rx="12"/>
          <rect x="20" y="52" width="115" height="68" rx="12"/>
          <rect x="-135" y="138" width="115" height="68" rx="12"/>
          <rect x="20" y="138" width="115" height="68" rx="12"/>
        </g>
        <!-- Dual Side-Release Buckles -->
        <rect x="-215" y="40" width="44" height="85" rx="8" fill="#181716" stroke="#F59E0B" stroke-width="2.5"/>
        <rect x="171" y="40" width="44" height="85" rx="8" fill="#181716" stroke="#F59E0B" stroke-width="2.5"/>
      </g>
    `;
  }

  if (type === 'studio-vest-pcmg') {
    return `
      <g transform="translate(${cx}, ${cy - 30})">
        <!-- Flame Retardant Industrial Grey Outer Shell -->
        <path d="M-170 -280 L-65 -280 L0 -160 L65 -280 L170 -280 L190 245 L-190 245 Z" fill="#262523" stroke="url(#amberRim)" stroke-width="3.5"/>
        <!-- Dual 360° High-Visibility Retro-Reflective Stripes -->
        <rect x="-176" y="-45" width="352" height="36" fill="#E2E8F0" fill-opacity="0.88" stroke="#F59E0B" stroke-width="2"/>
        <rect x="-182" y="75" width="364" height="36" fill="#E2E8F0" fill-opacity="0.88" stroke="#F59E0B" stroke-width="2"/>
        <!-- Wide Hook-and-Loop Cummerbund Waistband -->
        <rect x="-195" y="145" width="390" height="78" rx="14" fill="#181716" stroke="#F59E0B" stroke-width="2.5"/>
      </g>
    `;
  }

  if (type === 'studio-vest-tecw' || type === 'studio-vest-tecd') {
    const isDirect = type === 'studio-vest-tecd';
    return `
      <!-- Front View (Left) -->
      <g transform="translate(${w * 0.31}, ${cy - 20})">
        <path d="M-135 -210 L-52 -210 L0 -115 L52 -210 L135 -210 L150 185 L-150 185 Z" fill="#21201E" stroke="url(#amberRim)" stroke-width="3"/>
        ${
          isDirect
            ? `
          <!-- Neon Yellow Hi-Vis Trim & Quick-Release Chest Buckles -->
          <rect x="-140" y="-40" width="280" height="24" fill="#FACC15" fill-opacity="0.85"/>
          <rect x="-55" y="-15" width="110" height="28" rx="6" fill="#FACC15" stroke="#0B0A0A" stroke-width="2"/>
          <circle cx="58" cy="-95" r="24" fill="#181716" stroke="#F59E0B" stroke-width="3"/>
        `
            : `
          <!-- Dual Front Air-Supply Fan Pockets -->
          <rect x="-115" y="35" width="88" height="105" rx="14" fill="#181716" stroke="#F59E0B" stroke-width="2.5"/>
          <circle cx="-71" cy="88" r="26" fill="#121110" stroke="#E2E8F0" stroke-width="2"/>
          <rect x="27" y="35" width="88" height="105" rx="14" fill="#181716" stroke="#F59E0B" stroke-width="2.5"/>
          <circle cx="71" cy="88" r="26" fill="#121110" stroke="#E2E8F0" stroke-width="2"/>
        `
        }
        <text x="0" y="228" text-anchor="middle" fill="#A8A29E" font-family="Inter, sans-serif" font-size="15" font-weight="600" letter-spacing="2">ANTERIOR STUDIO VIEW</text>
      </g>

      <!-- Rear View (Right) -->
      <g transform="translate(${w * 0.69}, ${cy - 20})">
        <path d="M-135 -210 L135 -210 L150 185 L-150 185 Z" fill="#1C1B19" stroke="url(#amberRim)" stroke-width="3"/>
        ${
          isDirect
            ? `
          <!-- 4-Pod Direct-Contact Peltier Array -->
          <rect x="-85" y="-135" width="68" height="68" rx="14" fill="#E2E8F0" stroke="#F59E0B" stroke-width="3"/>
          <rect x="17" y="-135" width="68" height="68" rx="14" fill="#E2E8F0" stroke="#F59E0B" stroke-width="3"/>
          <rect x="-85" y="-45" width="68" height="68" rx="14" fill="#E2E8F0" stroke="#F59E0B" stroke-width="3"/>
          <rect x="17" y="-45" width="68" height="68" rx="14" fill="#E2E8F0" stroke="#F59E0B" stroke-width="3"/>
          <text x="0" y="95" text-anchor="middle" fill="#F59E0B" font-family="Inter, sans-serif" font-size="14" font-weight="700" letter-spacing="1.5">4-POD DIRECT PELTIER (2S INSTANT)</text>
        `
            : `
          <!-- Rear 80W Silver TEC Chiller & Black Turbine Exhaust -->
          <rect x="-68" y="-125" width="136" height="195" rx="24" fill="#CBD5E1" stroke="#F59E0B" stroke-width="3.5"/>
          <circle cx="0" cy="-25" r="46" fill="#0B0A0A" stroke="#F59E0B" stroke-width="3"/>
          <circle cx="0" cy="-25" r="16" fill="#F59E0B"/>
        `
        }
        <text x="0" y="228" text-anchor="middle" fill="#A8A29E" font-family="Inter, sans-serif" font-size="15" font-weight="600" letter-spacing="2">DORSAL CHILLER ARCHITECTURE</text>
      </g>
    `;
  }

  if (type === 'studio-vest-accw') {
    return `
      <g transform="translate(${cx}, ${cy - 30})">
        <!-- Industrial Grey Antistatic FR Vest -->
        <path d="M-175 -280 L-65 -280 L0 -155 L65 -280 L175 -280 L190 230 L-190 230 Z" fill="#21201E" stroke="url(#amberRim)" stroke-width="3.5"/>
        <!-- Pressurized Closed-Loop Liquid Bladder Channels -->
        <path d="M-115 -70 H115 M-125 -20 H125 M-125 30 H125 M-115 80 H115" stroke="#0066CC" stroke-opacity="0.65" stroke-width="8" stroke-linecap="round"/>
        <!-- 24V Micro-Inverter Compressor Chiller Module -->
        <rect x="65" y="15" width="145" height="215" rx="22" fill="#141312" stroke="#F59E0B" stroke-width="4"/>
        <circle cx="137" cy="95" r="44" fill="#1C1917" stroke="#F59E0B" stroke-width="3"/>
        <circle cx="137" cy="95" r="16" fill="#F59E0B"/>
        <rect x="92" y="160" width="90" height="36" rx="8" fill="#0B0A0A" stroke="#E2E8F0" stroke-width="1.5"/>
      </g>
    `;
  }

  // Macro Bento & Action Renderings
  return `
    <g transform="translate(${cx}, ${cy - 20})">
      <circle cx="0" cy="0" r="${Math.min(w, h) * 0.28}" fill="url(#centerHalo)" opacity="0.65"/>
      <circle cx="0" cy="0" r="${Math.min(w, h) * 0.23}" fill="#161514" stroke="url(#amberRim)" stroke-width="3.5"/>
      <circle cx="0" cy="0" r="${Math.min(w, h) * 0.15}" fill="none" stroke="#F59E0B" stroke-opacity="0.45" stroke-width="2" stroke-dasharray="10 6"/>
      <circle cx="0" cy="0" r="${Math.min(w, h) * 0.06}" fill="#F59E0B" fill-opacity="0.25" stroke="#F59E0B" stroke-width="2.5"/>
      <line x1="${-w * 0.32}" y1="0" x2="${w * 0.32}" y2="0" stroke="#F59E0B" stroke-opacity="0.25" stroke-width="1.5"/>
      <line x1="0" y1="${-h * 0.28}" x2="0" y2="${h * 0.28}" stroke="#F59E0B" stroke-opacity="0.25" stroke-width="1.5"/>
    </g>
  `;
}

function buildSvg(item) {
  const { width: w, height: h, model, title, subtitle, metric } = item;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <radialGradient id="tungstenBg" cx="50%" cy="22%" r="75%">
        <stop offset="0%" stop-color="#291D12" stop-opacity="0.95"/>
        <stop offset="45%" stop-color="#141210" stop-opacity="1"/>
        <stop offset="100%" stop-color="#0B0A0A" stop-opacity="1"/>
      </radialGradient>
      <radialGradient id="centerHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.32"/>
        <stop offset="65%" stop-color="#D97706" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#0B0A0A" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="floorGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.24"/>
        <stop offset="100%" stop-color="#0B0A0A" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="amberRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE68A"/>
        <stop offset="45%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#78350F"/>
      </linearGradient>
    </defs>

    <!-- Warm Graphite #0B0A0A Backdrop with 3200K Amber Rim Illumination -->
    <rect width="${w}" height="${h}" fill="url(#tungstenBg)"/>
    <rect x="16" y="16" width="${w - 32}" height="${h - 32}" rx="20" fill="none" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="1.5"/>

    <!-- Top Studio Header -->
    <text x="52" y="64" fill="#F59E0B" font-family="Inter, sans-serif" font-size="16" font-weight="700" letter-spacing="3">${escapeXml(model)}</text>
    <text x="${w - 52}" y="64" text-anchor="end" fill="#A8A29E" font-family="Inter, sans-serif" font-size="15" font-weight="500" letter-spacing="1.5">${escapeXml(metric)}</text>

    <!-- Main Studio Hardware Illustration -->
    ${renderArtworkShapes(item)}

    <!-- Bottom Caption Plate -->
    <rect x="44" y="${h - 148}" width="${w - 88}" height="104" rx="16" fill="#121110" fill-opacity="0.88" stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="1"/>
    <text x="72" y="${h - 98}" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="24" font-weight="700">${escapeXml(title)}</text>
    <text x="72" y="${h - 66}" fill="#A8A29E" font-family="Inter, sans-serif" font-size="16" font-weight="400">${escapeXml(subtitle)}</text>
  </svg>`;
}

async function generateAll() {
  console.log(`Generating ${ASSETS.length} German Bionic 3200K warm-graphite WebP studio assets...`);
  for (const item of ASSETS) {
    const outPath = path.join(PUBLIC_DIR, item.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const svgBuffer = Buffer.from(buildSvg(item));
    await sharp(svgBuffer).webp({ quality: 92 }).toFile(outPath);
  }
  console.log(`Successfully generated all ${ASSETS.length} WebP assets in /public/assets!`);
}

generateAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
