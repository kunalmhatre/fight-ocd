import styled from "styled-components";

const Wrapper = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0 1rem 0;

    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  h1 {
    display: flex;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
    width: 60%;
    min-height: 220px;

    @media (max-width: 1600px) {
      width: 100%;
    }

    @media (max-width: 576px) {
      font-size: 2.5rem;
    }
  }

  hr {
    margin: 2.5rem 0;
  }
`;

interface DiscomfortLevelProps {
  level: number;
}

const DiscomfortLevel = styled.div<DiscomfortLevelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, level }) => {
    switch (level) {
      case 1:
        return theme.discomfortLevel1;
      case 2:
        return theme.discomfortLevel2;
      case 3:
        return theme.discomfortLevel3;
      case 4:
        return theme.discomfortLevel4;
      case 5:
        return theme.discomfortLevel5;
      default:
        return theme.white;
    }
  }};
  border: ${({ theme }) => `1px solid ${theme.border}`};
  border-radius: 50%;
  margin-right: 0.5rem;
  min-height: 25px;
  min-width: 25px;
`;

interface ProgressLabelProps {
  isActive?: boolean;
}

const ProgressLabel = styled.label<ProgressLabelProps>`
  width: fit-content;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  border-radius: 50px;
  border: 1px solid
    ${({ theme, isActive }) => (isActive ? theme.white : theme.border)};
  padding: 0.25rem 1rem;
  color: ${({ theme, isActive }) => (isActive ? theme.white : theme.primary)};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.primary : theme.white};

  @media (max-width: 576px) {
    font-size: 0.75rem;
  }
`;

const LabelContainer = styled.div`
  display: flex;

  label {
    margin-right: 0.5rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    label:first-child {
      margin-bottom: 0.5rem;
    }
  }
`;

const Content = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 3rem 0 1rem 0;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const DiscomfortButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  button {
    margin-right: 1rem;
  }

  button:last-child {
    margin-right: 0;
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    button:last-child {
      margin-bottom: 0;
    }
  }
`;

const DiscomfortLevelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ButtonsContainer = styled.div`
  button {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export {
  Wrapper,
  DiscomfortLevel,
  ProgressLabel,
  LabelContainer,
  Content,
  DiscomfortButtonsContainer,
  DiscomfortLevelInfoContainer,
  ButtonsContainer,
};
