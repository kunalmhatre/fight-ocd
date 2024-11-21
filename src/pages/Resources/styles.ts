import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 576px) {
    padding-top: 1rem;

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const Content = styled.p`
  margin-bottom: 0;
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
    font-size: 1rem;
    line-height: 1.75rem;
    width: 100%;
  }
`;

const ResourcesList = styled.ol`
  font-size: 1.25rem;

  @media only screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;

export { Wrapper, Content, ResourcesList };
