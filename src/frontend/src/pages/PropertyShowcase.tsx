import PropertyDetailModal from "@/components/PropertyDetailModal";
import SectionHeader from "@/components/shared/SectionHeader";
import { properties } from "@/data/sampleData";
import type { Property, PropertyCategory } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

type FilterCategory = "All" | PropertyCategory;

const CATEGORIES: FilterCategory[] = [
  "All",
  "Residential",
  "Commercial",
  "Retail",
  "Investment",
];

function useCardAnimation(itemCount: number) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() =>
    Array(itemCount).fill(false),
  );

  useEffect(() => {
    refs.current = refs.current.slice(0, itemCount);
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 80);
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, [itemCount]);

  const setRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      refs.current[i] = el;
    },
    [],
  );

  return { visible, setRef };
}

interface PropertyCardProps {
  property: Property;
  isHero?: boolean;
  animVisible: boolean;
  animRef: (el: HTMLDivElement | null) => void;
  onInquire?: () => void;
  onSelect: (p: Property) => void;
}

function PropertyCard({
  property,
  isHero,
  animVisible,
  animRef,
  onSelect,
}: Omit<PropertyCardProps, "onInquire">) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      ref={animRef as unknown as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={() => onSelect(property)}
      className={`group relative overflow-hidden bg-[#ECE9E2] cursor-pointer transition-all duration-700 ease-out hover:-translate-y-1 text-left w-full ${
        animVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-ocid={`property.card.${property.id}`}
    >
      {/* Image container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        <img
          src={property.imageUrl}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-in-out"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          loading="lazy"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Featured badge (hero only) */}
        {isHero && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-[#B7A89A] text-white text-[10px] uppercase tracking-[0.2em] font-medium">
              Featured
            </span>
          </div>
        )}

        {/* Badge (non-hero, from data) */}
        {!isHero && property.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-2.5 py-0.5 bg-[#1C1C1C]/80 text-white text-[10px] uppercase tracking-[0.18em]">
              {property.badge}
            </span>
          </div>
        )}

        {/* Text overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <span className="block text-[10px] uppercase tracking-[0.22em] text-[#B7A89A] mb-1.5">
            {property.category}
          </span>
          <h3
            className={`font-display font-light text-white leading-tight ${
              isHero ? "text-3xl md:text-4xl" : "text-xl"
            }`}
          >
            {property.title}
          </h3>
          <p className="text-white/70 text-sm mt-1 mb-2">{property.location}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-[#D9D4CC] font-medium text-base">
              {property.price}
            </span>
            <span className="text-[#B7A89A] text-xs">{property.priceUnit}</span>
            <span className="text-white/40 text-xs ml-2">
              &middot; {property.area}
            </span>
          </div>
        </div>

        {/* View Details CTA — fades in on hover */}
        <div
          className="absolute inset-x-0 bottom-0 z-20 flex justify-end p-5 transition-all duration-300 ease-in-out"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
          }}
        >
          <span
            className="px-5 py-2 bg-[#B7A89A] hover:bg-[#8A7867] text-white text-xs uppercase tracking-[0.18em] transition-colors duration-300"
            data-ocid={`property.view_button.${property.id}`}
          >
            View Details
          </span>
        </div>
      </div>
    </button>
  );
}

export default function PropertyShowcase() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  const filtered: Property[] =
    activeCategory === "All"
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  const heroProperty = filtered[0];
  const gridProperties = filtered.slice(1);

  const { visible, setRef } = useCardAnimation(filtered.length);

  const handleInquire = useCallback(() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="properties" className="py-24 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <SectionHeader
            eyebrow="OUR PORTFOLIO"
            title="Curated Properties for Modern Living"
            align="left"
          />
        </div>

        {/* Category filter tabs */}
        <div
          className="flex flex-wrap gap-6 mb-12 border-b border-[#D9D4CC]"
          role="tablist"
          aria-label="Property categories"
          data-ocid="property.filter.tabs"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-3 text-sm uppercase tracking-[0.18em] transition-all duration-300 relative ${
                activeCategory === cat
                  ? "text-[#1C1C1C]"
                  : "text-[#B7A89A] hover:text-[#8A7867]"
              }`}
              data-ocid={`property.filter.${cat.toLowerCase()}`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B7A89A]" />
              )}
            </button>
          ))}
        </div>

        {/* Property grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center" data-ocid="property.empty_state">
            <p className="font-display font-light text-[#1C1C1C] text-2xl">
              No properties in this category yet.
            </p>
            <p className="text-[#B7A89A] mt-2 text-sm">
              Please check back soon or explore another category.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Hero card — full width */}
            {heroProperty && (
              <PropertyCard
                key={heroProperty.id}
                property={heroProperty}
                isHero
                animVisible={visible[0]}
                animRef={setRef(0)}
                onSelect={setSelectedProperty}
              />
            )}

            {/* Remaining cards — 3-column grid on desktop */}
            {gridProperties.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gridProperties.map((property, i) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isHero={false}
                    animVisible={visible[i + 1]}
                    animRef={setRef(i + 1)}
                    onSelect={setSelectedProperty}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={handleInquire}
            className="px-8 py-3.5 border border-[#B7A89A] text-[#1C1C1C] text-xs uppercase tracking-[0.22em] hover:bg-[#1C1C1C] hover:text-white hover:border-[#1C1C1C] transition-all duration-300 ease-in-out"
            data-ocid="property.inquire_all_button"
          >
            Discuss Your Requirements
          </button>
        </div>
      </div>

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}
