import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export function Logo({ className = "h-12", iconOnly = false, light = false }: LogoProps) {
  const blueColor = light ? "#FFFFFF" : "#0A2342";
  const goldColor = "#D4A017";
  const textColor = light ? "#FFFFFF" : "#0A2342";
  const subTextColor = light ? "rgba(255,255,255,0.7)" : "#64748B";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Logo Circle Mark */}
      <svg
        viewBox="0 0 120 120"
        className="h-full w-auto flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="sa-logo-mark"
      >
        {/* Outer Top Right Blue Swirl */}
        <path
          d="M45 15C65 15 85 25 93 42C95 46 96 52 96 57C96 51 93 43 88 36C79 24 64 18 45 18C35 18 28 20 22 23C28 18 36 15 45 15Z"
          fill={blueColor}
        />

        {/* Outer Bottom Left Gold Swirl */}
        <path
          d="M22 60C22 75 32 90 48 95C55 97 64 98 72 96C62 99 51 99 42 96C28 92 20 78 20 60C20 52 22 45 25 38C22 45 22 52 22 60Z"
          fill={goldColor}
        />

        {/* S Letter in Blue */}
        <path
          d="M55 35C45 35 32 39 30 50C28 61 40 63 42 66C44 69 40 76 33 76C27 76 25 71 25 71C25 71 21 82 33 82C45 82 54 75 55 65C56 55 45 52 42 49C39 46 43 41 51 41C57 41 60 45 60 45C60 45 63 35 55 35Z"
          fill={blueColor}
        />

        {/* A Letter in Gold */}
        <path
          d="M68 35L48 82H58L63 68H77L82 82H92L72 35H68ZM70 48L74 61H66L70 48Z"
          fill={goldColor}
        />

        {/* Wave Passing Through SA */}
        <path
          d="M28 62C40 68 52 58 68 55C84 52 92 60 92 60C92 60 82 54 68 56C54 58 42 66 28 62Z"
          fill={blueColor}
        />

        {/* Three Professional Figures in Navy Blue */}
        {/* Left Person */}
        <circle cx="50" cy="94" r="3" fill={blueColor} />
        <path d="M45 104C45 100 48 98 51 98C54 98 55 100 55 104H45Z" fill={blueColor} />

        {/* Middle Person (Larger, Center) */}
        <circle cx="60" cy="90" r="4" fill={blueColor} />
        <path d="M54 104C54 97 58 95 60 95C62 95 66 97 66 104H54Z" fill={blueColor} />
        {/* Tie details */}
        <path d="M60 96L59 101L60 102L61 101L60 96Z" fill={goldColor} />

        {/* Right Person */}
        <circle cx="70" cy="94" r="3" fill={blueColor} />
        <path d="M65 104C65 100 68 98 71 98C74 98 75 100 75 104H65Z" fill={blueColor} />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline gap-1">
            <span
              className="text-lg font-extrabold tracking-tight font-display"
              style={{ color: textColor }}
            >
              SA WORKFORCE
            </span>
            <span
              className="text-xs font-semibold tracking-wider font-mono text-brand-gold"
            >
              SOLUTIONS
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="h-[1px] w-3" style={{ backgroundColor: subTextColor }}></div>
            <span
              className="text-[9px] font-medium tracking-widest italic"
              style={{ color: subTextColor }}
            >
              Where Talent Meets Opportunity
            </span>
            <div className="h-[1px] w-3" style={{ backgroundColor: subTextColor }}></div>
          </div>
        </div>
      )}
    </div>
  );
}
