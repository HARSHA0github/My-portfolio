import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      <HeroSection id="hero" />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
