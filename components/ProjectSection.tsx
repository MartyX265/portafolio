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
            title={"Portafolio"}
            description={"My personal portfolio website"}
            imageUrl={"/portfolio.png"}
            link={"https://myportfolio.com"}
          >
            <TechBadge iconUrl={"/commonIcons/react.svg"} />
            <TechBadge iconUrl={"/commonIcons/typescript.svg"} />
            <TechBadge iconUrl={"/commonIcons/tailwindcss.svg"} />
            <TechBadge iconUrl={"/commonIcons/nextjs.svg"} />
          </ProjectCard>
          <ProjectCard
            title={"E-commerce"}
            description={"An online store for various products"}
            imageUrl={"/ecommerce.png"}
            link={"https://myecommerce.com"}
          >
            <TechBadge iconUrl={"/commonIcons/react.svg"} />
            <TechBadge iconUrl={"/commonIcons/typescript.svg"} />
            <TechBadge iconUrl={"/commonIcons/tailwindcss.svg"} />
            <TechBadge iconUrl={"/commonIcons/nextjs.svg"} />
          </ProjectCard>
          <ProjectCard
            title="Calcula Carrito"
            description="A simple app to calculate your shopping cart total with discounts and taxes."
            imageUrl="/calculacarro.png"
            link={"https://calculacarro.com"}
          >
            <TechBadge iconUrl={"/commonIcons/react.svg"} />
            <TechBadge iconUrl={"/commonIcons/expo.svg"} />
            <TechBadge iconUrl={"/commonIcons/typescript.svg"} />
          </ProjectCard>
        </div>
      </GlassMainLayout>
    </section>
  );
}
