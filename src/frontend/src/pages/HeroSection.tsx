import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0d0a07" }}
    >
      {/* Cinematic Hero Photo */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="hero-image"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
          transformOrigin: "center center",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.62) 60%, rgba(0,0,0,0.75) 100%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Warm Glow Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(139,104,87,0.18) 0%, transparent 70%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          opacity: 0.04,
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-5xl mx-auto w-full"
        style={{ zIndex: 10 }}
      >
        {/* Eyebrow Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-6 font-body font-medium tracking-[0.3em] uppercase"
          style={{ color: "rgba(247,246,242,0.45)", fontSize: "11px" }}
        >
          Abode Properties · Indore
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="font-display font-light leading-tight mb-6"
          style={{
            color: "#F7F6F2",
            letterSpacing: "-0.01em",
            fontSize: "clamp(2.4rem, 8vw, 5.5rem)",
          }}
        >
          Spaces That Feel
          <br />
          <span style={{ color: "#B7A89A" }}>Like Home.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55, ease: "easeOut" }}
          className="font-body font-light text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(247,246,242,0.65)" }}
        >
          Modern residential and commercial properties curated with transparency
          and care.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.75, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto"
        >
          <button
            data-ocid="hero.explore_button"
            type="button"
            onClick={() => scrollTo("properties")}
            className="w-full sm:w-auto px-8 py-4 font-body font-medium uppercase"
            style={{
              background: "#F7F6F2",
              color: "#1C1C1C",
              borderRadius: 0,
              border: "1px solid #F7F6F2",
              cursor: "pointer",
              transition: "background 300ms ease, color 300ms ease",
              letterSpacing: "0.15em",
              fontSize: "13px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#ECE9E2";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#F7F6F2";
            }}
          >
            Explore Properties
          </button>

          <button
            data-ocid="hero.consult_button"
            type="button"
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-8 py-4 font-body font-medium uppercase"
            style={{
              background: "transparent",
              color: "#F7F6F2",
              borderRadius: 0,
              border: "1px solid rgba(247,246,242,0.45)",
              cursor: "pointer",
              transition: "border-color 300ms ease, background 300ms ease",
              letterSpacing: "0.15em",
              fontSize: "13px",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = "rgba(247,246,242,1)";
              btn.style.background = "rgba(247,246,242,0.08)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.borderColor = "rgba(247,246,242,0.45)";
              btn.style.background = "transparent";
            }}
          >
            Book Consultation
          </button>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.1, ease: "easeOut" }}
          data-ocid="hero.trust_strip"
          className="flex flex-wrap items-center justify-center gap-y-2"
        >
          {[
            { icon: "⭐", label: "5.0 Rating" },
            { icon: "🏙", label: "Premium Indore Properties" },
            { icon: "🤝", label: "Transparent Guidance" },
          ].map((item, i) => (
            <span key={item.label} className="flex items-center">
              <span
                className="font-body font-medium uppercase flex items-center gap-1.5"
                style={{
                  color: "rgba(247,246,242,0.45)",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  padding: "0 1.25rem",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </span>
              {i < 2 && (
                <span
                  className="hidden sm:inline-block h-3 w-px"
                  style={{ background: "rgba(247,246,242,0.2)" }}
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        data-ocid="hero.scroll_indicator"
        type="button"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        onClick={() => scrollTo("properties")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hero-bounce"
        style={{ zIndex: 10, background: "none", border: "none" }}
      >
        <ChevronDown
          size={22}
          strokeWidth={1.5}
          style={{ color: "rgba(247,246,242,0.38)" }}
        />
      </motion.button>
    </section>
  );
}
