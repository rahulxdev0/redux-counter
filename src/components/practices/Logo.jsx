export function HeaderLogo({ className = "", width = 200, height = 60 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b00" />
          <stop offset="100%" stopColor="#ff8c42" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      
      {/* Text */}
      <text
        x="50"
        y="37"
        fill="currentColor"
        fontFamily="'Brush Script MT', 'Lucida Handwriting', cursive"
        fontSize="28"
        fontWeight="400"
        letterSpacing="0.5"
      >
        rahul
      </text>
      
      <text
        x="115"
        y="37"
        fill="#ff6b00"
        fontFamily="'Brush Script MT', 'Lucida Handwriting', cursive"
        fontSize="30"
        fontWeight="700"
        letterSpacing="0.5"
      >
        X
      </text>
      
      <text
        x="132"
        y="37"
        fill="currentColor"
        fontFamily="'Brush Script MT', 'Lucida Handwriting', cursive"
        fontSize="28"
        fontWeight="400"
        letterSpacing="0.5"
      >
        dev
      </text>
    </svg>
  );
}
