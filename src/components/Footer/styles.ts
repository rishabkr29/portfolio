import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  margin-top: 8rem;
  padding: 3.2rem max(2.4rem, calc((100% - 118rem) / 2));
  border-top: 1px solid var(--border);
  p { color: var(--muted); font-size: 1.2rem; }
  .logo { font-size: 1.8rem; }
  .social-media { display: flex; align-items: center; gap: 1.6rem; }
  .social-media a { padding: 0.4rem; }
  .social-media img { width: 2.2rem; height: 2.2rem; }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.8rem;
    margin-top: 6rem;
    padding-inline: 2rem;
  }
`;
