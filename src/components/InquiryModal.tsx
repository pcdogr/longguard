import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Phone, Mail, MapPin, CheckCircle2, Download, Send, FileText, ExternalLink } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultModel?: string;
  mode?: 'quote' | 'datasheet';
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultModel,
  mode = 'quote',
}) => {
  const { t, products, brand } = useApp();
  const [selectedModel, setSelectedModel] = useState(defaultModel || products[0].modelCode);
  const [company, setCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('10–50');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultModel) {
      setSelectedModel(defaultModel);
    } else if (mode === 'datasheet') {
      setSelectedModel('PORTFOLIO_ALL');
    }
    setSubmitted(false);
  }, [defaultModel, isOpen, mode]);

  if (!isOpen) return null;

  const matchedProduct = products.find((p) => p.modelCode === selectedModel);
  const activePdfUrl = matchedProduct
    ? matchedProduct.datasheetPath
    : brand.masterCatalogPdfPath;
  const activePdfTitle = matchedProduct
    ? `${matchedProduct.modelCode} — ${matchedProduct.name} (${matchedProduct.datasheetDocId})`
    : t.modal.masterCatalogTitle;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#121110] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
              {mode === 'datasheet' ? t.modal.docBadge : t.modal.procureBadge}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">
              {mode === 'datasheet' ? t.modal.titleDatasheet : t.modal.titleQuote}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              {brand.legalEntity} • {brand.rdCenter}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#181716] hover:bg-white/10 border border-white/10 p-2 text-stone-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instant Direct PDF Datasheet Download Card */}
        <div className="mb-6 rounded-2xl bg-[#181716] border border-amber-500/35 p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-400">
                  {t.modal.instantPdfBadge}
                </div>
                <div className="text-sm font-bold text-white mt-0.5">{activePdfTitle}</div>
                <div className="text-xs text-stone-400 mt-0.5">
                  {t.modal.unifiedEditionDesc}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={activePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#121110] hover:bg-white/10 px-3.5 py-2 text-xs font-medium text-stone-200 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.modal.previewBtn}</span>
              </a>
              <a
                href={activePdfUrl}
                download
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-amber-900/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.modal.downloadPdfBtn}</span>
              </a>
            </div>
          </div>

          {/* Quick Switcher for All 8 Individual Product Datasheets */}
          <div className="pt-3 border-t border-white/[0.06]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-400 mb-2">
              {t.modal.selectDatasheetLabel}
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedModel('PORTFOLIO_ALL')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  selectedModel === 'PORTFOLIO_ALL'
                    ? 'bg-amber-500 text-black font-semibold'
                    : 'bg-[#121110] text-stone-300 hover:text-white border border-white/[0.06]'
                }`}
              >
                {t.modal.masterCatalogPill}
              </button>
              {products.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedModel(p.modelCode)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    selectedModel === p.modelCode
                      ? 'bg-amber-500 text-black font-semibold'
                      : 'bg-[#121110] text-stone-300 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  {p.modelCode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-[#181716] border border-amber-500/30 p-8 text-center space-y-5">
            <div className="mx-auto w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-xl font-bold text-white">
                {t.modal.inquiryLoggedTitle}{' '}
                {selectedModel === 'PORTFOLIO_ALL' ? t.modal.completePortfolioOption : selectedModel}
              </h3>
              <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                {t.modal.inquiryLoggedDesc}
              </p>
            </div>

            <div className="rounded-xl bg-[#121110] border border-white/[0.07] p-4 text-start text-xs text-stone-300 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t.modal.directHotlineLabel}</span>
                <a href={`tel:${brand.hotlineRaw}`} className="text-white font-semibold hover:text-amber-400">
                  {brand.hotlineDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{t.modal.enterpriseEmailLabel}</span>
                <a
                  href={`mailto:${brand.email}?subject=${encodeURIComponent(
                    `[${selectedModel}] Enterprise Inquiry - ${company || contactName}`
                  )}`}
                  className="text-white font-semibold hover:text-amber-400"
                >
                  {brand.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${brand.email}?subject=${encodeURIComponent(
                  `[${selectedModel}] Enterprise Quote & Datasheet Request`
                )}&body=${encodeURIComponent(
                  `Model: ${selectedModel}\nCompany: ${company}\nContact: ${contactName}\nPhone: ${phone}\nQuantity: ${quantity}\nNotes: ${notes}`
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-6 py-3 text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>{t.modal.sendDirectEmailBtn}</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-stone-300 hover:text-white"
              >
                {t.modal.returnShowcaseBtn}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  {t.modal.fieldTargetModel}
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full rounded-xl bg-[#181716] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="PORTFOLIO_ALL">{t.modal.completePortfolioOption}</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.modelCode}>
                      {p.modelCode} — {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  {t.modal.fieldDeploymentScale}
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full rounded-xl bg-[#181716] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="1–5">{t.modal.scaleOption1}</option>
                  <option value="10–50">{t.modal.scaleOption2}</option>
                  <option value="50–200">{t.modal.scaleOption3}</option>
                  <option value="200+">{t.modal.scaleOption4}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  {t.modal.fieldCompany}
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={t.modal.placeholderCompany}
                  className="w-full rounded-xl bg-[#181716] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  {t.modal.fieldContact}
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder={t.modal.placeholderContact}
                  className="w-full rounded-xl bg-[#181716] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  {t.modal.fieldEmail}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.modal.placeholderEmail}
                  className="w-full rounded-xl bg-[#181716] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  {t.modal.fieldPhone}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+86 159-8917-5854"
                  className="w-full rounded-xl bg-[#181716] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                {t.modal.fieldNotes}
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.modal.placeholderNotes}
                className="w-full rounded-xl bg-[#181716] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="rounded-2xl bg-[#181716]/90 border border-white/[0.06] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-400">
              <div className="flex items-center gap-2 text-stone-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{brand.warrantyFull}</span>
              </div>
              <div className="flex items-center gap-3 text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{t.product.foshanBaseLabel}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
              <a
                href={`tel:${brand.hotlineRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] px-5 py-3 text-xs sm:text-sm font-medium text-stone-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t.modal.callPrefix} {brand.hotlineDisplay}</span>
              </a>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-black font-semibold px-7 py-3 text-xs sm:text-sm transition-all shadow-lg shadow-amber-900/25"
              >
                <Send className="w-4 h-4" />
                <span>{t.modal.submitInquiryBtn}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
