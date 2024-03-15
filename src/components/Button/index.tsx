import { Button as StyledButton } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled?: boolean;
  children: string | React.ReactNode;
  state?: "default" | "success" | "danger";
}

const Button = ({
  onClick = () => {},
  disabled = false,
  state = "default",
  children,
  ...props
}: ButtonProps) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
    $variant={state === "default" ? "primary" : "secondary"}
    $state={state}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
