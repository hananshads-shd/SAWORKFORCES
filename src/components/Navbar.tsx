import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, PhoneCall, Globe, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Drivers Division", href: "#drivers" },
    { name: "Industries", href: "#industries" },
    { name: "Our Process", href: "#process" },
    { name: "Careers Portal", href: "#jobs" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" onClick={() => handleLinkClick("#hero")} className="cursor-pointer">
              <Logo className="h-10 sm:h-11" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm font-medium text-brand-blue hover:text-brand-gold transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue-light font-mono bg-brand-blue-muted px-2.5 py-1.5 rounded-full border border-brand-blue/10">
                <Globe className="h-3.5 w-3.5 text-brand-gold animate-spin-slow" />
                <span>Pan India Solutions</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="bg-brand-blue hover:bg-brand-blue-light text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/20 flex items-center gap-2 group border border-brand-blue-light"
              >
                <span>Hire Talent</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="bg-brand-blue text-white p-2.5 rounded-full text-xs font-medium hover:bg-brand-blue-light transition-all"
                title="Hire Staff"
              >
                <PhoneCall className="h-4 w-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-brand-blue hover:text-brand-gold transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
                id="mobile-menu-btn"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-brand-blue-dark/60 backdrop-blur-md" onClick={() => setIsOpen(false)} />

            {/* Content Drawer */}
            <div className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-400 font-mono">Navigation</span>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-lg font-bold text-brand-blue hover:text-brand-gold py-1.5 border-b border-slate-100 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-4 mt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Currently sourcing for 24+ global partners</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#jobs"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("#jobs");
                    }}
                    className="bg-brand-blue-muted hover:bg-brand-blue/10 text-brand-blue font-bold text-center py-3 rounded-xl transition-all text-sm border border-brand-blue/10"
                  >
                    Find Jobs
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("#contact");
                    }}
                    className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-center py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Hire Staff</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
