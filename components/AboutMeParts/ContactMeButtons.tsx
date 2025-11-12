import ContactMe from "./ContactMe";

export default function ContactMeButtons() {
  return (
    <div className="flex flex-row justify-around items-center p-2">
      <button className="btn btn-primary">Download CV</button>
      <ContactMe />
      <ContactMe />
    </div>
  );
}
