import styled from "styled-components";

export const Container = styled.div`
  min-width: 0;
  h3 { margin-bottom: 2.4rem; font-size: 1.8rem; }
  form { display: flex; flex-direction: column; align-items: stretch; gap: 0.8rem; }
  label { color: var(--muted); font-size: 1.3rem; font-weight: 500; }
  label[for="message"] { margin-top: 1.2rem; }
  input, textarea {
    min-width: 0;
    width: 100%;
    padding: 1.3rem 1.6rem;
    border: 1px solid var(--border);
    border-radius: 0.8rem;
    background: var(--surface);
    color: var(--text);
    font-size: 1.4rem;
    line-height: 1.7;
  }
  input::placeholder, textarea::placeholder { color: var(--muted); opacity: 0.8; }
  input:focus, textarea:focus { border-color: var(--green); }
  textarea { min-height: 16rem; resize: vertical; }
  form button { align-self: flex-start; min-width: 15rem; margin-top: 1.2rem; }
  .captcha { align-self: flex-start; width: 304px; max-width: 100%; margin-top: 1.2rem; }

  @media (max-width: 360px) {
    .captcha { height: 6.8rem; overflow: hidden; }
    .captcha > div { transform: scale(0.86); transform-origin: left top; }
  }
`;

export const ContainerSucces = styled.div`
  padding: 4rem 0;
  h3 { margin-bottom: 2.4rem; }
`;
