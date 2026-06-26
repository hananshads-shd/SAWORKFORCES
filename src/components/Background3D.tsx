import React from "react";

export function Background3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#cbd5e1] opacity-95" />
      
      {/* 3D Grid Perspective Stage */}
      <div 
        className="absolute inset-0" 
        style={{ 
          perspective: "1100px", 
          perspectiveOrigin: "65% 25%",
          maskImage: "linear-gradient(to right, transparent, rgba(0,0,0,0.02) 20%, rgba(0,0,0,0.8) 65%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, rgba(0,0,0,0.02) 20%, rgba(0,0,0,0.8) 65%)"
        }}
      >
        {/* Style sheet for high-performance keyframe animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes driveStripes {
            0% { background-position-y: 0px; }
            100% { background-position-y: -240px; }
          }
          @keyframes moveForwardSlow {
            0% { transform: translateY(0px) rotateX(-70deg) scale(0.18); opacity: 0; }
            8% { opacity: 1; }
            92% { opacity: 1; }
            100% { transform: translateY(2200px) rotateX(-70deg) scale(1.65); opacity: 0; }
          }
          @keyframes moveForwardFast {
            0% { transform: translateY(-200px) rotateX(-70deg) scale(0.18); opacity: 0; }
            12% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(2200px) rotateX(-70deg) scale(1.75); opacity: 0; }
          }
          @keyframes moveBackward {
            0% { transform: translateY(2000px) rotateX(-70deg) scale(1.6); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-150px) rotateX(-70deg) scale(0.18); opacity: 0; }
          }
          @keyframes streetlightSway {
            0%, 100% { opacity: 0.15; transform: scaleX(1); }
            50% { opacity: 0.28; transform: scaleX(1.06); }
          }
          @keyframes glowPulse {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(212, 160, 23, 0.5)); }
            50% { filter: drop-shadow(0 0 16px rgba(212, 160, 23, 0.85)); }
          }
        `}} />

        {/* The 3D Ground Plane (Roads & Grid) */}
        <div 
          className="absolute w-[1000px] h-[3200px] left-1/2 -ml-[450px] origin-top"
          style={{
            top: "100px",
            transform: "rotateX(71deg) translateY(-600px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Subtle Ambient City Grid Mesh on the sides of the road */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #0A2342 1px, transparent 1px),
                linear-gradient(to bottom, #0A2342 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px"
            }}
          />

          {/* Core Multi-Lane Premium Highway */}
          <div className="absolute left-[150px] w-[700px] h-full bg-slate-800/10 border-x-[8px] border-slate-300/40 relative shadow-[inset_0_0_100px_rgba(10,35,66,0.06)]">
            
            {/* Asphalt subtle texture */}
            <div className="absolute inset-0 bg-slate-900/[0.02]" />

            {/* Lane 1 Divider (Dashed) */}
            <div 
              className="absolute inset-y-0 left-[233px] w-2 opacity-50"
              style={{
                backgroundImage: "linear-gradient(to bottom, #D4A017 60%, transparent 40%)",
                backgroundSize: "8px 120px",
                animation: "driveStripes 2.4s linear infinite"
              }}
            />

            {/* Lane 2 Divider (Dashed) */}
            <div 
              className="absolute inset-y-0 left-[466px] w-2 opacity-50"
              style={{
                backgroundImage: "linear-gradient(to bottom, #ffffff 60%, transparent 40%)",
                backgroundSize: "8px 120px",
                animation: "driveStripes 2.4s linear infinite"
              }}
            />

            {/* Solid Safety Road Shoulders (Left & Right Gold Lines) */}
            <div className="absolute inset-y-0 left-4 w-1 bg-brand-gold/30" />
            <div className="absolute inset-y-0 right-4 w-1 bg-brand-gold/30" />

            {/* === PASSING VEHICLES IN PERSPECTIVE (UPRIGHT BILLBOARDS) === */}

            {/* VEHICLE 1: PREMIUM GOLD CAB (Lane 1 - Driving Towards Us) */}
            <div 
              className="absolute left-[60px] w-24 h-16 origin-bottom z-20"
              style={{
                top: "100px",
                animation: "moveForwardFast 6.2s cubic-bezier(0.1, 0.4, 0.2, 1) infinite",
                animationDelay: "0s"
              }}
            >
              {/* Headlight cone projected flat on road */}
              <div 
                className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-96 bg-gradient-to-b from-brand-gold/25 to-transparent origin-top opacity-30"
                style={{
                  clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                  transform: "rotateX(0deg) translateY(0px)"
                }}
              />
              
              {/* Upright Car Object */}
              <div className="w-full h-full flex flex-col items-center justify-end">
                {/* Taxi Sign */}
                <div className="bg-brand-gold text-brand-blue-dark text-[7px] font-mono font-black px-1 rounded-sm border border-brand-gold-dark shadow-sm py-0.5 animate-pulse mb-0.5 select-none">
                  SA CAB
                </div>
                {/* Cab Vector Front */}
                <svg className="w-20 h-12 text-brand-gold filter drop-shadow-md" viewBox="0 0 100 60" fill="currentColor">
                  {/* Roof & Windshield */}
                  <path d="M25 22L35 6h30l10 16z" fill="#0A2342" />
                  <path d="M28 20l8-12h28l8 12z" fill="#94a3b8" opacity="0.8" />
                  {/* Mirrors */}
                  <rect x="18" y="22" width="6" height="4" rx="1" fill="#A57C10" />
                  <rect x="76" y="22" width="6" height="4" rx="1" fill="#A57C10" />
                  {/* Main Car Body */}
                  <path d="M15 24h70v18H15z" fill="#D4A017" />
                  {/* Grill and Bumper */}
                  <path d="M35 34h30v6H35z" fill="#1e293b" />
                  <rect x="42" y="35" width="16" height="4" rx="1" fill="#cbd5e1" />
                  {/* Glowing Headlights */}
                  <circle cx="24" cy="31" r="5" fill="#fff" className="animate-pulse" style={{ animation: "glowPulse 1.5s infinite" }} />
                  <circle cx="76" cy="31" r="5" fill="#fff" className="animate-pulse" style={{ animation: "glowPulse 1.5s infinite" }} />
                  {/* Wheel arches */}
                  <path d="M18 42h12v-4h-12z" fill="#0f172a" />
                  <path d="M70 42h12v-4h-12z" fill="#0f172a" />
                </svg>
              </div>
            </div>

            {/* VEHICLE 2: PREMIUM LUXURY CAB (Lane 2 - Driving Towards Us) */}
            <div 
              className="absolute left-[295px] w-24 h-16 origin-bottom z-10"
              style={{
                top: "100px",
                animation: "moveForwardSlow 8.4s cubic-bezier(0.15, 0.45, 0.25, 1) infinite",
                animationDelay: "3.2s"
              }}
            >
              {/* Headlight cone */}
              <div 
                className="absolute top-12 left-1/2 -translate-x-1/2 w-52 h-80 bg-gradient-to-b from-amber-200/20 to-transparent origin-top opacity-20"
                style={{
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)",
                }}
              />
              
              <div className="w-full h-full flex flex-col items-center justify-end">
                {/* Premium Badge */}
                <div className="bg-brand-blue text-brand-gold text-[6px] font-mono font-bold px-1.5 rounded-sm border border-brand-gold shadow py-0.5 mb-0.5">
                  BLACK SUITE
                </div>
                {/* Sedan Vector Front */}
                <svg className="w-18 h-11 text-slate-800 filter drop-shadow-md" viewBox="0 0 100 60" fill="currentColor">
                  {/* Cabin */}
                  <path d="M28 24L36 8h28l8 16z" fill="#051325" />
                  <path d="M31 22l6-11h26l6 11z" fill="#475569" opacity="0.9" />
                  {/* Mirrors */}
                  <rect x="20" y="24" width="6" height="3" rx="1" fill="#0f172a" />
                  <rect x="74" y="24" width="6" height="3" rx="1" fill="#0f172a" />
                  {/* Body */}
                  <path d="M18 25h64v16H18z" fill="#1e293b" />
                  {/* Premium Chrome grill */}
                  <path d="M38 33h24v5H38z" fill="#A57C10" />
                  {/* Xenon Headlights */}
                  <circle cx="26" cy="30" r="4" fill="#e2e8f0" style={{ filter: "drop-shadow(0 0 8px #fff)" }} />
                  <circle cx="74" cy="30" r="4" fill="#e2e8f0" style={{ filter: "drop-shadow(0 0 8px #fff)" }} />
                </svg>
              </div>
            </div>

            {/* VEHICLE 3: EXECUTIVE TRANSIT OUTSOURCE VAN (Lane 3 - Driving Away from Us) */}
            <div 
              className="absolute left-[520px] w-24 h-20 origin-bottom z-15"
              style={{
                top: "100px",
                animation: "moveBackward 7.5s cubic-bezier(0.2, 0.4, 0.1, 1) infinite",
                animationDelay: "1.5s"
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-end">
                {/* Outsource Logistics Rear View */}
                <svg className="w-22 h-16 text-brand-blue-light filter drop-shadow-md" viewBox="0 0 100 70" fill="currentColor">
                  {/* Van Tall Box Body */}
                  <path d="M15 10h70v44H15z" fill="#0A2342" />
                  <rect x="18" y="4" width="64" height="6" rx="2" fill="#D4A017" /> {/* Gold Top Rails */}
                  {/* Rear Cargo Windows */}
                  <rect x="22" y="16" width="24" height="15" rx="1" fill="#051325" />
                  <rect x="54" y="16" width="24" height="15" rx="1" fill="#051325" />
                  {/* Corporate branding sign on door */}
                  <text x="50" y="43" fill="#D4A017" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">SA LOGISTICS</text>
                  {/* Rear Bumper & License plate */}
                  <rect x="15" y="52" width="70" height="6" fill="#1e293b" />
                  <rect x="42" y="53" width="16" height="4" fill="#cbd5e1" />
                  {/* Glowing Red Taillights */}
                  <rect x="18" y="46" width="8" height="3" rx="1" fill="#ef4444" style={{ filter: "drop-shadow(0 0 8px #ef4444)" }} />
                  <rect x="74" y="46" width="8" height="3" rx="1" fill="#ef4444" style={{ filter: "drop-shadow(0 0 8px #ef4444)" }} />
                </svg>
              </div>
            </div>

            {/* VEHICLE 4: ANOTHER EXPEDITIOUS GOLD CAB (Lane 1 - Driving Towards Us) */}
            <div 
              className="absolute left-[75px] w-24 h-16 origin-bottom z-25"
              style={{
                top: "100px",
                animation: "moveForwardFast 7.8s cubic-bezier(0.12, 0.42, 0.22, 1) infinite",
                animationDelay: "3.5s"
              }}
            >
              {/* Headlight cone */}
              <div 
                className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-96 bg-gradient-to-b from-brand-gold/20 to-transparent origin-top opacity-25"
                style={{
                  clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                }}
              />
              
              <div className="w-full h-full flex flex-col items-center justify-end">
                <div className="bg-brand-gold text-brand-blue-dark text-[7px] font-mono font-black px-1 rounded-sm border border-brand-gold-dark shadow py-0.5 mb-0.5">
                  SA CARS
                </div>
                <svg className="w-20 h-12 text-brand-gold filter drop-shadow-md" viewBox="0 0 100 60" fill="currentColor">
                  <path d="M25 22L35 6h30l10 16z" fill="#0A2342" />
                  <path d="M28 20l8-12h28l8 12z" fill="#94a3b8" opacity="0.8" />
                  <rect x="18" y="22" width="6" height="4" rx="1" fill="#A57C10" />
                  <rect x="76" y="22" width="6" height="4" rx="1" fill="#A57C10" />
                  <path d="M15 24h70v18H15z" fill="#D4A017" />
                  <path d="M35 34h30v6H35z" fill="#1e293b" />
                  <circle cx="24" cy="31" r="5" fill="#fff" className="animate-pulse" style={{ animation: "glowPulse 1.2s infinite" }} />
                  <circle cx="76" cy="31" r="5" fill="#fff" className="animate-pulse" style={{ animation: "glowPulse 1.2s infinite" }} />
                  <path d="M18 42h12v-4h-12z" fill="#0f172a" />
                  <path d="M70 42h12v-4h-12z" fill="#0f172a" />
                </svg>
              </div>
            </div>

          </div>

          {/* === SIDEWAY STREETLIGHTS sliding backward to simulate high speed === */}
          {/* Light Post Left */}
          <div 
            className="absolute left-[80px] w-24 h-[120px] origin-bottom z-30"
            style={{
              top: "400px",
              animation: "moveBackward 5.0s linear infinite",
              animationDelay: "0.5s"
            }}
          >
            <div className="relative w-full h-full">
              {/* Ground shadow light cone */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 w-48 h-48 bg-radial from-brand-gold/25 to-transparent rounded-full opacity-25"
                style={{
                  animation: "streetlightSway 4s ease-in-out infinite"
                }}
              />
              {/* Upright lamp post */}
              <svg className="w-16 h-28 text-slate-400 absolute bottom-0 left-4" viewBox="0 0 40 100" fill="currentColor" style={{ transform: "rotateX(-70deg)" }}>
                {/* Pole */}
                <rect x="18" y="10" width="4" height="90" fill="#64748b" />
                {/* Arm */}
                <path d="M20 10h12v4h-12z" fill="#64748b" />
                {/* Head */}
                <rect x="28" y="14" width="8" height="4" rx="1" fill="#D4A017" />
              </svg>
            </div>
          </div>

          {/* Light Post Right */}
          <div 
            className="absolute right-[50px] w-24 h-[120px] origin-bottom z-30"
            style={{
              top: "400px",
              animation: "moveBackward 5.0s linear infinite",
              animationDelay: "3.0s"
            }}
          >
            <div className="relative w-full h-full">
              {/* Ground shadow light cone */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 w-48 h-48 bg-radial from-brand-gold/25 to-transparent rounded-full opacity-25"
                style={{
                  animation: "streetlightSway 4s ease-in-out infinite"
                }}
              />
              {/* Upright lamp post */}
              <svg className="w-16 h-28 text-slate-400 absolute bottom-0 right-4" viewBox="0 0 40 100" fill="currentColor" style={{ transform: "rotateX(-70deg)" }}>
                {/* Pole */}
                <rect x="18" y="10" width="4" height="90" fill="#64748b" />
                {/* Arm */}
                <path d="M8 10h12v4H8z" fill="#64748b" />
                {/* Head */}
                <rect x="4" y="14" width="8" height="4" rx="1" fill="#D4A017" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
