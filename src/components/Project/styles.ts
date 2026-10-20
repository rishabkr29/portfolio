import styled from "styled-components";

export const Container = styled.section`
  margin-top: 9rem;
  padding-top: 8rem;
  border-top: 1px solid var(--border);

  .projects {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
  }
  .projects > div { min-width: 0; }

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
    padding: 2.8rem;
    border: 1px solid var(--border);
    border-radius: 1.2rem;
    background: var(--surface);
    transition: border-color 180ms, transform 180ms;

    &:hover { border-color: var(--green); transform: translateY(-4px); }
    header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1.6rem; margin-bottom: 2.6rem; }
    header a { flex: 0 0 auto; padding: 0.2rem; }
    header img { width: 2.4rem; height: 2.4rem; }
    .project-category { max-width: 20rem; color: var(--green); font-size: 1.15rem; font-weight: 500; line-height: 1.7; }
    h3 { margin-bottom: 1.6rem; font-size: 2rem; font-weight: 500; line-height: 1.45; letter-spacing: -0.015em; }
    .project-description { margin-bottom: 2.8rem; color: var(--muted); font-size: 1.4rem; line-height: 1.85; }
    footer { margin-top: auto; padding-top: 1.8rem; border-top: 1px solid var(--border); }
    .tech-list { display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem 1.4rem; color: var(--muted); font-size: 1.1rem; line-height: 1.7; }
  }

  @media (max-width: 1050px) {
    .projects { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .skills-list { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  @media (max-width: 650px) {
    margin-top: 6rem;
    padding-top: 5.6rem;
    .projects { grid-template-columns: minmax(0, 1fr); gap: 1.6rem; }
    .project { padding: 2.4rem; }
    .toolkit { display: block; }
    .toolkit h3 { padding: 0; margin-bottom: 1.6rem; }
    .skills-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
`;
