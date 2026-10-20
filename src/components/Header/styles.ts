import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  min-height: 8rem;
  padding: 1.6rem max(2.4rem, calc((100% - 118rem) / 2));
  border-bottom: 1px solid var(--border);
  background: var(--header-background);
  backdrop-filter: blur(16px);

  .logo { position: relative; z-index: 2; }
  nav { display: flex; align-items: center; gap: 2.4rem; }
  nav > a { color: var(--muted); font-size: 1.3rem; font-weight: 500; }
  nav > a:hover { color: var(--text); }
  nav > a.button { min-height: 3.8rem; padding: 0.8rem 1.4rem; color: var(--background); }

  .container_toggle { position: absolute; width: 1px; height: 1px; opacity: 0; }
  .container_toggle:focus-visible + label { outline: 2px solid var(--green); outline-offset: 5px; }
  .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
  .theme-switch {
    position: relative;
    z-index: 2;
    flex: 0 0 4.6rem;
    width: 4.6rem;
    height: 2.6rem;
    margin-left: auto;
    border: 1px solid var(--border);
    border-radius: 2rem;
    background: var(--surface);
    cursor: pointer;
  }
  .theme-switch::after { content: ''; position: absolute; width: 1.6rem; height: 1.6rem; left: 0.4rem; top: 0.4rem; border-radius: 50%; background: var(--green); transition: transform 180ms; }
  .container_toggle:checked + label::after { transform: translateX(1.8rem); }

  .menu { display: none; }

  @media (max-width: 1000px) {
    gap: 1.6rem;
    padding-inline: 2.4rem;
    .menu { position: relative; z-index: 2; display: flex; flex: 0 0 3.6rem; min-height: 3.6rem; padding: 0.8rem; border: 0; border-radius: 0.4rem; background: transparent; color: var(--text); }
    .menu:hover { transform: none; }
    .menu span, .menu span::before, .menu span::after { width: 2rem; height: 2px; background: currentColor; transition: transform 180ms; }
    .menu span { position: relative; }
    .menu span::before, .menu span::after { content: ''; position: absolute; left: 0; }
    .menu span::before { top: -6px; }
    .menu span::after { top: 6px; }
    .menu.active span { background: transparent; }
    .menu.active span::before { top: 0; transform: rotate(45deg); }
    .menu.active span::after { top: 0; transform: rotate(-45deg); }
    nav {
      position: fixed;
      z-index: 1;
      inset: 0;
      width: 100%;
      height: 100dvh;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
      padding: 10rem 2.4rem 4rem;
      background: var(--background);
      opacity: 0;
      visibility: hidden;
      transition: opacity 180ms, visibility 180ms;
    }
    nav.active { opacity: 1; visibility: visible; }
    nav > a { font-family: var(--heading-font); font-size: 2.4rem; color: var(--text); }
    nav > a.button { min-height: 4.6rem; padding: 1.1rem 2rem; font-family: var(--body-font); font-size: 1.4rem; }
  }

  @media (max-width: 480px) {
    padding-inline: 2rem;
    gap: 1.2rem;
    .logo { font-size: 1.8rem; }
  }
`;
