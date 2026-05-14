import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "../data/sampleData";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const autoRotateRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = useCallback(() => {
    setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    autoRotateRef.current = setInterval(next, 5000);
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    autoRotateRef.current = setInterval(next, 5000);
  };

  const handlePrev = () => {
    prev();
    resetTimer();
  };
  const handleNext = () => {
    next();
    resetTimer();
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + visibleCount,
  );
  const dotCount = maxIndex + 1;

  return (
    <section
      id="testimonials"
      className="bg-[#1C1C1C] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p
            className="text-[#B7A89A]/60 uppercase tracking-widest text-xs font-medium mb-4"
            style={{ letterSpacing: "0.2em" }}
          >
            Client Experiences
          </p>
          <h2
            className="font-light text-4xl md:text-5xl text-[#F7F6F2] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
          data-ocid="testimonials.list"
        >
          {visibleTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-none p-8 xl:p-10 border border-white/10 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              data-ocid={`testimonials.item.${activeIndex + idx + 1}`}
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={`star-${t.id}-${i}`}
                    size={14}
                    className="text-[#B7A89A] fill-[#B7A89A]"
                  />
                ))}
              </div>

              <p
                className="text-[#F7F6F2]/80 font-light leading-relaxed text-sm md:text-base flex-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="w-8 h-px bg-[#D9D4CC]/30" />

              <div>
                <p
                  className="text-[#F7F6F2] text-xl font-light leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {t.name}
                </p>
                <p className="text-[#B7A89A] text-xs mt-1 tracking-wide">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="w-10 h-10 rounded-full border border-[#F7F6F2]/20 flex items-center justify-center text-[#F7F6F2]/50 hover:text-[#B7A89A] hover:border-[#B7A89A]/40 transition-all duration-300"
            data-ocid="testimonials.pagination_prev"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: dotCount }, (_, i) => i).map((dotIdx) => (
              <button
                type="button"
                key={`dot-position-${dotIdx}`}
                onClick={() => {
                  setActiveIndex(dotIdx);
                  resetTimer();
                }}
                aria-label={`Go to testimonial group ${dotIdx + 1}`}
                className="h-[3px] rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === dotIdx ? "24px" : "8px",
                  background:
                    activeIndex === dotIdx
                      ? "#B7A89A"
                      : "rgba(183,168,154,0.35)",
                }}
                data-ocid={`testimonials.dot.${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonials"
            className="w-10 h-10 rounded-full border border-[#F7F6F2]/20 flex items-center justify-center text-[#F7F6F2]/50 hover:text-[#B7A89A] hover:border-[#B7A89A]/40 transition-all duration-300"
            data-ocid="testimonials.pagination_next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
