import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    span {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 576px) {
    padding-top: 1rem;

    h1 {
      font-size: 3rem;
    }

    nav {
      margin-top: 1rem;

      span {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 700;
  padding-top: 0;
  padding-bottom: 4rem;

  @media only screen and (max-width: 576px) {
    padding-bottom: 2rem;
    font-size: 1.5rem;
  }
`;

const Message = styled.p`
  font-size: 1.5rem;

  @media only screen and (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

export { Wrapper, Description, Message };
