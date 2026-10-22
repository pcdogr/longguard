import React from 'react';

interface StudioVisualFrameProps {
  src: string;
  alt: string;
  aspectRatio?: '3:4' | '16:9' | '1:1';
  fitMode?: 'cover' | 'contain';
  bananaPrompt?: string;
  badgeText?: string;
  docIdBadge?: string;
  caption?: string;
  className?: string;
  children?: React.ReactNode;
}

export const StudioVisualFrame: React.FC<StudioVisualFrameProps> = ({
  src,
  alt,
  aspectRatio = '3:4',
  fitMode = 'cover',
  badgeText,
  docIdBadge,
  caption,
  className = '',
  children,
}) => {
  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-video'
      : aspectRatio === '1:1'
      ? 'aspect-square'
      : 'aspect-[3/4]';

  return (
    <div
      className={`studio-photo-stage relative overflow-hidden rounded-2xl bg-[#0B0A0A] border border-white/[0.08] shadow-card-luxury group ${aspectClass} ${className}`}
    >
      {/* 3200K Warm Amber Tungsten Studio Rim Halo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-85 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 50% 32%, rgba(245, 158, 11, 0.16), rgba(217, 119, 6, 0.05) 55%, transparent 78%)',
        }}
      />

      {/* Top Warm Tungsten Edge Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/45 to-transparent" />

      {/* Studio Asset Render */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full ${
          fitMode === 'contain' ? 'object-contain p-2 sm:p-3' : 'object-cover'
        } object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
      />

      {/* Subtle Vignette for Editorial Contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0A0A]/75 via-transparent to-[#0B0A0A]/20" />

      {/* Optional Top-Left Material / Studio Badge */}
      {badgeText && (
        <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-[#121110]/85 backdrop-blur-md border border-white/10 px-3.5 py-1.5 text-xs font-medium text-stone-200 tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          {badgeText}
        </div>
      )}

      {/* Optional Top-Right Engineering Spec ID Badge */}
      {docIdBadge && (
        <div className="absolute top-4 right-4 z-10 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#121110]/85 backdrop-blur-md border border-amber-500/25 px-3 py-1 text-[11px] font-semibold tracking-wider text-amber-400">
          <span>{docIdBadge}</span>
        </div>
      )}

      {/* Interactive Overlay Children (e.g., Anatomical Hotspot Pins) */}
      {children}

      {/* Optional Editorial Bottom Caption */}
      {caption && (
        <div className="absolute bottom-4 inset-x-4 z-10 rounded-xl bg-[#121110]/90 backdrop-blur-md border border-white/10 px-4 py-3">
          <p className="text-xs text-stone-300 leading-relaxed">{caption}</p>
        </div>
      )}
    </div>
  );
};
