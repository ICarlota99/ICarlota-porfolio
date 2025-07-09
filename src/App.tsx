import StarsBG from "@/components/animations/StarsBG";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import SplashCursor from "./components/animations/SplashCursor";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
// import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <StarsBG />
      <ScrollProgress />
      <ScrollToTopButton />
      <SplashCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <TechStackSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
