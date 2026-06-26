import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      nextTestimonial();
    }, 6000); // Rotate every 6 seconds

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  const active = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      {/* Decorative Marks */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-64 w-64 text-slate-100 pointer-events-none">
        <Quote className="h-full w-full opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/5 text-brand-blue rounded-full text-xs font-bold tracking-wider uppercase font-mono">
            <Quote className="h-4 w-4 text-brand-gold" />
            <span>CLIENT REVIEWS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display tracking-tight">
            Trusted By Elite Enterprises
          </h2>
          
          <div className="h-[3px] w-16 bg-brand-gold rounded-full" />
        </motion.div>

        {/* Testimonial Active Display Area (Fade, Slide, Pause on hover) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-12 shadow-sm text-left hover:shadow-md transition-shadow cursor-pointer"
        >
          {/* Pause Indicator overlay */}
          {isPaused && (
            <div className="absolute top-4 right-4 bg-brand-blue/5 text-slate-400 font-mono text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-slate-400" />
              <span>Rotation Paused</span>
            </div>
          )}

          <div className="h-10 w-10 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
            <Quote className="h-5 w-5 text-brand-gold-dark" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Star Ratings */}
              <div className="flex items-center gap-1">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Quote Content */}
              <blockquote className="text-lg sm:text-xl text-slate-700 font-sans font-medium italic leading-relaxed">
                "{active.content}"
              </blockquote>

              {/* Client Profile details */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-brand-gold"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-extrabold text-brand-blue font-display">{active.name}</span>
                    <CheckCircle className="h-4 w-4 text-emerald-500" title="Verified Corporate Review" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium font-sans">
                    {active.designation} — <span className="font-bold text-brand-blue">{active.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons (Absolute Placed) */}
          <div className="absolute right-8 bottom-8 flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevTestimonial();
              }}
              className="p-2 border border-slate-200 hover:bg-white rounded-full text-slate-600 hover:text-brand-blue transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextTestimonial();
              }}
              className="p-2 border border-slate-200 hover:bg-white rounded-full text-slate-600 hover:text-brand-blue transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-brand-gold" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
