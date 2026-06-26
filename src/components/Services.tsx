import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Target,
  Users,
  Car,
  Briefcase,
  Cpu,
  Award,
  ArrowRight,
  CheckCircle2,
  X,
  FileText
} from "lucide-react";
import { SERVICES_DATA } from "../data";
import { ServiceItem } from "../types";

export function Services() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  // Map icon strings to Lucide components safely
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Target":
        return <Target className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Car":
        return <Car className={className} />;
      case "Briefcase":
        return <Briefcase className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "Award":
        return <Award className={className} />;
      default:
        return <Briefcase className={className} />;
    }
  };

  const handleOpenSLA = (service: ServiceItem) => {
    setActiveService(service);
  };

  const handleRouteToContact = (serviceTitle: string) => {
    setActiveService(null);
    const element = document.querySelector("#contact");
    if (element) {
      // Find the select dropdown if it exists and set it
      const selectElem = document.getElementById("contact-requirement") as HTMLSelectElement;
      if (selectElem) {
        selectElem.value = serviceTitle;
      }
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-gold-dark rounded-full text-xs font-bold tracking-wider uppercase font-mono">
            <Briefcase className="h-3 w-3" />
            <span>CORE CAPABILITIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue font-display tracking-tight leading-tight">
            Comprehensive HR & Staffing Services
          </h2>
          
          <div className="h-[3px] w-20 bg-brand-gold rounded-full" />
          
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
            Delivering precision manpower, custom legal compliance, and strategic talent mapping to enable India's leading brands to scale smoothly.
          </p>
        </motion.div>

        {/* Dynamic Service Grid with 3D-Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotateY: 2,
                rotateX: -2,
                boxShadow: "0 20px 40px rgba(10,35,66,0.08)",
                transition: { duration: 0.2 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col items-start text-left hover:border-brand-blue/10 transition-all group cursor-pointer relative"
              onClick={() => handleOpenSLA(service)}
            >
              {/* Gold gradient shine element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue-light opacity-0 group-hover:opacity-100 rounded-t-2xl transition-opacity duration-300" />
              
              <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                {renderIcon(service.icon, "h-6 w-6 text-brand-blue group-hover:text-white transition-colors")}
              </div>

              <h3 className="text-xl font-bold text-brand-blue font-display group-hover:text-brand-blue-light transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm mt-3 leading-relaxed mb-6 flex-grow">
                {service.shortDesc}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-brand-blue group-hover:text-brand-gold transition-colors font-mono">
                <span>VIEW SERVICE SPECS</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Modal (Glassmorphic) */}
        <AnimatePresence>
          {activeService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-brand-blue-dark/60 backdrop-blur-md"
                onClick={() => setActiveService(null)}
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative z-10 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto no-scrollbar"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-5 right-5 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5 text-slate-500" />
                </button>

                {/* Service Header Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 bg-brand-blue-muted rounded-xl flex items-center justify-center flex-shrink-0">
                    {renderIcon(activeService.icon, "h-6 w-6 text-brand-blue")}
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-gold uppercase">SLA SERVICE DESCRIPTION</span>
                    <h4 className="text-2xl font-bold text-brand-blue font-display leading-tight">{activeService.title}</h4>
                  </div>
                </div>

                {/* Detailed Narrative */}
                <div className="text-left mb-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {activeService.fullDesc}
                  </p>
                </div>

                {/* Grid for Features and Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-8">
                  {/* Key Offerings / Features */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <h5 className="text-xs font-extrabold text-brand-blue font-mono tracking-widest uppercase mb-4 flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-brand-gold" />
                      <span>Operational Scope</span>
                    </h5>
                    <ul className="space-y-2.5">
                      {activeService.features.map((feature, i) => (
                        <li key={i} className="text-xs text-slate-600 font-medium flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Benefits */}
                  <div className="bg-brand-blue-muted/40 rounded-2xl p-5 border border-brand-blue/5">
                    <h5 className="text-xs font-extrabold text-brand-blue font-mono tracking-widest uppercase mb-4 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Strategic Value</span>
                    </h5>
                    <ul className="space-y-2.5">
                      {activeService.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-slate-700 font-bold flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Proposal CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleRouteToContact(activeService.title)}
                    className="flex-1 bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/15"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setActiveService(null)}
                    className="sm:flex-none border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Back to Services
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
