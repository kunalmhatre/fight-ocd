import { Button as StyledButton } from "./styles";

interface DiscomfortButtonProps {
  onClick: () => void;
  level: number;
  isSelected?: boolean;
}

const DiscomfortButton = ({
  onClick,
  level,
  isSelected = false,
}: DiscomfortButtonProps) => {
  return (
    <StyledButton onClick={onClick} level={level} isSelected={isSelected}>
      {level}
    </StyledButton>
  );
};

export default DiscomfortButton;
