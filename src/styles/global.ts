import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #151917;
    --background: #151917;
    --surface: #1d231f;
    --surface-hover: #242d27;
    --text: #eff4f0;
    --muted: #a7b5ac;
    --border: #303c34;
    --green: #67dda0;
    --green-soft: rgba(103, 221, 160, 0.08);
    --header-background: rgba(21, 25, 23, 0.92);
    --contact-icon-filter: invert(1);
    --body-font: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --heading-font: 'Outfit', 'DM Sans', sans-serif;
    color-scheme: dark;
    scroll-padding-top: 10rem;
  }

  :root.light {
    --background: #f7f9f6;
    --surface: #ffffff;
    --surface-hover: #f0f5ef;
    --text: #1b2b21;
    --muted: #56665c;
    --border: #dce5dd;
    --green: #19764a;
    --green-soft: rgba(25, 118, 74, 0.06);
    --header-background: rgba(247, 249, 246, 0.94);
    --contact-icon-filter: none;
    color-scheme: light;
  }

  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; padding: 0; }
  html { font-size: 62.5%; }

  body {
    background: var(--background);
    color: var(--text);
    font-family: var(--body-font);
    font-size: 1.6rem;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button { font-family: var(--body-font); }
  input, textarea, button { font-size: inherit; }

  h1, h2, h3, h4, .logo {
    font-family: var(--heading-font);
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  h2 { font-size: clamp(3rem, 3.2vw, 4rem); }
  h3 { font-size: 2rem; }
  p { line-height: 1.8; }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  ul { list-style: none; }

  button, .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    min-height: 4.6rem;
    padding: 1.1rem 2rem;
    border: 1px solid transparent;
    border-radius: 0.8rem;
    background: var(--green);
    color: var(--background);
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.4;
    cursor: pointer;
    transition: background 180ms, transform 180ms;
  }

  button:hover, .button:hover { transform: translateY(-2px); }
  button:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
  :focus-visible { outline: 2px solid var(--green); outline-offset: 5px; }
  ::selection { background: var(--green); color: var(--background); }
  .logo { font-size: 2rem; letter-spacing: -0.05em; white-space: nowrap; }
  .logo span { color: var(--green); }

  .section-eyebrow {
    margin-bottom: 1.6rem;
    color: var(--green);
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: 0.13em;
    line-height: 1.5;
    text-transform: uppercase;
  }

  .section-heading { max-width: 66rem; margin-bottom: 3.6rem; }
  .section-heading > p:not(.section-eyebrow) { margin-top: 1.6rem; color: var(--muted); }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-delay: 0ms !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
`;
