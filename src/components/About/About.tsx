import { Container } from "./styles";
import python from "../../assets/python.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          {/* Replace with your photo in /public/Images/Rishab_Kumar.jpg */}
          <img src="/Images/Rishab_Kumar.jpg" alt="Rishab Kumar"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
        </ScrollAnimation>
      </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Rishab, a Robotics Engineer passionate about building
            robust autonomy stacks for Robots.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I work across C++, Python, ROS/ROS2, and simulation tools like MuJoCo and Gazebo to solve
            real-world problems in control, motion planning, perception, sensor fusion, and navigation.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            My recent work spans working on path tracking algorithms like Stanley, Pure Pursuit, and LQR,
            velocity profiling for autonomous vehicles, LiDAR-based pallet detection, and EKF-based sensor
            fusion.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Master of Technology — Mechanical Engineering</h4>
            <p>Indian Institute of Technology, Gandhinagar &nbsp;|&nbsp; Jul 2022 – Jun 2024</p>
            {/* <p>CPI: 8.06 / 10</p> */}
            <br />
            <h4>Bachelor of Technology — Mechanical Engineering</h4>
            <p>National Institute of Technology, Nagaland &nbsp;|&nbsp; Jul 2018 – May 2022</p>
            {/* <p>CGPA: 9.42 / 10 &nbsp;|&nbsp; 🥇 Gold Medalist — First Rank</p> */}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Robotics Control System Engineer</h4>
            <p>Flux Auto, Bengaluru (India)</p>
            <br />
            <h4>Robotics Engineer</h4>
            <p>Alphadroid, Noida (India)</p>
            <br />
            <h4>Junior Research Fellow</h4>
            <p>Suman Mashruwala Advanced Micro Engineering Lab, IIT Bombay </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Skills:</h3>
        </ScrollAnimation>

        {/* Skill badges instead of icons since no robotics SVGs exist */}
        <div className="hard-skills">
          {[
            "C++", "Python", "ROS1", "ROS2", "Nav2",
            "MoveIt2", "MuJoCo", "Gazebo", "Docker",
            "Linux", "Git", "MATLAB",
          ].map((skill) => (
            <div className="hability skill-badge" key={skill}>
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <span>{skill}</span>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
