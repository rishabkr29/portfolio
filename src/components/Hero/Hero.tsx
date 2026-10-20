import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

export function Hero() {
  return (
    <Container id="home" aria-labelledby="home-heading">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="section-eyebrow">Hello, I’m</p>
          <h1 id="home-heading">Rishab Kumar</h1>
          <p className="hero-role">Robotics Engineer</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <p className="hero-description">
            Building the control and perception systems that help robots
            move with confidence.
          </p>
          <p className="hero-focus">Control · Perception · Reinforcement learning</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <div className="hero-actions">
            <NavHashLink smooth to="#contact" className="button">Let’s connect <span aria-hidden="true">↗</span></NavHashLink>
            <NavHashLink smooth to="#project" className="work-link">Explore my work <span aria-hidden="true">↓</span></NavHashLink>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/rishabkumar29/" target="_blank" rel="noreferrer" aria-label="Rishab on LinkedIn">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer" aria-label="Rishab on GitHub">
              <img src={githubIcon} alt="" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <img src={Illustration} alt="" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
