import { Tech } from "@/app/redux/api/tech.api";
import TechCard from "./TechCard";

interface Props {
  techs: Tech[];
}
export default function TechGrid({ techs }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {techs.map((tech) => (
        <TechCard key={tech.id} title={tech.name} imageUrl={tech.icon} />
      ))}
    </div>
  );
}
