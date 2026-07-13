import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Building something with full-stack engineering, AI workflows, or cloud infrastructure?</p>
        <p>Let's connect and turn the idea into a reliable product.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:hello@vinayaksingh.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:hello@vinayaksingh.com">hello@vinayaksingh.com</a>
        </div>
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+91) 9630576848</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
