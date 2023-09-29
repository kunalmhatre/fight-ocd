import { Button } from "./styles";

interface DiscomfortButtonProps {
  onClick: () => void;
  level: number;
  isSelected?: boolean;
}

const DiscomfortButton = ({
  onClick,
  level,
  isSelected,
}: DiscomfortButtonProps) => {
  return (
    <Button onClick={onClick} discomfortLevel={level} isSelected={isSelected}>
      {level}
    </Button>
  );
};

export default DiscomfortButton;
