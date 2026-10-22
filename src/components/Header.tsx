import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Download,
  Menu,
  X,
  ArrowUpRight,
  Shield,
  Globe,
  Sun,
  Moon,
  Check,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useApp } from '../context/AppContext';
import { SUPPORTED_LANGUAGES } from '../i18n/types';

interface HeaderProps {
  onOpenInquiry: (defaultModel?: string, mode?: 'quote' | 'datasheet') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const { theme, toggleTheme, lang, setLang, t, products } = useApp();
  const [openDropdown, setOpenDropdown] = useState<'exoskeletons' | 'thermal' | 'lang' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const exoskeletonProducts = products.filter((p) => p.pillarId === 'exoskeletons');
  const thermalProducts = products.filter((p) => p.pillarId === 'thermal');
  const currentProduct = products.find((p) => p.route === location.pathname);
  const currentLangOption = SUPPORTED_LANGUAGES.find((l) => l.code === lang) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleTechSpecsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('specifications');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/#specifications');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0A0A]/85 border-b border-white/[0.06] px-4 sm:px-6 lg:px-10 py-3.5 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3">
        {/* Left: BrandLogo linking to / */}
        <Link to="/" className="focus:outline-none flex-shrink-0">
          <BrandLogo showAffiliation={true} />
        </Link>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
          <Link
            to="/"
            className={`px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
              location.pathname === '/' && !location.hash
                ? 'text-white bg-white/[0.06]'
                : 'text-stone-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            {t.header.overview}
          </Link>

          {/* Exoskeletons Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('exoskeletons')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() =>
                setOpenDropdown((prev) => (prev === 'exoskeletons' ? null : 'exoskeletons'))
              }
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                location.pathname.includes('/power-ua') || location.pathname.includes('/flex-w')
                  ? 'text-amber-400 bg-amber-500/10'
                  : 'text-stone-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span>{t.header.exoskeletons}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'exoskeletons' ? 'rotate-180 text-amber-400' : ''
                }`}
              />
            </button>

            {openDropdown === 'exoskeletons' && (
              <div className="absolute start-0 top-full pt-2 w-[380px] z-50">
                <div className="rounded-2xl bg-[#121110]/95 backdrop-blur-2xl border border-white/10 p-3 shadow-2xl">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 border-b border-white/[0.06] mb-2">
                    {t.header.bionicSeriesHeader}
                  </div>
                  <div className="space-y-1">
                    {exoskeletonProducts.map((prod) => (
                      <Link
                        key={prod.id}
                        to={prod.route}
                        className="flex items-start justify-between gap-3 rounded-xl p-3 hover:bg-[#181716] border border-transparent hover:border-white/[0.07] transition-all group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                              {prod.modelCode}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-medium">
                              {prod.metrics[0].value}
                            </span>
                          </div>
                          <p className="text-xs text-stone-300 mt-0.5">{prod.name}</p>
                          <p className="text-[11px] text-stone-400 mt-0.5">{prod.subCategory}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Smart Sensing Direct Link */}
          <Link
            to="/products/gloves-01"
            className={`px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-colors inline-flex items-center gap-1.5 whitespace-nowrap ${
              location.pathname === '/products/gloves-01'
                ? 'text-amber-400 bg-amber-500/10'
                : 'text-stone-300 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <span>{t.header.smartSensing}</span>
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/[0.06] text-stone-300">
              LC Gloves-01
            </span>
          </Link>

          {/* Thermal Vests Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('thermal')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown((prev) => (prev === 'thermal' ? null : 'thermal'))}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                location.pathname.includes('/frost-')
                  ? 'text-amber-400 bg-amber-500/10'
                  : 'text-stone-300 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span>{t.header.thermalVests}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'thermal' ? 'rotate-180 text-amber-400' : ''
                }`}
              />
            </button>

            {openDropdown === 'thermal' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[440px] z-50">
                <div className="rounded-2xl bg-[#121110]/95 backdrop-blur-2xl border border-white/10 p-3 shadow-2xl">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 border-b border-white/[0.06] mb-2">
                    {t.header.thermalSeriesHeader}
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {thermalProducts.map((prod) => (
                      <Link
                        key={prod.id}
                        to={prod.route}
                        className="flex items-start justify-between gap-3 rounded-xl p-2.5 hover:bg-[#181716] border border-transparent hover:border-white/[0.07] transition-all group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                              {prod.modelCode}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-medium">
                              {prod.metrics[0].value}
                            </span>
                          </div>
                          <p className="text-xs text-stone-300 mt-0.5">{prod.name}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 flex-shrink-0 mt-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tech Specs */}
          <a
            href="/#specifications"
            onClick={handleTechSpecsClick}
            className="px-3 py-2 rounded-full text-xs xl:text-sm font-medium text-stone-300 hover:text-white hover:bg-white/[0.04] transition-colors whitespace-nowrap"
          >
            {t.header.techSpecs}
          </a>
        </nav>

        {/* Right Action Group: Language Switcher + Theme Switcher + Datasheet + Quote */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-2.5">
          {/* 10-Language Selector Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('lang')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown((prev) => (prev === 'lang' ? null : 'lang'))}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] px-3 py-2 text-xs font-medium text-stone-200 transition-all"
              aria-label={t.header.languageLabel}
              title={t.header.languageLabel}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentLangOption.nativeName}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  openDropdown === 'lang' ? 'rotate-180 text-amber-400' : ''
                }`}
              />
            </button>

            {openDropdown === 'lang' && (
              <div className="absolute end-0 top-full pt-2 w-[230px] z-50">
                <div className="rounded-2xl bg-[#121110]/95 backdrop-blur-2xl border border-white/10 p-2 shadow-2xl max-h-[380px] overflow-y-auto">
                  <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 border-b border-white/[0.06] mb-1.5">
                    {t.header.languageLabel} (10)
                  </div>
                  <div className="space-y-0.5">
                    {SUPPORTED_LANGUAGES.map((item) => {
                      const active = item.code === lang;
                      return (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => {
                            setLang(item.code);
                            setOpenDropdown(null);
                          }}
                          className={`w-full flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs transition-colors ${
                            active
                              ? 'bg-amber-500/15 text-amber-400 font-semibold'
                              : 'text-stone-300 hover:bg-[#181716] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-5 rounded bg-white/[0.06] text-[10px] font-bold text-stone-300">
                              {item.shortBadge}
                            </span>
                            <span>{item.nativeName}</span>
                          </div>
                          {active && <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Theme Switcher Button (Bright Daylight Default / Night Studio Optional) */}
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'light' ? t.header.themeDark : t.header.themeLight}
            aria-label={theme === 'light' ? t.header.themeDark : t.header.themeLight}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-stone-200 transition-all"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-amber-400" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Datasheet PDF Button */}
          <button
            type="button"
            onClick={() => onOpenInquiry(currentProduct?.modelCode, 'datasheet')}
            className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.02] hover:bg-white/[0.07] hover:border-white/25 px-3.5 py-2 text-xs font-medium text-stone-200 transition-all whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentProduct ? `${currentProduct.modelCode} PDF` : t.header.datasheetBtn}</span>
          </button>

          {/* Request a Quote Button */}
          <button
            type="button"
            onClick={() => onOpenInquiry(currentProduct?.modelCode, 'quote')}
            className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] text-black font-semibold px-4 xl:px-5 py-2 text-xs xl:text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-900/20 whitespace-nowrap"
          >
            <span>{t.header.requestQuoteBtn}</span>
          </button>
        </div>

        {/* Mobile Controls (Theme + Language + Menu Trigger) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="sm:hidden rounded-xl border border-white/10 bg-[#181716] p-2.5 text-stone-200"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-amber-400" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-xl border border-white/10 bg-[#181716] p-2.5 text-stone-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 rounded-2xl bg-[#121110] border border-white/10 p-5 space-y-5 shadow-2xl">
          {/* Mobile Language Selector Strip */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 px-1 mb-2 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.header.languageLabel}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
              {SUPPORTED_LANGUAGES.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLang(item.code)}
                  className={`px-2.5 py-2 rounded-xl text-xs font-medium text-start flex items-center justify-between ${
                    lang === item.code
                      ? 'bg-[#F59E0B] text-black font-semibold'
                      : 'bg-[#181716] text-stone-300 border border-white/[0.06]'
                  }`}
                >
                  <span className="truncate">{item.nativeName}</span>
                  <span className="text-[10px] opacity-75 ms-1">{item.shortBadge}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 px-2 mb-2">
              {t.header.all8PagesHeader}
            </div>
            {products.map((prod) => (
              <Link
                key={prod.id}
                to={prod.route}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-[#181716] text-sm"
              >
                <div>
                  <span className="font-semibold text-white">{prod.modelCode}</span>
                  <span className="text-stone-400 ms-2 text-xs">{prod.name}</span>
                </div>
                <span className="text-xs text-amber-400 font-medium">{prod.metrics[0].value}</span>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry(undefined, 'datasheet');
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm font-medium text-stone-200"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>{t.header.datasheetBtn}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry(undefined, 'quote');
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] text-black font-semibold py-2.5 text-sm"
            >
              <Shield className="w-4 h-4" />
              <span>{t.header.requestQuoteBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
