export default function RocketAnimation() {
  return (
    <div className="w-32 h-48 sm:w-40 sm:h-60 animate-rocket-lift">
      <svg
        viewBox="0 0 100 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="rocketBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B83FF" />
            <stop offset="50%" stopColor="#6B63FF" />
            <stop offset="100%" stopColor="#5B53EF" />
          </linearGradient>
          <linearGradient id="rocketWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DBEAFE" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>
          <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>

        <g className="rocket-main">
          <path d="M 50 5 L 35 35 L 35 95 L 65 95 L 65 35 Z" fill="url(#rocketBodyGradient)" stroke="#E0DEFF" strokeWidth="2" />

          <ellipse cx="50" cy="5" rx="15" ry="20" fill="#A78BFA" stroke="#E0DEFF" strokeWidth="2" />

          <circle cx="50" cy="50" r="12" fill="url(#rocketWindowGradient)" stroke="#6366F1" strokeWidth="2">
            <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
          </circle>

          <path d="M 15 65 L 35 65 L 35 105 Z" fill="#7C3AED" stroke="#E0DEFF" strokeWidth="2" />
          <path d="M 85 65 L 65 65 L 65 105 Z" fill="#7C3AED" stroke="#E0DEFF" strokeWidth="2" />

          <rect x="42" y="65" width="5" height="15" rx="1" fill="#FCD34D" opacity="0.8" />
          <rect x="53" y="65" width="5" height="15" rx="1" fill="#FCD34D" opacity="0.8" />

          <circle cx="50" cy="25" r="3" fill="white" opacity="0.8" />
          <circle cx="55" cy="30" r="2" fill="white" opacity="0.6" />
        </g>

        <g className="flames">
          <ellipse cx="43" cy="98" rx="8" ry="15" fill="url(#flameGradient)" opacity="0.9">
            <animate attributeName="ry" values="15;25;15" dur="0.3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.6;0.9" dur="0.3s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="50" cy="98" rx="10" ry="20" fill="url(#flameGradient)" opacity="0.95">
            <animate attributeName="ry" values="20;30;20" dur="0.25s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.95;0.7;0.95" dur="0.25s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="57" cy="98" rx="8" ry="15" fill="url(#flameGradient)" opacity="0.9">
            <animate attributeName="ry" values="15;25;15" dur="0.35s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.6;0.9" dur="0.35s" repeatCount="indefinite" />
          </ellipse>

          <ellipse cx="45" cy="108" rx="6" ry="12" fill="#FCD34D" opacity="0.7">
            <animate attributeName="ry" values="12;20;12" dur="0.4s" repeatCount="indefinite" />
            <animate attributeName="cy" values="108;118;108" dur="0.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="0.4s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="55" cy="108" rx="6" ry="12" fill="#FCD34D" opacity="0.7">
            <animate attributeName="ry" values="12;20;12" dur="0.35s" repeatCount="indefinite" />
            <animate attributeName="cy" values="108;118;108" dur="0.35s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="0.35s" repeatCount="indefinite" />
          </ellipse>
        </g>

        <g className="smoke-particles" opacity="0.4">
          <circle cx="35" cy="123" r="4" fill="#94A3B8">
            <animate attributeName="cy" values="123;143;123" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="128" r="5" fill="#94A3B8">
            <animate attributeName="cy" values="128;148;128" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="65" cy="123" r="4" fill="#94A3B8">
            <animate attributeName="cy" values="123;143;123" dur="2.2s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" begin="0.6s" />
          </circle>
        </g>

        <g className="sparkles">
          <circle cx="25" cy="80" r="2" fill="#FDE047">
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="75" cy="75" r="2" fill="#FDE047">
            <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="40" cy="55" r="1.5" fill="#FDE047">
            <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" begin="0.5s" />
          </circle>
        </g>
      </svg>
    </div>
  );
}
