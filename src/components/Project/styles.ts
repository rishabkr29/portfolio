import styled from "styled-components";

export const Container = styled.section`
  margin-top: 9rem;
  padding-top: 8rem;
  border-top: 1px solid var(--border);

  .projects-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 2.4rem; margin-bottom: 3.6rem; }
  .projects-heading .section-heading { margin-bottom: 0; }
  .projects-profile { display: inline-flex; align-items: center; gap: 0.8rem; flex-shrink: 0; min-height: 4.4rem; padding: 0.8rem 0; color: var(--text); font-size: 1.3rem; font-weight: 500; }
  .projects-profile:hover { color: var(--green); }
  .projects-profile:hover span { text-decoration: underline; text-underline-offset: 0.4rem; }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  .toolkit { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 2.4rem 4rem; margin-top: 3.6rem; padding-top: 3rem; border-top: 1px solid var(--border); }
  .toolkit h3 { flex: 0 0 18rem; padding-top: 0.6rem; font-size: 1.8rem; }
  .skills-list { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); flex: 1 1 0; gap: 1rem; min-width: 0; }
  .skills-list li { display: flex; align-items: center; gap: 0.8rem; min-width: 0; padding: 0.8rem; border: 1px solid var(--border); border-radius: 0.7rem; color: var(--text); background: var(--surface); font-size: 1.3rem; font-weight: 500; line-height: 1.6; }
  .skill-icon { display: grid; place-items: center; flex: 0 0 3rem; width: 3rem; height: 3rem; padding: 0.4rem; border: 1px solid #e7ece8; border-radius: 0.5rem; background: #fff; }
  .skill-icon img { width: 2rem; height: 2rem; object-fit: contain; }
  .skill-label { white-space: nowrap; }

  .project {
    display: flex;
    flex-direction: column;
    min-width: 0;
    height: 100%;
    padding: 3.2rem;
    border: 1px solid var(--border);
    border-radius: 0.8rem;
    background: var(--surface);

    .project-context { display: flex; align-items: flex-start; justify-content: space-between; gap: 1.6rem; margin-bottom: 2.4rem; }
    .project-organisation { color: var(--text); font-size: 1.3rem; font-weight: 600; line-height: 1.6; }
    .project-category { margin-top: 0.4rem; color: var(--muted); font-size: 1.2rem; line-height: 1.6; }
    .project-number { flex-shrink: 0; color: var(--muted); font-size: 1.2rem; font-variant-numeric: tabular-nums; line-height: 1.6; }
    h3 { margin-bottom: 1.2rem; font-family: var(--body-font); font-size: 2rem; font-weight: 600; line-height: 1.45; letter-spacing: -0.02em; text-wrap: initial; }
    .project-description { margin-bottom: 2.4rem; color: var(--muted); font-size: 1.4rem; line-height: 1.8; }
    footer { margin-top: auto; padding-top: 1.8rem; border-top: 1px solid var(--border); }
    .project-tech-label { margin-bottom: 0.8rem; color: var(--text); font-size: 1.1rem; font-weight: 500; line-height: 1.6; }
    .tech-list { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 0; color: var(--muted); font-size: 1.2rem; line-height: 1.7; }
    .tech-list li { display: inline-flex; align-items: center; }
    .tech-list li:not(:last-child)::after { content: "·"; margin-inline: 0.8rem; }
  }

  @media (max-width: 1050px) {
    .project { padding: 2.6rem; }
    .skills-list { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  @media (max-width: 650px) {
    margin-top: 6rem;
    padding-top: 5.6rem;
    .projects-heading { display: block; margin-bottom: 2.4rem; }
    .projects-profile { margin-top: 1.2rem; }
    .projects { grid-template-columns: minmax(0, 1fr); gap: 1.6rem; }
    .project { padding: 2.4rem; }
    .toolkit { display: block; }
    .toolkit h3 { padding: 0; margin-bottom: 1.6rem; }
    .skills-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
`;
