import { motion } from "motion/react";

const stats = [
  { label: "5.0 ⭐ Google Rating" },
  { label: "100+ Happy Clients" },
  { label: "10+ Years in Indore" },
];

export default function CtaSection() {
  const handleConsultation = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2a1f1a 0%, #3d2b1f 50%, #1a1410 100%)",
      }}
      data-ocid="cta.section"
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm uppercase tracking-widest mb-5"
          style={{ color: "#B7A89A" }}
        >
          Get In Touch
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-thin leading-tight mb-4"
          style={{ color: "#F7F6F2" }}
        >
          Looking for the Right Space in Indore?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="font-body text-lg mb-10"
          style={{ color: "rgba(247, 246, 242, 0.6)" }}
        >
          Experience a more thoughtful approach to real estate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={handleConsultation}
            className="w-full sm:w-auto px-8 py-4 text-sm tracking-widest uppercase font-body transition-all duration-300"
            style={{
              backgroundColor: "#B7A89A",
              color: "#1C1C1C",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#8A7867";
              (e.currentTarget as HTMLButtonElement).style.color = "#F7F6F2";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#B7A89A";
              (e.currentTarget as HTMLButtonElement).style.color = "#1C1C1C";
            }}
            data-ocid="cta.schedule_button"
          >
            Schedule Consultation
          </motion.button>

          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto px-8 py-4 text-sm tracking-widest uppercase font-body transition-all duration-300 text-center"
            style={{
              border: "1px solid rgba(247, 246, 242, 0.3)",
              color: "#F7F6F2",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#F7F6F2";
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "rgba(247, 246, 242, 0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(247, 246, 242, 0.3)";
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "transparent";
            }}
            data-ocid="cta.call_link"
          >
            Call Now: +91 98765 43210
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-0"
          data-ocid="cta.stats"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <span
                  className="hidden sm:block w-px h-4 mx-6"
                  style={{ backgroundColor: "#B7A89A", opacity: 0.4 }}
                />
              )}
              {i > 0 && (
                <span
                  className="block sm:hidden w-16 h-px my-3"
                  style={{ backgroundColor: "#B7A89A", opacity: 0.4 }}
                />
              )}
              <p
                className="text-xs uppercase tracking-widest font-body"
                style={{ color: "rgba(247, 246, 242, 0.4)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
