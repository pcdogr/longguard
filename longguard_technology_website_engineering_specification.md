# LONGGUARD TECHNOLOGY — Official Global Product Website
## Master Engineering, UI/UX Architecture & AI Visual Asset Specification (V2.0 — German Bionic Paradigm)

---

## 1. Project Overview & Architecture Strategy

### 1.1 Project Positioning & Visual Philosophy
Build an ultra-premium, high-conversion, 100% English static B2B industrial website for **LONGGUARD TECHNOLOGY (Guangdong Langcheng Technology Co., Ltd.)**, backed by the **Intelligent Protection Technology R&D Center, GDUT Institute of CNC Equipment Collaborative Innovation**.

* **Design Benchmark**: [German Bionic](https://www.germanbionic.com/) (Exia, Cray X, Apogee), DJI Enterprise, Ottobock Paexo, Apple Pro Hardware.
* **Core Visual Philosophy**: "Human-Centric Bionics. Precision Thermal Armor. Industrial Artistry."
* **Key Architecture Paradigm**: **Multi-Page Static Architecture** (1 Brand Home + 8 Dedicated Product Landing Pages). Discard single-page long-scroll stacking and geeky console tab-bars (`View A/B/C`). Every flagship product is treated as an independent engineering masterpiece with its own dedicated URL, storytelling flow, and procurement funnel.

### 1.2 Multi-Page Route Manifest
* `/` — **Global Brand Home**: Cinematic Hero, Three Technological Pillars, 8-Product Visual Grid, R&D Pedigree, Master Comparison Matrix, Global Procurement Footer.
* `/products/power-ua` — **LC Power-U/A**: Passive Upper Limb Exoskeleton (Overhead Zero-Power Carbon Armor).
* `/products/flex-w` — **LC Flex-W**: Flexible Waist Exoskeleton (30kg Dynamic Lumbar Assist).
* `/products/gloves-01` — **LC Gloves-01**: Wrist Repetitive Work Assessment Glove (GBZ 336-2025 Edge-AI Biometrics).
* `/products/frost-pcm-a` — **LC Frost-PCM/A**: Transparent TPU PCM Cooling Vest (Bio-Based C17 Constant Comfort).
* `/products/frost-pcm-g` — **LC Frost-PCM/G**: Flame Retardant PCM Cooling Vest (Hazardous Area Passive Thermal Shield).
* `/products/frost-tec-w` — **LC Frost-TEC/W**: Semiconductor Water Cooling Vest (80W Active Liquid + Dual Airflow).
* `/products/frost-tec-d` — **LC Frost-TEC/D**: Direct Cooling Semiconductor Vest (2-Second Instant Solid-State Peltier).
* `/products/frost-acc-w` — **LC Frost-ACC/W**: Compressor Water Cooling Vest (300W Extreme Micro-Inverter Chiller).

### 1.3 Tech Stack (For AI Coding Agent)
* **Framework**: Next.js 15 (App Router, Static Export `output: 'export'`) or Vite + React + TypeScript.
* **Styling**: Tailwind CSS v3.4+ with custom German Bionic Warm-Graphite tokens.
* **Animations**: Framer Motion (smooth scroll-driven reveals, floating hardware perspective tilt, counter milestones).
* **Icons**: `lucide-react` (clean, minimalist $1.5\text{px}$ stroke).
* **Language**: 100% English (`lang="en"`).

---

## 2. Brand Identity & Design System (German Bionic Aesthetic)

### 2.1 Brand & Institutional Credentials
* **Global Brand**: `LONGGUARD TECHNOLOGY`
* **Legal Entity**: `Guangdong Langcheng Technology Co., Ltd.`
* **R&D Pedigree Badge**: `Intelligent Protection Technology R&D Center — GDUT Institute of CNC Equipment Collaborative Innovation`
* **Headquarters & Service**:
  * **Address**: Room 81-516 / B1-516, GDUT Institute of CNC Equipment Innovation, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China.
  * **Hotline / WhatsApp**: `+86 159-8917-5854`
  * **Enterprise Inquiries**: `1094099100@qq.com`
  * **Warranty Standard**: `1-Year Official Industrial Manufacturer Warranty Across All Hardware`

### 2.2 Vector Logo Lockup (`<BrandLogo />`)
* **Emblem**: Circular dynamic bionic ring split into an upper Cyber Blue (`#0066CC`) arc and a lower Kinetic Amber (`#F59E0B`) arc, encapsulating an interconnected geometric "W / N" mechanical joint wave.
* **Wordmark Typography**:
  * Primary: **`LONGGUARD`** in bold, wide-tracked geometric sans-serif (`font-extrabold tracking-wider uppercase`).
  * Secondary: **`TECHNOLOGY`** directly beneath in medium weight (`text-xs tracking-[0.25em] text-stone-400`).
  * Institutional Badge: A clean vertical $1\text{px}$ divider (`border-stone-800`) followed by:
    * Line 1: `GDUT Institute of CNC Equipment`
    * Line 2: `Intelligent Protection R&D Center`

### 2.3 Color Tokens: Warm Graphite & 3200K Tungsten Lighting
Strictly eliminate cold blue/green "hacker terminal" palettes. All surfaces and components adhere to warm, tactile industrial luxury:
* **Canvas Backdrop (`bg-canvas`)**: `#0B0A0A` (Deep Graphite Warm Charcoal)
* **Surface Secondary (`bg-surface-subtle`)**: `#121110` (Warm Dark Slate)
* **Surface Card (`bg-surface-card`)**: `#181716` with delicate $1\text{px}$ edge border `rgba(255, 255, 255, 0.07)`
* **Ambient Warm Glow**: `radial-gradient(ellipse at 50% 0%, rgba(217, 119, 6, 0.12), transparent 70%)` (Simulating 3200K Tungsten studio lighting)
* **Kinetic Primary Accent**: `#F59E0B` / `#D97706` (Warm Bionic Amber)
* **Refined Metallic Accent**: `#E2E8F0` (Anodized Titanium Silver)
* **Text Primary**: `#FFFFFF` (Headings, Neue Haas Grotesk / Inter Display, crisp high contrast)
* **Text Secondary**: `#A8A29E` (Stone 400, warm neutral body text)
* **Text Tertiary / Engineering Labels**: `#78716C` (Stone 500, uppercase tracked subheadings)

### 2.4 Typography & Hierarchy
* **Display / Flagship Headings**: `Inter Tight` or `Neue Haas Grotesk Display` (`font-bold tracking-tight text-white`).
* **Body & Editorial Narratives**: `Inter` or `Plus Jakarta Sans` (`font-normal leading-relaxed text-stone-300`).
* **Technical Metrics & Big Numbers**: Large tabular figures (`text-5xl lg:text-7xl font-light tracking-tight text-white`). Strictly avoid green/cyan monospace console fonts.

---

## 3. Global Navigation & Footer Architecture

### 3.1 Sticky Glassmorphic Header (`<Header />`)
* **Container**: `sticky top-0 z-50 backdrop-blur-xl bg-[#0B0A0A]/85 border-b border-white/5 px-6 lg:px-12 py-4`.
* **Left**: `<BrandLogo />` linking to `/`.
* **Center Navigation**:
  * `Overview` (`/`)
  * `Exoskeletons` (Dropdown: `LC Power-U/A`, `LC Flex-W`)
  * `Smart Sensing` (Direct link: `LC Gloves-01`)
  * `Thermal Vests` (Dropdown: `PCM/A`, `PCM/G`, `TEC/W`, `TEC/D`, `ACC/W`)
  * `Tech Specs` (`/#specifications`)
* **Right Action Group**:
  * `Datasheet (PDF)` (Ghost button with download icon)
  * `Request a Quote` (Warm Amber filled pill button `#F59E0B text-black font-semibold hover:bg-amber-400 transition-all shadow-lg shadow-amber-900/20`).

### 3.2 Global Industrial Enterprise Footer (`<Footer />`)
* **Global CTA Stage**: Metallic charcoal banner: *"Protecting Human Potential on Industrial Frontlines."* with direct call `+86 159-8917-5854` and `Email Engineering Team`.
* **Four-Column Structure**:
  * **Col 1 (Identity)**: Full `<BrandLogo />`, corporate introduction of Guangdong Langcheng Technology Co., Ltd. and GDUT CNC Innovation Institute.
  * **Col 2 (Hardware Portfolio)**: Direct links to all 8 standalone product pages.
  * **Col 3 (Industrial Applications)**: Automotive Assembly, Logistics & Baggage, Petrochemical & Foundry, Power Maintenance, Ergonomic Diagnostics.
  * **Col 4 (Factory Contact & Compliance)**: Physical address in Foshan, service hotline, email, and `1-Year Official Industrial Warranty` badge.
* **Bottom Bar**: `© 2026 Guangdong Langcheng Technology Co., Ltd. (LONGGUARD TECHNOLOGY). All Rights Reserved.`

---

## 4. The 6-Stage Dedicated Product Page Architecture

Every one of the 8 standalone pages (`/products/[slug]`) follows a fluid, magazine-style 6-stage layout inspired by German Bionic and Apple Pro hardware showcases:

1. **Stage 1 — The Hero Stage (Cinematic Product Stage)**
   * Warm charcoal background with 3200K golden amber rim halo.
   * Floating 3/4 commercial studio render of the hardware.
   * Minimalist bold headline (e.g. `power-u / Overhead Bionic Armor`), positioning subtitle, dual action buttons (`Request Pilot Trial`, `Download CAD & Specs`).
2. **Stage 2 — Big Impact Metrics (Numerical Authority Bar)**
   * 3 to 4 oversized metric callouts side by side (e.g. `8kg Relief`, `<2kg Carbon`, `100% Passive`). High visual impact without visual noise.
3. **Stage 3 — Biomechanical Narrative & Interactive Hotspots**
   * Two-column 60/40 fluid layout pairing high-resolution anatomical cutaways with engineering breakdowns (5 numbered precision callouts, clickable with subtle highlight states).
4. **Stage 4 — Asymmetric Craftsmanship Bento (Material Science)**
   * Modern editorial grid: 1 large hero card (60% width) for core mechanisms (e.g. ratchet joints, micro-compressor) + 3 supporting cards for micro-textures (carbon fiber weave, 3D air mesh, TPU welded seams).
5. **Stage 5 — Real-World Industrial Deployment**
   * Full-width editorial photography displaying the hardware deployed inside real automotive plants, logistics hubs, foundries, or clinics.
6. **Stage 6 — Technical Specification Accordion & Procurement Action**
   * Clean Swiss-style technical spec table with subtle border dividers.
   * Direct enterprise inquiry card with instant email and phone shortcuts.

---

## 5. Complete Product Database & Master Technical Copywriting (All 8 Flagships)

> **Implementation Rule for Coding Agent**: Never abbreviate, truncate, or summarize any specification below. Every product page must render 100% of these parameters.

---

### PRODUCT 01: Passive Upper Limb Exoskeleton
* **Page Route**: `/products/power-ua`
* **Model Code**: `LC Power-U/A` (Catalog Spec Code: `LC Power-U/P`)
* **Category**: Bionic Exoskeleton Series
* **Headline**: `Overhead Bionic Armor. Pure Mechanical Relief.`
* **Overview Copy**:
  Engineered with a pure mechanical bionic structure for precise directional assistance, the LC Power-U/A is lightweight, highly reliable, and adaptable to complex industrial environments. Featuring multi-level adjustments to fit diverse body types, it is purpose-built for automotive assembly, power maintenance, construction, aircraft repair, and agricultural picking—dramatically reducing shoulder and arm muscle load while elevating operational efficiency and all-day comfort.
* **Core Impact Metrics**:
  * **$8\text{kg}$** — Maximum Overhead Assist Capacity
  * **$< 2\text{kg}$** — Ultra-Light Aerospace Carbon Fiber Spine
  * **$100\%$** — Passive Zero-Power Operation (Zero Battery Risk)
  * **$4\text{ Angles}$** — Multi-Gear Articulation ($50^{\circ}, 70^{\circ}, 90^{\circ}, 110^{\circ}/115^{\circ}$)
* **4 Feature Narratives**:
  1. *Featherlight Carbon Frame*: Aerospace carbon fiber paired with wear-resistant Oxford cloth delivers unmatched rigidity at sub-2kg weight, ensuring unrestricted arm mobility.
  2. *Intrinsically Safe Zero-Power*: 100% mechanical elastic energy storage eliminates battery maintenance, charging downtime, and spark hazards across continuous multi-shift operations.
  3. *High-Efficiency Musculoskeletal Offloading*: Slashing deltoid muscle strain by up to 8kg, directly extending worker endurance and preventing chronic shoulder disorders.
  4. *Minimalist Industrial Durability*: High-strength anodized aluminum joints withstand rigorous impacts, dust, and continuous industrial wear.
* **5 Anatomical Hotspots**:
  1. *4-Gear Shoulder Joint*: Semi-automatic mechanical assist engages instantly as arms elevate, with locks at $50^{\circ}, 70^{\circ}, 90^{\circ}, 110^{\circ}/115^{\circ}$.
  2. *Quick-Release Chest Harness*: Ergonomic snap buckles enable rapid donning and doffing in under 15 seconds.
  3. *Telescoping Carbon Back Bar*: High-tensile carbon fiber back spine seamlessly adjusts to different torso lengths.
  4. *Quick-Release Armrest Cuffs*: Cuffed ergonomic armrests provide immediate escape and emergency release.
  5. *Contoured 3D Lumbar Belt*: Breathable air-mesh waist belt distributes harness load evenly across the pelvic girdle.
* **Complete Technical Specification Table**:
  * **Model**: LC Power-U/A (Spec Code: LC Power-U/P)
  * **Color**: Industrial Matte Black
  * **Target Users**: Workers with prolonged arm-raising and overhead tasks
  * **Applications**: Automotive assembly, power maintenance, construction, aircraft repair, agricultural harvesting
  * **Structural Materials**: Carbon fiber + aviation aluminum alloy
  * **Assistance Capacity**: Max. $8\text{kg}$
  * **Locking Mode**: Semi-automatic mechanical locking
  * **Assistance Gears**: 3 gears (4-angle engagement)
  * **Assistance / Unlocking Angles**: $50^{\circ}, 70^{\circ}, 90^{\circ}, 110^{\circ}/115^{\circ}$
  * **Outer Fabric**: Wear-resistant Oxford fabric
  * **Lining Fabric**: Breathable 3D mesh fabric
  * **Sizes**: Standard Size / Plus Size
  * **Net Weight**: $< 2\text{kg}$
  * **Package Dimensions**: $50 \times 40 \times 12\text{cm}$
  * **Optional Accessories**: Ergonomic neck support collar
  * **Warranty**: 1-Year Official Industrial Warranty

---

### PRODUCT 02: Flexible Waist Exoskeleton
* **Page Route**: `/products/flex-w`
* **Model Code**: `LC Flex-W`
* **Category**: Bionic Exoskeleton Series
* **Headline**: `The Unpowered Smart Belt. Up to 30kg Dynamic Lumbar Thrust.`
* **Overview Copy**:
  This lightweight, unpowered lumbar exoskeleton is designed for frequent bending and lifting tasks. It stores and releases energy via elastic material deformation, acting as a biomechanical "smart belt" to deliver upward assistive thrust during bending. Significantly reduces lumbar strain, offloads spinal disc compression, and mitigates occupational lower-back injury risks.
* **Core Impact Metrics**:
  * **$0\text{--}30\text{kg}$** — Dynamic Upward Lumbar Assist Range
  * **$\le 1\text{kg}$** — Ultra-Slim Wearable Profile
  * **$160\text{--}190\text{cm}$** — Broad Ergonomic Height Adaptation
  * **$0\text{V}$** — Non-Powered Fail-Safe Kinetic Energy Storage
* **4 Feature Narratives**:
  1. *Sub-1kg Minimalist Chassis*: Breathable textile construction conforms naturally to the torso, guaranteeing sweat-free comfort throughout an 8-hour shift.
  2. *Unrestricted Agility*: Conforms to body contours without rigid metal hip constraints, preserving full freedom for walking, crouching, climbing, and driving.
  3. *Dynamic Erector Spinae Offloading*: Progressively builds elastic tension as the user bends forward, releasing explosive upward thrust upon standing.
  4. *Spinal Pressure Equilibrium*: Distributes acute lumbar point loads across the thoracic spine and thighs, preventing occupational disc herniation.
* **5 Anatomical Hotspots**:
  1. *Multi-Height Adjustable Back*: Telescoping shoulder tension system accommodates operator heights from $160\text{cm}$ to $190\text{cm}$.
  2. *Flank Articulation Routing*: Soft flexible strap pathways eliminate hip pinching during extreme deep squats.
  3. *Thickened 3D Lumbar Cushion*: Ergonomic multi-layer pad cushions the lower spine and distributes back loads.
  4. *Fail-Safe Elastic Core*: High-resilience polyester latex fibers ensure lifetime durability in wet or dusty workplaces.
  5. *Bilateral Thigh Traction Straps*: Integrated lumbar support bracket linked to bilateral thigh cuffs for smooth $0\text{--}30\text{kg}$ load transfer.
* **Complete Technical Specification Table**:
  * **Model**: LC Flex-W
  * **Color**: Tactical Black
  * **Target Users**: Manual laborers, warehouse operators, logistics handlers, caregivers
  * **Applications**: Industrial logistics, airport baggage, medical elderly care, frequent bending operations
  * **Assistance Type**: Non-powered passive mechanical
  * **Applicable Height**: $160\text{--}190\text{cm}$
  * **Assistance Range**: $0\text{--}30\text{kg}$ (dynamically adjustable)
  * **Energy Storage Medium**: High-resilience elastic polyester latex fiber
  * **Core Structure**: Integrated back-lumbar support bracket + bilateral thigh linkage strap system
  * **Outer Fabric**: Wear-resistant Oxford fabric
  * **Lining Fabric**: Breathable 3D mesh fabric
  * **Sizes**: Standard Size / Plus Size
  * **Net Weight**: $\le 1\text{kg}$
  * **Package Dimensions**: $40 \times 30 \times 10\text{cm}$
  * **Warranty**: 1-Year Official Industrial Warranty

---

### PRODUCT 03: Wrist Repetitive Work Assessment Glove
* **Page Route**: `/products/gloves-01`
* **Model Code**: `LC Gloves-01`
* **Category**: Smart Ergonomic Sensing Series
* **Headline**: `Edge-AI Biometric Glove. GBZ 336-2025 Carpal Tunnel Risk Diagnostics.`
* **Overview Copy**:
  Designed for manufacturing jobs with repetitive forceful wrist movements, the LC Gloves-01 strictly complies with GBZ 336-2025 *Diagnostic Criteria for Occupational Carpal Tunnel Syndrome*. Equipped with dual-posture IMU sensors (dorsal hand + wrist cuff) and onboard edge-AI computing, it tracks wrist angles, valid work motions, operation frequency, duration, and load intensity in real time. Supports wireless data upload and tablet analytics for ergonomic risk quantification and workstation optimization.
* **Core Impact Metrics**:
  * **$\le \pm 0.1^{\circ}$** — Static IMU Measurement Precision
  * **$\pm 180^{\circ}$** — Full Multi-Axis Range of Motion
  * **$200\text{g}$** — Featherlight Ergonomic Form Factor
  * **$24\text{/min}$** — Automated Valid Motion Frequency Tracking
* **4 Feature Narratives**:
  1. *Dual-Point Attitude Sensing*: Differential sensing architecture cancels whole-arm movement artifacts, isolating pure wrist flexion, extension, and deviation.
  2. *Onboard Edge-AI Processing*: Glove micro-controller calculates angles, counts valid cycles, and compiles metrics locally with zero latency.
  3. *Wireless Tablet Telemetry*: Real-time Bluetooth/Wi-Fi data stream to companion PC/tablet suite generates exportable diagnostic risk reports.
  4. *Industrial-Grade Anti-Interference*: Shielded against electromagnetic noise and machine vibration in automotive and electronics plants.
* **5 Anatomical Hotspots**:
  1. *Half-Finger Tactile Cutouts*: Exposed fingertips preserve fine touch for delicate assembly of miniature screws and electronics.
  2. *Zero-Slack Dorsal Pod Mount*: High-stretch elastic fabric locks the primary IMU sensor firmly over the metacarpals.
  3. *Lightweight 200g Architecture*: Minimizes muscle load during continuous 8-hour ergonomic audits.
  4. *Adjustable Secondary Wristband*: Anchors the reference IMU sensor across varied wrist circumferences.
  5. *Companion Diagnostic Software*: Real-time dual-channel waveform dashboard for flexion/extension, radial/ulnar deviation, and GBZ 336-2025 risk grading.
* **Complete Technical Specification Table**:
  * **Model**: LC Gloves-01
  * **Color**: Technical Light Grey with Matte White Sensor Pods & Black Trim
  * **Compliance**: GBZ 336-2025 Diagnostic Criteria for Occupational Carpal Tunnel Syndrome
  * **Applications**: Occupational disease prevention hospitals, third-party testing agencies, manufacturing workstation audits
  * **Recognition Threshold**: $15^{\circ}$ (customizable)
  * **Angle Range**: $\pm 180^{\circ}$
  * **Static Accuracy**: $\le \pm 0.1^{\circ}$
  * **Frequency Counting**: Automatically counts valid motions (standard: 24 motions/min)
  * **Duration Tracking**: Daily working hour accumulation
  * **Measurement Dimensions**: Wrist flexion/extension, radial/ulnar deviation angles
  * **Sizes**: M, L, XL (customizable)
  * **Net Weight**: $200\text{g}$
  * **Package Dimensions**: $23 \times 17 \times 8\text{cm}$
  * **Optional Accessories**: Industrial Tablet PC (with pre-installed analytics suite) / Action Camera
  * **Warranty**: 1-Year Official Industrial Warranty

---

### PRODUCT 04: PCM Cooling Vest (Transparent TPU Edition)
* **Page Route**: `/products/frost-pcm-a`
* **Model Code**: `LC Frost-PCM/A`
* **Category**: Personal Thermal Management Series (Passive PCM)
* **Headline**: `Bio-Based Phase Change Armor. Constant 22.08°C Torso Comfort.`
* **Overview Copy**:
  Built with high-energy-density Phase Change Material (PCM) that absorbs body heat at a constant comfort temperature (~23°C), the LC Frost-PCM/A delivers gentle, long-lasting torso cooling. A single cold-storage cycle provides 1–2 hours of relief in 35°C high-heat environments. Reusable thousands of times—an intrinsically safe, wire-free personal micro-climate.
* **Core Impact Metrics**:
  * **$22.08^{\circ}\text{C}$** — Constant Phase Change Comfort Temperature
  * **$225\text{ J/g}$** — High Latent Heat of Fusion
  * **$0.55\text{kg}$** — Ultra-Lightweight Transparent TPU Chassis
  * **$1\text{--}2\text{ Hours}$** — Continuous Cooling per Charge Cycle
* **4 Feature Narratives**:
  1. *Gentle Human-Comfort Cooling*: Operates at $22.08^{\circ}\text{C}$, completely preventing skin vasoconstriction or frostbite risks caused by traditional $0^{\circ}\text{C}$ ice packs.
  2. *100% Passive & Intrinsically Safe*: Requires no batteries, fans, or wires. Zero electrical hazards in cleanrooms, hazardous gas zones, and wet areas.
  3. *Zero-Degradation C17 Formulation*: Pure bio-based $\text{C}_{17}$ n-alkane PCM withstands thousands of freeze-thaw cycles without performance loss.
  4. *Plant-Derived & Biodegradable*: 100% biomass formulation, non-petroleum derived, environmentally safe and non-toxic.
* **4 Anatomical Hotspots**:
  1. *Fast-Cooling Grid Matrix*: Independent encapsulated PCM cells conform across the chest and back for maximum heat exchange area.
  2. *Universal Adjustable Buckles*: Dual side-release black webbing buckles adapt to all body sizes and uniform styles.
  3. *Medical-Grade TPU Shell*: Waterproof and oil-resistant transparent film enables instant sanitization and wipe-down cleaning.
  4. *Low-Profile Under-Layer Cut*: Ultra-slim $0.55\text{kg}$ profile fits seamlessly under hazmat suits, cleanroom suits, or high-vis vests.
* **Complete Technical Specification Table**:
  * **Model**: LC Frost-PCM/A
  * **Color**: Crystal Transparent (customizable PCM dye options)
  * **Target Users**: Workers in extreme high-temperature environments, cleanrooms, medical PPE, sanitation
  * **Heat of Fusion**: $225\text{ J/g}$
  * **Phase Change Temperature**: $22.08^{\circ}\text{C}$
  * **Cooling Duration**: $1\text{--}2\text{ hours}$ (reference based on labor intensity and ambient temperature)
  * **Cold Storage Recharge Time**: Frozen at $-18^{\circ}\text{C}$ for $1\text{ hour}$, OR refrigerated at $0\text{--}4^{\circ}\text{C}$ for $1\text{--}2\text{ hours}$
  * **Shell Material**: High-strength Thermoplastic Polyurethane (TPU)
  * **Size**: One Size Fits All
  * **Net Weight**: $0.55\text{kg}$
  * **Package Dimensions**: $40 \times 30 \times 10\text{cm}$
  * **Optional Accessories**: Custom PCM dye colors
  * **Warranty**: 1-Year Official Industrial Warranty

---

### PRODUCT 05: Flame Retardant PCM Cooling Vest
* **Page Route**: `/products/frost-pcm-g`
* **Model Code**: `LC Frost-PCM/G`
* **Category**: Personal Thermal Management Series (Heavy-Duty FR PCM)
* **Headline**: `Antistatic & Flame-Retardant PCM Armor. Passive Cooling for Hazardous Frontlines.`
* **Overview Copy**:
  Engineered with high-energy-density Phase Change Material absorbing heat at constant ~23°C and encapsulated within an antistatic, flame-retardant outer shell. Designed for petrochemical, foundry, welding, and utility operations where spark hazards, explosive dust, and extreme heat converge.
* **Core Impact Metrics**:
  * **$22.08^{\circ}\text{C}$** — Non-Irritating Phase Change Comfort Zone
  * **$225\text{ J/g}$** — Latent Heat Storage Capacity
  * **$360^{\circ}$** — High-Visibility Retro-Reflective Safety Bands
  * **$0\text{V}$** — Zero-Spark Intrinsically Safe Passive Cooling
* **4 Feature Narratives**:
  1. *Flame-Retardant & Antistatic Protection*: Heavy-duty industrial twill fabric repels slag, sparks, and static charge accumulation.
  2. *Constant $22.08^{\circ}\text{C}$ Thermal Regulation*: Maintains continuous core cooling without cold shock during heavy manual labor in $35^{\circ}\text{C}+$ ambient heat.
  3. *High-Stability C17 Biomass Core*: Thousands of thermal cycles without degradation; non-toxic and eco-friendly.
  4. *Night & Low-Light Visibility*: Dual high-visibility silver reflective bands provide $360^{\circ}$ safety in roadworks and dark industrial plants.
* **4 Anatomical Hotspots**:
  1. *FR & Antistatic Outer Weave*: Rugged ripstop fabric resists tearing, abrasions, and molten metal splatter.
  2. *Elastic Magic-Tape Waistband*: Wide industrial hook-and-loop cummerbund fits securely across all torso builds.
  3. *Modular PCM Thermal Pockets*: Dedicated internal compartments hold sealed PCM packs tight against the core.
  4. *Dual Safety Warning Reflective Bands*: 3M-grade retro-reflective stripes across the chest and waist ensure field visibility.
* **Complete Technical Specification Table**:
  * **Model**: LC Frost-PCM/G
  * **Color**: Industrial Grey with High-Visibility Reflective Trim (customizable)
  * **Target Users**: Petrochemical, metallurgy, welding, power grid, and high-temperature night-shift workers
  * **Heat of Fusion**: $225\text{ J/g}$
  * **Phase Change Temperature**: $22.08^{\circ}\text{C}$
  * **Cooling Duration**: $1\text{--}2\text{ hours}$ (reference based on labor intensity and ambient temp)
  * **Cold Storage Recharge Time**: Frozen at $-18^{\circ}\text{C}$ for $1\text{ hour}$, OR refrigerated at $0\text{--}4^{\circ}\text{C}$ for $1\text{--}2\text{ hours}$
  * **Fabric Material**: Antistatic and flame-retardant fabric
  * **Sizes**: Standard Size / Plus Size
  * **Net Weight**: $0.96\text{kg}$
  * **Package Dimensions**: $40 \times 30 \times 10\text{cm}$
  * **Warranty**: 1-Year Official Industrial Warranty

---

### PRODUCT 06: Semiconductor Water Cooling Vest
* **Page Route**: `/products/frost-tec-w`
* **Model Code**: `LC Frost-TEC/W`
* **Category**: Personal Thermal Management Series (Active Hybrid Cooling)
* **Headline**: `80W Active Thermoelectric Chiller. Closed-Loop Liquid + Dual Airflow.`
* **Overview Copy**:
  An active wearable cooling device powered by solid-state thermoelectric cooling (TEC) chips and a closed-loop water circulation system. Delivers steady, multi-level adjustable torso cooling within 2 minutes of startup. Integrates a quiet rear turbine exhaust fan and dual chest air-supply fans for all-day facial and torso dryness in firefighting, construction, power maintenance, and sanitation.
* **Core Impact Metrics**:
  * **$80\text{W}$** — Active Thermoelectric Cooling Capacity
  * **$2\text{ min}$** — Fast Thermal Stabilization Time
  * **$24\text{V}$** — High-Efficiency Chiller Architecture
  * **$2\text{--}4\text{ Hours}$** — Continuous Shift Battery Endurance
* **4 Feature Narratives**:
  1. *Precision Active Temperature Regulation*: Thermoelectric chiller actively draws heat away from circulating liquid, overcoming passive melting limitations.
  2. *Dual-Zone Forced-Air Evaporation*: Rear turbine expels heat while dual front fans direct air toward the neck and face to accelerate sweat evaporation.
  3. *Extended Field Battery Life*: $24\text{V}$ lithium power supply delivers $1\text{--}2\text{ hours}$ on a single pack and up to $4\text{ hours}$ with dual batteries.
  4. *Leak-Proof Sealed Liquid Channels*: Industrial TPU tubing resists high pressures, twisting, and rough site conditions without leaking.
* **4 Anatomical Hotspots**:
  1. *Antistatic FR V-Neck Shell*: Soft, protective industrial grey fabric resistant to heat and static hazards.
  2. *Side Compression Straps*: Ergonomic tensioners pull cooling water channels tight against the torso.
  3. *Rear 80W TEC Chiller Module*: Sleek silver casing with black turbine fan stabilizes water temperatures within $2\text{ minutes}$.
  4. *Dual Front Air-Supply Pockets*: Front utility pockets hold batteries while driving cooling airflow up toward the chin and chest.
* **Complete Technical Specification Table**:
  * **Model**: LC Frost-TEC/W
  * **Color**: Technical Grey (customizable)
  * **Target Users**: Firefighting, public security, power grid, construction, sanitation in extreme heat
  * **Cooling Capacity**: $80\text{W}$
  * **Rated Voltage**: $24\text{V}$
  * **Rated Power**: $100\text{W}$
  * **Cooling Response Time**: Stable in $2\text{ min}$
  * **Battery Life**: $1\text{--}2\text{ hours}$ single battery ($2\text{--}4\text{ hours}$ continuous system endurance)
  * **Outer Fabric**: Antistatic and flame-retardant fabric
  * **Lining Fabric**: Medical/industrial TPU water-channel liner
  * **Size**: One Size Fits All
  * **Net Weight**: $< 3\text{kg}$
  * **Package Dimensions**: $40 \times 30 \times 10\text{cm}$
  * **Optional Accessories**: Supplemental PCM cooling packs
  * **Warranty**: 1-Year Official Industrial Warranty

---

### PRODUCT 07: Direct Cooling Semiconductor Vest
* **Page Route**: `/products/frost-tec-d`
* **Model Code**: `LC Frost-TEC/D`
* **Category**: Personal Thermal Management Series (Solid-State Direct Peltier)
* **Headline**: `2-Second Instant Peltier Cooling. Zero Water, Zero Refrigerant, 8-Hour Endurance.`
* **Overview Copy**:
  Leveraging the solid-state Peltier effect via direct-contact TEC modules, the LC Frost-TEC/D requires no ice, liquid coolant, or compressor. Direct-contact thermal conduction plates absorb torso heat immediately upon power-on—stabilizing in just 2 seconds—while whisper-quiet fans dissipate waste heat. Features a breathable mesh chassis and high-visibility reflective stripes for industrial inspection, medical PPE, and outdoor operations.
* **Core Impact Metrics**:
  * **$2\text{ Seconds}$** — Ultra-Fast Solid-State Cooling Stabilization
  * **$0\text{ Liquid}$** — Completely Dry Direct Conduction (Zero Leakage Risk)
  * **$2\text{--}8\text{ Hours}$** — Extended Modular Battery Operation
  * **$> 20,000\text{ Hours}$** — Solid-State Semiconductor Lifespan
* **4 Feature Narratives**:
  1. *Instant 2-Second Solid-State Conduction*: Direct Peltier contact plates cool immediately upon activation with zero pre-freezing or water refilling.
  2. *Whisper-Quiet Vibration-Free Operation*: Low-noise axial cooling fans eliminate compressor drone and pump vibrations for quiet inspections.
  3. *Up to 8-Hour Modular Power*: Low 60W power draw enables $2\text{--}8\text{ hours}$ of runtime ($2\text{ hours}$ per lightweight battery pack).
  4. *Zero Maintenance & 20,000-Hour Longevity*: Solid-state architecture eliminates hoses, refrigerants, and pumps for leak-proof durability.
* **4 Anatomical Hotspots**:
  1. *4-Pod Direct-Contact TEC Array*: Four Peltier conduction plates positioned on the upper back deliver instantaneous cooling directly to the skin.
  2. *Quick-Release Yellow Chest Buckles*: High-visibility chest fasteners and rear bungee cord ensure a snug, non-restrictive fit.
  3. *Chest Controller & Low-Noise Fans*: Chest-mounted circular dial provides intuitive multi-stage thermal regulation.
  4. *Detachable Washable Hi-Vis Mesh*: Breathable antistatic mesh with neon-yellow and silver reflective stripes; electronics detach easily for washing.
* **Complete Technical Specification Table**:
  * **Model**: LC Frost-TEC/D
  * **Color**: Tactical Grey Mesh with Neon Yellow Hi-Vis Reflective Trim & Black Straps (Black Option)
  * **Target Users**: Industrial inspection, medical PPE, outdoor traffic, security personnel
  * **Cooling Capacity**: $45\text{W}$
  * **Rated Voltage**: $12\text{V}$
  * **Rated Power**: $60\text{W}$
  * **Cooling Response Time**: Instant cooling, stable in $2\text{s}$
  * **Battery Life**: $2\text{--}8\text{ hours}$ ($2\text{ hours}$ per single battery pack)
  * **Chip Lifespan**: $> 20,000\text{ hours}$
  * **Outer Fabric**: Antistatic and flame-retardant breathable mesh (modular detachable & washable)
  * **Sizes**: Standard Size / Plus Size
  * **Net Weight**: $\sim 1.7\text{kg}$
  * **Package Dimensions**: $40 \times 30 \times 10\text{cm}$
  * **Warranty**: 1-Year Official Industrial Warranty

---

### PRODUCT 08: Compressor Water Cooling Vest
* **Page Route**: `/products/frost-acc-w`
* **Model Code**: `LC Frost-ACC/W`
* **Category**: Personal Thermal Management Series (Extreme-Duty Micro-Compressor)
* **Headline**: `300W Active Micro-Inverter Refrigeration for Extreme Heat Hazards.`
* **Overview Copy**:
  The flagship of the LC Frost line, the LC Frost-ACC/W integrates a miniature inverter refrigeration compressor with a closed-loop chilled liquid circulation network. Delivering an industry-leading 60–300W of active cooling capacity, a wide temperature adjustment range, and unwavering constant-temperature output, it is the ultimate protective cooling armor for extreme metallurgy, firefighting, and confined-space operations.
* **Core Impact Metrics**:
  * **$60\text{--}300\text{W}$** — Heavy-Duty Active Compressor Refrigeration
  * **$< 4\text{kg}$** — Ergonomically Balanced Wearable Chiller Unit
  * **$3\text{ min}$** — Rapid High-Capacity Chilled Loop Stabilization
  * **$100\%$** — Sealed Leak-Proof Liquid Circuit
* **4 Feature Narratives**:
  1. *300W Extreme Active Refrigeration*: Micro-inverter compressor rapidly chills circulating water upon startup with multi-stage digital temperature regulation.
  2. *Under-4kg Integrated Mobility*: Compact cooling architecture balances weight along the lower torso for unrestricted mobility in tight quarters.
  3. *Intensive 2–4 Hour Shift Endurance*: High-capacity $24\text{V}$ lithium battery system sustains heavy-duty refrigeration across grueling shifts.
  4. *Shockproof & Sealed Fluidics*: Rugged liquid couplings and pressurized TPU bladders withstand heavy impacts, vibration, and site washdowns.
* **4 Anatomical Hotspots**:
  1. *Flame-Retardant V-Neck Outer Shell*: Minimalist grey antistatic shell with heavy-duty center zipper fits comfortably over base layers.
  2. *Bilateral Compression Webbing*: Side tension straps maximize thermal contact between the internal chilled TPU bladder and torso.
  3. *Micro-Inverter Compressor Chiller*: 24V miniature compressor core stabilizes chilled water circulation within $3\text{ minutes}$.
  4. *Internal TPU Cooling Bladder*: Closed-loop liquid network paired with breathable 3D lining prevents condensation accumulation.
* **Complete Technical Specification Table**:
  * **Model**: LC Frost-ACC/W
  * **Color**: Industrial Grey with Black Trim
  * **Target Users**: Extreme high-temperature environments (metallurgy, foundry, firefighting, heavy equipment cabs)
  * **Cooling Capacity**: $60\text{--}300\text{W}$
  * **Rated Voltage**: $24\text{V}$
  * **Rated Power**: $110\text{W}$
  * **Cooling Response Time**: Stable in $3\text{ min}$
  * **Battery Life**: $1\text{--}2\text{ hours}$ single battery ($2\text{--}4\text{ hours}$ system continuous operation)
  * **Outer Fabric**: Antistatic and flame-retardant fabric
  * **Lining Fabric**: High-durability TPU liquid cooling bladder
  * **Size**: One Size Fits All
  * **Net Weight**: $< 4\text{kg}$
  * **Package Dimensions**: $40 \times 30 \times 10\text{cm}$
  * **Warranty**: 1-Year Official Industrial Warranty

---

## 6. Banana Model Asset Generation Specification (German Bionic Warm-Graphite Style)

### 6.1 Unified Master Lighting Formula
All generated assets must strictly adhere to the **German Bionic Studio Standard**:
* **Background**: Solid or subtly gradated `#0B0A0A` (Deep Graphite Warm Charcoal). No bright neon grids or cyan glow.
* **Lighting**: Dual-point studio lighting with **3200K warm amber tungsten rim illumination** tracing hardware edges and metallic chamfers, paired with soft diffused neutral key fill.
* **Camera / Lens**: Hasselblad H6D-100c, 100mm f/4 macro/portrait lens. Ultra-sharp industrial product photography, tack sharp focus, clean reflections.

### 6.2 The 42 Core Assets Manifest & Prompts

```text
/public/assets/
├── hero/
│   └── hero-composite-main.webp (16:9)
├── products/
│   ├── power-ua/
│   │   ├── studio-main.webp (3:4)
│   │   ├── action-automotive.webp (16:9)
│   │   ├── bento-gear-joint.webp (1:1)
│   │   ├── bento-carbon-spine.webp (1:1)
│   │   └── bento-armrest-harness.webp (1:1)
│   ├── flex-w/
│   │   ├── studio-main.webp (3:4)
│   │   ├── action-logistics.webp (16:9)
│   │   ├── bento-lumbar-cushion.webp (1:1)
│   │   ├── bento-latex-straps.webp (1:1)
│   │   └── bento-thigh-cuffs.webp (1:1)
│   ├── gloves-01/
│   │   ├── studio-main.webp (3:4)
│   │   ├── action-electronics.webp (16:9)
│   │   ├── tablet-telemetry-ui.webp (16:9)
│   │   ├── bento-imu-pod.webp (1:1)
│   │   └── bento-half-finger-knit.webp (1:1)
│   ├── frost-pcm-a/
│   │   ├── studio-main.webp (3:4)
│   │   ├── action-cleanroom.webp (16:9)
│   │   ├── bento-pcm-crystals.webp (1:1)
│   │   ├── bento-tpu-weld.webp (1:1)
│   │   └── bento-side-buckle.webp (1:1)
│   ├── frost-pcm-g/
│   │   ├── studio-main.webp (3:4)
│   │   ├── action-refinery.webp (16:9)
│   │   ├── bento-fr-fabric.webp (1:1)
│   │   ├── bento-reflective-bands.webp (1:1)
│   │   └── bento-velcro-waist.webp (1:1)
│   ├── frost-tec-w/
│   │   ├── studio-dual-view.webp (16:9)
│   │   ├── action-power-grid.webp (16:9)
│   │   ├── bento-tec-chiller.webp (1:1)
│   │   ├── bento-front-air-vents.webp (1:1)
│   │   └── bento-tpu-water-loop.webp (1:1)
│   ├── frost-tec-d/
│   │   ├── studio-dual-view.webp (16:9)
│   │   ├── action-track-inspection.webp (16:9)
│   │   ├── bento-peltier-plates.webp (1:1)
│   │   ├── bento-yellow-buckles.webp (1:1)
│   │   └── bento-mesh-controller.webp (1:1)
│   └── frost-acc-w/
│       ├── studio-main.webp (3:4)
│       ├── action-foundry.webp (16:9)
│       ├── bento-micro-compressor.webp (1:1)
│       ├── bento-sealed-bladder.webp (1:1)
│       └── bento-zipper-flame-shell.webp (1:1)