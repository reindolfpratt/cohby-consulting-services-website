import React from 'react';

interface LiquidGlassBackgroundProps {
  className?: string;
  variant?: 'hero' | 'cta' | 'footer';
}

const LiquidGlassBackground: React.FC<LiquidGlassBackgroundProps> = ({
  className = '',
  variant = 'hero',
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {/* 1. Deep satin base */}
      <div className="absolute inset-0 satin-glass-bg" />

      {/* 2. Primary cyan orb - top-left */}
      <div className="absolute -top-[20%] -left-[10%] w-[65%] h-[65%] liquid-orb-1" />

      {/* 3. Hot pink orb - bottom-right */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] liquid-orb-2" />

      {/* 4. Rose accent orb - right mid */}
      <div className="absolute top-[20%] right-[5%] w-[55%] h-[55%] liquid-orb-rose" />

      {/* 5. Purple orb - hero only, center-left */}
      {variant === 'hero' && (
        <div className="absolute top-[15%] left-[10%] w-[50%] h-[50%] liquid-orb-3" />
      )}

      {/* 6. CTA/footer teal accent */}
      {variant !== 'hero' && (
        <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] liquid-orb-4" />
      )}

      {/* 7. Curved ambient vignette at bottom */}
      <div className="absolute inset-0 satin-glass-wave opacity-85" />

      {/* 8. Diagonal specular sheen */}
      <div className="absolute inset-0 satin-glass-sheen" />

      {/* 9. Luxury micro-grain texture */}
      <div className="absolute inset-0 satin-noise-overlay" />

      {/* 10. Top edge chromatic refraction line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] satin-glass-edge" />
    </div>
  );
};

export default LiquidGlassBackground;
