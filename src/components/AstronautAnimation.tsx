export default function AstronautAnimation() {
  return (
    <div className="w-32 h-48 sm:w-40 sm:h-60 animate-astronaut-float">
      <svg
        viewBox="0 0 120 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="astronautGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0E7FF" />
            <stop offset="100%" stopColor="#C7D2FE" />
          </linearGradient>
          <linearGradient id="helmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DBEAFE" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>
          <radialGradient id="visorGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        <ellipse cx="60" cy="170" rx="35" ry="6" fill="#1E293B" opacity="0.2">
          <animate attributeName="rx" values="35;40;35" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.15;0.2" dur="3s" repeatCount="indefinite" />
        </ellipse>

        <g className="astronaut-body">
          <rect x="30" y="70" width="60" height="70" rx="10" fill="url(#astronautGradient)" stroke="#6366F1" strokeWidth="2" />

          <rect x="10" y="80" width="20" height="50" rx="10" fill="url(#astronautGradient)" stroke="#6366F1" strokeWidth="2" />
          <rect x="90" y="80" width="20" height="50" rx="10" fill="url(#astronautGradient)" stroke="#6366F1" strokeWidth="2">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 100 80; -5 100 80; 0 100 80"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>

          <rect x="35" y="135" width="20" height="35" rx="8" fill="url(#astronautGradient)" stroke="#6366F1" strokeWidth="2" />
          <rect x="65" y="135" width="20" height="35" rx="8" fill="url(#astronautGradient)" stroke="#6366F1" strokeWidth="2" />

          <circle cx="45" cy="170" r="8" fill="#475569" />
          <circle cx="75" cy="170" r="8" fill="#475569" />

          <circle cx="60" cy="35" r="30" fill="url(#helmetGradient)" stroke="#6366F1" strokeWidth="3" />

          <ellipse cx="60" cy="35" rx="22" ry="18" fill="url(#visorGradient)">
            <animate attributeName="opacity" values="0.9;0.7;0.9" dur="4s" repeatCount="indefinite" />
          </ellipse>

          <circle cx="52" cy="31" r="3" fill="white" opacity="0.8" />
          <circle cx="57" cy="27" r="2" fill="white" opacity="0.6" />

          <rect x="55" y="5" width="10" height="8" rx="2" fill="#EF4444" />
          <circle cx="60" cy="2" r="3" fill="#FCA5A5" />

          <path d="M 35 90 L 30 100 L 35 100" fill="none" stroke="#6366F1" strokeWidth="2" />
          <path d="M 85 90 L 90 100 L 85 100" fill="none" stroke="#6366F1" strokeWidth="2" />

          <circle cx="45" cy="105" r="4" fill="#8B5CF6" opacity="0.6" />
          <circle cx="75" cy="105" r="4" fill="#8B5CF6" opacity="0.6" />
        </g>

        <g className="stars" opacity="0.6">
          <circle cx="10" cy="15" r="2" fill="#FDE047">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="110" cy="25" r="1.5" fill="#FDE047">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="100" cy="130" r="2" fill="#FDE047">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="1s" />
          </circle>
        </g>
      </svg>
    </div>
  );
}
