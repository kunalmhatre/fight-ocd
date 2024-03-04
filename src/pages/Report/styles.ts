import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  hr {
    margin: 2.5rem 0;
  }
`;

const ThemesListItem = styled.li`
  margin-bottom: 0.5rem;

  &::marker {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const ConcernsListItem = styled.li`
  font-size: 1.25rem;
`;

const DiscomfortLevel = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

const DiscomfortLevelDescription = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 700;
  color: ${({ theme }) => theme.grey};
`;

const Description = styled.p`
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
`;

export {
  Wrapper,
  Description,
  ButtonsContainer,
  DiscomfortLevel,
  DiscomfortLevelDescription,
  ThemesListItem,
  ConcernsListItem,
};
