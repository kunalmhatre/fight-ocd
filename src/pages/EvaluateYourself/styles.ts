import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
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
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  button:nth-child(1) {
    margin-bottom: 1rem;
  }
`;

export { Wrapper, Content, ButtonsContainer };
