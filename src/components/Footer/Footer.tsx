import { Container } from "./styles";
import { HashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

export function Footer() {
  return (
    <Container className="footer">
      <HashLink smooth to="#home" className="logo">Rishab Kumar<span>.</span></HashLink>
      <p>Built with React, TypeScript, and Vite.</p>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/rishabkumar29/" target="_blank" rel="noreferrer" aria-label="Rishab on LinkedIn"><img src={linkedin} alt="" /></a>
        <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer" aria-label="Rishab on GitHub"><img src={githubIcon} alt="" /></a>
      </div>
    </Container>
  );
}
