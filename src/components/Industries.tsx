import React from "react";
import { motion } from "motion/react";
import {
  Car,
  Truck,
  Activity,
  Compass,
  ShoppingBag,
  Terminal,
  Settings,
  Layers,
  ArrowRight,
  Briefcase
} from "lucide-react";
import { INDUSTRIES_DATA } from "../data";

export function Industries() {
  // Map icon strings to Lucide components safely
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Car":
        return <Car className={className} />;
      case "Truck":
        return <Truck className={className} />;
      case "Activity":
        return <Activity className={className} />;
      case "Compass":
        return <Compass className={className} />;
      case "ShoppingBag":
        return <ShoppingBag className={className} />;
      case "Terminal":
        return <Terminal className={className} />;
      case "Settings":
        return <Settings className={className} />;
      case "Layers":
        return <Layers className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  const handleRouteToJobs = (industryName: string) => {
    const element = document.querySelector("#jobs");
    if (element) {
      const searchInput = document.getElementById("job-search-input") as HTMLInputElement;
      if (searchInput) {
        searchInput.value = industryName.split(" ")[0]; // Take first word as search term
        // Dispatch event so state updates
        searchInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/5 text-brand-blue rounded-full text-xs font-bold tracking-wider uppercase font-mono">
            <Layers className="h-3.5 w-3.5 text-brand-gold" />
            <span>INDUSTRIES WE SERVE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue font-display tracking-tight leading-tight">
            Tailored Industry Expertise
          </h2>
          
          <div className="h-[3px] w-20 bg-brand-gold rounded-full" />
          
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
            Delivering specialized recruiting pipelines configured specifically to the functional safety, technical complexity, and compliance standards of key Indian sectors.
          </p>
        </motion.div>

        {/* 8-Grid of Industries with premium card hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              whileHover={{
                y: -6,
                borderColor: "#D4A017",
                boxShadow: "0 15px 30px rgba(10,35,66,0.06)",
                transition: { duration: 0.2 }
              }}
              onClick={() => handleRouteToJobs(ind.name)}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 flex flex-col justify-between items-start text-left cursor-pointer transition-all group"
            >
              <div className="w-full">
                {/* Icon wrapper with subtle rotation */}
                <div className="h-11 w-11 bg-slate-50 group-hover:bg-brand-blue-muted rounded-xl flex items-center justify-center mb-5 border border-slate-100 transition-colors">
                  {renderIcon(ind.iconName, "h-5 w-5 text-brand-blue group-hover:text-brand-blue-light transition-transform group-hover:scale-110 duration-300")}
                </div>

                <h3 className="text-base font-bold text-brand-blue font-display mb-2 group-hover:text-brand-blue-light">
                  {ind.name}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              {/* Hover-reveal list of active positions */}
              <div className="w-full pt-4 mt-2 border-t border-slate-100 flex flex-col space-y-2">
                <span className="text-[9px] font-mono font-bold text-slate-400 tracking-widest uppercase">Immediate Hires</span>
                <div className="flex flex-col space-y-1">
                  {ind.rolesAvailable.map((role, i) => (
                    <span key={i} className="text-[10px] font-bold text-slate-700 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-brand-gold flex-shrink-0" />
                      <span className="truncate">{role}</span>
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-1.5 text-[9px] font-extrabold text-brand-gold pt-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  <span>SEARCH ACTIVE ROLES</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Banner */}
        <div className="mt-16 bg-brand-blue text-white rounded-3xl p-8 sm:p-10 text-left relative overflow-hidden shadow-xl border border-brand-blue-light">
          {/* Subtle Background Mark */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 h-64 w-64 text-white/5 pointer-events-none">
            <Briefcase className="h-full w-full" />
          </div>
          
          <div className="relative z-10 max-w-2xl flex flex-col items-start space-y-4">
            <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">CUSTOM STAFFING ALGORITHMS</span>
            <h4 className="text-xl sm:text-2xl font-bold font-display">Need a highly niche specialty workforce configured for your operations?</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our Bangalore core team designs custom screening procedures, psychometric pipelines, and specialized licensing validation schemas tailored entirely to unique enterprise constraints.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue-dark font-extrabold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2 mt-2"
            >
              <span>Consult with a Workforce Architect</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
