import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

export function Hero() {
  return (
    <Container id="home" aria-labelledby="home-heading">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="section-eyebrow">Robotics & autonomous systems</p>
          <h1 id="home-heading">Rishab Kumar</h1>
          <p className="hero-role">Robotics Software Engineer – Controls</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <p className="hero-description">
            Control, motion planning, and perception software for autonomous
            robots — from simulation to real hardware.
          </p>
          <p className="hero-focus">Path tracking · Sensor fusion · Reinforcement learning</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <div className="hero-actions">
            <NavHashLink smooth to="#contact" className="button">Get in touch <span aria-hidden="true">↗</span></NavHashLink>
            <NavHashLink smooth to="#project" className="work-link">View projects <span aria-hidden="true">↓</span></NavHashLink>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/rishabkumar29/" target="_blank" rel="noreferrer" aria-label="Rishab on LinkedIn"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer" aria-label="Rishab on GitHub"><img src={githubIcon} alt="" /></a>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInUp" delay={150}>
        <figure className="hero-visual">
          <div className="visual-heading"><span className="visual-dot" />Control & motion planning</div>
          <svg viewBox="0 0 460 320" role="img" aria-labelledby="controls-visual-title">
            <title id="controls-visual-title">Illustration of a mobile robot following a planned path</title>
            <defs>
              <pattern id="control-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.16" /></pattern>
              <marker id="control-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="var(--green)" /></marker>
            </defs>
            <rect width="460" height="320" fill="url(#control-grid)" />
            <path className="reference-path" d="M42 249C110 249 101 136 179 136S274 225 326 171S347 66 420 66" />
            <circle cx="42" cy="249" r="5" className="path-node" />
            <circle cx="420" cy="66" r="5" className="path-node" />
            <circle cx="271" cy="185" r="54" className="sensor-range" />
            <g transform="translate(271 185) rotate(20)">
              <rect x="-28" y="-19" width="56" height="38" rx="9" className="robot-body" />
              <rect x="-18" y="-24" width="15" height="7" rx="2" className="robot-wheel" />
              <rect x="-18" y="17" width="15" height="7" rx="2" className="robot-wheel" />
              <rect x="10" y="-24" width="12" height="7" rx="2" className="robot-wheel" />
              <rect x="10" y="17" width="12" height="7" rx="2" className="robot-wheel" />
              <circle cx="10" cy="0" r="6" className="robot-sensor" />
              <path d="M33 0H64" className="heading-arrow" markerEnd="url(#control-arrow)" />
            </g>
            <path d="M50 78V40M50 78H88" className="axis" />
            <text x="94" y="82" className="axis-label">x</text><text x="46" y="30" className="axis-label">y</text>
            <text x="280" y="277" className="diagram-label">REFERENCE PATH</text>
            <path d="M315 259L326 220" className="axis" />
          </svg>
          <figcaption>Path tracking · State estimation · Feedback control</figcaption>
        </figure>
      </ScrollAnimation>
    </Container>
  );
}
