import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 0 3rem;

  @media only screen and (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;

const Footer = styled.footer`
  width: 100%;
  margin-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.white};

  div {
    padding: 2rem 3rem;
    display: flex;

    nav {
      margin-right: 1rem;

      @media only screen and (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }

    nav > a {
      color: ${({ theme }) => theme.primary};
      font-size: 1.5rem;
      font-weight: 700;
    }

    @media only screen and (max-width: 480px) {
      padding: 2rem 1.5rem;
      flex-direction: column;
    }
  }
`;

export { Wrapper, Header, Content, Footer };
