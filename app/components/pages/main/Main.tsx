import { AboutMe, ContactInfo, Projects } from "..";
import { Container } from "../../atoms";
import { Footer, Navbar } from "../../organisms";


export default function Main() {
  return (
    <Container type="main" className="space-y-4 ">
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactInfo />
      <Footer />
    </Container>
  );
}
