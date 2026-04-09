export default function AILogoAnimation() {
  const stockTerms = [
    'PER',
    'PBR',
    '配当利回り',
    '時価総額',
    'ROE',
    'EPS',
    '自己資本比率',
    '売上高',
  ];

  const createArcPath = (radius: number, startAngle: number, endAngle: number) => {
    const start = {
      x: 160 + radius * Math.cos((startAngle * Math.PI) / 180),
      y: 160 + radius * Math.sin((startAngle * Math.PI) / 180),
    };
    const end = {
      x: 160 + radius * Math.cos((endAngle * Math.PI) / 180),
      y: 160 + radius * Math.sin((endAngle * Math.PI) / 180),
    };

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-full max-w-[320px] h-[320px] mx-auto flex items-center justify-center">
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>
          <filter id="iconGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g className="outer-circle">
          <path
            d={createArcPath(128, -135, 20)}
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            className="animate-spin-slow-reverse"
            style={{ transformOrigin: '160px 160px' }}
          />

          <g className="path-icon">
            <circle cx="0" cy="0" r="6" fill="url(#iconGradient)" filter="url(#iconGlow)">
              <animateMotion
                dur="14s"
                repeatCount="indefinite"
                path={createArcPath(128, -135, 225)}
              />
            </circle>
            <path
              d="M -2 -3 L 0 -5 L 2 -3 L 0 -1 Z"
              fill="#FFFFFF"
              opacity="0.9"
            >
              <animateMotion
                dur="14s"
                repeatCount="indefinite"
                path={createArcPath(128, -135, 225)}
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>

        <g className="middle-circle">
          <path
            d={createArcPath(96, -135, 0)}
            fill="none"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="4"
            className="animate-spin-medium"
            style={{ transformOrigin: '160px 160px' }}
          />
        </g>

        <g className="inner-circle">
          <path
            d={createArcPath(64, -135, -30)}
            fill="none"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="6"
            className="animate-spin-fast-pulse"
            style={{ transformOrigin: '160px 160px' }}
          />
        </g>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-[192px] h-[192px] flex items-center justify-center animate-spin-medium"
          style={{
            animationDuration: '12s',
          }}
        >
          {stockTerms.map((term, index) => {
            const angle = (index / stockTerms.length) * 360;
            const radius = 96;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(-${angle}deg)`,
                }}
              >
                <div className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/80 whitespace-nowrap">
                  <span className="text-[10px] font-semibold text-white">{term}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl">
          <div
            className="text-5xl font-black select-none"
            style={{
              fontFamily: 'Arial Black, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              transform: 'skewX(-10deg)',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            AI
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes spin-medium {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-fast-pulse {
          0% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(90deg) scale(1.05);
          }
          50% {
            transform: rotate(180deg) scale(1);
          }
          75% {
            transform: rotate(270deg) scale(1.05);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse linear infinite 20s;
        }

        .animate-spin-medium {
          animation: spin-medium ease-in-out infinite;
        }

        .animate-spin-fast-pulse {
          animation: spin-fast-pulse linear infinite 6s;
        }
      `}</style>
    </div>
  );
}
