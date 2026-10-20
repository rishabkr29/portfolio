import styled from "styled-components";

export const Container = styled.section`
  padding-top: 7.2rem;
  border-top: 1px solid var(--border);

  &#education { margin-top: 7.2rem; }
  .section-heading { margin-bottom: 3.2rem; }
  .section-heading > p:not(.section-eyebrow) { max-width: 64rem; }

  .organisation-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.4rem;
  }

  .organisation-grid > div { min-width: 0; }
  .education-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 84rem;
    margin-inline: auto;
  }

  .organisation-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 3.6rem 2.4rem 3.2rem;
    border: 1px solid var(--border);
    border-radius: 1.2rem;
    background: var(--surface);
    text-align: center;
  }

  .organisation-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 13.2rem;
    height: 13.2rem;
    padding: 1.8rem;
    margin-bottom: 2.4rem;
    border: 1px solid #e7ece8;
    border-radius: 2rem;
    background: #fff;
    transition: transform 180ms;
  }

  .organisation-logo:hover { transform: translateY(-3px); }
  .organisation-logo img { width: 9.6rem; height: 9.6rem; object-fit: contain; }
  .organisation-name { margin-bottom: 0.8rem; color: var(--green); font-size: 1.35rem; font-weight: 500; }
  .organisation-designation { max-width: 29rem; margin-bottom: 1rem; font-size: 2rem; font-weight: 500; line-height: 1.4; letter-spacing: -0.01em; }
  .organisation-detail { max-width: 29rem; color: var(--muted); font-size: 1.25rem; line-height: 1.75; }
  .organisation-period { margin-top: 1.2rem; color: var(--muted); font-size: 1.2rem; }

  @media (max-width: 1000px) {
    .organisation-grid { gap: 1.6rem; }
    .organisation-card { padding: 2.8rem 1.6rem; }
    .organisation-designation { font-size: 1.8rem; }
  }

  @media (max-width: 760px) {
    padding-top: 5.6rem;
    &#education { margin-top: 5.6rem; }
    .organisation-grid { grid-template-columns: minmax(0, 1fr); }
    .organisation-card { padding: 3rem 2.4rem; }
    .organisation-designation { font-size: 2rem; }
  }
`;
