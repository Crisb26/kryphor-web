import HeroSection from "@/components/sections/HeroSection";
import AppsSection from "@/components/sections/AppsSection";
import BethoPreviewSection from "@/components/sections/BethoPreviewSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import StatsSection from "@/components/sections/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AppsSection />
      <BethoPreviewSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
