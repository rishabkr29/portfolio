import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.8fr);
  align-items: center;
  gap: 5rem;
  padding: clamp(14rem, 18vh, 20rem) 0 9rem;

  .section-eyebrow { margin-bottom: 1.4rem; }
  h1 { font-size: clamp(4.8rem, 6.5vw, 8rem); font-weight: 800; letter-spacing: -0.065em; line-height: 1.12; }
  .hero-role { margin-top: 1.6rem; color: var(--green); font-size: 1.9rem; font-weight: 500; }
  .hero-description { max-width: 48rem; margin-top: 2.2rem; color: var(--muted); font-size: 1.8rem; }
  .hero-focus { margin-top: 1.8rem; color: var(--muted); font-size: 1.25rem; }
  .hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 2.4rem; margin-top: 3.2rem; }
  .work-link { display: inline-flex; align-items: center; gap: 0.8rem; font-size: 1.4rem; font-weight: 500; }
  .work-link:hover { color: var(--green); }
  .social-media { display: flex; gap: 1.6rem; margin-top: 3.2rem; }
  .social-media a { display: inline-flex; padding: 0.4rem; }
  .social-media img { width: 2.5rem; height: 2.5rem; }
  .hero-image { padding: 2rem 0; }
  .hero-image img { width: 100%; max-width: 43rem; margin-inline: auto; }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 12rem 0 6rem;
    .hero-image { display: none; }
    h1 { font-size: clamp(4.6rem, 10vw, 6.8rem); }
    .hero-description { font-size: 1.7rem; }
    .hero-actions { gap: 2rem; }
  }
`;
