export default function ModernGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 20%, #1e3a8a 40%, #0c4a6e 60%, #164e63 80%, #134e4a 100%)'
        }}
      />

      {/* Rotating colorful gradient overlay */}
      <div
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)',
          animation: 'gradient-shift 15s ease-in-out infinite'
        }}
      />

      {/* Layer 1: Large colorful halos */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {[...Array(12)].map((_, i) => {
          const colors = [
            '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4',
            '#6366f1', '#a855f7', '#f97316', '#14b8a6', '#84cc16', '#f43f5e'
          ];
          return (
            <div
              key={`halo-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                background: `radial-gradient(circle, ${colors[i]}${Math.floor(15 + Math.random() * 20).toString(16)} 0%, transparent 70%)`,
                filter: `blur(${25 + Math.random() * 25}px)`,
                animation: `float-halo ${20 + Math.random() * 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
                willChange: 'transform'
              }}
            />
          );
        })}
      </div>

      {/* Layer 2: Grid patterns */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
        <svg className="absolute top-0 left-0 w-1/3 h-1/3 opacity-10">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#3a7ca5" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <svg className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10">
          <defs>
            <pattern id="grid2" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#3a7ca5" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>

        {/* Diagonal lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute"
            style={{
              width: '1px',
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              background: `linear-gradient(180deg, transparent, #3a7ca5${Math.floor(15 + Math.random() * 10).toString(16)}, transparent)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `line-glow ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Layer 3: Abstract chart curves and candlesticks */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 3 }}>
        {/* K-line candlesticks */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`candle-${i}`}
            className="absolute"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${40 + Math.random() * 80}px`,
              left: `${10 + i * 12}%`,
              top: `${20 + Math.random() * 30}%`,
              background: Math.random() > 0.5 ? '#4a9bc7' : '#2c5f7f',
              opacity: 0.05 + Math.random() * 0.03,
              filter: `blur(${10 + Math.random() * 10}px)`,
              animation: `float-vertical ${8 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Abstract curves */}
        <svg className="absolute inset-0 w-full h-full opacity-80">
          {[...Array(10)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = 20 + Math.random() * 40;
            const cp1X = startX + 20 + Math.random() * 30;
            const cp1Y = startY - 10 + Math.random() * 20;
            const cp2X = cp1X + 20 + Math.random() * 30;
            const cp2Y = cp1Y + 10 + Math.random() * 20;
            const endX = cp2X + 20 + Math.random() * 30;
            const endY = cp2Y - 5 + Math.random() * 15;

            return (
              <g key={`curve-${i}`}>
                <path
                  d={`M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`}
                  fill="none"
                  stroke="#3a7ca5"
                  strokeWidth="2"
                  opacity={0.04 + Math.random() * 0.04}
                  filter={`blur(${12 + Math.random() * 8}px)`}
                  style={{
                    animation: `curve-pulse ${10 + Math.random() * 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
                {/* Moving light dot along curve */}
                <circle
                  r="3"
                  fill="#4a9bc7"
                  opacity="0.3"
                  filter="blur(2px)"
                >
                  <animateMotion
                    dur={`${10 + Math.random() * 10}s`}
                    repeatCount="indefinite"
                    path={`M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`}
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Layer 4: Dense floating geometric shapes */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 4 }}>
        {[...Array(40)].map((_, i) => {
          const shapes = ['circle', 'square', 'diamond'];
          const shape = shapes[i % 3];
          const size = 15 + Math.random() * 85;

          return (
            <div
              key={`shape-${i}`}
              className="absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                background: ['#3a7ca5', '#2c5f7f', '#4a9bc7'][i % 3],
                opacity: 0.03 + Math.random() * 0.09,
                borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? '4px' : '0',
                transform: shape === 'diamond' ? 'rotate(45deg)' : 'rotate(0deg)',
                animation: `float-shape ${6 + Math.random() * 19}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
                willChange: 'transform'
              }}
            />
          );
        })}
      </div>

      {/* Layer 5: Blurred numbers and symbols */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
        {[...Array(20)].map((_, i) => {
          const symbols = ['$', '%', '+', '-', '0', '1', '2', '3', '5', '8'];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];

          return (
            <div
              key={`symbol-${i}`}
              className="absolute font-bold"
              style={{
                fontSize: `${40 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                color: ['#3a7ca5', '#2c5f7f', '#4a9bc7'][i % 3],
                opacity: 0.02 + Math.random() * 0.04,
                filter: `blur(${15 + Math.random() * 10}px)`,
                animation: `float-symbol ${15 + Math.random() * 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
                willChange: 'transform, opacity'
              }}
            >
              {symbol}
            </div>
          );
        })}
      </div>

      {/* Layer 6: Colorful star particles */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 6 }}>
        {[...Array(70)].map((_, i) => {
          const starColors = ['#ffffff', '#60A5FA', '#C084FC', '#FB923C', '#34D399', '#F472B6', '#FBBF24'];
          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 4}px`,
                height: `${1 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                background: starColors[i % starColors.length],
                opacity: 0.4,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: `0 0 4px ${starColors[i % starColors.length]}`
              }}
            />
          );
        })}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(120deg) scale(1.1); }
          66% { transform: rotate(240deg) scale(1.05); }
        }

        @keyframes float-halo {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          33% { transform: translate(30px, -40px) scale(1.15); opacity: 0.9; }
          66% { transform: translate(-20px, 30px) scale(0.95); opacity: 0.6; }
        }

        @keyframes float-shape {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(90deg); }
          50% { transform: translate(-15px, 20px) rotate(180deg); }
          75% { transform: translate(25px, 15px) rotate(270deg); }
        }

        @keyframes float-symbol {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.04; }
          50% { transform: translateY(-40px) scale(1.15); opacity: 0.06; }
        }

        @keyframes float-vertical {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes line-glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes curve-pulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.08; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }

        @media (max-width: 768px) {
          .absolute[style*="zIndex: 4"] > div:nth-child(n+21),
          .absolute[style*="zIndex: 5"] > div:nth-child(n+11),
          .absolute[style*="zIndex: 6"] > div:nth-child(n+36) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
