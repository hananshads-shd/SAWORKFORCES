import React from "react";
import { motion } from "motion/react";
import { X, Check, ShieldAlert, Sparkles, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";
import { COMPARISON_DATA } from "../data";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/15 text-brand-gold-dark rounded-full text-xs font-bold tracking-wider uppercase font-mono">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>OPERATIONAL REVOLUTION</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue font-display tracking-tight leading-tight">
            How SA Workforce Redefines Staffing
          </h2>
          
          <div className="h-[3px] w-20 bg-brand-gold rounded-full" />
          
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
            Comparing legacy staffing methods to our modern, SLA-driven workforce solutions engine.
          </p>
        </motion.div>

        {/* Comparison Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Legacy Side (Red Flag Accent) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white border border-rose-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-rose-600 font-bold mb-6 font-mono text-xs">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span>TRADITIONAL STAFFING RISKS</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 font-display mb-2 text-left">Legacy Recruitment Methods</h3>
              <p className="text-xs text-slate-500 text-left leading-relaxed mb-6">
                Lacking thorough previous employer verifications, manual payroll paper stacks, and extended sourcing timelines that cost you valuable revenue.
              </p>

              <div className="space-y-4 text-left">
                {[
                  "Average 45 - 60 day hiring cycles",
                  "Unverified credentials and driving records",
                  "High contract default and legal compliance risks",
                  "Over 35% turnover within the first 90 days",
                  "Manual spreadsheets & chaotic shift monitoring"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-600 text-xs">
                    <X className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-50 text-left">
              <span className="text-[10px] font-bold font-mono text-rose-500 uppercase">Legacy Out-of-Pocket Expense</span>
              <p className="text-2xl font-black text-slate-700 tracking-tight font-display mt-1">High Hidden Costs</p>
            </div>
          </motion.div>

          {/* Central Connecting Graphic (VS Badge) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center relative">
            <div className="h-full w-[1px] bg-slate-200" />
            <div className="absolute h-14 w-14 rounded-full bg-brand-blue-dark text-brand-gold border-2 border-brand-gold shadow-lg flex items-center justify-center font-black font-mono text-sm z-10">
              VS
            </div>
            <div className="h-full w-[1px] bg-slate-200" />
          </div>

          {/* Premium SA Workforce Solutions Side (Gold/Blue Accent) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-brand-blue-dark text-white border-2 border-brand-gold rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between"
          >
            {/* Corner Decorative Sparkle */}
            <div className="absolute top-5 right-5 text-brand-gold animate-pulse">
              <Sparkles className="h-6 w-6" />
            </div>

            <div>
              <div className="flex items-center gap-2 text-brand-gold font-bold mb-6 font-mono text-xs">
                <CheckCircle className="h-5 w-5 text-brand-gold flex-shrink-0 animate-bounce" />
                <span>SA WORKFORCE GUARANTEES</span>
              </div>
              
              <h3 className="text-xl font-bold text-white font-display mb-2 text-left">SA Workforce Solutions</h3>
              <p className="text-xs text-slate-300 text-left leading-relaxed mb-6">
                Modern full-stack workforce planning backed by SLA-driven replacements, automated geo-attendance, and fully legal compliance.
              </p>

              <div className="space-y-4 text-left">
                {[
                  "Pre-screened candidates hired in 10 - 14 days",
                  "100% physically and police background verified",
                  "Fully compliant PF, ESI, and LWF payroll outsourcing",
                  "98% candidate retention rate stability",
                  "Geo-fenced automated attendance systems"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-200 text-xs">
                    <Check className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-left">
              <span className="text-[10px] font-bold font-mono text-brand-gold uppercase">Enterprise Result</span>
              <p className="text-2xl font-black text-brand-gold tracking-tight font-display mt-1">45% HR Savings</p>
            </div>
          </motion.div>

        </div>

        {/* Detailed Horizontal Grid Comparison List */}
        <div className="mt-16 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
          <p className="text-left text-xs font-bold font-mono text-brand-blue-light tracking-widest uppercase mb-6">
            Detailed KPI Comparison Sheet
          </p>
          
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-mono">
                  <th className="pb-4 font-bold">STAFFING KPI METRIC</th>
                  <th className="pb-4 font-bold">TRADITIONAL RECRUITERS</th>
                  <th className="pb-4 font-bold text-brand-blue">SA WORKFORCE SOLUTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-medium">
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 text-slate-800 font-bold">{row.title}</td>
                    <td className="py-4 text-slate-500 font-mono">{row.traditional}</td>
                    <td className="py-4 text-brand-blue font-bold flex items-center gap-1.5 font-sans">
                      <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span>{row.saWorkforce}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
