import React from "react";
import { ExternalLink as StyledExternalLink } from "./styles";

interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
}

const ExternalLink = ({
  href = "#",
  children,
  ...props
}: ExternalLinkProps) => {
  return (
    <StyledExternalLink href={href} {...props}>
      {children}
    </StyledExternalLink>
  );
};

export default ExternalLink;
