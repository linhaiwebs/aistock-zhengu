export default function AIBrainAnimation() {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>

          <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>

          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g className="animate-brain-pulse">
          <ellipse
            cx="100"
            cy="90"
            rx="60"
            ry="55"
            fill="none"
            stroke="url(#brainGradient)"
            strokeWidth="3"
            opacity="0.6"
            filter="url(#glow)"
          />

          <path
            d="M 60 70 Q 70 50, 100 50 Q 130 50, 140 70"
            fill="none"
            stroke="url(#brainGradient)"
            strokeWidth="2.5"
            opacity="0.5"
            className="animate-neuron-pulse"
          />

          <path
            d="M 60 90 Q 80 90, 100 85 Q 120 90, 140 90"
            fill="none"
            stroke="url(#brainGradient)"
            strokeWidth="2.5"
            opacity="0.5"
            className="animate-neuron-pulse"
            style={{ animationDelay: '0.3s' }}
          />

          <path
            d="M 65 110 Q 85 115, 100 110 Q 115 115, 135 110"
            fill="none"
            stroke="url(#brainGradient)"
            strokeWidth="2.5"
            opacity="0.5"
            className="animate-neuron-pulse"
            style={{ animationDelay: '0.6s' }}
          />
        </g>

        <circle
          cx="100"
          cy="90"
          r="15"
          fill="url(#neuronGradient)"
          opacity="0.8"
          filter="url(#glow)"
          className="animate-core-pulse"
        />

        <circle
          cx="75"
          cy="65"
          r="6"
          fill="url(#energyGradient)"
          className="animate-neuron-fire"
          style={{ animationDelay: '0s' }}
        />
        <circle
          cx="125"
          cy="65"
          r="6"
          fill="url(#energyGradient)"
          className="animate-neuron-fire"
          style={{ animationDelay: '0.2s' }}
        />
        <circle
          cx="70"
          cy="95"
          r="5"
          fill="url(#energyGradient)"
          className="animate-neuron-fire"
          style={{ animationDelay: '0.4s' }}
        />
        <circle
          cx="130"
          cy="95"
          r="5"
          fill="url(#energyGradient)"
          className="animate-neuron-fire"
          style={{ animationDelay: '0.6s' }}
        />
        <circle
          cx="85"
          cy="115"
          r="5"
          fill="url(#energyGradient)"
          className="animate-neuron-fire"
          style={{ animationDelay: '0.8s' }}
        />
        <circle
          cx="115"
          cy="115"
          r="5"
          fill="url(#energyGradient)"
          className="animate-neuron-fire"
          style={{ animationDelay: '1s' }}
        />

        {[1, 2, 3].map((i) => (
          <circle
            key={i}
            cx="100"
            cy="90"
            r={15 + i * 12}
            fill="none"
            stroke="url(#brainGradient)"
            strokeWidth="2"
            opacity="0"
            className="animate-energy-wave"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        <text
          x="100"
          y="165"
          textAnchor="middle"
          fill="url(#brainGradient)"
          fontSize="14"
          fontWeight="600"
          opacity="0.9"
        >
          AI分析中
        </text>
      </svg>
    </div>
  );
}
