import AboutMeSection from "./AboutMeSection";
import EducationSection from "./EducationPars/EducationSection";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";
import ProjectSection from "./ProjectSection";

export default function Main() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <AboutMeSection />
      <ProjectSection />
      <EducationSection />
    </main>
  );
}
