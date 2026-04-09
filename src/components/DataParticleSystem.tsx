export default function DataParticleSystem() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="particle1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="particle2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="particle3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="particle4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>

          <filter id="particleGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {particles.map((particle) => {
          const gradientId = `particle${(particle.id % 4) + 1}`;
          return (
            <g key={particle.id}>
              <circle
                cx={`${particle.x}%`}
                cy={`${particle.y}%`}
                r={particle.size}
                fill={`url(#${gradientId})`}
                filter="url(#particleGlow)"
                className="animate-particle-float"
                style={{
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
              <circle
                cx={`${particle.x}%`}
                cy={`${particle.y}%`}
                r={particle.size * 0.5}
                fill="#FFFFFF"
                opacity="0.6"
                className="animate-particle-float"
                style={{
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            </g>
          );
        })}

        {Array.from({ length: 8 }, (_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = x1 + (Math.random() - 0.5) * 20;
          const y2 = y1 + (Math.random() - 0.5) * 20;
          return (
            <line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={`url(#particle${(i % 4) + 1})`}
              strokeWidth="0.5"
              opacity="0.3"
              className="animate-line-pulse"
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
