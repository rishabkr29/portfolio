import styled from "styled-components";

export const Container = styled.main`
  width: min(118rem, calc(100% - 4.8rem));
  margin-inline: auto;
  section { min-width: 0; }

  @media (max-width: 480px) {
    width: calc(100% - 4rem);
  }
`;
