import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
  gap: clamp(4rem, 7vw, 10rem);
  margin-top: 9rem;
  padding-top: 8rem;
  border-top: 1px solid var(--border);

  .section-heading { margin-bottom: 3.2rem; }
  .contacts { display: grid; gap: 1.2rem; }
  .contact-link { display: flex; align-items: center; gap: 1.8rem; padding: 1.8rem 2rem; border: 1px solid var(--border); border-radius: 0.8rem; background: var(--surface); transition: border-color 180ms; }
  .contact-link:hover { border-color: var(--green); }
  .contact-link img { flex: 0 0 2.8rem; width: 2.8rem; height: 2.8rem; filter: var(--contact-icon-filter); }
  .contact-link > span { min-width: 0; }
  .contact-label { display: block; color: var(--muted); font-size: 1.15rem; }
  .contact-value { display: block; margin-top: 0.2rem; font-size: 1.35rem; font-weight: 500; overflow-wrap: anywhere; }

  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 4rem;
    margin-top: 6rem;
    padding-top: 5.6rem;
  }
`;
