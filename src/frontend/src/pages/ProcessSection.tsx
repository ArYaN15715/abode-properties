import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Understand Your Needs",
    description:
      "We begin by listening. Your goals, budget, and lifestyle preferences shape everything we do together.",
  },
  {
    number: "02",
    title: "Curate the Right Options",
    description:
      "We handpick properties that align with your vision, saving you time and sparing you the noise.",
  },
  {
    number: "03",
    title: "Guided Site Visits",
    description:
      "Professional, informative visits to shortlisted properties with expert insights at every turn.",
  },
  {
    number: "04",
    title: "Smooth Deal Closure",
    description:
      "Transparent, hassle-free documentation and negotiation support until the keys are yours.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [lineProgress, setLineProgress] = useState(0);

  // Staggered step reveal via IntersectionObserver
  useEffect(() => {
    const stepEls =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-step]");
    if (!stepEls) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.step);
            setVisibleSteps((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" },
    );

    for (const el of Array.from(stepEls)) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Line fill on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 when top of section hits bottom of viewport, 1 when bottom of section hits top
      const progress = Math.min(
        1,
        Math.max(0, (windowH - rect.top) / (rect.height + windowH * 0.3)),
      );
      setLineProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-body text-xs tracking-[0.22em] uppercase text-[#B7A89A] mb-4">
            HOW WE WORK
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-thin text-[#1C1C1C] leading-tight">
            A Thoughtful Buying Journey
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line track */}
          <div className="absolute top-[2.25rem] left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-[#D9D4CC]">
            <div
              ref={lineRef}
              className="h-full bg-[#B7A89A] origin-left"
              style={{
                transform: `scaleX(${lineProgress})`,
                transition: "transform 0.4s ease-out",
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                data-step={i}
                className="flex flex-col items-center text-center group cursor-default"
                style={{
                  opacity: visibleSteps[i] ? 1 : 0,
                  transform: visibleSteps[i]
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                {/* Circle */}
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full border border-[#D9D4CC] bg-white flex items-center justify-center mb-6 transition-all duration-500 ease-out group-hover:border-[#B7A89A] group-hover:bg-[#B7A89A]">
                  <span className="font-display text-xl font-medium text-[#1C1C1C] group-hover:text-white transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-medium text-[#1C1C1C] leading-snug mb-3">
                  {step.title}
                </h3>

                {/* Description — always visible */}
                <p className="font-body text-sm text-[#555555] leading-relaxed max-w-[200px] opacity-70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline — vertical */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute top-4 left-[1.35rem] bottom-4 w-px bg-[#D9D4CC] overflow-hidden">
            <div
              className="w-full bg-[#B7A89A] origin-top"
              style={{
                height: `${lineProgress * 100}%`,
                transition: "height 0.4s ease-out",
              }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                data-step={i}
                className="relative"
                style={{
                  opacity: visibleSteps[i] ? 1 : 0,
                  transform: visibleSteps[i]
                    ? "translateX(0)"
                    : "translateX(-12px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                {/* Circle — positioned on the line */}
                <div className="absolute -left-8 top-0 w-10 h-10 rounded-full border border-[#D9D4CC] bg-white flex items-center justify-center transition-all duration-500 hover:border-[#B7A89A] hover:bg-[#B7A89A] group">
                  <span className="font-display text-sm font-medium text-[#1C1C1C] transition-colors duration-500 group-hover:text-white">
                    {step.number}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="font-display text-xl font-medium text-[#1C1C1C] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-[#555555] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
