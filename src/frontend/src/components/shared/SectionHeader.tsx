import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div
      ref={ref}
      className={`flex flex-col ${alignClass} gap-3 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {eyebrow && (
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#B7A89A] font-body font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-light text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-[#555555] text-base md:text-lg leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
      <div className="w-10 h-[2px] bg-[#B7A89A] mt-1" />
    </div>
  );
}

export default SectionHeader;
