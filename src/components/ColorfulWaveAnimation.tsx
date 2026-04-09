export default function ColorfulWaveAnimation() {
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

  const gradientColors = [
    'from-blue-400 to-cyan-400',
    'from-purple-400 to-pink-400',
    'from-orange-400 to-yellow-400',
    'from-green-400 to-emerald-400',
    'from-red-400 to-rose-400',
    'from-indigo-400 to-violet-400',
    'from-teal-400 to-cyan-400',
    'from-amber-400 to-orange-400',
  ];

  const createWavyPath = (radius: number, startAngle: number, endAngle: number, waveCount: number, waveAmplitude: number) => {
    const totalAngle = endAngle - startAngle;
    const steps = 100;
    const angleStep = totalAngle / steps;

    let path = '';

    for (let i = 0; i <= steps; i++) {
      const angle = startAngle + (angleStep * i);
      const waveOffset = Math.sin((i / steps) * waveCount * Math.PI * 2) * waveAmplitude;
      const currentRadius = radius + waveOffset;

      const x = 160 + currentRadius * Math.cos((angle * Math.PI) / 180);
      const y = 160 + currentRadius * Math.sin((angle * Math.PI) / 180);

      if (i === 0) {
        path = `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    }

    return path;
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
          <linearGradient id="outerWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>

          <linearGradient id="middleWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>

          <linearGradient id="innerWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FDE047" />
          </linearGradient>

          <linearGradient id="rainbowLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="20%" stopColor="#F97316" />
            <stop offset="40%" stopColor="#FBBF24" />
            <stop offset="60%" stopColor="#34D399" />
            <stop offset="80%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>

          <filter id="colorfulGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <radialGradient id="logoGlassGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FDE047" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FB923C" stopOpacity="0.9" />
          </radialGradient>
        </defs>

        <g className="outer-wave">
          <path
            d={createWavyPath(128, -135, 225, 8, 6)}
            fill="none"
            stroke="url(#outerWaveGradient)"
            strokeWidth="3"
            className="animate-spin-slow-reverse"
            style={{ transformOrigin: '160px 160px', filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))' }}
          />

          <g className="path-particle">
            {[...Array(3)].map((_, i) => (
              <circle key={i} cx="0" cy="0" r="4" fill={['#60A5FA', '#34D399', '#22D3EE'][i]} filter="url(#colorfulGlow)">
                <animateMotion
                  dur={`${14 + i * 2}s`}
                  repeatCount="indefinite"
                  path={createWavyPath(128, -135, 225, 8, 6)}
                  begin={`${i * 4.7}s`}
                />
              </circle>
            ))}
          </g>
        </g>

        <g className="middle-wave">
          <path
            d={createWavyPath(96, -90, 270, 6, 5)}
            fill="none"
            stroke="url(#middleWaveGradient)"
            strokeWidth="4"
            className="animate-spin-medium"
            style={{ transformOrigin: '160px 160px', filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.5))' }}
          />

          <g className="path-particle">
            {[...Array(2)].map((_, i) => (
              <circle key={i} cx="0" cy="0" r="4" fill={['#C084FC', '#F472B6'][i]} filter="url(#colorfulGlow)">
                <animateMotion
                  dur={`${12 + i * 2}s`}
                  repeatCount="indefinite"
                  path={createWavyPath(96, -90, 270, 6, 5)}
                  begin={`${i * 6}s`}
                />
              </circle>
            ))}
          </g>
        </g>

        <g className="inner-wave">
          <path
            d={createWavyPath(64, -45, 315, 10, 4)}
            fill="none"
            stroke="url(#innerWaveGradient)"
            strokeWidth="5"
            className="animate-spin-fast-wave"
            style={{ transformOrigin: '160px 160px', filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.5))' }}
          />

          <g className="path-particle">
            {[...Array(2)].map((_, i) => (
              <circle key={i} cx="0" cy="0" r="4" fill={['#FB923C', '#FBBF24'][i]} filter="url(#colorfulGlow)">
                <animateMotion
                  dur={`${8 + i * 2}s`}
                  repeatCount="indefinite"
                  path={createWavyPath(64, -45, 315, 10, 4)}
                  begin={`${i * 4}s`}
                />
              </circle>
            ))}
          </g>
        </g>

        <g className="sparkle-particles">
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 360;
            const radius = 80 + Math.random() * 40;
            const x = 160 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 160 + radius * Math.sin((angle * Math.PI) / 180);
            const colors = ['#60A5FA', '#C084FC', '#FB923C', '#34D399', '#F472B6', '#FBBF24'];

            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill={colors[i % colors.length]}
                opacity="0.6"
                filter="url(#colorfulGlow)"
                className="animate-twinkle"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            );
          })}
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
                <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${gradientColors[index]} backdrop-blur-sm border-2 border-white/60 whitespace-nowrap shadow-lg animate-float-soft`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <span className="text-[10px] font-bold text-white drop-shadow-md">{term}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-br from-white/20 via-transparent to-white/20 flex items-center justify-center shadow-2xl backdrop-blur-sm animate-pulse-slow">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 animate-rotate-gradient"
            style={{ filter: 'blur(8px)', opacity: 0.6 }}
          />

          <div className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
            style={{
              background: 'url(#logoGlassGradient)',
              boxShadow: '0 0 30px rgba(251, 146, 60, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3)'
            }}
          >
            <div className="absolute inset-0 rounded-full animate-shimmer"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
                backgroundSize: '200% 200%'
              }}
            />

            <div
              className="relative text-5xl font-black select-none animate-color-shift"
              style={{
                fontFamily: 'Arial Black, sans-serif',
                fontWeight: 900,
                fontStyle: 'italic',
                transform: 'skewX(-10deg)',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              }}
            >
              AI
            </div>
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

        @keyframes spin-fast-wave {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.03);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes float-soft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes color-shift {
          0%, 100% {
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) hue-rotate(0deg);
          }
          50% {
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) hue-rotate(10deg);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.5);
          }
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse linear infinite 20s;
        }

        .animate-spin-medium {
          animation: spin-medium ease-in-out infinite;
        }

        .animate-spin-fast-wave {
          animation: spin-fast-wave linear infinite 8s;
        }

        .animate-float-soft {
          animation: float-soft ease-in-out infinite 3s;
        }

        .animate-pulse-slow {
          animation: pulse-slow ease-in-out infinite 4s;
        }

        .animate-rotate-gradient {
          animation: rotate-gradient linear infinite 6s;
        }

        .animate-shimmer {
          animation: shimmer linear infinite 3s;
        }

        .animate-color-shift {
          animation: color-shift ease-in-out infinite 8s;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
}
