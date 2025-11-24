import GlassMainLayout from "../Common/GlassMainLayout";
import SectionTitle from "../SectionTitle";
import EducationRow from "./EducationRow";

export default function EducationSection() {
  return (
    <section>
      <GlassMainLayout>
        <SectionTitle title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EducationRow
            schoolName={"Universidad Tecnologica Nacional"}
            degree={"Computer Science"}
            years="2022 - 2024"
            details={
              "System Design, Data Structures, Algorithms, Object-Oriented Programming, Databases, Software Development Methodologies"
            }
          />
          <EducationRow
            schoolName={"Escuela de Capacitación Newton"}
            degree={"Desarrollador Web Full Stack"}
            years="2021 - 2022"
            details={"HTML, CSS, JavaScript, REST APIs, Bootstrap, PHP, MySQL"}
          />
          <EducationRow
            schoolName={"edX (MIT)"}
            degree={"Web Development Fundamentals"}
            years="2021"
            details={
              "Introduction to Web Development, Web Accessibility, HTML Architecture"
            }
          />
        </div>
      </GlassMainLayout>
    </section>
  );
}
