import { Tech } from "@/app/redux/api/tech.api";
import TechBadge from "./TechBadge";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  techs: Tech[];
}
export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
  techs,
}: Props) {
  return (
    <div className="card bg-base-200/40 w-fit border border-base-300">
      <figure className="p-2 md:p-8">
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title md:text-xl font-bold">{title}</h2>
        <p className="md:text-lg font-semibold">{description}</p>
        <div className="card-actions justify-start">
          {techs.map((tech, index) => (
            <TechBadge key={index} iconUrl={tech.icon} link={tech.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
