export default function DataFlowAnimation() {
  return (
    <div className="relative w-40 h-48 md:w-48 md:h-56">
      <svg
        viewBox="0 0 160 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dataFlowGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#334155" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>

          <filter id="dataGlow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect
          x="50"
          y="30"
          width="60"
          height="140"
          rx="8"
          fill="url(#pipeGradient)"
          stroke="url(#dataFlowGradient)"
          strokeWidth="2"
          opacity="0.7"
        />

        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect
              x="58"
              y="150"
              width="44"
              height="20"
              rx="4"
              fill="url(#particleGradient)"
              opacity="0.8"
              filter="url(#dataGlow)"
              className="animate-data-flow-up"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <rect
              x="62"
              y="154"
              width="36"
              height="4"
              rx="2"
              fill="#FCD34D"
              opacity="0.9"
              className="animate-data-flow-up"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </g>
        ))}

        <g opacity="0.8">
          <circle cx="80" cy="55" r="3" fill="#10B981" className="animate-data-pulse" />
          <circle cx="80" cy="75" r="3" fill="#06B6D4" className="animate-data-pulse" style={{ animationDelay: '0.2s' }} />
          <circle cx="80" cy="95" r="3" fill="#8B5CF6" className="animate-data-pulse" style={{ animationDelay: '0.4s' }} />
          <circle cx="80" cy="115" r="3" fill="#EC4899" className="animate-data-pulse" style={{ animationDelay: '0.6s' }} />
        </g>

        <path
          d="M 70 175 L 80 165 L 90 175 Z"
          fill="none"
          stroke="url(#dataFlowGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-arrow-bounce"
        />

        <g className="animate-data-source-pulse">
          <rect
            x="65"
            y="185"
            width="30"
            height="8"
            rx="2"
            fill="url(#dataFlowGradient)"
            opacity="0.7"
          />
          <circle cx="70" cy="189" r="2" fill="#10B981" />
          <circle cx="80" cy="189" r="2" fill="#06B6D4" />
          <circle cx="90" cy="189" r="2" fill="#8B5CF6" />
        </g>

        <g className="animate-cloud-float">
          <ellipse cx="80" cy="20" rx="18" ry="10" fill="url(#dataFlowGradient)" opacity="0.6" />
          <ellipse cx="70" cy="22" rx="12" ry="8" fill="url(#dataFlowGradient)" opacity="0.5" />
          <ellipse cx="90" cy="22" rx="12" ry="8" fill="url(#dataFlowGradient)" opacity="0.5" />
        </g>

        <text
          x="80"
          y="15"
          textAnchor="middle"
          fill="url(#dataFlowGradient)"
          fontSize="10"
          fontWeight="600"
          opacity="0.9"
        >
          Cloud
        </text>
      </svg>
    </div>
  );
}
