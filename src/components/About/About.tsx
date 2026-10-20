import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const skills = [
  "C++", "Python", "ROS1", "ROS2", "Nav2", "MoveIt2",
  "MuJoCo", "Gazebo", "Docker", "Linux", "Git", "MATLAB",
];

export function About() {
  return (
    <Container id="about" aria-labelledby="about-heading">
      <div className="about-intro">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="section-eyebrow">01 / About me</p>
          <h2 id="about-heading">From an idea in simulation to a robot in motion.</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="about-story">
            <p className="intro-lead">
              I’m Rishab, a robotics engineer who enjoys making robots move
              reliably and understand the world around them.
            </p>
            <p>
              My work brings together control, perception, and motion planning.
              I work with C++, Python, and ROS to take algorithms from MuJoCo
              and Gazebo simulations to real hardware.
            </p>
            <p>
              Along the way, I’ve worked on autonomous vehicles, mobile
              manipulators, and assistive robots — each with a different
              challenge in turning theory into something that works.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div className="background-grid">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="background-group">
            <h3>Where I’ve worked</h3>
            <div className="background-entry">
              <h4>Robotics Control System Engineer</h4>
              <p>Flux Auto <span>· Bengaluru, India</span></p>
            </div>
            <div className="background-entry">
              <h4>Robotics Engineer</h4>
              <p>Alphadroid <span>· Noida, India</span></p>
            </div>
            <div className="background-entry">
              <h4>Junior Research Fellow</h4>
              <p>IIT Bombay</p>
              <p className="entry-detail">Suman Mashruwala Advanced Micro Engineering Lab</p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={100}>
          <div className="background-group">
            <h3>Where I’ve learned</h3>
            <div className="background-entry">
              <h4>M.Tech in Mechanical Engineering</h4>
              <p>Indian Institute of Technology, Gandhinagar</p>
              <p className="entry-detail">July 2022 – June 2024</p>
            </div>
            <div className="background-entry">
              <h4>B.Tech in Mechanical Engineering</h4>
              <p>National Institute of Technology, Nagaland</p>
              <p className="entry-detail">July 2018 – May 2022</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation animateIn="fadeInUp">
        <div className="toolkit">
          <h3>My everyday toolkit</h3>
          <ul className="skills-list" aria-label="Technical skills">
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </ScrollAnimation>
    </Container>
  );
}
