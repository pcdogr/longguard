import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Flame,
  Activity,
  Download,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Award,
  Layers,
  FileText,
} from 'lucide-react';
import { HERO_COMPOSITE_ASSET } from '../data/products';
import { StudioVisualFrame } from '../components/StudioVisualFrame';
import { useApp } from '../context/AppContext';

interface HomePageProps {
  onOpenInquiry: (defaultModel?: string, mode?: 'quote' | 'datasheet') => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry }) => {
  const { t, products, brand } = useApp();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'exoskeletons' | 'sensing' | 'thermal'>('all');

  const filteredProducts =
    activeCategoryFilter === 'all'
      ? products
      : products.filter((p) => p.pillarId === activeCategoryFilter);

  return (
    <div className="min-h-screen bg-[#0B0A0A] text-white transition-colors">
      {/* SECTION 1: CINEMATIC HERO STAGE */}
      <section className="relative overflow-hidden border-b border-white/[0.06] pt-10 pb-20 lg:pt-16 lg:pb-28">
        {/* 3200K Warm Amber Ambient Glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(217, 119, 6, 0.12), rgba(245, 158, 11, 0.03) 50%, transparent 75%)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Hero Editorial Copy (6 cols) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-6 space-y-6"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#121110] border border-amber-500/30 px-4 py-1.5 text-xs font-medium text-amber-300"
              >
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
                <span>{brand.fullAffiliation}</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08]"
              >
                {t.home.heroTitleLine1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600">
                  {t.home.heroTitleHighlight}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl"
              >
                {t.home.heroDescPrefix} <strong className="text-white font-semibold">{brand.legalEntity}</strong>{' '}
                {t.home.heroDescMiddle}{' '}
                <strong className="text-stone-200 font-semibold">{brand.rdCenter}</strong>.{' '}
                {t.home.heroDescSuffix}
              </motion.p>

              {/* Hero CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenInquiry(undefined, 'quote')}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-7 py-3.5 text-sm sm:text-base transition-all shadow-lg shadow-amber-900/20"
                >
                  <span>{t.home.requestPilotBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={brand.masterCatalogPdfPath}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#181716] hover:bg-[#121110] hover:border-amber-500/40 px-6 py-3.5 text-sm sm:text-base font-medium text-stone-200 transition-all"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>{t.home.downloadMasterCatalogBtn}</span>
                </a>
              </motion.div>

              {/* Hero Authority Metrics */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]"
              >
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-light tracking-tight text-white">
                    8 <span className="text-amber-400 text-lg sm:text-xl font-medium">{t.home.metric1Unit}</span>
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    {t.home.metric1Desc}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-light tracking-tight text-white">
                    30<span className="text-amber-400 text-xl font-medium">kg</span> / 300<span className="text-amber-400 text-xl font-medium">W</span>
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    {t.home.metric2Desc}
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-light tracking-tight text-white">
                    GBZ <span className="text-amber-400 text-lg sm:text-xl font-medium">336-2025</span>
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    {t.home.metric3Desc}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Studio Composite Stage (6 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="lg:col-span-6"
            >
              <StudioVisualFrame
                src={HERO_COMPOSITE_ASSET.path}
                alt={HERO_COMPOSITE_ASSET.title}
                aspectRatio="16:9"
                fitMode="cover"
                badgeText={t.home.heroBadgeText}
                docIdBadge="PORTFOLIO 2026"
                caption={t.home.heroCaption}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THREE TECHNOLOGICAL PILLARS */}
      <section className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#121110]/60">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="max-w-3xl mb-12"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
              {t.home.pillarsEyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.home.pillarsTitle}
            </h2>
            <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
              {t.home.pillarsDesc}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Pillar 1: Bionic Exoskeleton Series */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-[#181716] border border-white/[0.07] hover:border-amber-500/35 p-8 flex flex-col justify-between shadow-card-luxury relative overflow-hidden group transition-colors"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                  {t.home.pillar1Tag}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mt-1.5">
                  {t.home.pillar1Title}
                </h3>
                <p className="text-sm text-stone-300 mt-3 leading-relaxed">
                  {t.home.pillar1Desc}
                </p>
                <ul className="mt-5 space-y-2 text-xs text-stone-300">
                  <li className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                    <Link to="/products/power-ua" className="font-semibold text-white hover:text-amber-400">
                      {t.home.pillar1Item1}
                    </Link>
                    <span className="text-amber-400 font-medium">8kg • &lt; 2kg</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5">
                    <Link to="/products/flex-w" className="font-semibold text-white hover:text-amber-400">
                      {t.home.pillar1Item2}
                    </Link>
                    <span className="text-amber-400 font-medium">0–30kg • ≤ 1kg</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  to="/products/power-ua"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>{t.home.pillar1Link}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-stone-500">{t.home.pillar1Badge}</span>
              </div>
            </motion.div>

            {/* Pillar 2: Smart Ergonomic Sensing Series */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-[#181716] border border-white/[0.07] hover:border-amber-500/35 p-8 flex flex-col justify-between shadow-card-luxury relative overflow-hidden group transition-colors"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                  {t.home.pillar2Tag}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mt-1.5">
                  {t.home.pillar2Title}
                </h3>
                <p className="text-sm text-stone-300 mt-3 leading-relaxed">
                  {t.home.pillar2Desc}
                </p>
                <ul className="mt-5 space-y-2 text-xs text-stone-300">
                  <li className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                    <Link to="/products/gloves-01" className="font-semibold text-white hover:text-amber-400">
                      {t.home.pillar2Item1}
                    </Link>
                    <span className="text-amber-400 font-medium">≤ ±0.1° • 200g</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5">
                    <span className="text-stone-400">{t.home.pillar2SubItem}</span>
                    <span className="text-stone-300 font-medium">{t.home.pillar2SubVal}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  to="/products/gloves-01"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>{t.home.pillar2Link}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-stone-500">{t.home.pillar2Badge}</span>
              </div>
            </motion.div>

            {/* Pillar 3: Personal Thermal Management Series */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-[#181716] border border-white/[0.07] hover:border-amber-500/35 p-8 flex flex-col justify-between shadow-card-luxury relative overflow-hidden group transition-colors"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-6">
                  <Flame className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                  {t.home.pillar3Tag}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mt-1.5">
                  {t.home.pillar3Title}
                </h3>
                <p className="text-sm text-stone-300 mt-3 leading-relaxed">
                  {t.home.pillar3Desc}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  <Link
                    to="/products/frost-pcm-a"
                    className="rounded-lg bg-[#121110] px-3 py-2 border border-white/[0.05] hover:border-amber-500/40 transition-colors"
                  >
                    <div className="font-semibold text-white">Frost-PCM/A</div>
                    <div className="text-[11px] text-amber-400">{t.home.pillar3Sub1}</div>
                  </Link>
                  <Link
                    to="/products/frost-pcm-g"
                    className="rounded-lg bg-[#121110] px-3 py-2 border border-white/[0.05] hover:border-amber-500/40 transition-colors"
                  >
                    <div className="font-semibold text-white">Frost-PCM/G</div>
                    <div className="text-[11px] text-amber-400">{t.home.pillar3Sub2}</div>
                  </Link>
                  <Link
                    to="/products/frost-tec-w"
                    className="rounded-lg bg-[#121110] px-3 py-2 border border-white/[0.05] hover:border-amber-500/40 transition-colors"
                  >
                    <div className="font-semibold text-white">Frost-TEC/W</div>
                    <div className="text-[11px] text-amber-400">{t.home.pillar3Sub3}</div>
                  </Link>
                  <Link
                    to="/products/frost-tec-d"
                    className="rounded-lg bg-[#121110] px-3 py-2 border border-white/[0.05] hover:border-amber-500/40 transition-colors"
                  >
                    <div className="font-semibold text-white">Frost-TEC/D</div>
                    <div className="text-[11px] text-amber-400">{t.home.pillar3Sub4}</div>
                  </Link>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  to="/products/frost-acc-w"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>{t.home.pillar3Link}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-stone-500">{t.home.pillar3Badge}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: 8-PRODUCT FLAGSHIP VISUAL GRID */}
      <section id="portfolio" className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
                {t.home.portfolioEyebrow}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {t.home.portfolioTitle}
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: t.home.filterAll },
                { id: 'exoskeletons', label: t.home.filterExoskeletons },
                { id: 'sensing', label: t.home.filterSensing },
                { id: 'thermal', label: t.home.filterThermal },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategoryFilter(tab.id as typeof activeCategoryFilter)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeCategoryFilter === tab.id
                      ? 'bg-[#F59E0B] text-black font-semibold shadow-lg shadow-amber-900/20'
                      : 'bg-[#181716] text-stone-300 hover:text-white border border-white/[0.07]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl bg-[#181716] border border-white/[0.07] hover:border-amber-500/40 overflow-hidden flex flex-col justify-between transition-colors duration-300 shadow-card-luxury"
                >
                  <div>
                    {/* Product Studio Thumbnail — Non-Cropped Full Silhouette in Studio Lightbox */}
                    <Link
                      to={product.route}
                      className="studio-photo-stage block relative overflow-hidden aspect-[4/4] bg-[#0B0A0A] p-3"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 z-10"
                        style={{
                          background:
                            'radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.14), transparent 72%)',
                        }}
                      />
                      <img
                        src={product.studioImage}
                        alt={`${product.modelCode} - ${product.name}`}
                        loading="lazy"
                        className="w-full h-full object-contain object-center relative z-10 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 z-10" />

                      <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-[#121110]/90 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] font-semibold text-amber-400">
                        <span>{product.indexNumber}</span>
                        <span className="text-stone-500">•</span>
                        <span>{product.modelCode}</span>
                      </div>

                      <div className="absolute bottom-3 right-3 z-20 rounded-full bg-[#121110]/90 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white">
                        {product.metrics[0].value}
                      </div>
                    </Link>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                        {product.subCategory}
                      </div>
                      <Link to={product.route}>
                        <h3 className="font-display text-xl font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-stone-300 mt-2.5 line-clamp-3 leading-relaxed">
                        {product.overview}
                      </p>

                      {/* Mini Metric Strip */}
                      <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/[0.06]">
                        {product.metrics.slice(0, 2).map((m, i) => (
                          <div key={i} className="rounded-xl bg-[#121110] p-2.5 border border-white/[0.04]">
                            <div className="font-display text-sm font-bold text-white">{m.value}</div>
                            <div className="text-[10px] text-stone-400 truncate mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Link + Dedicated Datasheet Download */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-2">
                    <Link
                      to={product.route}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:text-amber-300"
                    >
                      <span>{t.home.exploreModel} {product.modelCode}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <div className="flex items-center gap-2.5">
                      <a
                        href={product.datasheetPath}
                        download
                        title={`${product.modelCode} PDF`}
                        className="inline-flex items-center gap-1 rounded-full bg-[#121110] hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/40 px-2.5 py-1 text-[11px] font-medium text-stone-300 hover:text-amber-400 transition-colors"
                      >
                        <FileText className="w-3 h-3 text-amber-400" />
                        <span>PDF</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => onOpenInquiry(product.modelCode, 'quote')}
                        className="text-[11px] font-medium text-stone-400 hover:text-white transition-colors"
                      >
                        {t.home.inquireBtn}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: MASTER COMPARISON MATRIX (#specifications) */}
      <section id="specifications" className="py-20 lg:py-28 border-b border-white/[0.06] bg-[#121110]/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
                {t.home.matrixEyebrow}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {t.home.matrixTitle}
              </h2>
              <p className="text-sm sm:text-base text-stone-300 mt-2 max-w-2xl">
                {t.home.matrixDesc}
              </p>
            </div>
            <a
              href={brand.masterCatalogPdfPath}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[#181716] hover:bg-[#22201E] border border-white/15 hover:border-amber-500/40 px-5 py-2.5 text-xs sm:text-sm font-medium text-stone-200 transition-colors self-start lg:self-auto"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>{t.home.download17PageBtn}</span>
            </a>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#181716] shadow-card-luxury">
            <table className="w-full text-start border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#121110] text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                  <th className="py-4 px-5 text-start">{t.home.colModelCode}</th>
                  <th className="py-4 px-5 text-start">{t.home.colProductName}</th>
                  <th className="py-4 px-5 text-start">{t.home.colMechanism}</th>
                  <th className="py-4 px-5 text-start">{t.home.colCapacity}</th>
                  <th className="py-4 px-5 text-start">{t.home.colPower}</th>
                  <th className="py-4 px-5 text-start">{t.home.colNetWeight}</th>
                  <th className="py-4 px-5 text-start">{t.home.colApplication}</th>
                  <th className="py-4 px-5 text-end">{t.home.colDatasheet}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                {products.map((prod) => (
                  <tr key={prod.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-5 font-bold text-amber-400 whitespace-nowrap">
                      <Link to={prod.route} className="hover:underline">
                        {prod.modelCode}
                      </Link>
                      {prod.catalogSpecCode && (
                        <span className="block text-[10px] font-normal text-stone-400">
                          {t.home.specPrefix} {prod.catalogSpecCode}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 font-medium text-white">
                      <Link to={prod.route} className="hover:text-amber-400 transition-colors">
                        {prod.name}
                      </Link>
                    </td>
                    <td className="py-4 px-5 text-stone-300">{prod.quickCompare.mechanism}</td>
                    <td className="py-4 px-5 font-semibold text-white">
                      {prod.quickCompare.capacityOrTemp}
                    </td>
                    <td className="py-4 px-5 text-stone-300">{prod.quickCompare.powerOrCycle}</td>
                    <td className="py-4 px-5 font-medium text-amber-400 whitespace-nowrap">
                      {prod.quickCompare.netWeight}
                    </td>
                    <td className="py-4 px-5 text-stone-400">{prod.quickCompare.primaryApplication}</td>
                    <td className="py-4 px-5 text-end whitespace-nowrap">
                      <div className="inline-flex items-center justify-end gap-2">
                        <a
                          href={prod.datasheetPath}
                          download
                          title={`${prod.modelCode} (${prod.datasheetDocId})`}
                          className="inline-flex items-center gap-1 rounded-full bg-[#121110] hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-stone-300 hover:text-amber-400 font-medium px-2.5 py-1.5 text-xs transition-all"
                        >
                          <Download className="w-3 h-3 text-amber-400" />
                          <span>PDF</span>
                        </a>
                        <Link
                          to={prod.route}
                          className="inline-flex items-center gap-1 rounded-full bg-white/[0.05] hover:bg-[#F59E0B] text-stone-200 hover:text-black font-semibold px-3 py-1.5 text-xs transition-all"
                        >
                          <span>{t.home.fullSpecsBtn}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: R&D PEDIGREE & INSTITUTIONAL CREDENTIALS */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-[#181716] border border-white/[0.08] p-8 sm:p-12 shadow-card-luxury"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/25 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                <Award className="w-3.5 h-3.5" />
                <span>{t.home.rdEyebrow}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {brand.rdCenter} — {brand.institute}
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                {t.home.rdDescPrefix} <strong className="text-white">{brand.legalEntity}</strong>{' '}
                {t.home.rdDescSuffix}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-[#121110] border border-white/[0.06] p-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">{t.home.warrantyCardTitle}</div>
                    <p className="text-xs text-stone-400 mt-1">
                      {t.home.warrantyCardDesc}
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#121110] border border-white/[0.06] p-4 flex items-start gap-3">
                  <Layers className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">{t.home.oemCardTitle}</div>
                    <p className="text-xs text-stone-400 mt-1">
                      {t.home.oemCardDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-[#121110] border border-white/[0.08] p-6 sm:p-8 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                {t.home.hqHeader}
              </div>
              <div className="space-y-3.5 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 block">{t.home.labelLegalEntity}</span>
                    <span className="font-semibold text-white">{brand.legalEntity}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 block">{t.home.labelAddress}</span>
                    <span className="text-stone-200">{brand.address}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 block">{t.home.labelHotline}</span>
                    <a href={`tel:${brand.hotlineRaw}`} className="font-semibold text-white hover:text-amber-400">
                      {brand.hotlineDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-400 block">{t.home.labelEmail}</span>
                    <a href={`mailto:${brand.email}`} className="font-semibold text-white hover:text-amber-400">
                      {brand.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
