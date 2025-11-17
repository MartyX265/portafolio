import GlassLayout from "../Common/GlassLayout";

interface Props {
  schoolName: string;
  degree: string;
  startYear: string;
  endYear: string;
  details: string;
}

export default function EducationRow({
  schoolName,
  degree,
  startYear,
  endYear,
  details,
}: Props) {
  return (
    <GlassLayout>
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl">
          {schoolName}
        </h3>
        <span className="font-semibold md:text-lg lg:text-xl">
          {startYear} - {endYear}
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold">Degree: {degree}</p>
        <div className="text-xs">
          Relevant Courses:
          <ul className="px-8">
            {details.split(",").map((course, index) => (
              <li key={index} className="list-disc">{course.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    </GlassLayout>
  );
}
