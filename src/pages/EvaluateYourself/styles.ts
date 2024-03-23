import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 576px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
`;

const Content = styled.p`
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

    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  button:nth-child(1) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 576px) {
    margin-top: 2rem;

    button:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }
`;

export { Wrapper, Content, ButtonsContainer };
