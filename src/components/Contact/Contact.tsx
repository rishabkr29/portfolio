import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Interested in robotics, autonomous systems, or motion planning?</p>
        <p>Let's connect and build something great together.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:kumarrishab2910@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:kumarrishab2910@gmail.com">kumarrishab2910@gmail.com</a>
        </div>
        <div>
          <a href="tel:+917023036378"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917023036378">(+91) 7023036378</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}
