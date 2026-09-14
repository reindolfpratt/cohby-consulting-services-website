import React from 'react';

interface LiquidGlassBackgroundProps {
  className?: string;
  variant?: 'hero' | 'cta' | 'footer';
}

/**
 * Precision 4K Liquid Glass Atmospheric Background
 * Provides optical-grade depth, subtle crystal refraction caustics, and specular highlights
 * without blurry muddy gradient blooms.
 */
const LiquidGlassBackground: React.FC<LiquidGlassBackgroundProps> = ({
  className = '',
  variant = 'hero',
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {/* 1. Deep crystalline obsidian base */}
      <div className="absolute inset-0 satin-glass-bg" />

      {/* 2. Micro-precision optical grid lines for 4K architectural depth */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 3. Primary crystal cyan optical caustic (top-left) */}
      <div className="absolute -top-[15%] -left-[5%] w-[55%] h-[55%] liquid-orb-1" />

      {/* 4. Secondary luminous rose/magenta caustic (bottom-right) */}
      <div className="absolute -bottom-[15%] -right-[5%] w-[55%] h-[55%] liquid-orb-2" />

      {/* 5. Center-right precision optical highlight */}
      <div className="absolute top-[25%] right-[10%] w-[45%] h-[45%] liquid-orb-rose" />

      {/* 6. Subtle violet optical refraction (hero variant) */}
      {variant === 'hero' && (
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] liquid-orb-3" />
      )}

      {/* 7. Deep ambient bottom vignette */}
      <div className="absolute inset-0 satin-glass-wave opacity-90" />

      {/* 8. Razor-sharp diagonal specular glass sheen */}
      <div className="absolute inset-0 satin-glass-sheen" />

      {/* 9. Top-edge optical refraction line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] satin-glass-edge" />
    </div>
  );
};

export default LiquidGlassBackground;
