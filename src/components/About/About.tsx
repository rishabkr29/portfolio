import { Container } from "./styles";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import fluxAuto from "../../assets/logos/flux-auto-icon.png";
import alphadroid from "../../assets/logos/alphadroid-icon.png";
import iitBombay from "../../assets/logos/iit-bombay.png";
import iitGandhinagar from "../../assets/logos/iit-gandhinagar.png";
import nitNagaland from "../../assets/logos/nit-nagaland.png";

type Organisation = {
  name: string;
  logo: string;
  website: string;
  designation: string;
  detail: string;
  period?: string;
};

const experience: Organisation[] = [
  {
    name: "Flux Auto",
    logo: fluxAuto,
    website: "https://fluxauto.ai/",
    designation: "Robotics Software Engineer – Controls",
    detail: "Bengaluru, India",
  },
  {
    name: "Alphadroid",
    logo: alphadroid,
    website: "https://www.alphadroid.io/",
    designation: "Robotics Engineer",
    detail: "Noida, India",
  },
  {
    name: "IIT Bombay",
    logo: iitBombay,
    website: "https://www.iitb.ac.in/",
    designation: "Junior Research Fellow",
    detail: "Suman Mashruwala Advanced Micro Engineering Lab",
  },
];

const education: Organisation[] = [
  {
    name: "IIT Gandhinagar",
    logo: iitGandhinagar,
    website: "https://iitgn.ac.in/",
    designation: "M.Tech · Mechanical Engineering",
    detail: "Indian Institute of Technology, Gandhinagar",
    period: "July 2022 – June 2024",
  },
  {
    name: "NIT Nagaland",
    logo: nitNagaland,
    website: "https://www.nitnagaland.ac.in/",
    designation: "B.Tech · Mechanical Engineering",
    detail: "National Institute of Technology, Nagaland",
    period: "July 2018 – May 2022",
  },
];

function OrganisationCard({ organisation }: { organisation: Organisation }) {
  return (
    <article className="organisation-card">
      <a className="organisation-logo" href={organisation.website} target="_blank" rel="noreferrer" aria-label={`${organisation.name} website`}>
        <img src={organisation.logo} alt={`${organisation.name} logo`} width="96" height="96" loading="lazy" decoding="async" />
      </a>
      <p className="organisation-name">{organisation.name}</p>
      <h3 className="organisation-designation">{organisation.designation}</h3>
      <p className="organisation-detail">{organisation.detail}</p>
      {organisation.period && <p className="organisation-period">{organisation.period}</p>}
    </article>
  );
}

export function About() {
  return (
    <Container id="about" aria-labelledby="experience-heading">
      <header className="section-heading">
        <p className="section-eyebrow">Professional background</p>
        <h2 id="experience-heading">Work experience</h2>
        <p>Control, perception, and autonomy across industry and robotics research.</p>
      </header>
      <div className="organisation-grid experience-grid">
        {experience.map((organisation) => (
          <ScrollAnimation animateIn="fadeInUp" key={organisation.name}>
            <OrganisationCard organisation={organisation} />
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}

export function Education() {
  return (
    <Container id="education" aria-labelledby="education-heading">
      <header className="section-heading">
        <p className="section-eyebrow">Academic background</p>
        <h2 id="education-heading">Education</h2>
      </header>
      <div className="organisation-grid education-grid">
        {education.map((organisation) => (
          <ScrollAnimation animateIn="fadeInUp" key={organisation.name}>
            <OrganisationCard organisation={organisation} />
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
