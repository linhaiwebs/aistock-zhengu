export default function HolographicBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 25%, #FFFFFF 50%, #F0F9FF 75%, #DBEAFE 100%)'
        }}
      />

      <div
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(0, 217, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(124, 58, 237, 0.12) 0%, transparent 50%)',
          animation: 'hologram-shift 20s ease-in-out infinite'
        }}
      />

      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {[...Array(8)].map((_, i) => {
          const colors = ['#00D9FF', '#0066FF', '#7C3AED', '#10B981', '#06B6D4', '#3B82F6', '#8B5CF6', '#14B8A6'];
          return (
            <div
              key={`glow-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${150 + Math.random() * 200}px`,
                height: `${150 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${colors[i]}15 0%, transparent 70%)`,
                filter: `blur(${40 + Math.random() * 30}px)`,
                animation: `float-hologram ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                willChange: 'transform'
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
        <svg className="absolute inset-0 w-full h-full opacity-8">
          <defs>
            <pattern id="hexagon-grid" width="60" height="52" patternUnits="userSpaceOnUse">
              <path
                d="M30 0 L45 13 L45 39 L30 52 L15 39 L15 13 Z"
                fill="none"
                stroke="#00D9FF"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagon-grid)" />
        </svg>

        {[...Array(20)].map((_, i) => (
          <div
            key={`hex-float-${i}`}
            className="absolute"
            style={{
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: '1px solid rgba(0, 217, 255, 0.2)',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'rgba(255, 255, 255, 0.05)',
              animation: `hexagon-float ${10 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)'
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 3 }}>
        {[...Array(30)].map((_, i) => {
          const chars = ['0', '1', '0', '1', '01', '10', '00', '11'];
          return (
            <div
              key={`digital-rain-${i}`}
              className="absolute font-mono font-bold"
              style={{
                fontSize: `${12 + Math.random() * 8}px`,
                left: `${Math.random() * 100}%`,
                top: `${-20 + Math.random() * 120}%`,
                color: i % 3 === 0 ? '#00D9FF' : i % 3 === 1 ? '#7C3AED' : '#10B981',
                opacity: 0.15 + Math.random() * 0.15,
                animation: `digital-fall ${10 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            >
              {chars[Math.floor(Math.random() * chars.length)]}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 4 }}>
        <svg className="absolute inset-0 w-full h-full opacity-40">
          {[...Array(15)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;

            return (
              <g key={`line-${i}`}>
                <line
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#00D9FF"
                  strokeWidth="1"
                  opacity="0.1"
                  style={{
                    animation: `line-pulse ${5 + Math.random() * 5}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
                <circle
                  cx={`${x1}%`}
                  cy={`${y1}%`}
                  r="3"
                  fill="#00D9FF"
                  opacity="0.4"
                  style={{
                    animation: `node-pulse ${3 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
                <circle
                  cx={`${x2}%`}
                  cy={`${y2}%`}
                  r="3"
                  fill="#7C3AED"
                  opacity="0.4"
                  style={{
                    animation: `node-pulse ${3 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.15) 50%, transparent 100%)',
            transform: 'translateX(-100%)',
            animation: 'scan-beam 8s linear infinite'
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 217, 255, 0.03) 2px, rgba(0, 217, 255, 0.03) 4px)',
            animation: 'scanlines 10s linear infinite'
          }}
        />
      </div>

      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 6 }}>
        {[...Array(50)].map((_, i) => {
          const particleColors = ['#00D9FF', '#0066FF', '#7C3AED', '#10B981', '#FFFFFF'];
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: particleColors[i % particleColors.length],
                opacity: 0.5,
                animation: `particle-drift ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                boxShadow: `0 0 8px ${particleColors[i % particleColors.length]}`
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 7 }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={`glass-panel-${i}`}
            className="absolute"
            style={{
              width: `${150 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 150}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              animation: `glass-float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `perspective(1000px) rotateX(${Math.random() * 20 - 10}deg) rotateY(${Math.random() * 20 - 10}deg)`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes hologram-shift {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.1) rotate(5deg); opacity: 0.3; }
        }

        @keyframes float-hologram {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -50px); }
          66% { transform: translate(-30px, 40px); }
        }

        @keyframes hexagon-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
          50% { transform: translate(20px, -30px) rotate(180deg); opacity: 0.8; }
        }

        @keyframes digital-fall {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes line-pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.2; }
        }

        @keyframes node-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.7; }
        }

        @keyframes scan-beam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }

        @keyframes particle-drift {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(30px, -40px); opacity: 0.7; }
          50% { transform: translate(-20px, 30px); opacity: 0.5; }
          75% { transform: translate(40px, 20px); opacity: 0.7; }
        }

        @keyframes glass-float {
          0%, 100% {
            transform: perspective(1000px) translate(0, 0) rotateX(0deg) rotateY(0deg);
          }
          33% {
            transform: perspective(1000px) translate(20px, -30px) rotateX(10deg) rotateY(-10deg);
          }
          66% {
            transform: perspective(1000px) translate(-20px, 20px) rotateX(-10deg) rotateY(10deg);
          }
        }

        @media (max-width: 768px) {
          div[style*="zIndex: 1"] > div:nth-child(n+5),
          div[style*="zIndex: 2"] > div:nth-child(n+11),
          div[style*="zIndex: 3"] > div:nth-child(n+16),
          div[style*="zIndex: 6"] > div:nth-child(n+26),
          div[style*="zIndex: 7"] > div:nth-child(n+3) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
