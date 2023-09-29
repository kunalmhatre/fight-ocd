import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  p.description {
    font-size: 2rem;
    font-weight: 700;
  }

  nav {
    margin-top: 4rem;
  }

  nav > a {
    color: ${({ theme }) => theme.primary};
    font-size: 3rem;
    font-weight: 700;
  }

  p.message {
    font-size: 1.5rem;
  }
`;

export { Wrapper };
