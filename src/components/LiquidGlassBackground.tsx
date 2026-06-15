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
      {/* 1. Deep Satin Studio-Lit Gradient Base */}
      <div className="absolute inset-0 satin-glass-bg"></div>

      {/* 2. Dynamic Floating Ambient Orbs (Cyan & Rose) */}
      <div className="absolute -top-[15%] -left-[15%] w-[60%] h-[60%] liquid-orb-1 opacity-70"></div>
      <div className="absolute -bottom-[15%] -right-[15%] w-[70%] h-[70%] liquid-orb-2 opacity-65"></div>
      <div className="absolute top-[25%] right-[10%] w-[50%] h-[50%] liquid-orb-rose opacity-45"></div>
      {variant === 'hero' && (
        <div className="absolute top-[20%] left-[15%] w-[45%] h-[45%] liquid-orb-3 opacity-40"></div>
      )}

      {/* 3. Soft Bottom/Top Curved Ambient Reflection Sheen */}
      <div className="absolute inset-0 satin-glass-wave opacity-80"></div>

      {/* 4. Diagonal Specular Glass Light Sheen */}
      <div className="absolute inset-0 satin-glass-sheen"></div>

      {/* 5. Microscopic Luxury Grain Texture */}
      <div className="absolute inset-0 satin-noise-overlay"></div>

      {/* 6. Edge Highlight Line (Chromatic Refraction Edge) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] satin-glass-edge"></div>
    </div>
  );
};

export default LiquidGlassBackground;
