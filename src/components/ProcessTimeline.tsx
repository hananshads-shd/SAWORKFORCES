import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, ChevronDown, Award, Calendar, HelpCircle } from "lucide-react";
import { PROCESS_DATA } from "../data";

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-gold-dark rounded-full text-xs font-bold tracking-wider uppercase font-mono">
            <Award className="h-3 w-3" />
            <span>OUR ROADMAP</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display tracking-tight">
            Our Recruitment Process
          </h2>
          
          <div className="h-[3px] w-16 bg-brand-gold rounded-full" />
          
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
            A meticulous, calendar-vetted journey from initial consultation to employee onboarding, completing in just 12 business days on average.
          </p>
        </motion.div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-dashed border-slate-200 ml-4 sm:ml-32 md:ml-40 space-y-12 pb-6 text-left">
          
          {PROCESS_DATA.map((stage, idx) => {
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Stage Bullet Marker (Numerical) */}
                <div className="absolute -left-[17px] top-1.5 h-8 w-8 bg-brand-blue text-white rounded-full border-4 border-white shadow-md flex items-center justify-center text-xs font-bold font-mono">
                  {stage.step}
                </div>

                {/* Day/Duration Side Badge (For Larger Screens) */}
                <div className="hidden sm:flex absolute right-full mr-8 top-1.5 flex-col items-end text-right w-28">
                  <div className="flex items-center gap-1 bg-brand-blue-muted px-2.5 py-1 rounded-full text-brand-blue text-[10px] font-mono font-bold tracking-wider uppercase border border-brand-blue/5">
                    <Calendar className="h-3 w-3 text-brand-gold" />
                    <span>{stage.duration}</span>
                  </div>
                </div>

                {/* Main Step Detail Card */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 hover:border-brand-gold/30 hover:bg-white transition-all shadow-sm hover:shadow-md">
                  
                  {/* Mobile Duration Badge */}
                  <div className="sm:hidden inline-flex items-center gap-1 bg-brand-blue-muted px-2 py-0.5 rounded-full text-brand-blue text-[9px] font-mono font-bold tracking-wider uppercase mb-3 border border-brand-blue/5">
                    <Calendar className="h-3 w-3 text-brand-gold" />
                    <span>{stage.duration}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-brand-blue font-display flex items-center gap-2">
                    {stage.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-2 leading-relaxed font-sans">
                    {stage.description}
                  </p>

                  {/* Sub deliverables bullet items */}
                  <div className="mt-5 pt-4 border-t border-slate-200/40 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {stage.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-500 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Connector Arrow Icon below each step (except last) */}
                {idx < PROCESS_DATA.length - 1 && (
                  <div className="absolute -bottom-8 left-[17px] -translate-x-1/2 text-slate-300 pointer-events-none hidden sm:block">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                )}

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
