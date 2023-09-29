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
  }

  .cta-containers {
    display: flex;

    button:first-child {
      margin-right: 1rem;
    }

    @media (max-width: 576px) {
      flex-direction: column;

      button:first-child {
        margin-bottom: 1rem;
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

  .clear-data-button {
    margin-top: 1rem;
  }
`;

export { Wrapper };
