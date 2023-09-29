import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  p.description,
  p.note {
    font-size: 1.25rem;
    line-height: 2rem;
    width: 40vw;
  }

  p.note {
    a {
      color: ${({ theme }) => theme.primary};
    }
  }

  p.description,
  p.note {
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

  .cta-container {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    button:nth-child(1) {
      margin-bottom: 1rem;
    }
  }

  .cta {
    cursor: pointer;
    font-weight: 700;
    width: fit-content;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primary};
  }
`;

export { Wrapper };
