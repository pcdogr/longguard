import type { ProductTranslationsMap } from '../types';

export const PRODUCTS_ZH_CN: ProductTranslationsMap = {
  'power-ua': {
    name: '被动式上肢外骨骼',
    shortTitle: '过顶作业仿生护甲',
    category: '仿生外骨骼系列',
    subCategory: '过顶零功耗碳纤外骨骼',
    headline: '过顶仿生护甲，纯机械精准减负。',
    overview:
      'LC Power-U/A 采用纯机械仿生结构设计，提供精准定向助力，兼具轻量化、高可靠性与复杂工业环境适应性。支持多档位调节以适配不同体型，专为汽车装配、电力检修、建筑施工、飞机维修及农业采摘等场景打造，显著降低肩部与手臂肌肉负荷，全面提升作业效率与全天候穿戴舒适度。',
    metrics: [
      { value: '8kg', label: '最大过顶托举助力' },
      { value: '< 2kg', label: '超轻航空碳纤维背脊' },
      { value: '100%', label: '纯被动零功耗运行（零电池风险）' },
      { value: '4 档角度', label: '多档位关节锁止（50°、70°、90°、110°/115°）' },
    ],
    features: [
      {
        title: '羽量级碳纤维骨架',
        description:
          '航空级碳纤维搭配耐磨牛津布，在不足 2kg 的自重下实现卓越结构刚性，确保双臂活动灵活无拘束。',
      },
      {
        title: '本质安全零功耗设计',
        description:
          '100% 纯机械弹性储能结构，彻底免除电池维护、充电停机及电火花隐患，完美胜任多班次连续作业。',
      },
      {
        title: '高效肌骨系统减负',
        description:
          '最高分担 8kg 三角肌负荷，直接延长作业人员耐力并有效预防慢性肩部职业劳损。',
      },
      {
        title: '极简工业级耐用性',
        description:
          '高强度阳极氧化航空铝关节，轻松抵御严苛冲击、粉尘污染与高强度工业磨损。',
      },
    ],
    hotspots: [
      {
        title: '四档机械肩关节',
        description:
          '抬臂即触发半自动机械助力，支持 50°、70°、90°、110°/115° 多角度锁止。',
        zone: '盂肱关节联动模组',
      },
      {
        title: '快拆胸背束带系统',
        description:
          '人体工学快拆卡扣设计，15 秒内即可完成快速穿脱。',
        zone: '胸廓交叉锁定背带',
      },
      {
        title: '伸缩式碳纤维背杆',
        description:
          '高抗拉强度碳纤维背脊，无级调节适配不同躯干长度。',
        zone: '背部碳纤维主梁',
      },
      {
        title: '快拆式大臂托架',
        description:
          '符合人体工学的包覆式臂托，配备黄色卡扣与蓝色快拆拉环，支持紧急快速脱离。',
        zone: '肱骨支撑托架',
      },
      {
        title: '3D 立体塑形腰带',
        description:
          '透气网孔护腰将背带负荷均匀传导并分散至骨盆环区域。',
        zone: '骨盆载荷传导腰封',
      },
    ],
    bentoCards: [
      {
        title: '四角度半自动机械肩关节',
        subtitle: '精密航空铝棘轮锁止架构',
        description:
          'CNC 精密加工航空铝合金壳体，内置 3 档力度、4 档角度（50°、70°、90°、110°/115°）半自动锁止棘轮，作业人员抬臂过顶时静音啮合，落臂时平顺解锁。',
        materialTag: '航空铝合金 • 四角度锁止',
      },
      {
        title: '航空碳纤维伸缩背脊',
        subtitle: '< 2kg 高刚性背部主框架',
        description:
          '多向编织航空碳纤维背梁兼具优异抗扭刚性，将高达 8kg 的过顶工具载荷高效传导至骨盆腰带。',
        materialTag: 'T700 航空碳纤维',
      },
      {
        title: '快拆臂托与 3D 透气网布',
        subtitle: '耐磨牛津布与高透气内衬',
        description:
          '外层采用防撕裂工业牛津布，内层贴合 3D 蜂窝透气网布，兼顾紧急快速脱卸与 8 小时连续作业散热排汗。',
        materialTag: '耐磨牛津布 + 3D 蜂窝网布',
      },
    ],
    deployment: {
      title: '汽车底盘仰装与过顶扭矩紧固作业',
      locationBadge: '汽车总装车间 • 底盘过顶工位',
      narrative:
        '在现代汽车总装产线中，技师每个班次需在举升底盘下方完成数千次过顶紧固作业。LC Power-U/A 可在 50° 至 115° 区间锁定机械支撑，无需消耗一瓦电力即可抵消气动扭矩扳手自重，彻底消除三角肌疲劳。',
      environmentalMetrics: [
        { label: '三角肌肌电负荷降低', value: '最高减负 8kg' },
        { label: '穿脱耗时', value: '< 15 秒' },
        { label: '充电与续航停机时间', value: '0 小时（100% 纯被动）' },
      ],
      industries: [
        '汽车制造总装',
        '电力设施检修',
        '建筑装修施工',
        '航空器维修保养',
        '现代农业采摘',
      ],
    },
    specifications: [
      { parameter: '产品型号', value: 'LC Power-U/A（规格编码：LC Power-U/P）' },
      { parameter: '产品颜色', value: '工业哑光黑' },
      { parameter: '适用人群', value: '长时间抬臂及过顶作业人员' },
      { parameter: '应用场景', value: '汽车装配、电力检修、建筑施工、飞机维修、农业采摘' },
      { parameter: '主体结构材料', value: '碳纤维 + 航空铝合金' },
      { parameter: '最大助力负荷', value: '最大 8kg' },
      { parameter: '锁止方式', value: '半自动机械锁止' },
      { parameter: '助力档位', value: '3 档力度（4 角度啮合）' },
      { parameter: '助力/解锁角度', value: '50°、70°、90°、110°/115°' },
      { parameter: '外层面料', value: '耐磨牛津布' },
      { parameter: '内衬面料', value: '透气 3D 网布' },
      { parameter: '尺码规格', value: '标准码 / 加大码' },
      { parameter: '产品净重', value: '< 2kg' },
      { parameter: '包装尺寸', value: '50 × 40 × 12cm' },
      { parameter: '可选配件', value: '人体工学护颈托' },
      { parameter: '质保政策', value: '1 年官方工业级质保' },
    ],
    quickCompare: {
      mechanism: '纯机械碳纤维背梁 + 四角度棘轮',
      capacityOrTemp: '最大 8kg 过顶托举助力',
      powerOrCycle: '100% 纯被动（0V）',
      netWeight: '< 2kg',
      primaryApplication: '汽车总装、电网检修、飞机维修',
    },
  },
  'flex-w': {
    name: '柔性腰部助力外骨骼',
    shortTitle: '无源智能护腰外骨骼',
    category: '仿生外骨骼系列',
    subCategory: '30kg 动态腰部助力',
    headline: '无源智能护腰，高达 30kg 动态腰部回弹助力。',
    overview:
      '专为高频弯腰与重物搬运作业打造的轻量化无源腰部外骨骼。通过高弹材料形变实现能量存储与释放，宛如一条生物力学“智能腰带”，在弯腰起身时提供强劲向上的回弹推力，显著减轻腰肌劳损、分担椎间盘压缩负荷并降低职业性腰椎损伤风险。',
    metrics: [
      { value: '0–30kg', label: '动态向上腰部助力范围' },
      { value: '≤ 1kg', label: '超薄轻量化穿戴形态' },
      { value: '160–190cm', label: '宽幅人体工学身高适配' },
      { value: '0V', label: '无源故障安全动能存储' },
    ],
    features: [
      {
        title: '≤ 1kg 极简贴身架构',
        description:
          '高透气织物结构自然贴合躯干曲线，保障 8 小时全班次干爽舒适穿戴。',
      },
      {
        title: '零束缚高机动敏捷性',
        description:
          '贴合人体轮廓，摒弃僵硬金属髋部铰链，完全保留行走、深蹲、攀爬及驾驶叉车的自由度。',
      },
      {
        title: '竖脊肌动态卸载',
        description:
          '随躯干前屈渐进蓄积弹性张力，在起身瞬间释放强劲向上的辅助推力。',
      },
      {
        title: '脊柱压力均衡分散',
        description:
          '将腰椎集中受力均匀分散至胸椎与双侧大腿，有效预防职业性腰椎间盘突出。',
      },
    ],
    hotspots: [
      {
        title: '多档身高调节背带',
        description:
          '伸缩式肩部张力调节系统，广泛适配 160cm 至 190cm 作业人员身高。',
        zone: '胸廓张力锚定点',
      },
      {
        title: '侧腰柔性导向通道',
        description:
          '柔软服帖的织带路径设计，彻底消除极限深蹲时的髋部夹痛感。',
        zone: '腹外斜肌导向带',
      },
      {
        title: '加厚 3D 护腰缓冲垫',
        description:
          '多层人体工学缓震衬垫温柔承托下腰椎，均匀分散背部载荷。',
        zone: 'L1–L5 椎间减压垫',
      },
      {
        title: '高可靠弹性储能核心',
        description:
          '高回弹聚酯乳胶纤维，在潮湿或多尘工况下依然保持长效抗疲劳寿命。',
        zone: '动能形变储能带',
      },
      {
        title: '双侧大腿牵引联动带',
        description:
          '一体化背腰支撑架连接双侧腿环，实现 0–30kg 平顺载荷传递。',
        zone: '股骨联动固定环',
      },
    ],
    bentoCards: [
      {
        title: '一体化背腰支撑架与 3D 缓冲垫',
        subtitle: 'L1–L5 腰椎间盘减压矩阵',
        description:
          '人体工学多层 3D 蜂窝护腰垫内嵌一体化背腰支撑支架，在高频仓储分拣中稳定下脊柱并快速排出湿热汗气。',
        materialTag: '3D 透气网布 + 腰部支撑架',
      },
      {
        title: '高回弹聚酯乳胶纤维核心',
        subtitle: '0–30kg 渐进式动能存储',
        description:
          '特制高弹聚酯乳胶纤维在躯干前倾弯腰时储存机械势能，起身时回馈最高 30kg 的平顺向上助力。',
        materialTag: '高回弹聚酯乳胶纤维',
      },
      {
        title: '双侧大腿联动束带系统',
        subtitle: '深蹲零夹痛与叉车驾驶敏捷切换',
        description:
          '柔软耐磨牛津布腿环锚定动能传导路径，无刚性金属髋关节阻碍，让作业人员从搬运重物无缝切换至驾驶叉车。',
        materialTag: '耐磨战术牛津布',
      },
    ],
    deployment: {
      title: '高频物流分拨中心与机场行李装卸',
      locationBadge: '智慧物流履约中心 • 码垛作业区',
      narrative:
        '在高吞吐量物流分拣中心与机场行李舱内，装卸工每小时需执行数百次深弯腰与重物提举。LC Flex-W 净重 ≤1kg 且无刚性髋部金属杆，宛如人体第二组竖脊肌，在提供高达 30kg 腰部向上助力的同时，兼顾自然行走、攀爬与车辆驾驶。',
      environmentalMetrics: [
        { label: '动态向上腰部助力', value: '0–30kg 可调' },
        { label: '整机穿戴重量', value: '≤ 1.0kg' },
        { label: '适配作业身高', value: '160–190cm' },
      ],
      industries: [
        '工业物流与仓储分拣',
        '机场航空行李装卸',
        '医疗护理与养老照护',
        '高频弯腰搬运作业',
      ],
    },
    specifications: [
      { parameter: '产品型号', value: 'LC Flex-W' },
      { parameter: '产品颜色', value: '战术黑' },
      { parameter: '适用人群', value: '体力劳动者、仓储作业员、物流装卸工、医护人员' },
      { parameter: '应用场景', value: '工业物流、机场行李装卸、医疗养老护理、高频弯腰作业' },
      { parameter: '助力方式', value: '无源纯机械被动助力' },
      { parameter: '适用身高', value: '160–190cm' },
      { parameter: '助力范围', value: '0–30kg（动态可调）' },
      { parameter: '储能介质', value: '高回弹弹性聚酯乳胶纤维' },
      { parameter: '核心结构', value: '一体化背腰支撑架 + 双侧大腿联动束带系统' },
      { parameter: '外层面料', value: '耐磨牛津布' },
      { parameter: '内衬面料', value: '透气 3D 网布' },
      { parameter: '尺码规格', value: '标准码 / 加大码' },
      { parameter: '产品净重', value: '≤ 1kg' },
      { parameter: '包装尺寸', value: '40 × 30 × 10cm' },
      { parameter: '质保政策', value: '1 年官方工业级质保' },
    ],
    quickCompare: {
      mechanism: '无源高弹聚酯乳胶纤维 + 大腿联动',
      capacityOrTemp: '0–30kg 动态腰部助力',
      powerOrCycle: '100% 纯被动（0V）',
      netWeight: '≤ 1kg',
      primaryApplication: '物流仓储、机场行李、医疗护理',
    },
  },
  'gloves-01': {
    name: '手腕重复作业评估手套',
    shortTitle: '边缘 AI 生物力学诊断手套',
    category: '智能人因传感系列',
    subCategory: 'GBZ 336-2025 边缘 AI 生物传感',
    headline: '边缘 AI 生物传感手套，GBZ 336-2025 职业性腕管综合征风险诊断。',
    overview:
      '专为存在手腕高频重复用力作业的制造场景研发，LC Gloves-01 严格遵循《GBZ 336-2025 职业性腕管综合征诊断标准》。配备双姿态 IMU 惯性传感器（手背端 + 手腕基准端）与板载边缘 AI 计算芯片，实时追踪手腕角度、有效作业动作、操作频率、持续时长及负荷强度，支持无线数据上传与工业平板可视化分析，赋能人因工程风险量化与工位优化。',
    secondaryStudioCaption:
      '配套工业平板分析软件套件 —— 实时双通道屈伸与桡尺偏波形遥测，自动生成符合 GBZ 336-2025 标准的职业性腕管综合征风险分级报告。',
    metrics: [
      { value: '≤ ±0.1°', label: 'IMU 静态姿态测量精度' },
      { value: '±180°', label: '全维度多轴向活动量程' },
      { value: '200g', label: '羽量级人体工学穿戴形态' },
      { value: '24次/分', label: '有效动作频率自动识别计数' },
    ],
    features: [
      {
        title: '双节点差分姿态感知',
        description:
          '差分传感架构精准滤除整臂摆动干扰，纯粹提取手腕掌屈、背伸、桡偏与尺偏角度。',
      },
      {
        title: '板载边缘 AI 实时解算',
        description:
          '手套微控制器本地实时计算关节角度、统计有效动作周期并汇总工时指标，实现零延迟响应。',
      },
      {
        title: '无线平板遥测分析',
        description:
          '通过蓝牙/Wi-Fi 将实时数据流传输至配套 PC/工业平板软件，一键导出标准化诊断风险报告。',
      },
      {
        title: '工业级抗电磁与抗振干扰',
        description:
          '针对汽车总装与 3C 电子车间强电磁噪声及机械振动环境进行强化屏蔽校准。',
      },
    ],
    hotspots: [
      {
        title: '半指触感镂空剪裁',
        description:
          '裸露指尖设计完整保留精细触觉，轻松拿取微型螺丝与精密电子元器件。',
        zone: '远端指骨触觉镂空区',
      },
      {
        title: '零游隙手背传感底座',
        description:
          '高弹力织物将主 IMU 传感器牢牢锁定于掌骨上方，杜绝皮肤相对滑移。',
        zone: '掌骨主 IMU 传感节点',
      },
      {
        title: '200g 轻量化透气主体',
        description:
          '大幅降低穿戴负担，满足连续 8 小时工效学现场审核需求。',
        zone: '高透气针织传感基底',
      },
      {
        title: '可调节手腕基准束带',
        description:
          '稳固锚定腕部参考 IMU 传感器，灵活适配不同手腕周长。',
        zone: '桡腕关节基准固定带',
      },
      {
        title: '配套诊断软件与腕部基准 IMU',
        description:
          '腕部副 IMU 模组实时回传屈伸与桡尺偏双通道波形，支持 GBZ 336-2025 风险分级。',
        zone: '无线边缘 AI 遥测链路',
      },
    ],
    bentoCards: [
      {
        title: '双姿态差分 IMU 传感器模组',
        subtitle: '≤ ±0.1° 静态精度与边缘 AI 微控制器',
        description:
          '通过手背掌骨 IMU 与手腕基准 IMU 协同差分运算，板载边缘 AI 处理器可剔除手臂大幅运动干扰，精准捕捉超过 15° 识别阈值的手腕屈伸与桡尺偏动作。',
        materialTag: '双差分 IMU • ≤ ±0.1° 高精度',
      },
      {
        title: '高弹力科技针织与半指镂空设计',
        subtitle: '传感器零滑移锁定，兼顾指尖精细灵巧度',
        description:
          '200g 透气科技灰针织面料确保传感器紧贴不位移，同时露出指尖以便进行微型紧固件装配与焊接作业。',
        materialTag: '科技灰防滑传感针织面料',
      },
      {
        title: 'GBZ 336-2025 诊断波形分析套件',
        subtitle: '实时频率（24次/分）与累计工时量化',
        description:
          '将手腕运动学数据实时流式传输至工业平板电脑，自动记录每日累计工时、有效动作次数并生成职业性腕管综合征风险评估报告。',
        materialTag: '符合 GBZ 336-2025 诊断分析',
      },
    ],
    deployment: {
      title: '3C 精密电子装配与职业健康现场评估',
      locationBadge: '3C 电子制造产线 • 人因工程评估工位',
      narrative:
        '职业病防治院、第三方工效学检测机构及制造企业 EHS 团队可将 LC Gloves-01 直接部署于实际生产线上。当操作员组装精密部件时，手套会精准记录每一次超过 15°（可自定义）阈值的屈曲、背伸与尺偏动作，输出具备法规依据的 GBZ 336-2025 合规评估报告。',
      environmentalMetrics: [
        { label: '遵循诊断标准', value: '符合 GBZ 336-2025' },
        { label: '静态角度精度', value: '≤ ±0.1°（±180° 量程）' },
        { label: '标准动作识别阈值', value: '15° / 24 次·min⁻¹' },
      ],
      industries: [
        '职业病防治院与疾控机构',
        '第三方工效学检测评估机构',
        '3C 电子与汽车装配产线审核',
        '工业工位人因工程优化',
      ],
    },
    specifications: [
      { parameter: '产品型号', value: 'LC Gloves-01' },
      { parameter: '产品颜色', value: '科技浅灰配哑光白传感舱及黑色包边' },
      { parameter: '合规标准', value: 'GBZ 336-2025《职业性腕管综合征诊断标准》' },
      { parameter: '应用场景', value: '职业病防治院、第三方检测机构、制造企业工位人因评估' },
      { parameter: '动作识别阈值', value: '15°（支持自定义设置）' },
      { parameter: '角度测量范围', value: '±180°' },
      { parameter: '静态测量精度', value: '≤ ±0.1°' },
      { parameter: '频率计数功能', value: '自动统计有效动作次数（标准阈值：24 次/分钟）' },
      { parameter: '时长追踪功能', value: '每日作业工时自动累计' },
      { parameter: '测量维度', value: '手腕掌屈/背伸、桡偏/尺偏角度' },
      { parameter: '尺码规格', value: 'M、L、XL（支持定制）' },
      { parameter: '产品净重', value: '200g' },
      { parameter: '包装尺寸', value: '23 × 17 × 8cm' },
      { parameter: '可选配件', value: '工业三防平板电脑（预装分析套件）/ 运动相机' },
      { parameter: '质保政策', value: '1 年官方工业级质保' },
    ],
    quickCompare: {
      mechanism: '双 IMU 差分姿态传感 + 边缘 AI MCU',
      capacityOrTemp: '≤ ±0.1° 静态精度（±180° 量程）',
      powerOrCycle: '实时无线遥测（24 次/分钟）',
      netWeight: '200g',
      primaryApplication: 'GBZ 336-2025 评估、职防院、产线质检',
    },
  },
  'frost-pcm-a': {
    name: '相变降温背心',
    shortTitle: '生物基 C17 恒温相变护甲',
    category: '个人热管理系列',
    subCategory: '无源生物基 C17 恒温舒适降温',
    headline: '生物基相变冷甲，22.08°C 躯干恒温舒适守护。',
    overview:
      'LC Frost-PCM/A（透明 TPU 款）采用高能量密度相变材料（PCM），在恒定舒适温度（约 23°C）下持续吸收人体多余热量，提供温和持久的躯干降温。单次蓄冷可在 35°C 高温环境下提供 1–2 小时清凉舒缓，支持数千次循环复用，打造本质安全、无缆束缚的个人微气候。',
    metrics: [
      { value: '22.08°C', label: '恒定相变舒适温度点' },
      { value: '225 J/g', label: '高相变潜热储能密度' },
      { value: '0.55kg', label: '超轻量化透明 TPU 壳体' },
      { value: '1–2 小时', label: '单次蓄冷持续降温时长' },
    ],
    features: [
      {
        title: '温和亲肤恒温降温',
        description:
          '恒定在 22.08°C 发生相变吸热，彻底杜绝传统 0°C 冰袋引起的皮肤血管剧烈收缩或冻伤风险。',
      },
      {
        title: '100% 无源本质安全',
        description:
          '无需电池、风扇或线缆，在洁净室、易燃易爆气体区及潮湿环境中实现零电气安全隐患。',
      },
      {
        title: '零衰减 C17 烷烃配方',
        description:
          '高纯度生物基 C17 正构烷烃 PCM，历经数千次冻融循环仍保持热学性能无衰减。',
      },
      {
        title: '植物萃取可生物降解',
        description:
          '100% 生物质来源配方，非石油衍生品，环保无毒且安全可靠。',
      },
    ],
    hotspots: [
      {
        title: '速冷蜂巢矩阵单元',
        description:
          '独立封装的相变储能格紧密贴合前胸与后背，最大化热交换接触面积。',
        zone: '前后胸背 C17 相变矩阵',
      },
      {
        title: '通用型可调节腰扣',
        description:
          '双侧快拆黑色织带卡扣，灵活适配各种体型与工装内搭需求。',
        zone: '双侧张力调节卡扣',
      },
      {
        title: '医用级透明 TPU 壳体',
        description:
          '防水防油污透明薄膜材质，支持瞬间擦拭消毒与快速清洁。',
        zone: '高频热合 TPU 封装舱',
      },
      {
        title: '超薄内搭修身剪裁',
        description:
          '0.55kg 超薄形态，可隐形穿戴于防化服、无尘洁净服或反光背心内部。',
        zone: '0.55kg 防护服内搭剪裁',
      },
    ],
    bentoCards: [
      {
        title: '生物基 C17 正构烷烃相变矩阵',
        subtitle: '22.08°C 恒温平台下高达 225 J/g 相变潜热',
        description:
          '植物源 C17 相变晶体在精确的 22.08°C 温度平台进行固液相变，每克吸收 225 焦耳代谢热量，无冷休克刺激且不易产生冷凝水潮湿感。',
        materialTag: '100% 生物基 C17 PCM • 225 J/g',
      },
      {
        title: '高强度医用级 TPU 高频热合接缝',
        subtitle: '防水防油污，支持一擦即净快速消杀',
        description:
          '高频焊接热塑性聚氨酯（TPU）网格通道具备优异的抗穿刺、耐化学飞溅与防生物污染能力，完美契合无菌医疗与洁净室部署。',
        materialTag: '高强度透明 TPU 封装',
      },
      {
        title: '通用双侧快拆织带系统',
        subtitle: '均码适配各类密封防护服内搭',
        description:
          '低剖面聚甲醛卡扣与高强织带将 0.55kg 背心稳固贴合于躯干，穿戴在重型防化服或无尘服内毫无臃肿感。',
        materialTag: '双侧快拆战术卡扣',
      },
    ],
    deployment: {
      title: '全封闭洁净室、医疗防护服与高温环卫作业',
      locationBadge: '半导体无尘洁净室与生物安全防护现场',
      narrative:
        '身穿气密型防化服、医用防护服或无尘连体服的作业人员无法依赖汗液蒸发或风扇吹风降温。净重仅 0.55kg 的晶莹透明 LC Frost-PCM/A 可直接穿戴于密封防护服内层，单次维持 1–2 小时 22.08°C 恒温微气候，并在 -18°C 冷冻环境下 60 分钟即可完成快速蓄冷。',
      environmentalMetrics: [
        { label: '相变恒温平台', value: '22.08°C 恒定' },
        { label: '潜热储能密度', value: '225 J/g' },
        { label: '冷冻快速蓄冷', value: '-18°C 下 1 小时充满' },
      ],
      industries: [
        '极端高温作业环境',
        '半导体与生物医药洁净室',
        '医疗防疫 PPE 与生物安全团队',
        '市政环卫与应急防化救援',
      ],
    },
    specifications: [
      { parameter: '产品型号', value: 'LC Frost-PCM/A' },
      { parameter: '产品颜色', value: '晶莹透明（支持定制相变材料染色）' },
      { parameter: '适用人群', value: '极端高温环境、无尘洁净室、医疗防护、市政环卫作业人员' },
      { parameter: '相变潜热', value: '225 J/g' },
      { parameter: '相变温度', value: '22.08°C' },
      { parameter: '降温时长', value: '1–2 小时（参考值，视劳动强度与环境温度而定）' },
      { parameter: '蓄冷恢复时间', value: '-18°C 冷冻 1 小时，或 0–4°C 冷藏 1–2 小时' },
      { parameter: '外壳材料', value: '高强度热塑性聚氨酯（TPU）' },
      { parameter: '尺码规格', value: '均码（可调节）' },
      { parameter: '产品净重', value: '0.55kg' },
      { parameter: '包装尺寸', value: '40 × 30 × 10cm' },
      { parameter: '可选定制', value: '自定义 PCM 液体颜色' },
      { parameter: '质保政策', value: '1 年官方工业级质保' },
    ],
    quickCompare: {
      mechanism: '透明 TPU 封装无源生物基 C17 相变材料',
      capacityOrTemp: '22.08°C 恒温（225 J/g）',
      powerOrCycle: '1–2h 持续降温 / 1h 冷冻蓄冷（-18°C）',
      netWeight: '0.55kg',
      primaryApplication: '洁净室、医疗 PPE、防化服内搭',
    },
  },
  'frost-pcm-g': {
    name: '阻燃相变降温背心',
    shortTitle: '防静电阻燃相变冷甲',
    category: '个人热管理系列',
    subCategory: '高危防爆区无源热防护盾',
    headline: '防静电阻燃相变护甲，专为高危防爆一线打造的无源降温方案。',
    overview:
      '将恒定约 23°C 吸热的高能量密度相变材料（PCM）封装于防静电、阻燃外层面料之中。专为石油化工、冶金铸造、焊接作业及电力巡检等火花飞溅、易燃粉尘与极端高温并存的高危场景研发。',
    metrics: [
      { value: '22.08°C', label: '温和无刺激相变舒适温区' },
      { value: '225 J/g', label: '高密度潜热储能容量' },
      { value: '360°', label: '高可视度反光安全警示条' },
      { value: '0V', label: '零火花本质安全无源降温' },
    ],
    features: [
      {
        title: '阻燃与防静电双重防护',
        description:
          '重型工业斜纹防护面料有效抵御焊渣飞溅、明火火花及静电电荷积聚。',
      },
      {
        title: '22.08°C 恒温热调节',
        description:
          '在 35°C 以上高温重体力劳动中持续为核心躯干降温，无冷刺激不适感。',
      },
      {
        title: '高稳定性 C17 生物质内核',
        description:
          '支持数千次热循环而性能不衰减，无毒环保且安全可靠。',
      },
      {
        title: '夜间与低照度高可视性',
        description:
          '前后双道高亮度银色反光带，为道路抢修与昏暗厂区提供 360° 全方位视觉警示。',
      },
    ],
    hotspots: [
      {
        title: '阻燃防静电外层织物',
        description:
          '强韧防撕裂面料，耐受刮擦磨损与熔融金属飞溅。',
        zone: '阻燃防静电工业斜纹外壳',
      },
      {
        title: '高弹魔术贴调节腰封',
        description:
          '宽幅工业级魔术贴腰带，牢固贴合不同体型躯干。',
        zone: '重型魔术贴束腰带',
      },
      {
        title: '模块化相变冷媒内袋',
        description:
          '独立内部隔舱将密封相变蓄冷袋紧密固定于核心躯干表面。',
        zone: '内置 C17 相变蓄冷袋仓',
      },
      {
        title: '双道安全警示反光带',
        description:
          '胸腰双环 3M 级高反光条，确保复杂作业现场全天候醒目可见。',
        zone: '360° 全向反光警示条',
      },
    ],
    bentoCards: [
      {
        title: '防静电阻燃防撕裂外层护甲',
        subtitle: 'EX 防爆危险区域零火花安全防护',
        description:
          '经特殊防静电与阻燃处理的工业织物可快速耗散静电荷并抵御焊接火花飞溅，在石化炼油厂与天然气站内实现安全合规的核心降温。',
        materialTag: '阻燃防静电工业斜纹布',
      },
      {
        title: '双道 360° 全向反光安全警示带',
        subtitle: '夜间抢修与隧道作业高对比度可视性',
        description:
          '宽幅银色反光带 360° 环绕前胸与腰部，确保操作人员在低照度炼化厂、隧道及夜间市政工程中被即时识别。',
        materialTag: '360° 高亮反光饰条',
      },
      {
        title: '模块化内置相变仓与高弹腰封',
        subtitle: '班次间数秒内快速热插拔更换冷媒包',
        description:
          '内部隔热口袋支持作业班组在数秒内更换蓄冷完毕的 22.08°C C17 相变冷媒包，配合宽幅魔术贴腰封使背心紧贴躯干。',
        materialTag: '模块化相变仓 • 整重 0.96kg',
      },
    ],
    deployment: {
      title: '石油化工炼厂、焊接车间与夜间电力抢修',
      locationBadge: 'EX 防爆石化裂解装置区 • 高温作业带',
      narrative:
        '在防爆（EX）石化厂区与繁忙的焊接车间内，锂电池与有刷电机存在严峻的点火引爆风险。LC Frost-PCM/G 将 0V 无源 22.08°C 相变降温与防静电阻燃外壳、360° 反光警示带融为一体，在严禁携带电子设备的危险禁区提供可靠的热应激防护。',
      environmentalMetrics: [
        { label: '点火与电火花风险', value: '0V 本质安全' },
        { label: '相变舒适温度', value: '22.08°C（225 J/g）' },
        { label: '整衣满载重量', value: '0.96kg' },
      ],
      industries: [
        '石油化工与油气炼化',
        '冶金铸造与焊接作业',
        '电网变电站巡检维护',
        '高温夜间工程抢修',
      ],
    },
    specifications: [
      { parameter: '产品型号', value: 'LC Frost-PCM/G' },
      { parameter: '产品颜色', value: '工业灰配高可视反光条（支持定制）' },
      { parameter: '适用人群', value: '石化、冶金、焊接、电网及高温夜班作业人员' },
      { parameter: '相变潜热', value: '225 J/g' },
      { parameter: '相变温度', value: '22.08°C' },
      { parameter: '降温时长', value: '1–2 小时（参考值，视劳动强度与环境温度而定）' },
      { parameter: '蓄冷恢复时间', value: '-18°C 冷冻 1 小时，或 0–4°C 冷藏 1–2 小时' },
      { parameter: '面料材质', value: '防静电阻燃面料' },
      { parameter: '尺码规格', value: '标准码 / 加大码' },
      { parameter: '产品净重', value: '0.96kg' },
      { parameter: '包装尺寸', value: '40 × 30 × 10cm' },
      { parameter: '质保政策', value: '1 年官方工业级质保' },
    ],
    quickCompare: {
      mechanism: '防静电阻燃外壳 + 无源生物基 C17 相变冷媒',
      capacityOrTemp: '22.08°C 恒温（225 J/g）',
      powerOrCycle: '1–2h 持续降温 / 0V 本质安全',
      netWeight: '0.96kg',
      primaryApplication: '石油化工、焊接车间、冶金、夜班抢修',
    },
  },
  'frost-tec-w': {
    name: '半导体水冷背心',
    shortTitle: '80W 主动液冷 + 双风道降温背心',
    category: '个人热管理系列',
    subCategory: '80W 主动液冷 + 双风道循环',
    headline: '80W 主动半导体制冷水冷，闭环液冷与双风道协同散热。',
    overview:
      '基于固态半导体制冷芯片（TEC）与闭环水循环系统的主动式穿戴降温装备。开机 2 分钟内即可输出稳定、多档可调的躯干液冷降温；同时集成后背静音涡轮排风与前胸双送风风扇，在消防救援、建筑施工、电力检修及环卫作业中保持全天候面部与躯干干爽。',
    metrics: [
      { value: '80W', label: '主动半导体制冷功率' },
      { value: '2 分钟', label: '冷水循环快速稳定时间' },
      { value: '24V', label: '高能效制冷主机架构' },
      { value: '2–4 小时', label: '连续班次电池续航能力' },
    ],
    features: [
      {
        title: '精准主动温度调控',
        description:
          '半导体制冷机组主动抽吸循环冷却液热量，彻底突破被动冰袋融化失效的时间瓶颈。',
      },
      {
        title: '双温区强制风冷排汗',
        description:
          '后置涡轮高效排出废热，前胸双风扇向颈部与面部吹送微风，加速汗液蒸发。',
      },
      {
        title: '持久外场电池续航',
        description:
          '24V 锂电电源系统单电续航 1–2 小时，双电配置可实现最高 4 小时连续运行。',
      },
      {
        title: '防漏密封液冷流道',
        description:
          '工业级 TPU 管路耐高压、抗弯折扭曲，在严苛工地工况下依然滴水不漏。',
      },
    ],
    hotspots: [
      {
        title: '防静电阻燃 V 领外壳',
        description:
          '柔软耐用的工业灰防护面料，兼具耐热与防静电安全特性。',
        zone: '前胸阻燃防静电外层',
      },
      {
        title: '双侧贴合收紧织带',
        description:
          '人体工学张力调节带将内部冷却水道紧密贴合于躯干表面。',
        zone: '双侧热传导压紧带',
      },
      {
        title: '后置 80W TEC 制冷主机',
        description:
          '流线型银色机身搭载黑色涡轮风扇，2 分钟内即可稳定冷水循环温度。',
        zone: '背部 24V / 80W 半导体制冷核心',
      },
      {
        title: '前胸双送风电源口袋',
        description:
          '前侧多功能口袋收纳电池，同时向上方的下巴与前胸持续吹送清凉气流。',
        zone: '前胸上吹式送风模组',
      },
    ],
    bentoCards: [
      {
        title: '背部 80W 固态 TEC 制冷主机与涡轮排风',
        subtitle: '24V / 100W 系统架构 • 2 分钟内建立稳定冷水循环',
        description:
          '符合人体工学的背负式银色阳极氧化 80W 半导体制冷模组，可在 2 分钟内冷却内部循环水，同时由静音径流涡轮风扇将废热排离人体。',
        materialTag: '80W TEC 制冷机 • 2 分钟速冷稳定',
      },
      {
        title: '前胸双强制送风风扇',
        subtitle: '向上吹拂面部与颈部，加速汗液蒸发',
        description:
          '前袋内置鼓风机将清爽气流向上引导至前胸、颈部与面部，实现内部接触式液冷与外部对流风干的双重耦合降温。',
        materialTag: '前胸双上吹送风风扇',
      },
      {
        title: '医用/工业级 TPU 闭环水冷内胆',
        subtitle: '抗弯折耐高压微流道网络',
        description:
          '蛇形排布的 TPU 微流道将冷冻水均匀分布至核心躯干，并可搭配附加相变蓄冷包应对极端热浪峰值。',
        materialTag: '闭环 TPU 液冷流道内胆',
      },
    ],
    deployment: {
      title: '高压电网检修、消防救援与重型建筑施工',
      locationBadge: '500kV 变电站主变大修 • 夏季迎峰度夏现场',
      narrative:
        '当电网抢修人员与消防员在 40°C 以上强辐射热环境中作业时，被动冰袋往往在复杂检修任务完成前便已融化。LC Frost-TEC/W 融合 80W 主动半导体制冷液环与前胸双送风风扇，清凉气流直达颈部与面部，支撑连续 2 至 4 小时的高警觉度安全作业。',
      environmentalMetrics: [
        { label: '主动制冷量输出', value: '80W（额定 24V / 100W）' },
        { label: '水环温度稳定时间', value: '2 分钟' },
        { label: '连续系统续航', value: '2–4 小时（双电配置）' },
      ],
      industries: [
        '电网与变电站检修维护',
        '消防救援与应急抢险',
        '公安执勤与交通指挥',
        '重型建筑施工与市政环卫',
      ],
    },
    specifications: [
      { parameter: '产品型号', value: 'LC Frost-TEC/W' },
      { parameter: '产品颜色', value: '科技灰（支持定制）' },
      { parameter: '适用人群', value: '高温环境下的消防、公安、电网、建筑及环卫作业人员' },
      { parameter: '制冷量', value: '80W' },
      { parameter: '额定电压', value: '24V' },
      { parameter: '额定功率', value: '100W' },
      { parameter: '降温响应时间', value: '2 分钟内达到稳定制冷' },
      { parameter: '电池续航', value: '单块电池 1–2 小时（双电系统连续续航 2–4 小时）' },
      { parameter: '外层面料', value: '防静电阻燃面料' },
      { parameter: '内胆材质', value: '医用/工业级 TPU 水道内胆' },
      { parameter: '尺码规格', value: '均码（可调节）' },
      { parameter: '产品净重', value: '< 3kg' },
      { parameter: '包装尺寸', value: '40 × 30 × 10cm' },
      { parameter: '可选配件', value: '附加 PCM 相变蓄冷包' },
      { parameter: '质保政策', value: '1 年官方工业级质保' },
    ],
    quickCompare: {
      mechanism: '主动 80W TEC 闭环水冷 + 前胸双风扇',
      capacityOrTemp: '80W 主动制冷（2 分钟稳定）',
      powerOrCycle: '24V / 100W • 2–4h 续航',
      netWeight: '< 3kg',
      primaryApplication: '消防救援、电网检修、重型建筑施工',
    },
  },
  'frost-tec-d': {
    name: '半导体直冷背心',
    shortTitle: '2 秒瞬冷固态帕尔贴背心',
    category: '个人热管理系列',
    subCategory: '2 秒瞬冷固态帕尔贴直导',
    headline: '2 秒瞬时帕尔贴直冷，零水零冷媒，最高 8 小时持久续航。',
    overview:
      'LC Frost-TEC/D 利用接触式 TEC 半导体模组的固态帕尔贴效应，无需冰袋、冷却液或压缩机。导冷板在开机瞬间直接贴合吸收躯干热量，仅需 2 秒即可达到稳定低温，配合超静音风扇高效排散废热。采用透气网布主体与高可视反光条，专为工业巡检、医疗防护及户外执勤打造。',
    metrics: [
      { value: '2 秒', label: '超快固态直冷稳定时间' },
      { value: '0 液体', label: '纯干式直接热传导（零漏液风险）' },
      { value: '2–8 小时', label: '模块化电池超长续航' },
      { value: '> 20,000 小时', label: '固态半导体芯片工作寿命' },
    ],
    features: [
      {
        title: '2 秒瞬时固态热传导',
        description:
          '帕尔贴直触导冷板通电即冷，无需提前冷冻冰袋或注水补液。',
      },
      {
        title: '超静音无振动运行',
        description:
          '低噪轴流散热风扇彻底消除压缩机轰鸣与水泵振动，满足安静巡检需求。',
      },
      {
        title: '最高 8 小时模块化供电',
        description:
          '60W 低功耗架构支持 2–8 小时灵活续航（单块轻量化电池续航 2 小时）。',
      },
      {
        title: '免维护与 20,000 小时寿命',
        description:
          '全固态架构摒弃软管、冷媒与水泵，彻底杜绝漏液故障并实现超长服役寿命。',
      },
    ],
    hotspots: [
      {
        title: '四阵列直触式 TEC 导冷模组',
        description:
          '精准排布于上背部的四块帕尔贴导冷板，将瞬时冷量直接传导至体表。',
        zone: '背部四联固态帕尔贴阵列',
      },
      {
        title: '快拆式高可视黄胸扣',
        description:
          '醒目黄色前胸快拆扣配合背部弹力绳，确保导冷板紧贴背部且活动自如。',
        zone: '高可视前胸快拆束带',
      },
      {
        title: '胸前旋钮控制器与低噪风扇',
        description:
          '胸前圆形旋钮支持盲操多档位温控调节，操作直观便捷。',
        zone: '旋钮温控器与轴流散热器',
      },
      {
        title: '可拆卸水洗高可视网布',
        description:
          '防静电透气网布搭配荧光黄与银色反光条；电子模组可轻松快拆，方便背心水洗。',
        zone: '模块化可水洗防静电网布主体',
      },
    ],
    bentoCards: [
      {
        title: '四联直触式固态帕尔贴导冷阵列',
        subtitle: '45W 制冷量 • 开机 2 秒瞬时降温',
        description:
          '四块阳极氧化铝导热板与固态半导体芯片直连耦合，通电 2 秒内即可从上背部快速抽吸热量——零水路、零水泵，芯片寿命超过 20,000 小时。',
        materialTag: '四联固态帕尔贴 • >20,000h 寿命',
      },
      {
        title: '高可视快拆胸扣与动态弹力张紧系统',
        subtitle: '运动过程中始终保持导冷板紧密贴合皮肤',
        description:
          '醒目黄色快拆胸扣与后背动态弹力绳协同作用，在俯身、行走与攀爬时维持 4 组帕尔贴模组与上背部的最佳导热接触压力。',
        materialTag: '高可视快拆扣具系统',
      },
      {
        title: '胸前旋钮温控器与可拆洗防静电网布',
        subtitle: '12V / 60W 低功耗架构，支持 2–8 小时续航',
        description:
          '直观的胸前旋转拨盘可随时调节固态制冷强度，整套电子线束支持快速拆离，便于对防静电阻燃网布背心进行日常水洗清洁。',
        materialTag: '可拆洗防静电阻燃透气网布',
      },
    ],
    deployment: {
      title: '铁路轨道巡检、户外安保执勤与移动外场巡逻',
      locationBadge: '高铁线路廊道巡检 • 8 小时全班次移动执勤',
      narrative:
        '移动巡检工程师、交警执勤人员与户外安保团队需要即开即用的降温保障，无法携带沉重水箱或等待冰袋冷冻。LC Frost-TEC/D 净重约 1.7kg，基于 12V 电池系统仅需 2 秒即可快速稳定降温，在长距离外场巡逻中提供长达 8 小时的干爽、超静音固态清凉体验。',
      environmentalMetrics: [
        { label: '导冷稳定时间', value: '2 秒（瞬时启动）' },
        { label: '模块化电池续航', value: '2–8 小时（12V / 60W）' },
        { label: '半导体芯片寿命', value: '> 20,000 小时' },
      ],
      industries: [
        '工业厂区与铁路轨道巡检',
        '医疗防护 PPE 与移动方舱',
        '户外交通执勤与机场机务地勤',
        '安保巡逻与应急执勤人员',
      ],
    },
    specifications: [
      { parameter: '产品型号', value: 'LC Frost-TEC/D' },
      { parameter: '产品颜色', value: '战术灰网布配荧光黄高可视反光条及黑织带（可选全黑款）' },
      { parameter: '适用人群', value: '工业巡检、医疗防护、户外交通指挥、安保执勤人员' },
      { parameter: '制冷量', value: '45W' },
      { parameter: '额定电压', value: '12V' },
      { parameter: '额定功率', value: '60W' },
      { parameter: '降温响应时间', value: '开机瞬冷，2 秒内达到稳定状态' },
      { parameter: '电池续航', value: '2–8 小时（单块电池包续航 2 小时）' },
      { parameter: '芯片工作寿命', value: '> 20,000 小时' },
      { parameter: '外层面料', value: '防静电阻燃透气网布（模块化可拆卸水洗）' },
      { parameter: '尺码规格', value: '标准码 / 加大码' },
      { parameter: '产品净重', value: '约 1.7kg' },
      { parameter: '包装尺寸', value: '40 × 30 × 10cm' },
      { parameter: '质保政策', value: '1 年官方工业级质保' },
    ],
    quickCompare: {
      mechanism: '四联直触式固态帕尔贴（纯干式）',
      capacityOrTemp: '45W 直接传导制冷（2 秒瞬冷）',
      powerOrCycle: '12V / 60W • 2–8h 模块化续航',
      netWeight: '~1.7kg',
      primaryApplication: '工业巡检、交通执勤、安保、医疗 PPE',
    },
  },
  'frost-acc-w': {
    name: '压缩机水冷背心',
    shortTitle: '300W 极限微型变频制冷主机',
    category: '个人热管理系列',
    subCategory: '300W 极限微型变频压缩制冷',
    headline: '300W 主动微型变频压缩机制冷，征服极端高温热害禁区。',
    overview:
      '作为 LC Frost 系列旗舰力作，LC Frost-ACC/W 将微型变频制冷压缩机与闭环冷冻液循环网络融为一体。凭借行业领先的 60–300W 主动制冷能力、宽幅温度调节范围及恒定强劲的冷量输出，成为极端冶金铸造、消防救援及受限空间作业的终极降温防护装甲。',
    metrics: [
      { value: '60–300W', label: '重型主动压缩机制冷量范围' },
      { value: '< 4kg', label: '人体工学均衡配重穿戴式主机' },
      { value: '3 分钟', label: '高容量冷水循环快速稳定' },
      { value: '100%', label: '全密封防漏液冷回路' },
    ],
    features: [
      {
        title: '300W 极限主动压缩制冷',
        description:
          '微型变频压缩机开机即刻强力冷却循环水，支持多档位数字化精准温控。',
      },
      {
        title: '< 4kg 一体化高机动配重',
        description:
          '紧凑型制冷架构将重量均衡分布于下躯干，确保在狭窄受限空间内依然行动自如。',
      },
      {
        title: '高强度班次 2–4 小时续航',
        description:
          '高容量 24V 锂电池系统为严苛高温班次提供持久稳定的重型制冷输出。',
      },
      {
        title: '抗冲击全密封液冷管路',
        description:
          '坚固的快插液压接头与耐压 TPU 液冷胆可承受剧烈撞击、高频振动及现场冲洗。',
      },
    ],
    hotspots: [
      {
        title: '阻燃防静电 V 领外甲',
        description:
          '极简工业灰防静电阻燃外壳配重型中央拉链，舒适贴合各类打底工装。',
        zone: '防静电阻燃 V 领外层护甲',
      },
      {
        title: '双侧加压收紧织带',
        description:
          '侧面张力束带使内部冷冻 TPU 水冷胆与躯干保持最大化热传导接触。',
        zone: '双侧躯干压紧调节带',
      },
      {
        title: '微型变频压缩机制冷主机',
        description:
          '24V 微型压缩机核心，3 分钟内即可稳定输出强劲循环冷水。',
        zone: '60–300W 微型变频压缩制冷核心',
      },
      {
        title: '内置 TPU 液冷胆与保温回路',
        description:
          '闭环液冷网络配合 3D 透气内衬，高效导冷同时防止体表冷凝水积聚。',
        zone: '耐压闭环 TPU 液冷内胆',
      },
    ],
    bentoCards: [
      {
        title: '24V 微型变频制冷压缩机核心',
        subtitle: '60–300W 主动制冷输出 • 110W 额定功率',
        description:
          '不同于普通半导体制冷器，LC Frost-ACC/W 采用真正的蒸气压缩式微型变频循环，最高可迸发 300W 制冷功率——即便在 50°C 以上铸造车间热辐射下依然维持强劲冷水循环。',
        materialTag: '60–300W 微型变频压缩机',
      },
      {
        title: '高耐久耐压 TPU 液冷内胆',
        subtitle: '100% 防漏流体回路与 3D 防冷凝内衬',
        description:
          '高密度蛇形 TPU 液冷胆最大化躯干接触面积，内层 3D 透气网布屏障有效隔绝皮肤湿冷粘腻感。',
        materialTag: '耐压 TPU 液冷循环内胆',
      },
      {
        title: '防静电阻燃外壳与重型中央拉链',
        subtitle: '< 4kg 均衡人体工学，从容应对受限空间',
        description:
          '工业灰防静电阻燃外层面料搭配加固黑色包边与双侧收紧织带，全面抵御火花、熔渣与重度磨损。',
        materialTag: '防静电阻燃外壳 • 整重 < 4kg',
      },
    ],
    deployment: {
      title: '极端冶金铸造车间、消防救援与受限空间作业',
      locationBadge: '高炉出铁场与熔融金属浇铸跨 • >45°C 环境温度',
      narrative:
        '在高炉浇铸车间、无空调重型工程机械驾驶室及深层受限空间救援任务中，极高的辐射热负荷会让常规降温背心迅速失效。LC Frost-ACC/W 在不足 4kg 的穿戴体积内输出 60–300W 主动蒸气压缩制冷，3 分钟内稳定冷水循环，在地球上最严酷的工业热害现场守护作业人员核心体温。',
      environmentalMetrics: [
        { label: '主动压缩制冷范围', value: '60–300W（24V / 110W）' },
        { label: '冷水回路稳定时间', value: '3 分钟' },
        { label: '系统全套净重', value: '< 4.0kg' },
      ],
      industries: [
        '冶金熔炼与铸造车间',
        '消防灭火与防化救援',
        '受限空间与隧道掘进工程',
        '无空调重型特种装备驾驶室',
      ],
    },
    specifications: [
      { parameter: '产品型号', value: 'LC Frost-ACC/W' },
      { parameter: '产品颜色', value: '工业灰配黑色饰边' },
      { parameter: '适用人群', value: '极端高温环境作业人员（冶金、铸造、消防、特种重型设备驾驶室）' },
      { parameter: '制冷量', value: '60–300W' },
      { parameter: '额定电压', value: '24V' },
      { parameter: '额定功率', value: '110W' },
      { parameter: '降温响应时间', value: '3 分钟内达到稳定状态' },
      { parameter: '电池续航', value: '单块电池 1–2 小时（双电系统连续运行 2–4 小时）' },
      { parameter: '外层面料', value: '防静电阻燃面料' },
      { parameter: '内衬材质', value: '高耐久 TPU 液冷循环内胆' },
      { parameter: '尺码规格', value: '均码（可调节）' },
      { parameter: '产品净重', value: '< 4kg' },
      { parameter: '包装尺寸', value: '40 × 30 × 10cm' },
      { parameter: '质保政策', value: '1 年官方工业级质保' },
    ],
    quickCompare: {
      mechanism: '主动微型变频压缩机 + 闭环液冷循环',
      capacityOrTemp: '60–300W 主动压缩制冷（3 分钟稳定）',
      powerOrCycle: '24V / 110W • 2–4h 连续运行',
      netWeight: '< 4kg',
      primaryApplication: '极端冶金、铸造车间、消防救援、受限空间',
    },
  },
};
