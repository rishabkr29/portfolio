import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact" aria-labelledby="contact-heading">
      <div className="contact-details">
        <header className="section-heading">
          <p className="section-eyebrow">03 / Get in touch</p>
          <h2 id="contact-heading">Let’s talk robotics.</h2>
          <p>Have a project in mind, an interesting problem, or just want to exchange ideas? I’d love to hear from you.</p>
        </header>
        <div className="contacts">
          <a className="contact-link" href="mailto:kumarrishab2910@gmail.com">
            <img src={emailIcon} alt="" />
            <span><span className="contact-label">Email me</span><span className="contact-value">kumarrishab2910@gmail.com</span></span>
          </a>
          <a className="contact-link" href="tel:+917023036378">
            <img src={phoneIcon} alt="" />
            <span><span className="contact-label">Give me a call</span><span className="contact-value">(+91) 7023036378</span></span>
          </a>
        </div>
      </div>
      <Form />
    </Container>
  );
}
