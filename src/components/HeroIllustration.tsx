const HeroIllustration = () => {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-lg"
    >
      {/* Cloud shapes */}
      <g opacity="0.15">
        <ellipse cx="300" cy="200" rx="180" ry="80" fill="hsl(var(--primary))" />
        <ellipse cx="220" cy="180" rx="100" ry="60" fill="hsl(var(--primary))" />
        <ellipse cx="400" cy="180" rx="110" ry="65" fill="hsl(var(--primary))" />
      </g>

      {/* Main cloud - outlined */}
      <g>
        <path
          d="M160 280c-33 0-60-27-60-60 0-30 22-55 50-59 5-40 39-70 80-70 30 0 56 16 70 40 8-5 18-8 28-8 33 0 60 27 60 60 0 2 0 4-0.5 6 20 10 32.5 30 32.5 54 0 33-27 60-60 60H160z"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Server rack */}
      <rect x="230" y="300" width="140" height="160" rx="8" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.4" />
      <line x1="230" y1="340" x2="370" y2="340" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
      <line x1="230" y1="380" x2="370" y2="380" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
      <line x1="230" y1="420" x2="370" y2="420" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />

      {/* Server indicator lights */}
      <circle cx="252" cy="320" r="4" fill="hsl(var(--primary))" opacity="0.8" />
      <circle cx="268" cy="320" r="4" fill="hsl(var(--primary))" opacity="0.4" />
      <circle cx="252" cy="360" r="4" fill="hsl(var(--primary))" opacity="0.6" />
      <circle cx="268" cy="360" r="4" fill="hsl(var(--primary))" opacity="0.8" />
      <circle cx="252" cy="400" r="4" fill="hsl(var(--primary))" opacity="0.8" />
      <circle cx="268" cy="400" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="252" cy="440" r="4" fill="hsl(var(--primary))" opacity="0.4" />
      <circle cx="268" cy="440" r="4" fill="hsl(var(--primary))" opacity="0.7" />

      {/* Connection lines from cloud to server */}
      <line x1="300" y1="280" x2="300" y2="300" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

      {/* Floating nodes */}
      <g opacity="0.5">
        <circle cx="480" cy="160" r="20" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <circle cx="480" cy="160" r="5" fill="hsl(var(--primary))" opacity="0.6" />
        <line x1="388" y1="200" x2="460" y2="165" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      <g opacity="0.5">
        <circle cx="100" cy="140" r="16" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="140" r="4" fill="hsl(var(--primary))" opacity="0.6" />
        <line x1="116" y1="148" x2="160" y2="200" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      <g opacity="0.4">
        <circle cx="520" cy="320" r="14" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <circle cx="520" cy="320" r="3.5" fill="hsl(var(--primary))" opacity="0.6" />
        <line x1="370" y1="350" x2="506" y2="322" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      <g opacity="0.35">
        <circle cx="80" cy="360" r="12" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <circle cx="80" cy="360" r="3" fill="hsl(var(--primary))" opacity="0.6" />
        <line x1="92" y1="355" x2="230" y2="340" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" />
      </g>

      {/* Message/SMS icon */}
      <g opacity="0.5" transform="translate(440, 380)">
        <rect width="50" height="36" rx="6" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <polyline points="0,0 25,20 50,0" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" transform="translate(0, 4)" />
      </g>
      <line x1="370" y1="400" x2="440" y2="398" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

      {/* Globe icon */}
      <g opacity="0.4" transform="translate(60, 240)">
        <circle cx="20" cy="20" r="18" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <ellipse cx="20" cy="20" rx="8" ry="18" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
        <line x1="2" y1="20" x2="38" y2="20" stroke="hsl(var(--primary))" strokeWidth="1" />
      </g>
      <line x1="98" y1="260" x2="160" y2="260" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

      {/* Subtle animated dots - static positions */}
      <circle cx="450" cy="240" r="2" fill="hsl(var(--primary))" opacity="0.3" />
      <circle cx="130" cy="320" r="2" fill="hsl(var(--primary))" opacity="0.25" />
      <circle cx="500" cy="280" r="1.5" fill="hsl(var(--primary))" opacity="0.2" />
      <circle cx="180" cy="420" r="2" fill="hsl(var(--primary))" opacity="0.2" />
    </svg>
  );
};

export default HeroIllustration;
