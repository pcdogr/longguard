import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { LanguageCode, ThemeMode, SUPPORTED_LANGUAGES } from '../i18n/types';
import { UI_TRANSLATIONS, UIStrings } from '../i18n/uiTranslations';
import { getLocalizedProducts } from '../i18n/productTranslations';
import { BRAND_CREDENTIALS, ProductData } from '../data/products';

interface AppContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  dir: 'ltr' | 'rtl';
  t: UIStrings;
  products: ProductData[];
  brand: typeof BRAND_CREDENTIALS & UIStrings['brand'];
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = 'longguard_theme_v2';
const LANG_STORAGE_KEY = 'longguard_lang_v2';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default theme is 'light' (bright daytime theme) as requested
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore storage errors
    }
    return 'light';
  });

  // Default language is 'en' (English) as requested
  const [lang, setLangState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY) as LanguageCode | null;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
    } catch {
      // ignore storage errors
    }
    return 'en';
  });

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const setLang = (nextLang: LanguageCode) => {
    setLangState(nextLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, nextLang);
    } catch {
      // ignore
    }
  };

  const currentLangMeta = useMemo(
    () => SUPPORTED_LANGUAGES.find((l) => l.code === lang) || SUPPORTED_LANGUAGES[0],
    [lang]
  );

  const dir = currentLangMeta.dir;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
  }, [lang, dir]);

  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
  const products = useMemo(() => getLocalizedProducts(lang), [lang]);
  const brand = useMemo(
    () => ({
      ...BRAND_CREDENTIALS,
      ...t.brand,
    }),
    [t]
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      lang,
      setLang,
      dir,
      t,
      products,
      brand,
    }),
    [theme, lang, dir, t, products, brand]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextValue => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return ctx;
};
