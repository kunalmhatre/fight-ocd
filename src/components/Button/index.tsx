import { Button as StyledButton } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
  children: string | React.ReactNode;
  variant?: "primary" | "secondary";
  state?: "default" | "success" | "danger";
}

const Button = ({
  onClick,
  disabled,
  children,
  variant,
  state,
  ...props
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
    variant={state === "success" || state === "danger" ? "secondary" : variant}
    state={state}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
