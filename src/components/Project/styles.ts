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
    h3 { margin-bottom: 1.6rem; font-size: 2rem; line-height: 1.45; letter-spacing: -0.035em; }
    .project-description { margin-bottom: 2.8rem; color: var(--muted); font-size: 1.4rem; line-height: 1.85; }
    footer { margin-top: auto; padding-top: 1.8rem; border-top: 1px solid var(--border); }
    .tech-list { display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem 1.4rem; color: var(--muted); font-size: 1.1rem; line-height: 1.7; }
  }

  @media (max-width: 1050px) {
    .projects { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 650px) {
    margin-top: 6rem;
    padding-top: 5.6rem;
    .projects { grid-template-columns: minmax(0, 1fr); gap: 1.6rem; }
    .project { padding: 2.4rem; }
  }
`;
