import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryModel, setInquiryModel] = useState<string | undefined>(undefined);
  const [inquiryMode, setInquiryMode] = useState<'quote' | 'datasheet'>('quote');

  const handleOpenInquiry = (defaultModel?: string, mode: 'quote' | 'datasheet' = 'quote') => {
    setInquiryModel(defaultModel);
    setInquiryMode(mode);
    setInquiryOpen(true);
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0B0A0A] text-white selection:bg-amber-500 selection:text-black transition-colors duration-200">
          <Header onOpenInquiry={handleOpenInquiry} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
              <Route path="/products/:slug" element={<ProductPage onOpenInquiry={handleOpenInquiry} />} />
              <Route path="*" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
            </Routes>
          </main>
          <Footer onOpenInquiry={handleOpenInquiry} />
          <InquiryModal
            isOpen={inquiryOpen}
            onClose={() => setInquiryOpen(false)}
            defaultModel={inquiryModel}
            mode={inquiryMode}
          />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
