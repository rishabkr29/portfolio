import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  .skill-badge{
    span{
      display: inline-block;
      padding: 0.5rem 1.4rem;
      border: 0.15rem solid var(--green);
      border-radius: 2rem;
      color: var(--green);
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 0.05rem;
      transition: background 0.25s, color 0.25s;
      &:hover{
        background: var(--green);
        color: #212121;
      }
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align: justify;
  }
  
  

  .about-image{
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2;
    grid-row: 1;

    > div{
      width: min(42rem, 100%);
      height: auto;
      border-radius: 0;
      background: transparent;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img{
      width: 100%;
      height: auto;
      object-fit: contain;
      object-position: center top;
      border-radius: 0;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover{
        filter: grayscale(0);
      }
    }
  }

  .about-text{
    grid-column: 1;
    grid-row: 1;
    text-align: justify;
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      > div{
        width: min(26rem, 78vw);
        height: min(26rem, 78vw);
        border-radius: 50%;
      }

      img{
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .hard-skills{
      justify-content: center;
    }

    .about-image{
      display: flex;
      justify-content: center;
      max-width: 100%;
      margin-bottom: 5rem;
    }

    .about-text,
    .about-image{
      grid-column: auto;
      grid-row: auto;
    }
  }
`
