import ContactMe from "./ContactMe";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function ContactMeButtons() {
  return (
    <div className="flex flex-row justify-around items-center p-2">
      <ContactMe
        url={"https://www.linkedin.com/in/martin-ribotta-13a44a321"}
        icon={<FaLinkedin size={32} />}
      />
      <ContactMe
        url={"https://github.com/MartyX265"}
        icon={<FaGithub size={32} />}
      />
      <ContactMe
        url={"mailto:martinribotta.dev@outlook.com.ar"}
        icon={<IoIosMail size={32} />}
      />
    </div>
  );
}
