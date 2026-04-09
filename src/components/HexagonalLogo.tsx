export default function HexagonalLogo() {
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

  const cardColors = [
    { front: '#00D9FF', back: '#0066FF' },
    { front: '#7C3AED', back: '#8B5CF6' },
    { front: '#10B981', back: '#14B8A6' },
    { front: '#0066FF', back: '#00D9FF' },
    { front: '#06B6D4', back: '#3B82F6' },
    { front: '#8B5CF6', back: '#7C3AED' },
    { front: '#14B8A6', back: '#10B981' },
    { front: '#3B82F6', back: '#06B6D4' },
  ];

  const createHexagonPath = (centerX: number, centerY: number, radius: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  const generateHoneycombCells = (centerX: number, centerY: number, cellRadius: number, rings: number) => {
    const cells = [];
    cells.push({ x: centerX, y: centerY });

    for (let ring = 1; ring <= rings; ring++) {
      for (let side = 0; side < 6; side++) {
        for (let step = 0; step < ring; step++) {
          const angle = (Math.PI / 3) * side;
          const nextAngle = (Math.PI / 3) * ((side + 2) % 6);

          const x = centerX + (cellRadius * 1.73 * ring * Math.cos(angle)) +
                    (cellRadius * 1.73 * step * Math.cos(nextAngle));
          const y = centerY + (cellRadius * 1.73 * ring * Math.sin(angle)) +
                    (cellRadius * 1.73 * step * Math.sin(nextAngle));

          cells.push({ x, y });
        }
      }
    }

    return cells;
  };

  const honeycombCells = generateHoneycombCells(160, 160, 15, 2);

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
          <linearGradient id="hologramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="50%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>

          <filter id="hologramGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <radialGradient id="centerGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#00D9FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0066FF" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        <g className="outer-hexagon">
          <polygon
            points={createHexagonPath(160, 160, 140)}
            fill="none"
            stroke="url(#hologramGradient)"
            strokeWidth="3"
            opacity="0.6"
            filter="url(#hologramGlow)"
            className="animate-hexagon-rotate"
            style={{ transformOrigin: '160px 160px' }}
          />

          <polygon
            points={createHexagonPath(160, 160, 140)}
            fill="none"
            stroke="#00D9FF"
            strokeWidth="1"
            opacity="0.3"
            className="animate-hexagon-pulse"
            style={{ transformOrigin: '160px 160px' }}
          />
        </g>

        <g className="middle-hexagon-ring">
          <polygon
            points={createHexagonPath(160, 160, 100)}
            fill="none"
            stroke="url(#hologramGradient)"
            strokeWidth="2.5"
            opacity="0.5"
            filter="url(#hologramGlow)"
            className="animate-hexagon-rotate-reverse"
            style={{ transformOrigin: '160px 160px' }}
          />
        </g>

        <g className="honeycomb-cells">
          {honeycombCells.map((cell, i) => (
            <polygon
              key={`cell-${i}`}
              points={createHexagonPath(cell.x, cell.y, 14)}
              fill="rgba(0, 217, 255, 0.05)"
              stroke="#00D9FF"
              strokeWidth="1"
              opacity="0.4"
              filter="url(#hologramGlow)"
              className="animate-cell-light-up"
              style={{
                animationDelay: `${i * 0.1}s`,
                transformOrigin: `${cell.x}px ${cell.y}px`
              }}
            />
          ))}
        </g>

        <g className="energy-particles">
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 360;
            const startRadius = 50;
            const endRadius = 140;
            const x1 = 160 + startRadius * Math.cos((angle * Math.PI) / 180);
            const y1 = 160 + startRadius * Math.sin((angle * Math.PI) / 180);
            const x2 = 160 + endRadius * Math.cos((angle * Math.PI) / 180);
            const y2 = 160 + endRadius * Math.sin((angle * Math.PI) / 180);

            return (
              <g key={`energy-${i}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#energyGradient)"
                  strokeWidth="1.5"
                  opacity="0.2"
                  className="animate-energy-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                <circle
                  cx={x1}
                  cy={y1}
                  r="3"
                  fill="#00D9FF"
                  filter="url(#strongGlow)"
                  className="animate-particle-shoot"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <animate
                    attributeName="cx"
                    from={x1}
                    to={x2}
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                  <animate
                    attributeName="cy"
                    from={y1}
                    to={y2}
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0.3;0"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                </circle>
              </g>
            );
          })}
        </g>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[320px] h-[320px]">
          {stockTerms.map((term, index) => {
            const angle = (index / stockTerms.length) * 360;
            const radius = 130;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  perspective: '1000px'
                }}
              >
                <div
                  className="relative w-[80px] h-[70px]"
                  style={{
                    transformStyle: 'preserve-3d',
                    animation: `card-flip-3d 6s ease-in-out infinite`,
                    animationDelay: `${index * 0.75}s`
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-lg shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      background: `linear-gradient(135deg, ${cardColors[index].front}dd 0%, ${cardColors[index].front}aa 100%)`,
                      border: `2px solid ${cardColors[index].front}`,
                      boxShadow: `0 4px 15px ${cardColors[index].front}66, inset 0 0 20px rgba(255, 255, 255, 0.2)`
                    }}
                  >
                    <span className="text-xs font-bold text-white drop-shadow-lg px-2 text-center">
                      {term}
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-lg shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      background: `linear-gradient(135deg, ${cardColors[index].back}dd 0%, ${cardColors[index].back}aa 100%)`,
                      border: `2px solid ${cardColors[index].back}`,
                      boxShadow: `0 4px 15px ${cardColors[index].back}66, inset 0 0 20px rgba(255, 255, 255, 0.2)`
                    }}
                  >
                    <span className="text-xs font-bold text-white drop-shadow-lg px-2 text-center">
                      {term}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 217, 255, 0.2) 50%, rgba(124, 58, 237, 0.2) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 0 40px rgba(0, 217, 255, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.3)',
              animation: 'hexagon-glow 3s ease-in-out infinite'
            }}
          />

          <div className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
                animation: 'hologram-scan 3s linear infinite',
                transform: 'translateX(-100%)'
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255, 255, 255, 0.1) 1px, rgba(255, 255, 255, 0.1) 2px)',
                animation: 'scanline-move 2s linear infinite'
              }}
            />
          </div>

          <div
            className="relative text-5xl font-black select-none z-10"
            style={{
              fontFamily: 'Arial Black, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              transform: 'skewX(-8deg)',
              background: 'linear-gradient(135deg, #00D9FF 0%, #0066FF 50%, #7C3AED 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.8)) drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
              animation: 'text-hologram 4s ease-in-out infinite',
              textShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
            }}
          >
            AI
          </div>

          <div
            className="absolute text-5xl font-black select-none"
            style={{
              fontFamily: 'Arial Black, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              transform: 'skewX(-8deg) translate(2px, 2px)',
              background: 'linear-gradient(135deg, #7C3AED 0%, #0066FF 50%, #00D9FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.3,
              filter: 'blur(4px)',
              animation: 'text-hologram 4s ease-in-out infinite 0.1s'
            }}
          >
            AI
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hexagon-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes hexagon-rotate-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes hexagon-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes cell-light-up {
          0%, 100% {
            opacity: 0.2;
            fill: rgba(0, 217, 255, 0.02);
          }
          50% {
            opacity: 0.6;
            fill: rgba(0, 217, 255, 0.15);
          }
        }

        @keyframes energy-pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes particle-shoot {
          0% {
            opacity: 1;
            r: 3;
          }
          100% {
            opacity: 0;
            r: 1;
          }
        }

        @keyframes card-flip-3d {
          0%, 30% {
            transform: rotateY(0deg);
          }
          50%, 80% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes hexagon-glow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(0, 217, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 50px rgba(0, 217, 255, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes hologram-scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes scanline-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(2px);
          }
        }

        @keyframes text-hologram {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(0, 217, 255, 0.8)) drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(0, 217, 255, 1)) drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) hue-rotate(30deg);
          }
        }

        .animate-hexagon-rotate {
          animation: hexagon-rotate linear infinite 20s;
        }

        .animate-hexagon-rotate-reverse {
          animation: hexagon-rotate-reverse linear infinite 15s;
        }

        .animate-hexagon-pulse {
          animation: hexagon-pulse ease-in-out infinite 3s;
        }

        .animate-cell-light-up {
          animation: cell-light-up ease-in-out infinite 4s;
        }

        .animate-energy-pulse {
          animation: energy-pulse ease-in-out infinite 2s;
        }

        .animate-particle-shoot {
          animation: particle-shoot ease-out 2s infinite;
        }
      `}</style>
    </div>
  );
}
