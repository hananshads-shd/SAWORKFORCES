import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star, Sparkles, UserCheck, TrendingUp, Compass, HeartHandshake, ShieldCheck, HelpCircle } from "lucide-react";
import { Background3D } from "./Background3D";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProfile, setActiveProfile] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-0 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] relative"
    >
      {/* 3D Animated Cab Transit Background */}
      <Background3D />

      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-16 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Text Content & CTAs & Stats */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Tagline Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-brand-gold/10 text-brand-gold-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Where Talent Meets Opportunity
            </motion.span>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6.5xl font-extrabold tracking-tight text-brand-blue font-display leading-[1.1] max-w-3xl"
            >
              Workforce Solutions <br />
              <span className="text-brand-gold font-display">That Drive Growth</span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-sans"
            >
              Connecting elite businesses with exceptional talent through bespoke recruitment, staffing, and management solutions across India.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollToSection("#contact")}
                className="bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/20 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
              
              <button
                onClick={() => handleScrollToSection("#jobs")}
                className="bg-transparent hover:bg-brand-blue/5 text-brand-blue font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-brand-blue flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>View Openings</span>
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-300/60 w-full max-w-xl"
            >
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-blue font-display">15k+</span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">Placed</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-blue font-display">98%</span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">Success</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-blue font-display">450+</span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">Partners</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-extrabold text-brand-blue font-display">24h</span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">Response</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Dashboard Mockup & Overlaps */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end min-h-[460px]">
            
            {/* Interactive Talent Dashboard Card Mockup */}
            <motion.div
              style={{
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_20px_50px_rgba(10,35,66,0.1)] p-6 w-full max-w-[380px] relative z-10 text-left hover:shadow-2xl transition-shadow"
            >
              {/* Floating Active AI Badge */}
              <div className="absolute -top-3.5 right-6 bg-brand-gold text-white text-[9px] font-extrabold uppercase px-3.5 py-1 rounded-full tracking-widest shadow-md flex items-center gap-1.5 animate-pulse">
                <span className="h-1.5 w-1.5 bg-white rounded-full" />
                <span>AI Matching Active</span>
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-extrabold text-base text-brand-blue font-display">Talent Dashboard</h3>
                  <p className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">Interactive Feed</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-md">Bangalore Hub</span>
              </div>

              {/* Profile Pills list */}
              <div className="space-y-3">
                
                {/* Pill 1 - Arjun Nair */}
                <div
                  onClick={() => setActiveProfile(0)}
                  className={`flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer border-l-4 transition-all hover:translate-x-1 ${
                    activeProfile === 0 ? "border-brand-gold bg-amber-50/10 shadow-sm" : "border-slate-300"
                  }`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1618015358954-115ef1ed1515?auto=format&fit=crop&q=80&w=80&h=80"
                    alt="Arjun Nair Profile"
                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-blue">Arjun Nair</span>
                      <span className="text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">99% Fit</span>
                    </div>
                    <p className="text-[9px] text-slate-500 font-medium truncate">Senior Java Developer • 8 yrs exp</p>
                  </div>
                </div>

                {/* Pill 2 - Sarah Kurian */}
                <div
                  onClick={() => setActiveProfile(1)}
                  className={`flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer border-l-4 transition-all hover:translate-x-1 ${
                    activeProfile === 1 ? "border-brand-gold bg-amber-50/10 shadow-sm" : "border-slate-300"
                  }`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=80&h=80"
                    alt="Sarah Kurian Profile"
                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-blue">Sarah Kurian</span>
                      <span className="text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">98% Fit</span>
                    </div>
                    <p className="text-[9px] text-slate-500 font-medium truncate">Project Manager • 12 yrs exp</p>
                  </div>
                </div>

                {/* Pill 3 - Priya Menon */}
                <div
                  onClick={() => setActiveProfile(2)}
                  className={`flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer border-l-4 transition-all hover:translate-x-1 ${
                    activeProfile === 2 ? "border-brand-gold bg-amber-50/10 shadow-sm" : "border-slate-300"
                  }`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=80&h=80"
                    alt="Priya Menon Profile"
                    className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-blue">Priya Menon</span>
                      <span className="text-[8px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">95% Fit</span>
                    </div>
                    <p className="text-[9px] text-slate-500 font-medium truncate">Fleet Operations Lead • 5 yrs exp</p>
                  </div>
                </div>

              </div>

              {/* Hiring Velocity Progress bar */}
              <div className="mt-5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 mb-1.5">
                  <span className="uppercase tracking-wide">Hiring Velocity</span>
                  <span className="text-brand-blue">75% Optimal</span>
                </div>
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-brand-gold rounded-full"
                  />
                </div>
              </div>

            </motion.div>

            {/* Overlapping Driver Sourcing Card */}
            <motion.div
              style={{
                x: mousePosition.x * -0.3,
                y: mousePosition.y * -0.3,
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 left-2 sm:-bottom-10 sm:left-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-brand-gold/30 shadow-[0_15px_35px_rgba(0,0,0,0.08)] z-20 w-64 text-left hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
                <h5 className="text-[10px] font-extrabold text-brand-gold uppercase tracking-wider">Driver Recruitment</h5>
              </div>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-3">
                Premium fleet solutions for logistics and corporate transit.
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-brand-blue">
                <div className="bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                  • Uber Black
                </div>
                <div className="bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                  • Logistics
                </div>
                <div className="bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                  • Corporate
                </div>
                <div className="bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                  • Fleet Ops
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Full-width Gold-Bordered Navy Bottom Service Strip */}
      <div className="w-full bg-brand-blue border-t-4 border-brand-gold min-h-[120px] py-8 px-6 sm:px-12 md:px-16 lg:px-24 text-white relative z-10 flex flex-wrap items-center justify-between gap-y-6 gap-x-12">
        
        <div className="flex flex-col text-left space-y-1">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">Staffing</span>
          <p className="text-sm text-slate-300">Flexible workforce solutions</p>
        </div>

        <div className="flex flex-col text-left space-y-1">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">Acquisition</span>
          <p className="text-sm text-slate-300">Full-cycle talent strategy</p>
        </div>

        <div className="flex flex-col text-left space-y-1">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">Outsourcing</span>
          <p className="text-sm text-slate-300">Managed HR & Operations</p>
        </div>

        <div className="flex flex-col text-left space-y-1">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">Career Services</span>
          <p className="text-sm text-slate-300">Professional coaching</p>
        </div>

        <div className="flex flex-col text-left space-y-1 md:text-right">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-widest font-mono">24/7 Support</span>
          <a href="mailto:info@saworkforcesolutions.com" className="text-sm text-white hover:text-brand-gold transition-colors font-semibold">
            info@saworkforcesolutions.com
          </a>
        </div>

      </div>
    </section>
  );
}
