import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  p.description {
    font-size: 1.25rem;
    line-height: 2rem;
    width: 40vw;

    @media only screen and (max-width: 1200px) {
      width: 60vw;
    }

    @media only screen and (max-width: 768px) {
      width: 70vw;
    }

    @media only screen and (max-width: 576px) {
      width: 100%;
    }
  }

  .cta-containers {
    display: flex;

    button {
      margin-right: 1rem;
    }

    button:last-child {
      margin-right: 0;
    }

    @media (max-width: 768px) {
      flex-direction: column;

      button {
        margin-right: 0;
        margin-bottom: 1rem;
      }

      button:last-child {
        margin-bottom: 0;
      }
    }
  }

  hr {
    margin: 2.5rem 0;
  }

  .attention-title {
    font-size: 2.5rem;
  }

  .discomfort-level {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .discomfort-level-description {
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 700;
    color: ${({ theme }) => theme.grey};
  }

  li {
    margin-bottom: 0.5rem;
  }

  .theme-number::marker {
    font-size: 2rem;
    font-weight: 700;
  }

  .theme {
    font-size: 2rem;
  }

  .concern {
    font-size: 1.25rem;
  }
`;

export { Wrapper };
