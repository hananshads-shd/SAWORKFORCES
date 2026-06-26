import React, { useEffect, useState, Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { LazyLoadSection } from "./components/LazyLoadSection";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";

// Lazy-loaded downstream components for optimal performance and high Lighthouse scores
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const DriversSection = lazy(() => import("./components/DriversSection").then(m => ({ default: m.DriversSection })));
const Industries = lazy(() => import("./components/Industries").then(m => ({ default: m.Industries })));
const ProcessTimeline = lazy(() => import("./components/ProcessTimeline").then(m => ({ default: m.ProcessTimeline })));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const JobOpenings = lazy(() => import("./components/JobOpenings").then(m => ({ default: m.JobOpenings })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));

// Premium glassmorphic section fallback loader matching the brand identity
const SectionLoader = () => (
  <div className="w-full min-h-[350px] flex items-center justify-center bg-slate-50/40 backdrop-blur-sm py-16">
    <div className="flex flex-col items-center gap-3">
      <div className="h-9 w-9 rounded-full border-2 border-brand-gold/20 border-t-brand-gold animate-spin" />
      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
        Sourcing Network Loading...
      </span>
    </div>
  </div>
);

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  // Scroll Progress calculation using Framer Motion hook
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white antialiased text-slate-800 selection:bg-brand-gold selection:text-brand-blue-dark">
      
      {/* 1. Global Viewport Scroll Progress Indicator (Apple/Deel style) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-brand-blue via-brand-gold to-brand-gold-light z-50 origin-left"
        style={{ scaleX }}
      />

      {/* 2. Global Fixed Chat / Hotline Trigger Bubble (Mobile-first UX) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a
          href="#contact"
          className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-bold p-3.5 pr-5 rounded-full shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 border border-brand-blue-light hover:scale-105 group"
        >
          <div className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase">Contact Sourcing Desk</span>
        </a>
      </div>

      {/* 2b. Premium Floating WhatsApp Action Button (Navy & Gold Branding for High Mobile Conversion) */}
      <div className="fixed bottom-6 right-6 sm:bottom-24 z-40 select-none">
        <a
          href="https://wa.me/916362239481"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-light text-white font-bold p-2.5 pr-4 pl-3 rounded-full shadow-2xl hover:shadow-brand-gold/30 transition-all duration-300 border border-brand-gold/70 hover:scale-105 group"
          id="floating-whatsapp-action"
        >
          {/* Animated Gold Ring WhatsApp Icon */}
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold text-brand-blue-dark">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-gold/40 animate-ping opacity-75"></span>
            <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.324 1.451 5.344 1.452 5.48.004 9.938-4.407 9.94-9.822.003-2.623-1.012-5.088-2.862-6.94C17.16 1.992 14.7 1.01 12.013 1.01c-5.49 0-9.948 4.417-9.953 9.833-.002 1.983.518 3.916 1.507 5.617l-.999 3.65 3.784-.976h.105zm11.385-5.74c-.312-.156-1.848-.912-2.129-1.014-.28-.103-.484-.156-.688.156-.204.312-.79.156-1.014.28-.224.124-.484.281-.688.188-.204-.094-.863-.319-1.644-1.017-.61-.544-1.02-1.217-1.14-1.424-.12-.206-.013-.318.09-.421.094-.094.204-.24.306-.359.102-.12.136-.204.204-.34.068-.137.034-.256-.017-.359-.051-.103-.484-1.17-.663-1.597-.174-.421-.365-.363-.502-.37h-.431c-.15 0-.393.056-.6.28-.206.223-.787.77-.787 1.877s.804 2.17 1.156 2.646c.352.476 1.583 2.417 3.834 3.388.536.231.954.369 1.28.473.537.171 1.025.147 1.41.09.43-.064 1.848-.756 2.11-1.452.261-.696.261-1.293.183-1.424-.078-.131-.28-.206-.592-.362z" />
            </svg>
          </div>
          {/* High visibility text styled according to requested branding guidelines */}
          <span className="text-[10.5px] font-mono font-bold tracking-wider uppercase text-brand-gold group-hover:text-white transition-colors">
            WhatsApp Hotline
          </span>
        </a>
      </div>

      {/* 3. Sticky Responsive Glassmorphic Navbar */}
      <Navbar />

      {/* 4. Core Corporate Sections Page Layout */}
      <main id="main-content">
        
        {/* Full-Screen Workforce Network Hero Section */}
        <Hero />

        {/* Dynamic Bento-Grid Statistical Count-up & About Section */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="450px">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </LazyLoadSection>

        {/* Comprehensive Interactive Service Card Grid */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="500px">
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
        </LazyLoadSection>

        {/* Premium Fleet Drivers & Cab Transport Division */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="400px">
          <Suspense fallback={<SectionLoader />}>
            <DriversSection />
          </Suspense>
        </LazyLoadSection>

        {/* Industries Served Carousel and Role Badges */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="450px">
          <Suspense fallback={<SectionLoader />}>
            <Industries />
          </Suspense>
        </LazyLoadSection>

        {/* apple-style staggered timeline process */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="500px">
          <Suspense fallback={<SectionLoader />}>
            <ProcessTimeline />
          </Suspense>
        </LazyLoadSection>

        {/* Legacy vs SA Solutions Comparison Board */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="500px">
          <Suspense fallback={<SectionLoader />}>
            <WhyChooseUs />
          </Suspense>
        </LazyLoadSection>

        {/* Five-star Clients Review Slideshow */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="400px">
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        </LazyLoadSection>

        {/* Stateful Job directory and Resume Parser Portal */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="600px">
          <Suspense fallback={<SectionLoader />}>
            <JobOpenings />
          </Suspense>
        </LazyLoadSection>

        {/* Glowing Lead Proposal Contact Panel */}
        <LazyLoadSection fallback={<SectionLoader />} minHeight="500px">
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </LazyLoadSection>

      </main>

      {/* 5. Complete Footer Layout with Newsletter signup */}
      <Footer />
      
    </div>
  );
}
