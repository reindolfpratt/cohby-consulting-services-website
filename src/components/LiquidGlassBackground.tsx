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

      {/* 2. Soft Bottom/Top Curved Ambient Reflection Sheen */}
      <div className="absolute inset-0 satin-glass-wave opacity-80"></div>

      {/* 3. Diagonal Specular Glass Light Sheen */}
      <div className="absolute inset-0 satin-glass-sheen"></div>

      {/* 4. Microscopic Luxury Grain Texture */}
      <div className="absolute inset-0 satin-noise-overlay"></div>

      {/* 5. Edge Highlight Line (Chromatic Refraction Edge) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] satin-glass-edge"></div>
    </div>
  );
};

export default LiquidGlassBackground;
