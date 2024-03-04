import styled from "styled-components";

interface ButtonProps {
  level: number;
  isSelected?: boolean;
}

const Button = styled.button<ButtonProps>`
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
  border: ${({ theme, isSelected }) =>
    isSelected ? `5px solid ${theme.primary}` : `1px solid ${theme.border}`};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;

  &:hover {
    border: 5px solid ${({ theme }) => theme.border};
  }

  &:active {
    border: 5px solid ${({ theme }) => theme.primary};
  }
`;

export { Button };
