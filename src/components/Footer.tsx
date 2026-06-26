import React, { useState } from "react";
import { Logo } from "./Logo";
import { Linkedin, Instagram, Facebook, Send, CheckCircle2, FileText, ArrowUp } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-blue-dark text-slate-300 pt-16 pb-8 border-t border-white/5 relative overflow-hidden text-left">
      {/* Background connections vectors */}
      <div className="absolute inset-0 connections-bg opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-6">
            <Logo light className="h-10 sm:h-11" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              SA Workforce Solutions is Bangalore's premier staffing, driver recruitment, and manpower outsourcing agency. We bridge the talent gap across India, supplying highly vetted professionals to fuel enterprise expansion.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/sa-workforce-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-blue-dark flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.instagram.com/sa_workforce_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-blue-dark flex items-center justify-center transition-all"
                title="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.facebook.com/saworkforcesolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-blue-dark flex items-center justify-center transition-all"
                title="Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-mono text-brand-gold tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-brand-gold transition-colors">
                  About SA Solutions
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-brand-gold transition-colors">
                  Services List
                </a>
              </li>
              <li>
                <a href="#drivers" onClick={(e) => handleLinkClick(e, "#drivers")} className="hover:text-brand-gold transition-colors">
                  Drivers Division
                </a>
              </li>
              <li>
                <a href="#industries" onClick={(e) => handleLinkClick(e, "#industries")} className="hover:text-brand-gold transition-colors">
                  Industries Serves
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleLinkClick(e, "#process")} className="hover:text-brand-gold transition-colors">
                  Recruiting Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Divisions */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono text-brand-gold tracking-wider uppercase">Our Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-brand-gold transition-colors">
                  Executive Talent Acquisition
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-brand-gold transition-colors">
                  Contractual Staffing Solutions
                </a>
              </li>
              <li>
                <a href="#drivers" onClick={(e) => handleLinkClick(e, "#drivers")} className="hover:text-brand-gold transition-colors">
                  Yellow Badge Fleet Drivers
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-brand-gold transition-colors">
                  Labor Compliance & Payroll
                </a>
              </li>
              <li>
                <a href="#jobs" onClick={(e) => handleLinkClick(e, "#jobs")} className="hover:text-brand-gold transition-colors">
                  Job Seeker Career Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter block */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono text-brand-gold tracking-wider uppercase">Newsletter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to SA Workforce Sourcing Intelligence for weekly labor compliance bulletins and talent surveys.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/20 p-3 rounded-xl text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                <span>Subscription Confirmed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-gold"
                />
                <button
                  type="submit"
                  className="bg-brand-gold hover:bg-brand-gold-light text-brand-blue-dark font-extrabold px-3.5 rounded-xl transition-all flex items-center justify-center"
                  title="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
            
            <span className="text-[10px] text-slate-500 block">No spam. Unsubscribe at any time.</span>
          </div>

        </div>

        {/* Legal & Footer bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Left copyright */}
          <div className="text-left">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} SA Workforce Solutions. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-600 mt-1">
              Bangalore LIC No: Form-V-KA-0941. ISO 9001:2015 Sourcing Certified.
            </p>
          </div>

          {/* Sitemap links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-brand-gold transition-colors">SLA Guidelines</a>
            <a href="#jobs" onClick={(e) => handleLinkClick(e, "#jobs")} className="hover:text-brand-gold transition-colors">XML Sitemap</a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("sa_open_admin"))}
              className="hover:text-brand-gold transition-colors cursor-pointer focus:outline-none"
            >
              Admin Portal
            </button>
            
            {/* Scroll to Top Arrow */}
            <button
              onClick={handleScrollToTop}
              className="p-2.5 bg-white/5 hover:bg-brand-gold text-white hover:text-brand-blue-dark rounded-xl transition-all duration-300 flex items-center justify-center ml-2 border border-white/5"
              title="Scroll to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
