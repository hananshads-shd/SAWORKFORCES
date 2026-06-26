import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, Globe, FileText } from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("Staffing Solutions");
  const [message, setMessage] = useState("");
  
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate database persistent submission
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      
      // Reset after a brief delay
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setMessage("");
      }, 4000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/5 text-brand-blue rounded-full text-xs font-bold tracking-wider uppercase font-mono">
            <Mail className="h-3.5 w-3.5 text-brand-gold" />
            <span>PARTNER WITH US</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display tracking-tight">
            Request Staffing Proposal
          </h2>
          
          <div className="h-[3px] w-16 bg-brand-gold rounded-full" />
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out to our workforce design architects to schedule a custom consultation and secure reliable staffing quotas for your company.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          
          {/* Left Column: Contact info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-blue font-display">Corporate Coordinates</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                SA Workforce Solutions head office is situated in the technological heart of Bangalore. Our agents orchestrate staffing pipelines across all major states.
              </p>

              {/* Coordinates List */}
              <div className="space-y-4 pt-4">
                
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Bangalore HQ</span>
                    <span className="text-sm font-semibold text-slate-700">
                      MG Road, Indiranagar, Bangalore, Karnataka - 560001
                    </span>
                  </div>
                </div>

                {/* WhatsApp Hotline */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-[#25D366] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.324 1.451 5.344 1.452 5.48.004 9.938-4.407 9.94-9.822.003-2.623-1.012-5.088-2.862-6.94C17.16 1.992 14.7 1.01 12.013 1.01c-5.49 0-9.948 4.417-9.953 9.833-.002 1.983.518 3.916 1.507 5.617l-.999 3.65 3.784-.976h.105zm11.385-5.74c-.312-.156-1.848-.912-2.129-1.014-.28-.103-.484-.156-.688.156-.204.312-.79.156-1.014.28-.224.124-.484.281-.688.188-.204-.094-.863-.319-1.644-1.017-.61-.544-1.02-1.217-1.14-1.424-.12-.206-.013-.318.09-.421.094-.094.204-.24.306-.359.102-.12.136-.204.204-.34.068-.137.034-.256-.017-.359-.051-.103-.484-1.17-.663-1.597-.174-.421-.365-.363-.502-.37h-.431c-.15 0-.393.056-.6.28-.206.223-.787.77-.787 1.877s.804 2.17 1.156 2.646c.352.476 1.583 2.417 3.834 3.388.536.231.954.369 1.28.473.537.171 1.025.147 1.41.09.43-.064 1.848-.756 2.11-1.452.261-.696.261-1.293.183-1.424-.078-.131-.28-.206-.592-.362z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">WhatsApp Hotline</span>
                    <a href="https://wa.me/916362239481" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-blue hover:text-[#25D366] transition-colors">
                      +91 63622 39481
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Sourcing Desk</span>
                    <a href="mailto:info@saworkforcesolutions.com" className="text-sm font-bold text-brand-blue hover:text-brand-gold transition-colors">
                      info@saworkforcesolutions.com
                    </a>
                  </div>
                </div>

                {/* Geographic coverage */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Operational Cover</span>
                    <span className="text-xs font-semibold text-slate-600 bg-brand-blue-muted px-2.5 py-1 rounded-full border border-brand-blue/5 inline-block mt-1">
                      Pan India Network (South, West, North hubs)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Apple style visual placeholder representing premium location block */}
            <div className="bg-brand-blue-dark text-white rounded-2xl p-6 border border-white/5 relative overflow-hidden h-44 flex flex-col justify-end">
              <div className="absolute top-5 left-5 h-8 w-8 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-brand-gold" />
              </div>
              <div className="absolute inset-0 connections-bg opacity-15 pointer-events-none" />
              
              <div className="relative z-10 text-left">
                <span className="text-[9px] font-mono font-bold text-brand-gold uppercase tracking-widest">Verification Registry</span>
                <h4 className="text-base font-extrabold font-display text-white mt-1">State Labor License Verified</h4>
                <p className="text-[11px] text-slate-300 mt-1">Compliant with Form V / Contract Labor Act regulations of India.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/60 shadow-sm">
            
            {submitted ? (
              <div className="py-20 flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 animate-bounce">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h4 className="text-2xl font-bold text-brand-blue font-display">Message Lodged Successfully!</h4>
                <p className="text-slate-500 text-sm max-w-sm">
                  Thank you for contacting SA Workforce Solutions. A Regional Accounts Manager has been assigned to your proposal request and will call you within 60 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Ananth Hegde"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:bg-white focus:border-brand-gold focus:outline-none transition-all gold-glow"
                    />
                  </div>

                  {/* Company field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                    <input
                      required
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g., TechStream Ltd"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:bg-white focus:border-brand-gold focus:outline-none transition-all gold-glow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Corporate Email</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., ananth@techstream.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:bg-white focus:border-brand-gold focus:outline-none transition-all gold-glow"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contact Mobile</label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g., +91 63622 39481"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:bg-white focus:border-brand-gold focus:outline-none transition-all gold-glow"
                    />
                  </div>
                </div>

                {/* Requirement dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Requirement</label>
                  <select
                    id="contact-requirement"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-600 focus:bg-white focus:border-brand-gold focus:outline-none transition-all gold-glow"
                  >
                    <option>Talent Acquisition</option>
                    <option>Staffing Solutions</option>
                    <option>Driver Recruitment</option>
                    <option>Workforce Management</option>
                    <option>Manpower Outsourcing</option>
                    <option>Career Services</option>
                  </select>
                </div>

                {/* Message comments */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Brief staffing needs / Details</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your staffing quota, preferred experience levels, licensing requirements or hiring timeframe..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:bg-white focus:border-brand-gold focus:outline-none transition-all gold-glow"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full bg-brand-blue hover:bg-brand-blue-light text-white font-extrabold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/15 ${
                    sending ? "opacity-70 cursor-wait" : ""
                  }`}
                >
                  {sending ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Sourcing Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Sourcing Requirement</span>
                      <Send className="h-4 w-4 text-brand-gold" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
