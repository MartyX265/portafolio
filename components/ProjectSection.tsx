import GlassMainLayout from "./Common/GlassMainLayout";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import TechBadge from "./TechBadge";

export default function ProjectSection() {
  return (
    <section>
      <GlassMainLayout>
        <SectionTitle title="My Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <ProjectCard
            title={"My Website Portafolio"}
            description={
              "My personal portfolio website showcasing my projects and skills."
            }
            imageUrl={"/projectScreenshots/portfolio.jpg"}
            link={"https://myportfolio.com"}
          >
            <TechBadge
              iconUrl={"/commonIcons/react.svg"}
              link={"https://react.dev/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/typescript.svg"}
              link={"https://www.typescriptlang.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/tailwindcss.svg"}
              link={"https://tailwindcss.com/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/nextjs.svg"}
              link={"https://nextjs.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/daisyui.svg"}
              link={"https://daisyui.com/"}
            />
          </ProjectCard>
          <ProjectCard
            title={"Full Shop E-commerce"}
            description={
              "An online store for various medic products with user authentication and payment integration."
            }
            imageUrl={"/projectScreenshots/e-commerce.jpg"}
          >
            <TechBadge
              iconUrl={"/commonIcons/typescript.svg"}
              link={"https://www.typescriptlang.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/tailwindcss.svg"}
              link={"https://tailwindcss.com/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/nextjs.svg"}
              link={"https://nextjs.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/mercadopago.svg"}
              link={"https://www.mercadopago.com/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/daisyui.svg"}
              link={"https://daisyui.com/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/redux.svg"}
              link={"https://redux.js.org/"}
            />
          </ProjectCard>
          <ProjectCard
            title="Calcula Carrito"
            description="A simple app to calculate your shopping cart total through barcode scanning."
            imageUrl="/projectScreenshots/calcula-carrito.jpg"
          >
            <TechBadge
              iconUrl={"/commonIcons/react.svg"}
              link={"https://reactnative.dev/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/expo.svg"}
              link={"https://expo.dev/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/typescript.svg"}
              link={"https://www.typescriptlang.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/nativewind.svg"}
              link={"https://www.nativewind.dev/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/uikitten.png"}
              link={"https://akveo.github.io/react-native-ui-kitten/"}
            />
          </ProjectCard>
          <ProjectCard
            title={"Landing Page Audifonos Mendoza"}
            description={
              "A landing page for promoting hearing aids and related products in Mendoza"
            }
            imageUrl={"/projectScreenshots/landingAudifonos.jpg"}
          >
            <TechBadge
              iconUrl={"/commonIcons/react.svg"}
              link={"https://react.dev/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/typescript.svg"}
              link={"https://www.typescriptlang.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/tailwindcss.svg"}
              link={"https://tailwindcss.com/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/nextjs.svg"}
              link={"https://nextjs.org/"}
            />
          </ProjectCard>
          <ProjectCard
            title={"Appointments Manager"}
            description={"A simple app to manage medical appointments"}
            imageUrl={"/projectScreenshots/turnero.jpg"}
          >
            <TechBadge
              iconUrl={"/commonIcons/react.svg"}
              link={"https://react.dev/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/typescript.svg"}
              link={"https://www.typescriptlang.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/tailwindcss.svg"}
              link={"https://tailwindcss.com/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/nextjs.svg"}
              link={"https://nextjs.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/daisyui.svg"}
              link={"https://daisyui.com/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/nextjs.svg"}
              link={"https://nextjs.org/"}
            />
            <TechBadge
              iconUrl={"/commonIcons/redux.svg"}
              link={"https://redux.js.org/"}
            />
          </ProjectCard>
        </div>
      </GlassMainLayout>
    </section>
  );
}
