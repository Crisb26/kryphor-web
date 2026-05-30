import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
