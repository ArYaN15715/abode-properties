import Layout from "@/components/Layout";
import MapSection from "@/components/MapSection";
import { Toaster } from "@/components/ui/sonner";
import CtaSection from "@/pages/CtaSection";
import HeroSection from "@/pages/HeroSection";
import InquirySection from "@/pages/InquirySection";
import LifestyleSection from "@/pages/LifestyleSection";
import ProcessSection from "@/pages/ProcessSection";
import PropertyShowcase from "@/pages/PropertyShowcase";
import TestimonialsSection from "@/pages/TestimonialsSection";
import WhyAbode from "@/pages/WhyAbode";

export default function App() {
  return (
    <Layout>
      <main id="main-content">
        <HeroSection />
        <PropertyShowcase />
        <WhyAbode />
        <TestimonialsSection />
        <ProcessSection />
        <LifestyleSection />
        <InquirySection />
        <MapSection />
        <CtaSection />
      </main>
      <Toaster position="bottom-right" />
    </Layout>
  );
}
