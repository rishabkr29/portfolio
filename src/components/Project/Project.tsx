import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const projects = [
  {
    category: "Assistive robotics · M.Tech thesis",
    title: "Cable-driven assistive manipulator",
    description: "Designed a 2R cable-driven manipulator for upper limb assistance. Developed position control algorithms, validated them in MuJoCo, and tested the system on hardware at IIT Gandhinagar’s Human-Centered Robotics Lab.",
    technologies: ["MuJoCo", "C++", "Control systems", "ROS"],
  },
  {
    category: "Autonomous vehicles",
    title: "Path tracking that keeps vehicles on course",
    description: "Developed and tuned Stanley, Pure Pursuit, and LQR controllers for BOPT and mining vehicles at Flux Auto. Built velocity profiles to manage acceleration, vehicle stability, and safe braking distances.",
    technologies: ["C++", "ROS2", "LQR", "Pure Pursuit", "Stanley"],
  },
  {
    category: "Perception & localization",
    title: "Finding pallets with LiDAR",
    description: "Built a perception pipeline at Flux Auto using LiDAR point clouds and template matching to detect and localize pallets for autonomous pick-up operations.",
    technologies: ["C++", "ROS2", "LiDAR", "PCL", "Template matching"],
  },
  {
    category: "Sensor fusion & navigation",
    title: "A clearer picture of where a robot is",
    description: "Improved EKF-based odometry at Alphadroid by integrating an RGB-D visual odometry pipeline. Tuned DWB and MPPI local planners and resolved IMU and camera data issues to improve navigation.",
    technologies: ["C++", "ROS2", "Nav2", "EKF", "RGB-D"],
  },
  {
    category: "Mobile manipulation",
    title: "Coordinating a mobile pick-and-drop robot",
    description: "Integrated a 5-DOF manipulator with a 2-DOF mobile base at IIT Gandhinagar. Implemented kinematics, dynamics, and coordinated control to position the end effector during a real-world pick-and-drop task.",
    technologies: ["ROS", "MoveIt", "Python", "Kinematics", "Gazebo"],
  },
  {
    category: "Vision-guided manipulation",
    title: "Connecting vision with precise motion",
    description: "Designed a 3-prismatic-joint manipulator at IIT Gandhinagar. Combined real-time image processing with position control to detect nuts and guide the manipulator through an unscrewing task.",
    technologies: ["Python", "OpenCV", "ROS", "MATLAB"],
  },
];

export function Project() {
  return (
    <Container id="project" aria-labelledby="projects-heading">
      <header className="section-heading">
        <p className="section-eyebrow">02 / Selected work</p>
        <h2 id="projects-heading">Robotics in practice.</h2>
        <p>A few of the problems I’ve worked on, from autonomous vehicles to robots that lend a helping hand.</p>
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
    </Container>
  );
}
