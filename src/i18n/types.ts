export type LanguageCode =
  | 'en'
  | 'zh-CN'
  | 'zh-TW'
  | 'ja'
  | 'es'
  | 'it'
  | 'pt'
  | 'ru'
  | 'fr'
  | 'ar';

export type ThemeMode = 'light' | 'dark';

export interface LanguageOption {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
  shortBadge: string;
  dir: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', nativeName: 'English', englishName: 'English', shortBadge: 'EN', dir: 'ltr' },
  { code: 'zh-CN', nativeName: '简体中文', englishName: 'Simplified Chinese', shortBadge: '简', dir: 'ltr' },
  { code: 'zh-TW', nativeName: '繁體中文', englishName: 'Traditional Chinese', shortBadge: '繁', dir: 'ltr' },
  { code: 'ja', nativeName: '日本語', englishName: 'Japanese', shortBadge: 'JA', dir: 'ltr' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish', shortBadge: 'ES', dir: 'ltr' },
  { code: 'it', nativeName: 'Italiano', englishName: 'Italian', shortBadge: 'IT', dir: 'ltr' },
  { code: 'pt', nativeName: 'Português', englishName: 'Portuguese', shortBadge: 'PT', dir: 'ltr' },
  { code: 'ru', nativeName: 'Русский', englishName: 'Russian', shortBadge: 'RU', dir: 'ltr' },
  { code: 'fr', nativeName: 'Français', englishName: 'French', shortBadge: 'FR', dir: 'ltr' },
  { code: 'ar', nativeName: 'العربية', englishName: 'Arabic', shortBadge: 'AR', dir: 'rtl' },
];

export interface LocalizedProductContent {
  name: string;
  shortTitle: string;
  category: string;
  subCategory: string;
  headline: string;
  overview: string;
  secondaryStudioCaption?: string;
  metrics: { value: string; label: string }[];
  features: { title: string; description: string }[];
  hotspots: { title: string; description: string; zone: string }[];
  bentoCards: { title: string; subtitle: string; description: string; materialTag: string }[];
  deployment: {
    title: string;
    locationBadge: string;
    narrative: string;
    environmentalMetrics: { label: string; value: string }[];
    industries: string[];
  };
  specifications: { parameter: string; value: string }[];
  quickCompare: {
    mechanism: string;
    capacityOrTemp: string;
    powerOrCycle: string;
    netWeight: string;
    primaryApplication: string;
  };
}

export type ProductTranslationsMap = Record<string, LocalizedProductContent>;
