import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useApp } from '../context/AppContext';

interface FooterProps {
  onOpenInquiry: (defaultModel?: string, mode?: 'quote' | 'datasheet') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const { t, products, brand } = useApp();

  return (
    <footer className="bg-[#0B0A0A] border-t border-white/[0.07] text-stone-300 transition-colors">
      {/* Global CTA Stage */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="relative overflow-hidden rounded-3xl bg-metallic-banner border border-white/[0.08] p-8 sm:p-12 lg:p-16 shadow-card-luxury">
          {/* 3200K Warm Amber Rim Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 80% 0%, rgba(245, 158, 11, 0.14), rgba(217, 119, 6, 0.04) 55%, transparent 75%)',
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/25 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.footer.ctaBadge}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {t.footer.ctaTitle}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed">
                {t.footer.ctaDescPrefix ? `${t.footer.ctaDescPrefix} ` : ''}
                <strong className="text-white font-medium">{brand.legalEntity}</strong> {t.footer.ctaDescMiddle}{' '}
                <strong className="text-stone-200 font-medium">{brand.fullAffiliation}</strong>{' '}
                {t.footer.ctaDescSuffix}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
              <a
                href={`tel:${brand.hotlineRaw}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#181716] hover:bg-[#22201E] border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{brand.hotlineDisplay}</span>
              </a>

              <a
                href={`mailto:${brand.email}?subject=LONGGUARD%20Enterprise%20Hardware%20Inquiry`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-7 py-3.5 text-sm transition-all shadow-lg shadow-amber-900/25"
              >
                <Mail className="w-4 h-4" />
                <span>{t.footer.emailEngineeringBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Four-Column Enterprise Footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-14 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block focus:outline-none">
              <BrandLogo showAffiliation={false} size="lg" />
            </Link>

            <div className="rounded-xl bg-[#121110] border border-white/[0.06] p-4 space-y-1.5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
                {t.footer.pedigreeBadge}
              </div>
              <div className="text-sm font-medium text-white">
                {brand.rdCenter}
              </div>
              <div className="text-xs text-stone-400">
                {brand.institute}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {t.footer.aboutPrefix} <strong className="text-stone-200">{brand.legalEntity}</strong>.{' '}
              {t.footer.aboutSuffix}
            </p>
          </div>

          {/* Col 2: Hardware Portfolio (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              {t.footer.portfolioHeader}
            </h3>
            <ul className="space-y-2.5">
              {products.map((prod) => (
                <li key={prod.id}>
                  <Link
                    to={prod.route}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    <span className="font-semibold text-white group-hover:text-amber-400">
                      {prod.modelCode}
                    </span>
                    <span className="text-stone-500">—</span>
                    <span className="truncate max-w-[170px]">{prod.shortTitle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industrial Applications (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              {t.footer.sectorsHeader}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li>
                <Link to="/products/power-ua" className="hover:text-white transition-colors">
                  {t.footer.sectors.automotive}
                </Link>
              </li>
              <li>
                <Link to="/products/flex-w" className="hover:text-white transition-colors">
                  {t.footer.sectors.logistics}
                </Link>
              </li>
              <li>
                <Link to="/products/frost-pcm-g" className="hover:text-white transition-colors">
                  {t.footer.sectors.petrochemical}
                </Link>
              </li>
              <li>
                <Link to="/products/frost-tec-w" className="hover:text-white transition-colors">
                  {t.footer.sectors.powerGrid}
                </Link>
              </li>
              <li>
                <Link to="/products/gloves-01" className="hover:text-white transition-colors">
                  {t.footer.sectors.ergonomic}
                </Link>
              </li>
              <li>
                <Link to="/products/frost-pcm-a" className="hover:text-white transition-colors">
                  {t.footer.sectors.cleanrooms}
                </Link>
              </li>
              <li>
                <Link to="/products/frost-acc-w" className="hover:text-white transition-colors">
                  {t.footer.sectors.metallurgy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Factory Contact & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              {t.footer.contactComplianceHeader}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <span className="leading-relaxed text-stone-300">{brand.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href={`tel:${brand.hotlineRaw}`}
                  className="hover:text-amber-400 transition-colors font-medium text-white"
                >
                  {brand.hotlineDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-amber-400 transition-colors font-medium text-white"
                >
                  {brand.email}
                </a>
              </div>
            </div>

            {/* Official Warranty Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 px-3.5 py-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-amber-300">
                  {brand.warrantyBadge}
                </span>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => onOpenInquiry(undefined, 'datasheet')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 text-start"
              >
                {t.footer.downloadCatalogLink}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/[0.05] bg-[#080707] px-6 lg:px-12 py-6 transition-colors">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>{brand.copyright}</p>
          <p className="text-stone-400">
            {brand.fullAffiliation}
          </p>
        </div>
      </div>
    </footer>
  );
};
