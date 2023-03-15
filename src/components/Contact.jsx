import { contactData } from "../assets/data/contactData";
import ContactCss from "../styles/contact/contact.module.css";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <>
      <h2 id="contact-landing" className="title">
        Contact
      </h2>
      <div className={ContactCss.wrapper}>
        {contactData.map((contact) => {
          return (
            <a
              target="_blank"
              key={contact.link}
              className={ContactCss.link}
              href={contact.link}
            >
              {contact.icon}
            </a>
          );
        })}
        <a href="mailto:bugaletedaniel1@gmail.com" className={ContactCss.link}>
          <MdEmail />
        </a>
      </div>
    </>
  );
};
