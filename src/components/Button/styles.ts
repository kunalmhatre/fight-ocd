import styled from "styled-components";

interface ButtonProps {
  disabled?: boolean;
  variant?: "primary" | "secondary";
  state?: "default" | "success" | "danger";
}

const Button = styled.button<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: 700;
  width: fit-content;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  border: ${({ theme, state }) => {
    switch (state) {
      case "success":
        return `2px solid ${theme.green}`;
      case "danger":
        return `2px solid ${theme.danger}`;
      default:
        return `2px solid ${theme.primary}`;
    }
  }};
  color: ${({ theme, state }) => {
    switch (state) {
      case "success":
        return theme.green;
      case "danger":
        return theme.danger;
      default:
        return theme.white;
    }
  }};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case "secondary":
        return theme.white;
      default:
        return theme.primary;
    }
  }};
`;

export { Button };
