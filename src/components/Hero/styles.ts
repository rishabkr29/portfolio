import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.95fr);
  align-items: center;
  gap: 6rem;
  padding: clamp(14rem, 18vh, 20rem) 0 8rem;

  .section-eyebrow { margin-bottom: 1.4rem; }
  h1 { font-size: clamp(4.8rem, 6vw, 7.6rem); font-weight: 600; letter-spacing: -0.045em; line-height: 1.12; }
  .hero-role { margin-top: 1.6rem; color: var(--green); font-size: 2rem; font-weight: 500; line-height: 1.5; }
  .hero-description { max-width: 50rem; margin-top: 2.2rem; color: var(--muted); font-size: 1.7rem; }
  .hero-focus { margin-top: 1.8rem; color: var(--muted); font-size: 1.2rem; }
  .hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 2.4rem; margin-top: 3.2rem; }
  .work-link { display: inline-flex; align-items: center; gap: 0.8rem; font-size: 1.4rem; font-weight: 500; }
  .work-link:hover { color: var(--green); }
  .social-media { display: flex; gap: 1.6rem; margin-top: 3.2rem; }
  .social-media a { display: inline-flex; padding: 0.4rem; }
  .social-media img { width: 2.5rem; height: 2.5rem; }

  .hero-visual { padding: 2.4rem 1.6rem 1.8rem; border: 1px solid var(--border); border-radius: 1.2rem; background: var(--surface); color: var(--muted); }
  .visual-heading { display: flex; align-items: center; gap: 0.8rem; padding-inline: 1rem; font-size: 1.15rem; font-weight: 500; }
  .visual-dot { width: 0.6rem; height: 0.6rem; border-radius: 50%; background: var(--green); }
  .hero-visual svg { display: block; width: 100%; height: auto; margin-block: 1rem; }
  .reference-path { fill: none; stroke: var(--green); stroke-width: 2; stroke-dasharray: 7 7; opacity: 0.8; }
  .path-node { fill: var(--green); }
  .sensor-range { fill: var(--green-soft); stroke: var(--green); stroke-width: 1; stroke-dasharray: 3 5; opacity: 0.65; }
  .robot-body { fill: var(--surface); stroke: var(--text); stroke-width: 2; }
  .robot-wheel { fill: var(--muted); }
  .robot-sensor { fill: var(--green); }
  .heading-arrow { fill: none; stroke: var(--green); stroke-width: 2; }
  .axis { fill: none; stroke: var(--muted); stroke-width: 1; opacity: 0.65; }
  .axis-label { fill: var(--muted); font-family: var(--body-font); font-size: 12px; }
  .diagram-label { fill: var(--muted); font-family: var(--body-font); font-size: 9px; letter-spacing: 1px; }
  .hero-visual figcaption { text-align: center; color: var(--muted); font-size: 1.05rem; }

  @media (max-width: 1000px) {
    gap: 3rem;
    .hero-role { font-size: 1.8rem; }
  }
  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 12rem 0 6rem;
    gap: 3.6rem;
    h1 { font-size: clamp(4.6rem, 10vw, 6.8rem); }
    .hero-role { max-width: 40rem; font-size: 1.8rem; }
    .hero-description { font-size: 1.6rem; }
    .hero-actions { gap: 2rem; }
    .hero-visual { display: none; }
    & > div:last-child { display: none; }
  }
`;
