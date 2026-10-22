import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  ShieldCheck,
  Phone,
  Mail,
  Sparkles,
  Layers,
  MapPin,
  ChevronRight,
  FileText,
  ExternalLink,
  Eye,
  X,
} from 'lucide-react';
import { TechnicalSpecItem } from '../data/products';
import { StudioVisualFrame } from '../components/StudioVisualFrame';
import { useApp } from '../context/AppContext';

interface ProductPageProps {
  onOpenInquiry: (defaultModel?: string, mode?: 'quote' | 'datasheet') => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export const ProductPage: React.FC<ProductPageProps> = ({ onOpenInquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const { t, products, brand } = useApp();
  const product = products.find((p) => p.slug === slug);

  const [activeHotspotId, setActiveHotspotId] = useState<number>(1);
  const [pdfPreviewOpen, setPdfPreviewOpen] = useState<boolean>(false);

  useEffect(() => {
    setActiveHotspotId(1);
    setPdfPreviewOpen(false);
  }, [slug]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = products.findIndex((p) => p.id === product.id);
  const prevProduct = products[(currentIndex - 1 + products.length) % products.length];
  const nextProduct = products[(currentIndex + 1) % products.length];

  const heroBento = product.bentoCards.find((b) => b.isHeroBento) || product.bentoCards[0];
  const supportingBentos = product.bentoCards.filter((b) => b.id !== heroBento.id);
  const activeHotspot = product.hotspots.find((h) => h.id === activeHotspotId) || product.hotspots[0];

  const specGroups: TechnicalSpecItem['group'][] = [
    'Identity & Compliance',
    'Performance & Mechanics',
    'Materials & Ergonomics',
    'Dimensions & Warranty',
  ];

  return (
    <div className="min-h-screen bg-[#0B0A0A] text-white transition-colors">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-white/[0.06] bg-[#121110]/70 px-6 lg:px-12 py-3">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.product.breadcrumbOverview}</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
            <span className="text-stone-300">{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
            <span className="font-semibold text-amber-400">{product.modelCode}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-stone-500">
              {t.product.flagshipOf} {product.indexNumber} / 08 • {product.datasheetDocId}
            </span>
            <span className="text-stone-500">|</span>
            <Link
              to={nextProduct.route}
              className="text-stone-300 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <span>{t.product.nextLabel} {nextProduct.modelCode}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================================
          STAGE 1 — THE HERO STAGE (Cinematic Product Stage)
      ====================================================================== */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-white/[0.06]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 65% 25%, rgba(245, 158, 11, 0.12), rgba(217, 119, 6, 0.03) 55%, transparent 75%)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy Column (6 cols) */}
            <motion.div
              key={`hero-copy-${product.id}`}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-6 space-y-6"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-400">
                  {product.modelCode}
                </span>
                {product.catalogSpecCode && (
                  <span className="inline-flex items-center rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-xs font-medium text-stone-300">
                    {t.product.specCodeLabel} {product.catalogSpecCode}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full bg-[#181716] border border-white/[0.08] px-3 py-1 text-xs text-stone-300">
                  {product.category}
                </span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-stone-400 mb-2">
                  {product.name} • {product.shortTitle}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                  {product.headline}
                </h1>
              </motion.div>

              <motion.p variants={fadeUp} className="text-base sm:text-lg text-stone-300 leading-relaxed">
                {product.overview}
              </motion.p>

              {/* Action Buttons: Pilot Trial + Direct Product PDF Datasheet Download + Interactive Preview */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenInquiry(product.modelCode, 'quote')}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-7 py-3.5 text-sm sm:text-base transition-all shadow-lg shadow-amber-900/20"
                >
                  <span>{t.product.requestPilotTrialBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={product.datasheetPath}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#181716] hover:bg-[#121110] hover:border-amber-500/40 px-6 py-3.5 text-sm sm:text-base font-medium text-stone-200 transition-all"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>{product.modelCode} {t.product.downloadDatasheetBtn}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setPdfPreviewOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#181716]/80 hover:bg-[#181716] hover:border-amber-500/35 px-4 py-3.5 text-xs sm:text-sm font-medium text-amber-400 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t.product.previewSpecManualBtn}</span>
                </button>
              </motion.div>

              {/* Institutional Pedigree & Warranty Pill */}
              <motion.div
                variants={fadeUp}
                className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs text-stone-400"
              >
                <div className="flex items-center gap-2 text-stone-200">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{brand.warrantyBadge}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{brand.rdCenter}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Floating Studio Hardware Render (6 cols) */}
            <motion.div
              key={`hero-visual-${product.id}`}
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <StudioVisualFrame
                src={product.studioImage}
                alt={`${product.modelCode} - ${product.name}`}
                aspectRatio={product.studioAspect}
                fitMode="contain"
                badgeText={`${product.modelCode} • ${t.product.studioMasterBadge}`}
                docIdBadge={product.datasheetDocId}
              />

              {/* Optional Secondary Companion Studio Image (e.g. LC Gloves-01 Tablet Telemetry UI) */}
              {product.secondaryStudioImage && (
                <StudioVisualFrame
                  src={product.secondaryStudioImage}
                  alt={`${product.modelCode} Companion Telemetry Suite`}
                  aspectRatio="16:9"
                  fitMode="cover"
                  badgeText={t.product.companionSuiteBadge}
                  caption={product.secondaryStudioCaption}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          STAGE 2 — BIG IMPACT METRICS (Numerical Authority Bar)
      ====================================================================== */}
      <section className="py-14 lg:py-16 border-b border-white/[0.06] bg-[#121110]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            key={`metrics-${product.id}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {product.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="rounded-2xl bg-[#181716] border border-white/[0.07] hover:border-amber-500/35 p-6 sm:p-7 relative overflow-hidden transition-colors shadow-card-luxury"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400 mb-2">
                  {t.product.metricPrefix}{idx + 1}
                </div>
                <div className="font-display text-4xl sm:text-5xl font-light tracking-tight text-white">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-stone-300 mt-2 leading-snug">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          STAGE 3 — BIOMECHANICAL NARRATIVE & INTERACTIVE HOTSPOTS
      ====================================================================== */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="max-w-3xl mb-14"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
              {t.product.stage3Eyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {t.product.stage3Title}
            </h2>
            <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
              {t.product.stage3Desc}
            </p>
          </motion.div>

          {/* 4 Feature Narratives Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {product.features.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="rounded-2xl bg-[#181716] border border-white/[0.07] p-6 space-y-3 shadow-card-luxury"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-xs font-bold text-amber-400">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-white">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 60/40 Interactive Anatomical Hotspot Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-[#121110] border border-white/[0.08] p-6 sm:p-10">
            {/* 60% Visual Diagram with Calibrated Interactive Pins */}
            <div className="lg:col-span-7">
              <StudioVisualFrame
                src={product.studioImage}
                alt={`${product.modelCode} Anatomical Hotspot Diagram`}
                aspectRatio={product.studioAspect}
                fitMode="contain"
                badgeText={`${product.modelCode} • ${t.product.interactiveNodesBadge}`}
                docIdBadge={`${t.product.nodeActivePrefix}${activeHotspot.id}`}
              >
                {product.hotspots.map((spot) => {
                  const isActive = spot.id === activeHotspotId;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => setActiveHotspotId(spot.id)}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-[#F59E0B] text-black scale-125 ring-4 ring-amber-500/30 shadow-lg shadow-amber-500/50'
                          : 'bg-[#121110]/90 text-white border border-amber-400/60 hover:bg-amber-500 hover:text-black'
                      }`}
                      aria-label={`Hotspot ${spot.id}: ${spot.title}`}
                    >
                      {isActive && (
                        <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-400/60 animate-ping" />
                      )}
                      <span className="relative z-10">{spot.id}</span>
                    </button>
                  );
                })}

                {/* Active Hotspot Floating Callout Overlay on Image Bottom */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHotspot.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.22 }}
                    className="absolute bottom-4 inset-x-4 z-20 rounded-2xl bg-[#121110]/92 backdrop-blur-xl border border-amber-500/35 px-4 py-3.5 shadow-2xl"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-black text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {activeHotspot.id}
                      </span>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                          {activeHotspot.zone}
                        </div>
                        <div className="text-sm font-bold text-white">{activeHotspot.title}</div>
                        <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
                          {activeHotspot.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </StudioVisualFrame>
            </div>

            {/* 40% Engineering Breakdown List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 mb-3">
                {t.product.subsystemsHeader} ({product.hotspots.length} {t.product.nodesUnit})
              </div>
              {product.hotspots.map((spot) => {
                const isActive = spot.id === activeHotspotId;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspotId(spot.id)}
                    className={`w-full text-start rounded-2xl p-4 sm:p-5 border transition-all ${
                      isActive
                        ? 'bg-[#181716] border-amber-500/50 shadow-lg shadow-amber-950/15'
                        : 'bg-[#181716]/50 border-white/[0.06] hover:bg-[#181716] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                          isActive
                            ? 'bg-[#F59E0B] text-black'
                            : 'bg-white/[0.07] text-stone-300'
                        }`}
                      >
                        {spot.id}
                      </span>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                          {spot.zone}
                        </div>
                        <h4 className="font-display text-base font-bold text-white mt-0.5">
                          {spot.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed">
                          {spot.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          STAGE 4 — ASYMMETRIC CRAFTSMANSHIP BENTO (Material Science)
      ====================================================================== */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06] bg-[#121110]/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="max-w-3xl mb-14"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
              {t.product.stage4Eyebrow}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {t.product.stage4Title}
            </h2>
            <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
              {t.product.stage4Desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Hero Bento Card (7 cols on desktop) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-7 rounded-3xl bg-[#181716] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-card-luxury"
            >
              <div className="space-y-4 mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/25 px-3 py-1 text-xs font-semibold text-amber-400">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{heroBento.materialTag}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {heroBento.title}
                </h3>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
                  {heroBento.subtitle}
                </div>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {heroBento.description}
                </p>
              </div>

              <StudioVisualFrame
                src={heroBento.imagePath}
                alt={heroBento.title}
                aspectRatio={heroBento.aspectRatio}
                fitMode="cover"
                badgeText={heroBento.materialTag}
              />
            </motion.div>

            {/* Supporting Bento Cards Column (5 cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {supportingBentos.map((card) => (
                <motion.div
                  key={card.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="rounded-3xl bg-[#181716] border border-white/[0.08] p-6 flex flex-col justify-between gap-5 shadow-card-luxury flex-1"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-5">
                      <StudioVisualFrame
                        src={card.imagePath}
                        alt={card.title}
                        aspectRatio={card.aspectRatio}
                        fitMode="cover"
                      />
                    </div>
                    <div className="sm:col-span-7 space-y-2">
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-amber-400">
                        {card.materialTag}
                      </span>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                        {card.title}
                      </h4>
                      <div className="text-xs font-medium text-stone-400">{card.subtitle}</div>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          STAGE 5 — REAL-WORLD INDUSTRIAL DEPLOYMENT
      ====================================================================== */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#181716] border border-amber-500/30 px-3.5 py-1.5 text-xs font-semibold text-amber-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{product.deployment.locationBadge}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {product.deployment.title}
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                {product.deployment.narrative}
              </p>

              {/* Environmental Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {product.deployment.environmentalMetrics.map((em, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-[#181716] border border-white/[0.07] p-4 shadow-card-luxury"
                  >
                    <div className="font-display text-base font-bold text-amber-400">
                      {em.value}
                    </div>
                    <div className="text-xs text-stone-400 mt-1">{em.label}</div>
                  </div>
                ))}
              </div>

              {/* Target Industries */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400 mb-2.5">
                  {t.product.validatedSectorsHeader}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.deployment.industries.map((ind, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#121110] border border-white/10 px-3.5 py-1.5 text-xs font-medium text-stone-200"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <StudioVisualFrame
                src={product.deployment.imagePath}
                alt={product.deployment.title}
                aspectRatio="16:9"
                fitMode="cover"
                badgeText={product.deployment.locationBadge}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          STAGE 6 — COMPLETE TECHNICAL SPECIFICATION TABLE, DEDICATED PRODUCT
          SPECIFICATION MANUAL & PROCUREMENT ACTION
      ====================================================================== */}
      <section className="py-20 lg:py-28 bg-[#121110]/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 Cols: Dedicated Product Datasheet Banner + Complete Unabbreviated Technical Specification Table */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
                  {t.product.stage6Eyebrow} ({product.datasheetDocId})
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {product.modelCode} {t.product.stage6TitleSuffix}
                </h2>
                <p className="text-sm text-stone-400 mt-2">
                  {t.product.stage6DescPrefix} {brand.rdCenter}.
                </p>
              </div>

              {/* Dedicated Product Specification Manual Card (Custom Unified-Style PDF) */}
              <div className="rounded-3xl bg-[#181716] border border-amber-500/35 p-6 sm:p-7 shadow-card-luxury relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
                        <span>{t.product.dedicatedManualBadge}</span>
                        <span>•</span>
                        <span>Doc ID: {product.datasheetDocId}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mt-1">
                        {product.modelCode} — {product.name} {t.product.officialDatasheetSuffix}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed">
                        {t.product.manualCardDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-stretch gap-2.5 flex-shrink-0">
                    <a
                      href={product.datasheetPath}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-5 py-2.5 text-xs sm:text-sm transition-all shadow-md shadow-amber-900/20"
                    >
                      <Download className="w-4 h-4" />
                      <span>{t.product.downloadPdfManualBtn}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setPdfPreviewOpen((prev) => !prev)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#121110] hover:bg-white/[0.06] px-5 py-2.5 text-xs sm:text-sm font-medium text-stone-200 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-amber-400" />
                      <span>{pdfPreviewOpen ? t.product.hideInlinePreviewBtn : t.product.previewPdfInlineBtn}</span>
                    </button>
                  </div>
                </div>

                {/* Inline Interactive PDF Viewer Drawer */}
                <AnimatePresence>
                  {pdfPreviewOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-white/10 overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                          {t.product.inlinePreviewTitle} — {product.datasheetPath.split('/').pop()}
                        </span>
                        <div className="flex items-center gap-3">
                          <a
                            href={product.datasheetPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-amber-400 hover:text-amber-300"
                          >
                            <span>{t.product.openNewTabBtn}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <button
                            type="button"
                            onClick={() => setPdfPreviewOpen(false)}
                            className="rounded-lg bg-white/5 hover:bg-white/10 p-1 text-stone-400 hover:text-white"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="studio-photo-stage rounded-2xl overflow-hidden border border-white/10 bg-[#0B0A0A] h-[640px]">
                        <iframe
                          src={product.datasheetPath}
                          title={`${product.modelCode} Official Engineering Datasheet PDF`}
                          className="w-full h-full"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4 Grouped Specification Tables */}
              <div className="space-y-6">
                {specGroups.map((groupName) => {
                  const groupItems = product.specifications.filter((s) => s.group === groupName);
                  if (groupItems.length === 0) return null;
                  return (
                    <div
                      key={groupName}
                      className="rounded-3xl bg-[#181716] border border-white/[0.08] overflow-hidden shadow-card-luxury"
                    >
                      <div className="bg-[#121110] px-6 py-3.5 border-b border-white/[0.07] flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                          {t.product.specGroups[groupName]}
                        </span>
                        <span className="text-[11px] text-stone-500">{product.modelCode}</span>
                      </div>
                      <dl className="divide-y divide-white/[0.06]">
                        {groupItems.map((spec, idx) => (
                          <div
                            key={idx}
                            className="grid grid-cols-1 sm:grid-cols-12 gap-2 px-6 py-4 hover:bg-white/[0.02] transition-colors"
                          >
                            <dt className="sm:col-span-4 text-xs sm:text-sm font-medium text-stone-400">
                              {spec.parameter}
                            </dt>
                            <dd className="sm:col-span-8 text-xs sm:text-sm font-semibold text-white">
                              {spec.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 4 Cols: Direct Enterprise Inquiry Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl bg-[#181716] border border-amber-500/30 p-7 sm:p-8 shadow-card-luxury space-y-6 relative overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                    {t.product.directFactoryBadge}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mt-3">
                    {t.product.deployInFacilityPrefix} {product.modelCode} {t.product.deployInFacilitySuffix}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                    {t.product.deployCardDesc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenInquiry(product.modelCode, 'quote')}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-6 py-3.5 text-sm transition-all shadow-lg shadow-amber-900/20"
                  >
                    <span>{t.product.requestPilotQuoteFor} {product.modelCode}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={product.datasheetPath}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#121110] hover:bg-white/[0.06] hover:border-amber-500/40 px-6 py-3.5 text-sm font-medium text-stone-200 transition-all"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>{product.modelCode} {t.product.downloadDatasheetBtn}</span>
                  </a>
                </div>

                <div className="pt-5 border-t border-white/[0.08] space-y-3 text-xs text-stone-300">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{t.home.labelHotline}:</span>
                    <a
                      href={`tel:${brand.hotlineRaw}`}
                      className="font-semibold text-white hover:text-amber-400"
                    >
                      {brand.hotlineDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>{t.home.labelEmail}:</span>
                    <a
                      href={`mailto:${brand.email}?subject=${encodeURIComponent(
                        `[${product.modelCode}] Enterprise Inquiry`
                      )}`}
                      className="font-semibold text-white hover:text-amber-400"
                    >
                      {brand.email}
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#121110] border border-white/[0.06] p-4 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-stone-200">
                    {brand.warrantyFull}
                  </span>
                </div>
              </div>

              {/* Prev / Next Hardware Flagship Switcher */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={prevProduct.route}
                  className="rounded-2xl bg-[#181716] border border-white/[0.07] hover:border-amber-500/35 p-4 transition-colors group"
                >
                  <div className="text-[10px] uppercase tracking-wider text-stone-400">
                    {t.product.previousProduct}
                  </div>
                  <div className="font-display text-sm font-bold text-white group-hover:text-amber-400 mt-1">
                    {prevProduct.modelCode}
                  </div>
                  <div className="text-[11px] text-stone-400 truncate">{prevProduct.name}</div>
                </Link>

                <Link
                  to={nextProduct.route}
                  className="rounded-2xl bg-[#181716] border border-white/[0.07] hover:border-amber-500/35 p-4 text-end transition-colors group"
                >
                  <div className="text-[10px] uppercase tracking-wider text-stone-400">
                    {t.product.nextProduct}
                  </div>
                  <div className="font-display text-sm font-bold text-white group-hover:text-amber-400 mt-1">
                    {nextProduct.modelCode}
                  </div>
                  <div className="text-[11px] text-stone-400 truncate">{nextProduct.name}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
