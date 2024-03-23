import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  nav {
    margin-top: 4rem;

    span {
      font-size: 3rem;
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 576px) {
    h1 {
      font-size: 3rem;
    }

    nav {
      margin-top: 2rem;

      span {
        font-size: 2rem;
      }
    }
  }
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 700;

  @media only screen and (max-width: 576px) {
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
