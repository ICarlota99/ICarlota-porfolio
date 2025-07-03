import { ScrollProgress } from "@/components/ui/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
// import CareerGoalsSection from "@/components/sections/CareerGoalsSection";
// import ProjectsSection from "@/components/sections/ProjectsSection";
// import TechStackSection from "@/components/sections/TechStackSection";
// import ResumeSection from "@/components/sections/ResumeSection";
// import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <CareerGoalsSection /> */}
      {/* <ProjectsSection /> */}
      {/* <TechStackSection /> */}
      {/* <ResumeSection /> */}
      {/* <ContactSection /> */}
    </main>
  );
}
