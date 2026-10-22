import { PRODUCTS, ProductData } from '../data/products';
import { LanguageCode, ProductTranslationsMap } from './types';
import { PRODUCTS_ZH_CN } from './locales/products-zh-CN';
import { PRODUCTS_ZH_TW } from './locales/products-zh-TW';
import { PRODUCTS_JA } from './locales/products-ja';
import { PRODUCTS_ES } from './locales/products-es';
import { PRODUCTS_IT } from './locales/products-it';
import { PRODUCTS_PT } from './locales/products-pt';
import { PRODUCTS_RU } from './locales/products-ru';
import { PRODUCTS_FR } from './locales/products-fr';
import { PRODUCTS_AR } from './locales/products-ar';

const PRODUCT_LOCALE_REGISTRY: Partial<Record<LanguageCode, ProductTranslationsMap>> = {
  'zh-CN': PRODUCTS_ZH_CN,
  'zh-TW': PRODUCTS_ZH_TW,
  ja: PRODUCTS_JA,
  es: PRODUCTS_ES,
  it: PRODUCTS_IT,
  pt: PRODUCTS_PT,
  ru: PRODUCTS_RU,
  fr: PRODUCTS_FR,
  ar: PRODUCTS_AR,
};

export function getLocalizedProducts(lang: LanguageCode): ProductData[] {
  if (lang === 'en') {
    return PRODUCTS;
  }

  const localeMap = PRODUCT_LOCALE_REGISTRY[lang];
  if (!localeMap) {
    return PRODUCTS;
  }

  return PRODUCTS.map((baseProd) => {
    const loc = localeMap[baseProd.id];
    if (!loc) return baseProd;

    return {
      ...baseProd,
      name: loc.name || baseProd.name,
      shortTitle: loc.shortTitle || baseProd.shortTitle,
      category: (loc.category as ProductData['category']) || baseProd.category,
      subCategory: loc.subCategory || baseProd.subCategory,
      headline: loc.headline || baseProd.headline,
      overview: loc.overview || baseProd.overview,
      secondaryStudioCaption: loc.secondaryStudioCaption || baseProd.secondaryStudioCaption,
      metrics: baseProd.metrics.map((m, idx) => ({
        ...m,
        value: loc.metrics?.[idx]?.value ?? m.value,
        label: loc.metrics?.[idx]?.label ?? m.label,
      })),
      features: baseProd.features.map((f, idx) => ({
        title: loc.features?.[idx]?.title ?? f.title,
        description: loc.features?.[idx]?.description ?? f.description,
      })),
      hotspots: baseProd.hotspots.map((h, idx) => ({
        ...h,
        title: loc.hotspots?.[idx]?.title ?? h.title,
        description: loc.hotspots?.[idx]?.description ?? h.description,
        zone: loc.hotspots?.[idx]?.zone ?? h.zone,
      })),
      bentoCards: baseProd.bentoCards.map((b, idx) => ({
        ...b,
        title: loc.bentoCards?.[idx]?.title ?? b.title,
        subtitle: loc.bentoCards?.[idx]?.subtitle ?? b.subtitle,
        description: loc.bentoCards?.[idx]?.description ?? b.description,
        materialTag: loc.bentoCards?.[idx]?.materialTag ?? b.materialTag,
      })),
      deployment: {
        ...baseProd.deployment,
        title: loc.deployment?.title ?? baseProd.deployment.title,
        locationBadge: loc.deployment?.locationBadge ?? baseProd.deployment.locationBadge,
        narrative: loc.deployment?.narrative ?? baseProd.deployment.narrative,
        environmentalMetrics: baseProd.deployment.environmentalMetrics.map((em, idx) => ({
          label: loc.deployment?.environmentalMetrics?.[idx]?.label ?? em.label,
          value: loc.deployment?.environmentalMetrics?.[idx]?.value ?? em.value,
        })),
        industries: loc.deployment?.industries?.length
          ? loc.deployment.industries
          : baseProd.deployment.industries,
      },
      specifications: baseProd.specifications.map((s, idx) => ({
        ...s,
        parameter: loc.specifications?.[idx]?.parameter ?? s.parameter,
        value: loc.specifications?.[idx]?.value ?? s.value,
      })),
      quickCompare: {
        mechanism: loc.quickCompare?.mechanism ?? baseProd.quickCompare.mechanism,
        capacityOrTemp: loc.quickCompare?.capacityOrTemp ?? baseProd.quickCompare.capacityOrTemp,
        powerOrCycle: loc.quickCompare?.powerOrCycle ?? baseProd.quickCompare.powerOrCycle,
        netWeight: loc.quickCompare?.netWeight ?? baseProd.quickCompare.netWeight,
        primaryApplication: loc.quickCompare?.primaryApplication ?? baseProd.quickCompare.primaryApplication,
      },
    };
  });
}
