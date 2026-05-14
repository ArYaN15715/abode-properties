import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { lifestyleImages } from "../data/sampleData";

// Assign height classes for a masonry-feel grid
const heightClasses = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
];

export default function LifestyleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleImages, setVisibleImages] = useState<boolean[]>(
    new Array(lifestyleImages.length).fill(false),
  );

  useEffect(() => {
    const items =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-img-idx]");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.imgIdx);
            setVisibleImages((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    for (const el of Array.from(items)) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="lifestyle"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#ECE9E2] overflow-hidden"
    >
      {/* Editorial Header */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-display text-5xl md:text-7xl font-thin text-[#1C1C1C] leading-tight">
          More Than Property.
          <br />
          <span className="text-[#B7A89A]">A Better Way of Living.</span>
        </h2>
        <p className="mt-6 font-body text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
          Abode Properties is about more than transactions — it&apos;s about
          finding spaces that inspire, comfort, and elevate the way you live.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-2 md:gap-2.5">
          {lifestyleImages.map((img, i) => (
            <motion.div
              key={img.id}
              data-img-idx={i}
              data-ocid={`lifestyle.item.${i + 1}`}
              className={`relative overflow-hidden group ${
                heightClasses[i] ?? "row-span-1"
              }`}
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
              style={{
                opacity: visibleImages[i] ? 1 : 0,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-all duration-[600ms] ease-out group-hover:scale-[1.03]"
                style={{ transformOrigin: "center center" }}
                loading="lazy"
              />
              {/* Caption overlay */}
              {img.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="font-display text-sm italic text-white/90 p-4 pb-3">
                    {img.caption}
                  </p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Floating quote — desktop only, overlaid at grid position 5 (col 3, rows 2–3) */}
          <div
            className="hidden md:flex col-start-3 row-start-2 row-span-2 items-center justify-center bg-[#F7F6F2]/70 backdrop-blur-sm p-6 border border-[#D9D4CC]/50"
            aria-hidden="true"
          >
            <blockquote className="font-display text-2xl italic text-[#1C1C1C]/40 text-center leading-snug">
              &ldquo;A home is not just a place — it is a feeling.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
