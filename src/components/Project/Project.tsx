import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import cplusplusIcon from "../../assets/skills/cplusplus.svg";
import pythonIcon from "../../assets/skills/python.svg";
import rosIcon from "../../assets/skills/ros.svg";
import nav2Icon from "../../assets/skills/nav2.png";
import moveitIcon from "../../assets/skills/moveit2.png";
import mujocoIcon from "../../assets/skills/mujoco.png";
import gazeboIcon from "../../assets/skills/gazebo.svg";
import dockerIcon from "../../assets/skills/docker.svg";
import linuxIcon from "../../assets/skills/linux.svg";
import gitIcon from "../../assets/skills/git.svg";
import matlabIcon from "../../assets/skills/matlab.svg";

const skills = [
  { name: "C++", icon: cplusplusIcon },
  { name: "Python", icon: pythonIcon },
  { name: "ROS1", icon: rosIcon },
  { name: "ROS2", icon: rosIcon },
  { name: "Nav2", icon: nav2Icon },
  { name: "MoveIt2", icon: moveitIcon },
  { name: "MuJoCo", icon: mujocoIcon },
  { name: "Gazebo", icon: gazeboIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Linux", icon: linuxIcon },
  { name: "Git", icon: gitIcon },
  { name: "MATLAB", icon: matlabIcon },
];

const projects = [
  {
    category: "Assistive robotics · M.Tech thesis",
    title: "Cable-Driven Assistive Manipulator",
    description: "Designed a 2R cable-driven manipulator for upper limb assistance. Developed position control algorithms, validated them in MuJoCo, and tested the system on hardware at IIT Gandhinagar’s Human-Centered Robotics Lab.",
    technologies: ["MuJoCo", "C++", "Control systems", "ROS"],
  },
  {
    category: "Autonomous vehicles",
    title: "Autonomous Vehicle Path Tracking",
    description: "Developed and tuned Stanley, Pure Pursuit, and LQR controllers for BOPT and mining vehicles at Flux Auto. Built velocity profiles to manage acceleration, vehicle stability, and safe braking distances.",
    technologies: ["C++", "ROS2", "LQR", "Pure Pursuit", "Stanley"],
  },
  {
    category: "Perception & localization",
    title: "LiDAR Pallet Detection & Localization",
    description: "Built a perception pipeline at Flux Auto using LiDAR point clouds and template matching to detect and localize pallets for autonomous pick-up operations.",
    technologies: ["C++", "ROS2", "LiDAR", "PCL", "Template matching"],
  },
  {
    category: "Sensor fusion & navigation",
    title: "EKF Sensor Fusion & Visual Odometry",
    description: "Improved EKF-based odometry at Alphadroid by integrating an RGB-D visual odometry pipeline. Tuned DWB and MPPI local planners and resolved IMU and camera data issues to improve navigation.",
    technologies: ["C++", "ROS2", "Nav2", "EKF", "RGB-D"],
  },
  {
    category: "Mobile manipulation",
    title: "Mobile Manipulation & Coordinated Control",
    description: "Integrated a 5-DOF manipulator with a 2-DOF mobile base at IIT Gandhinagar. Implemented kinematics, dynamics, and coordinated control to position the end effector during a real-world pick-and-drop task.",
    technologies: ["ROS", "MoveIt", "Python", "Kinematics", "Gazebo"],
  },
  {
    category: "Vision-guided manipulation",
    title: "Vision-Guided Manipulation",
    description: "Designed a 3-prismatic-joint manipulator at IIT Gandhinagar. Combined real-time image processing with position control to detect nuts and guide the manipulator through an unscrewing task.",
    technologies: ["Python", "OpenCV", "ROS", "MATLAB"],
  },
];

export function Project() {
  return (
    <Container id="project" aria-labelledby="projects-heading">
      <header className="section-heading">
        <p className="section-eyebrow">Engineering portfolio</p>
        <h2 id="projects-heading">Selected projects</h2>
        <p>Applied work in autonomous systems, robot control, and perception.</p>
      </header>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation animateIn="fadeInUp" key={project.title}>
            <article className="project">
              <header>
                <p className="project-category">{project.category}</p>
                <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer" aria-label="Visit Rishab’s GitHub profile">
                  <img src={githubIcon} alt="" />
                </a>
              </header>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <footer>
                <ul className="tech-list" aria-label="Technologies used">
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </footer>
            </article>
          </ScrollAnimation>
        ))}
      </div>
      <div className="toolkit">
        <h3>Technical toolkit</h3>
        <ul className="skills-list" aria-label="Technical skills">
          {skills.map((skill) => (
            <li key={skill.name}>
              <span className="skill-icon" aria-hidden="true">
                <img src={skill.icon} alt="" width="20" height="20" loading="lazy" decoding="async" />
              </span>
              <span className="skill-label">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
