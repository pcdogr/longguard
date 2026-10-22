import React from 'react';
import { useApp } from '../context/AppContext';

interface BrandLogoProps {
  showAffiliation?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  showAffiliation = true,
  size = 'md',
  className = '',
}) => {
  const { theme, t } = useApp();
  const iconDimensions = size === 'sm' ? 36 : size === 'lg' ? 48 : 42;
  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group ${className}`}>
      {/* Dual-Color Circular Bionic Ring Emblem with Interconnected Geometric W/N Mechanical Joint Wave */}
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-1 rounded-full bg-amber-500/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <svg
          width={iconDimensions}
          height={iconDimensions}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative transition-transform duration-500 group-hover:scale-[1.03]"
          aria-label="LONGGUARD TECHNOLOGY Emblem"
        >
          <defs>
            <linearGradient id="lgCyberBlueArc" x1="8" y1="8" x2="56" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0066CC" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="lgKineticAmberArc" x1="8" y1="34" x2="56" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="55%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="lgJointWave" x1="14" y1="20" x2="50" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0066CC" />
              <stop offset="50%" stopColor={isLight ? '#141210' : '#F8FAFC'} />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* Adaptive Inner Plate */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill={isLight ? '#FFFFFF' : '#121110'}
            stroke={isLight ? 'rgba(20,18,16,0.12)' : 'rgba(255,255,255,0.08)'}
            strokeWidth="1.2"
          />

          {/* Upper Cyber Blue (#0066CC) Dynamic Bionic Ring Arc */}
          <path
            d="M 8.5 27 A 24 24 0 0 1 55.5 27"
            stroke="url(#lgCyberBlueArc)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Lower Kinetic Amber (#F59E0B) Dynamic Bionic Ring Arc */}
          <path
            d="M 55.5 37 A 24 24 0 0 1 8.5 37"
            stroke="url(#lgKineticAmberArc)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Interconnected Geometric "W / N" Mechanical Joint Wave */}
          <path
            d="M 15 29 L 22.5 41 L 32 23 L 41.5 41 L 49 29"
            stroke="url(#lgJointWave)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bionic Joint Pivot Nodes */}
          <circle cx="32" cy="23" r="2.6" fill="#0066CC" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="22.5" cy="41" r="2.4" fill="#F59E0B" />
          <circle cx="41.5" cy="41" r="2.4" fill="#F59E0B" />
        </svg>
      </div>

      {/* Wordmark Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-extrabold tracking-wider uppercase text-white transition-colors ${
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg'
          }`}
        >
          LONGGUARD
        </span>
        <span className="text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase text-stone-400 mt-1">
          TECHNOLOGY
        </span>
      </div>

      {/* Institutional Badge */}
      {showAffiliation && (
        <div className="hidden 2xl:flex flex-col justify-center border-l border-stone-800 pl-3.5 ml-1 leading-tight">
          <span className="text-[11px] font-medium text-stone-300 tracking-wide">
            {t.brand.shortInstitute}
          </span>
          <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase mt-0.5">
            {t.brand.shortRdCenter}
          </span>
        </div>
      )}
    </div>
  );
};
