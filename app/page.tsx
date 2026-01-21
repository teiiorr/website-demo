// app/page.tsx
import Navbar from "./components/navigation/Navbar";
import { navigation } from "./data/navigation";

// Sections (hozircha skeleton, keyin bittalab yozamiz)
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import PartnersSection from "./components/partners/PartnersSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/footer/Footer";

export default function HomePage() {
  return (
    <main id="top" className="relative overflow-hidden">
      {/* Navigation */}
      <Navbar items={navigation} />

      {/* HERO: video + 3D + CTA */}
      <HeroSection />

      {/* ABOUT */}
      <AboutSection />

      {/* PROJECTS / NEWS */}
      <ProjectsSection />

      {/* PARTNERS */}
      <PartnersSection />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
