import { Container } from "./styles";
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
    organisation: "IIT Gandhinagar",
    context: "M.Tech thesis · Assistive robotics",
    title: "Cable-driven assistive manipulator",
    description: "Designed a 2R cable-driven manipulator for upper-limb assistance. Developed position control algorithms and validated the system in MuJoCo and on hardware at the Human-Centered Robotics Lab.",
    technologies: ["MuJoCo", "C++", "Control systems", "ROS"],
  },
  {
    organisation: "Flux Auto",
    context: "Industry project · Vehicle controls",
    title: "Autonomous vehicle path tracking",
    description: "Implemented and tuned Stanley, Pure Pursuit, and LQR controllers for BOPT and mining vehicles. Developed velocity profiles to account for acceleration, vehicle stability, and braking constraints.",
    technologies: ["C++", "ROS2", "LQR", "Pure Pursuit", "Stanley"],
  },
  {
    organisation: "Flux Auto",
    context: "Industry project · Perception",
    title: "LiDAR pallet detection and localization",
    description: "Developed a LiDAR point-cloud pipeline using template matching to detect and localize pallets for autonomous pickup operations.",
    technologies: ["C++", "ROS2", "LiDAR", "PCL", "Template matching"],
  },
  {
    organisation: "Alphadroid",
    context: "Industry project · Navigation",
    title: "Sensor fusion and visual odometry",
    description: "Integrated RGB-D visual odometry with EKF-based odometry. Tuned DWB and MPPI local planners and resolved IMU and camera data issues for mobile robot navigation.",
    technologies: ["C++", "ROS2", "Nav2", "EKF", "RGB-D"],
  },
  {
    organisation: "IIT Gandhinagar",
    context: "Research project · Mobile manipulation",
    title: "Mobile manipulation and coordinated control",
    description: "Integrated a 5-DOF manipulator with a 2-DOF mobile base. Implemented kinematics, dynamics, and coordinated control for end-effector positioning during a hardware pick-and-drop task.",
    technologies: ["ROS", "MoveIt", "Python", "Kinematics", "Gazebo"],
  },
  {
    organisation: "IIT Gandhinagar",
    context: "Research project · Vision and control",
    title: "Vision-guided manipulation",
    description: "Designed a 3-prismatic-joint manipulator for vision-guided nut removal. Combined real-time image processing with position control to detect nuts and execute the unscrewing task.",
    technologies: ["Python", "OpenCV", "ROS", "MATLAB"],
  },
];

export function Project() {
  return (
    <Container id="project" aria-labelledby="projects-heading">
      <header className="projects-heading">
        <div className="section-heading">
          <p className="section-eyebrow">Engineering portfolio</p>
          <h2 id="projects-heading">Selected projects</h2>
          <p>Industry and research projects in control systems, autonomous navigation, and robotic manipulation.</p>
        </div>
        <a className="projects-profile" href="https://github.com/rishabkr29" target="_blank" rel="noreferrer">
          <span>GitHub profile</span>
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
            <path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </header>
      <div className="projects">
        {projects.map((project, index) => (
          <article className="project" key={project.title} aria-labelledby={`project-title-${index}`}>
            <header className="project-context">
              <div>
                <p className="project-organisation">{project.organisation}</p>
                <p className="project-category">{project.context}</p>
              </div>
              <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </header>
            <h3 id={`project-title-${index}`}>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <footer>
              <p className="project-tech-label">Technologies</p>
              <ul className="tech-list" aria-label={`Technologies used for ${project.title}`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </footer>
          </article>
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
