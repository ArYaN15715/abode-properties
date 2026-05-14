import { motion } from "motion/react";

export default function MapSection() {
  return (
    <motion.section
      id="map"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-20 px-4"
      style={{ background: "#ECE9E2" }}
      data-ocid="map.section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-widest font-medium mb-4"
            style={{ color: "#B7A89A", letterSpacing: "0.25em" }}
          >
            OUR LOCATION
          </p>
          <h2
            className="font-display font-light text-4xl md:text-5xl leading-tight"
            style={{
              color: "#1C1C1C",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Find Us in Indore
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#555555" }}
          >
            Explore properties across Indore&rsquo;s finest neighborhoods. Our
            office is always open for a visit.
          </p>
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="overflow-hidden rounded-xl shadow-lg"
          style={{ border: "1px solid #D9D4CC" }}
        >
          <iframe
            title="Abode Properties Location — Indore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.4974983657!2d75.63757097011716!3d22.72409093764888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-ocid="map.embed"
          />
        </motion.div>

        {/* Address footer */}
        <div className="mt-8 flex flex-wrap justify-center gap-10 text-center">
          {[
            { label: "ADDRESS", value: "Vijay Nagar, Indore, Madhya Pradesh" },
            { label: "PHONE", value: "+91 98765 43210" },
            { label: "EMAIL", value: "hello@abodeproperties.in" },
          ].map((item) => (
            <div key={item.label}>
              <p
                className="text-[10px] uppercase tracking-widest mb-1"
                style={{ color: "#B7A89A" }}
              >
                {item.label}
              </p>
              <p className="text-sm" style={{ color: "#1C1C1C" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
