import styled from "styled-components";

export const Container = styled.section`
  padding-top: 8rem;
  border-top: 1px solid var(--border);

  .about-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: clamp(4rem, 7vw, 10rem);
    align-items: start;
  }

  h2 { max-width: 45rem; }
  .about-story { color: var(--muted); }
  .about-story p + p { margin-top: 1.8rem; }
  .intro-lead { color: var(--text); font-size: 1.9rem; line-height: 1.75; }

  .background-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(4rem, 7vw, 10rem);
    margin-top: 5.6rem;
  }

  .background-group h3, .toolkit h3 {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
    letter-spacing: -0.025em;
  }

  .background-entry { padding: 2rem 0; border-top: 1px solid var(--border); }
  h4 {
    margin-bottom: 0.5rem;
    font-family: var(--body-font);
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: -0.015em;
    line-height: 1.6;
  }

  .background-entry p { color: var(--muted); font-size: 1.4rem; line-height: 1.75; }
  .background-entry span { font-size: 1.25rem; }
  .background-entry p.entry-detail { margin-top: 0.4rem; font-size: 1.25rem; }

  .toolkit {
    display: grid;
    grid-template-columns: 24rem minmax(0, 1fr);
    gap: 2.4rem;
    margin-top: 3.6rem;
    padding-top: 3rem;
    border-top: 1px solid var(--border);
  }

  .toolkit h3 { margin: 0.7rem 0 0; }
  .skills-list { display: flex; flex-wrap: wrap; gap: 0.8rem; }
  .skills-list li {
    padding: 0.6rem 1.2rem;
    border: 1px solid var(--border);
    border-radius: 0.6rem;
    color: var(--muted);
    background: var(--surface);
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.6;
  }

  @media (max-width: 760px) {
    padding-top: 5.6rem;
    .about-intro, .background-grid { grid-template-columns: 1fr; gap: 3.2rem; }
    h2 { max-width: 56rem; }
    .background-grid { margin-top: 4rem; gap: 2rem; }
    .toolkit { grid-template-columns: 1fr; gap: 1.8rem; margin-top: 2.4rem; }
    .toolkit h3 { margin: 0; }
    .intro-lead { font-size: 1.8rem; }
  }
`;
