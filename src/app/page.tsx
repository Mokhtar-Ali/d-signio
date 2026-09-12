import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/home/AboutSection";
import { BusinessLinesSection } from "@/components/home/BusinessLinesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { KarolSection } from "@/components/home/KarolSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BusinessLinesSection />
        <ProjectsSection />
        <PartnersSection />
        <KarolSection />
      </main>
      <Footer />
    </>
  );
}
