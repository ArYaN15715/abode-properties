import { Eye, Heart, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const philosophyItems = [
  {
    number: "01",
    icon: Eye,
    title: "Transparent Buying Experience",
    description:
      "Every step of your property journey is clearly communicated — no hidden costs, no surprises, just honest guidance.",
  },
  {
    number: "02",
    icon: Star,
    title: "Professionally Curated Properties",
    description:
      "We personally evaluate every listing for quality, location, and long-term value before presenting it to you.",
  },
  {
    number: "03",
    icon: Zap,
    title: "New-Age Real Estate Experts",
    description:
      "A modern advisory approach powered by data, local insight, and a deep understanding of Indore evolving market.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Client-Centric Advisory",
    description:
      "Your lifestyle, goals, and timeline shape every recommendation. We work for you — not the transaction.",
  },
];

export default function WhyAbode() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="about" className="bg-[#ECE9E2] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        {/* Left: image panel */}
        <motion.div
          className="relative h-[300px] md:h-auto overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
            alt="Modern luxury interior"
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-out hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/20 to-transparent" />
        </motion.div>

        {/* Right: content panel */}
        <motion.div
          className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-24"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#B7A89A] uppercase tracking-widest text-xs font-medium mb-5"
            style={{ letterSpacing: "0.2em" }}
          >
            Why Abode
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-light text-4xl md:text-5xl text-[#1C1C1C] leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Redefining Property
            <br />
            Advisory in Indore.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#555555] text-base leading-relaxed mb-12 max-w-md"
          >
            We believe buying or leasing property should be a confident,
            informed experience. Our approach blends professional expertise with
            genuine human care — for every client, every time.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {philosophyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                  data-ocid={`whyabode.philosophy.item.${index + 1}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="text-4xl font-light text-[#B7A89A] leading-none select-none"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        opacity: 0.7,
                      }}
                    >
                      {item.number}
                    </span>
                    <div className="pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon
                          size={14}
                          className="text-[#8A7867]"
                          strokeWidth={1.5}
                        />
                        <h3 className="font-medium text-[#1C1C1C] text-sm">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#555555] text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
