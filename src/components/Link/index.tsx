import { Link as ReactRouterLink, LinkProps } from "react-router-dom";
import { Wrapper } from "./styles";

const Link = ({ ...props }: LinkProps) => {
  return (
    <Wrapper>
      <ReactRouterLink {...props} />
    </Wrapper>
  );
};

export { Link };
