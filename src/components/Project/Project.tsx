import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>M.Tech Thesis — 2R Cable-Driven Manipulator</h3>
              <p>
                Designed and developed a 2R cable-driven manipulator for upper limb assistance.
                Implemented high-level position control algorithms for precise end-effector positioning,
                validated via MuJoCo simulation and successfully tested on hardware at IIT Gandhinagar's
                Human-Centered Robotics Lab.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MuJoCo</li>
                <li>C++</li>
                <li>Control Systems</li>
                <li>ROS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Path Tracking Controllers for Autonomous Vehicles</h3>
              <p>
                Developed and tuned lateral &amp; longitudinal path tracking algorithms — Stanley, Pure Pursuit,
                and LQR — for BOPT and mining vehicles at Flux Auto. Also built velocity profiling to optimize
                acceleration and ensure cargo stability and safe braking distances.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C++</li>
                <li>ROS2</li>
                <li>LQR</li>
                <li>Pure Pursuit</li>
                <li>Stanley</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>LiDAR-Based Pallet Detection &amp; Localization</h3>
              <p>
                Implemented a perception pipeline at Flux Auto using LiDAR point cloud data and template
                matching techniques for accurate pallet detection and localization, enabling reliable
                autonomous pallet pick-up operations.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C++</li>
                <li>ROS2</li>
                <li>LiDAR</li>
                <li>PCL</li>
                <li>Template Matching</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>EKF Sensor Fusion &amp; Visual Odometry Pipeline</h3>
              <p>
                At Alphadroid, improved EKF-based odometry and developed a Visual Odometry pipeline for
                RGB-D cameras, integrating it with an EKF for enhanced state estimation. Tuned DWB and
                MPPI local planners and resolved IMU/camera data issues to significantly boost navigation
                performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C++</li>
                <li>ROS2</li>
                <li>Nav2</li>
                <li>EKF</li>
                <li>RGB-D</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mobile Manipulator — Pick &amp; Drop Task</h3>
              <p>
                Developed a real-life mobile manipulation task (pick-up and drop) at IIT Gandhinagar by
                integrating a 5-DOF manipulator with a 2-DOF mobile base. Implemented custom kinematics,
                dynamics, and coordinated control for end-effector positioning.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ROS</li>
                <li>MoveIt</li>
                <li>Python</li>
                <li>Kinematics</li>
                <li>Gazebo</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/rishabkr29" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>3P Vision-Guided Manipulator</h3>
              <p>
                Designed a 3-prismatic-joint manipulator with vision-based object detection for precise
                position control. Implemented a vision-guided nut detection and unscrewing system using
                real-time image processing at IIT Gandhinagar.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>OpenCV</li>
                <li>ROS</li>
                <li>MATLAB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
