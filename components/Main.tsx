import AboutMeSection from "./AboutMeSection";
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
    </main>
  );
}
