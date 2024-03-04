import { Link, LinkProps } from "react-router-dom";
import { Wrapper } from "./styles";

const ReactRouterLink = ({ ...props }: LinkProps) => {
  return (
    <Wrapper>
      <Link {...props} />
    </Wrapper>
  );
};

export { ReactRouterLink };
