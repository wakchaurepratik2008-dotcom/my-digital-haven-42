import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillTags from "@/components/SkillTags";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillTags />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default Index;
