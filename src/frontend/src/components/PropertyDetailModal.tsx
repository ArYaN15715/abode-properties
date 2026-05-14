import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Property } from "@/types";
import { ArrowRight, BedDouble, MapPin, Maximize2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
}: PropertyDetailModalProps) {
  const open = property !== null;

  const handleBookVisit = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="p-0 border-0 shadow-2xl overflow-hidden max-w-2xl w-full"
        style={{ background: "#F7F6F2", borderRadius: "0.75rem" }}
        data-ocid="property.detail_modal"
      >
        <AnimatePresence>
          {property && (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col max-h-[90vh] overflow-y-auto"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden flex-shrink-0">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-5">
                  <span
                    className="px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-medium"
                    style={{ background: "#B7A89A", color: "#F7F6F2" }}
                  >
                    {property.category}
                  </span>
                </div>

                {/* Close button */}
                <button
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200"
                  style={{ background: "rgba(28,28,28,0.6)" }}
                  data-ocid="property.detail_modal.close_button"
                >
                  <X size={16} strokeWidth={1.5} style={{ color: "#F7F6F2" }} />
                </button>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="font-display font-light text-white leading-tight text-2xl md:text-3xl">
                    {property.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col gap-5">
                {/* Location + Price row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <MapPin
                      size={14}
                      strokeWidth={1.5}
                      style={{ color: "#B7A89A", flexShrink: 0 }}
                    />
                    <span className="text-sm" style={{ color: "#555555" }}>
                      {property.location}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="font-display text-2xl font-light"
                      style={{ color: "#1C1C1C" }}
                    >
                      {property.price}
                    </span>
                    <span className="text-sm" style={{ color: "#B7A89A" }}>
                      {property.priceUnit}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{ background: "#D9D4CC" }}
                />

                {/* Specs row */}
                <div className="flex flex-wrap gap-5">
                  {property.bedrooms !== undefined && (
                    <div className="flex items-center gap-2">
                      <BedDouble
                        size={15}
                        strokeWidth={1.5}
                        style={{ color: "#8A7867" }}
                      />
                      <span className="text-sm" style={{ color: "#555555" }}>
                        {property.bedrooms}{" "}
                        {property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Maximize2
                      size={14}
                      strokeWidth={1.5}
                      style={{ color: "#8A7867" }}
                    />
                    <span className="text-sm" style={{ color: "#555555" }}>
                      {property.area}
                    </span>
                  </div>
                  {property.badge && (
                    <span
                      className="px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] border"
                      style={{
                        borderColor: "#B7A89A",
                        color: "#8A7867",
                        background: "transparent",
                      }}
                    >
                      {property.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#555555" }}
                >
                  {property.description}
                </p>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{ background: "#D9D4CC" }}
                />

                {/* Book CTA */}
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBookVisit}
                  className="w-full flex items-center justify-center gap-2 py-4 text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 group"
                  style={{
                    background: "#1C1C1C",
                    color: "#F7F6F2",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#3d2b1f";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#1C1C1C";
                  }}
                  data-ocid="property.detail_modal.book_button"
                >
                  Book a Site Visit
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
