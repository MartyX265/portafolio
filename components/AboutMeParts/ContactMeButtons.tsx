import ContactMe from "./ContactMe";

export default function ContactMeButtons() {
  return (
    <div className="flex flex-row justify-around items-center p-2">
      <ContactMe
        url={"https://www.linkedin.com/in/martin-ribotta-13a44a321"}
        iconUrl={"/commonIcons/linkedin.svg"}
      />
      <ContactMe
        url={"https://github.com/MartyX265"}
        iconUrl={"/commonIcons/github.svg"}
      />
      <ContactMe
        url={"mailto:martinribotta.dev@outlook.com.ar"}
        iconUrl={"/modernIcons/mail.svg"}
      />
    </div>
  );
}
