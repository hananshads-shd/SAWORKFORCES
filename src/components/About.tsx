import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, ShieldCheck, Building2, Users, CheckCircle } from "lucide-react";
import { STATS_DATA } from "../data";

// Custom Counter Component for upward animation
function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    // determine increment based on value scale
    const stepTime = Math.max(Math.floor(totalMiliseconds / 50), 15);
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / stepTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  // Format numbers for Indian readability (e.g., 12,500+)
  const formatNumber = (num: number) => {
    return num.toLocaleString("en-IN");
  };

  return (
    <span ref={ref} className="font-display font-black text-4xl sm:text-5xl text-brand-blue tracking-tight">
      {formatNumber(count)}
      <span className="text-brand-gold">{suffix}</span>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About Info Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start text-left space-y-4"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/5 rounded-full text-brand-blue text-xs font-bold tracking-wider uppercase font-mono">
              <Building2 className="h-3 w-3 text-brand-gold" />
              <span>WHO WE ARE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display tracking-tight leading-tight">
              About SA Workforce <br /> Solutions
            </h2>
            
            <div className="h-[3px] w-16 bg-brand-gold rounded-full" />
            
            <p className="text-slate-500 font-mono text-xs font-semibold uppercase tracking-widest pt-2">
              ESTABLISHED IN BANGALORE • SERVING PAN-INDIA
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <p className="text-lg text-slate-700 font-sans leading-relaxed">
              SA Workforce Solutions is a leading recruitment, staffing, and manpower outsourcing company based in Bangalore, India. We serve as a trusted bridge between exceptional talent and corporate partners across the country, building high-performing operational backbones for businesses of all scales.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              From sourcing verified, customer-focused commercial drivers for premium logistics and cab fleets to organizing massive seasonal contract staff or conducting elite headhunting for corporate leaders—we integrate technology-driven compliance with deep human vetting to assure top-tier placement results.
            </p>
            
            {/* Trust Bulletpoints */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800">100% Statuary Compliance</span>
                  <span className="text-xs text-slate-500">Fully aligned with PF, ESI, LWF, and Indian Labor Laws.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800">Rigorous Vetting Methods</span>
                  <span className="text-xs text-slate-500">Multi-tier previous employer reference & physical address audits.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Bento Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => {
            // Pick corresponding icon
            let Icon = Users;
            if (stat.id === "candidates-placed") Icon = Users;
            if (stat.id === "active-talent") Icon = Award;
            if (stat.id === "partner-companies") Icon = Building2;
            if (stat.id === "success-rate") Icon = ShieldCheck;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-md shadow-slate-100 border border-slate-100 flex flex-col text-left items-start transition-all"
              >
                <div className="h-11 w-11 bg-brand-blue-muted rounded-xl flex items-center justify-center mb-4 border border-brand-blue/5">
                  <Icon className="h-5.5 w-5.5 text-brand-blue" />
                </div>
                
                <div className="flex flex-col mt-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="text-base font-bold text-slate-800 font-display mt-2">
                    {stat.label}
                  </span>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Elegant Client Ticker (Deel / Apple style) */}
        <div className="mt-20 pt-10 border-t border-slate-200/60">
          <p className="text-center text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-8">
            Empowering Workforce Operations for Industry Leaders
          </p>
          
          {/* Infinite Scroll Logo Marquee */}
          <div className="marquee-container opacity-60 hover:opacity-100 transition-opacity">
            <div className="marquee-content animate-marquee">
              {/* Partner Logos Text-style (representing clean corporate brands) */}
              {[
                "Uber Black India",
                "LogiTech Cargo",
                "Indiranagar Retail Co",
                "HSR Tech Hub",
                "Vertex Hospitable",
                "BLR Express Logistics",
                "Aura Health Clinics",
                "Capital Care Corp"
              ].map((partner, i) => (
                <div key={i} className="flex items-center gap-2 mx-6 bg-white py-2.5 px-5 rounded-full border border-slate-200/60 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-xs font-extrabold text-brand-blue tracking-wider font-display uppercase">
                    {partner}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless infinite loop */}
              {[
                "Uber Black India",
                "LogiTech Cargo",
                "Indiranagar Retail Co",
                "HSR Tech Hub",
                "Vertex Hospitable",
                "BLR Express Logistics",
                "Aura Health Clinics",
                "Capital Care Corp"
              ].map((partner, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-2 mx-6 bg-white py-2.5 px-5 rounded-full border border-slate-200/60 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-xs font-extrabold text-brand-blue tracking-wider font-display uppercase">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
