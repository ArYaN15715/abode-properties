import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        data-ocid="nav"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "nav-blur border-b border-[#D9D4CC]/40 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
              data-ocid="nav.logo_link"
            >
              <img
                src="/assets/logo.png"
                alt="Abode Properties"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span
                className={`text-sm font-light tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-[#1C1C1C]" : "text-white"
                }`}
              >
                ABODE
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  data-ocid={`nav.${link.label.toLowerCase()}_link`}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 hover:text-[#B7A89A] ${
                    scrolled ? "text-[#1C1C1C]" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNav("#contact")}
                data-ocid="nav.cta_button"
                className={`px-5 py-2 text-xs tracking-widest uppercase font-light border transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? "border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F7F6F2]"
                    : "border-white/70 text-white hover:bg-white hover:text-[#1C1C1C]"
                }`}
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              data-ocid="nav.mobile_menu_button"
              aria-label="Toggle menu"
              className={`md:hidden p-2 transition-colors duration-300 ${
                scrolled ? "text-[#1C1C1C]" : "text-white"
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          data-ocid="nav.mobile_menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } nav-blur border-t border-[#D9D4CC]/40`}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                data-ocid={`nav.mobile.${link.label.toLowerCase()}_link`}
                className="text-sm font-light tracking-wide text-[#1C1C1C] hover:text-[#B7A89A] transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              data-ocid="nav.mobile.cta_button"
              className="mt-2 px-5 py-2 text-xs tracking-widest uppercase font-light border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-[#F7F6F2] transition-all duration-300 self-start"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1">{children}</div>

      {/* Footer */}
      <footer data-ocid="footer" className="bg-[#1C1C1C] text-[#F7F6F2]/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand Column */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo.png"
                  alt="Abode Properties"
                  className="h-9 w-9 rounded-full object-cover opacity-90"
                />
                <span className="text-sm font-light tracking-widest uppercase text-[#F7F6F2]">
                  ABODE
                </span>
              </div>
              <p className="text-sm font-light leading-relaxed text-[#F7F6F2]/60">
                Modern Real Estate for Modern Living
              </p>
              <p className="text-xs font-light leading-relaxed">
                Indore, Madhya Pradesh
              </p>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-xs tracking-widest uppercase text-[#F7F6F2]/40 mb-5">
                Contact
              </h4>
              <a
                href="mailto:info@abodeproperties.in"
                data-ocid="footer.email_link"
                className="block text-sm font-light hover:text-[#B7A89A] transition-colors duration-300"
              >
                info@abodeproperties.in
              </a>
              <a
                href="tel:+919876543210"
                data-ocid="footer.phone_link"
                className="block text-sm font-light hover:text-[#B7A89A] transition-colors duration-300"
              >
                +91 98765 43210
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.instagram_link"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-[#F7F6F2]/20 flex items-center justify-center hover:border-[#B7A89A] hover:text-[#B7A89A] transition-all duration-300"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.facebook_link"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-[#F7F6F2]/20 flex items-center justify-center hover:border-[#B7A89A] hover:text-[#B7A89A] transition-all duration-300"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.linkedin_link"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-[#F7F6F2]/20 flex items-center justify-center hover:border-[#B7A89A] hover:text-[#B7A89A] transition-all duration-300"
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div className="space-y-4">
              <h4 className="text-xs tracking-widest uppercase text-[#F7F6F2]/40 mb-5">
                Explore
              </h4>
              {[
                { label: "Properties", href: "#properties" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  data-ocid={`footer.${link.label.toLowerCase()}_link`}
                  className="block text-sm font-light hover:text-[#B7A89A] transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-[#F7F6F2]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs font-light text-[#F7F6F2]/40">
              &copy; {new Date().getFullYear()} Abode Properties. All rights
              reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-light text-[#F7F6F2]/30 hover:text-[#F7F6F2]/60 transition-colors duration-300"
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
