import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Car, ShieldCheck, Navigation, Users, CheckCircle, ArrowRight, X, Sparkles } from "lucide-react";

export function DriversSection() {
  const [driverApplyOpen, setDriverApplyOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const driverSegments = [
    {
      title: "Uber Black & Luxury Rides",
      desc: "Providing certified elite chauffeurs with premium vehicle etiquettes, safe navigation skills, and YELLOW board clearance.",
      highlight: "Uber rating average: 4.85+"
    },
    {
      title: "Corporate Executive Fleets",
      desc: "Reliable, presentable drivers for MNC executive fleets. Bilingual proficiency and confidentiality assured.",
      highlight: "24/7 rotational backups"
    },
    {
      title: "Logistics & Transport Firms",
      desc: "Experienced heavy-vehicle cargo and delivery truck operators trained in payload handling and interstate safety.",
      highlight: "Active licensing verification"
    },
    {
      title: "Commercial Fleet Operators",
      desc: "Onboarding massive driver blocks for city transit operators, shuttle buses, and retail fulfillment channels.",
      highlight: "Instant replacement backup"
    }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setDriverApplyOpen(false);
    }, 2500);
  };

  const handleRouteToJobs = () => {
    const element = document.querySelector("#jobs");
    if (element) {
      // Find the search input if it exists and set it
      const searchInput = document.getElementById("job-search-input") as HTMLInputElement;
      if (searchInput) {
        searchInput.value = "Chauffeur";
        // Dispatch event so state updates
        searchInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="drivers" className="bg-brand-blue-dark py-24 text-white relative overflow-hidden">
      {/* Background ambient gold/blue mesh light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-gold/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-blue/20 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-bold tracking-wider uppercase font-mono">
              <Car className="h-3.5 w-3.5" />
              <span>DIVISION OF EXCELLENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-tight">
              Elite Commercial <br />
              <span className="gradient-gold-text">Driver Recruitment</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We source, background-verify, train, and deploy professional commercial drivers (Yellow Badge) across India. Our rigorous testing guarantees your fleet has safe, courteous, and highly dependable operators at the wheel.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-5.5 w-5.5 text-brand-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-white">100% Vetted</span>
                  <span className="text-xs text-slate-400">Police database approved</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Navigation className="h-5.5 w-5.5 text-brand-gold rotate-45" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-white">Ethique Certified</span>
                  <span className="text-xs text-slate-400">Customer relations trained</span>
                </div>
              </div>
            </div>

            {/* CTA Segment */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setDriverApplyOpen(true)}
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue-dark font-extrabold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-brand-gold/10"
              >
                <span>Register Driver Fleet</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={handleRouteToJobs}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold px-6 py-3.5 rounded-xl transition-all text-sm"
              >
                Find Active Driver Jobs
              </button>
            </div>
          </motion.div>

          {/* Right Visual Column (Animated Black Cab Fleet & Segment Cards) */}
          <div className="lg:col-span-6 relative flex flex-col space-y-6">
            
            {/* Animated Highway Car Loop Section */}
            <div className="bg-brand-blue/40 border border-white/10 rounded-2xl p-4 overflow-hidden relative h-36 flex flex-col justify-end">
              <div className="absolute top-3 left-4 flex items-center gap-1.5 text-slate-400 font-mono text-[9px] tracking-widest font-bold uppercase">
                <Navigation className="h-3.5 w-3.5 text-brand-gold animate-bounce" />
                <span>ACTIVE FLEET TRACKER — HIGHWAY LOOP</span>
              </div>
              
              {/* Loop track highway lines */}
              <div className="w-full h-[2px] bg-slate-500/20 absolute bottom-12 left-0" />
              <div className="w-full h-[1px] bg-brand-gold/40 border-dashed border-t-[3px] absolute bottom-[28px] left-0 animate-pulse" />
              <div className="w-full h-[2px] bg-slate-500/20 absolute bottom-6 left-0" />

              {/* Vehicle SVG sliding animations */}
              <div className="absolute bottom-8 left-0 w-full h-8 overflow-hidden pointer-events-none">
                {/* Taxi 1 */}
                <motion.div
                  animate={{
                    x: ["-50px", "650px"],
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 flex items-center gap-1"
                >
                  <svg viewBox="0 0 64 24" className="h-6 w-auto fill-brand-gold">
                    <path d="M12 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm34 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-35.3-9h36.6c.7 0 1.3-.4 1.5-1l2.5-6c.3-.8-.3-1.6-1.1-1.6h-41c-.8 0-1.4.8-1.1 1.6l2.5 6c.2.6.8 1 1.6 1zM4 14v4h4.3c-.2-.6-.3-1.3-.3-2 0-.7.1-1.4.3-2H4zm56 0h-4.3c.2.6.3 1.3.3 2s-.1 1.4-.3 2H60v-4z" />
                  </svg>
                  <span className="text-[7px] font-bold font-mono bg-brand-gold text-brand-blue-dark px-1.5 rounded-full">CAB-01</span>
                </motion.div>

                {/* Chauffeur Sedan 2 */}
                <motion.div
                  animate={{
                    x: ["-150px", "700px"],
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 4,
                  }}
                  className="absolute bottom-1.5 flex items-center gap-1"
                >
                  <svg viewBox="0 0 64 24" className="h-5.5 w-auto fill-slate-300">
                    <path d="M12 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm34 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-35.3-9h36.6c.7 0 1.3-.4 1.5-1l2.5-6c.3-.8-.3-1.6-1.1-1.6h-41c-.8 0-1.4.8-1.1 1.6l2.5 6c.2.6.8 1 1.6 1z" />
                  </svg>
                  <span className="text-[7px] font-bold font-mono bg-white text-slate-800 px-1.5 rounded-full">EXEC-07</span>
                </motion.div>
              </div>
            </div>

            {/* Segment Grid cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {driverSegments.map((seg, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/8 p-5 rounded-xl text-left hover:bg-white/8 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-gold">{seg.highlight}</span>
                    <h4 className="text-base font-bold text-white font-display mt-1.5 mb-2">{seg.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{seg.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Driver Fleet Registration Dialog */}
      <AnimatePresence>
        {driverApplyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-slate-800">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-blue-dark/60 backdrop-blur-md"
              onClick={() => setDriverApplyOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative z-10 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setDriverApplyOpen(false)}
                className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 bg-brand-blue-muted rounded-xl flex items-center justify-center">
                  <Car className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase">DRIVER ONBOARDING portal</span>
                  <h4 className="text-xl font-bold text-brand-blue font-display">Driver Fleet Recruitment Request</h4>
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 animate-bounce">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h5 className="text-lg font-bold text-slate-800">Registration Complete!</h5>
                  <p className="text-sm text-slate-500">Our Fleet Sourcing Officers will call your team within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Company / Fleet Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold"
                      placeholder="e.g., Uber India, Apex Cab Ltd"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Contact Person</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold"
                        placeholder="e.g., Mr. Anand"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Contact Phone</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold"
                        placeholder="e.g., 63622 39481"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Required Drivers Count</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold">
                      <option>1 - 5 Chauffeurs</option>
                      <option>5 - 20 Operators</option>
                      <option>20 - 50 Drivers</option>
                      <option>50+ Large Enterprise Fleet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Specific Needs / Comments</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold"
                      placeholder="Specify if Uber Black certified, logistics heavy vehicles, corporate shift operations..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Request Fleet Staffing Proposal</span>
                    <Sparkles className="h-4 w-4 text-brand-gold" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
