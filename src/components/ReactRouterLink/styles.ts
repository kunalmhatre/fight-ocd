import styled from "styled-components";

const Wrapper = styled.span`
  a {
    color: ${({ theme }) => theme.primary};
    font-size: 3rem;
    font-weight: 700;
  }
`;

export { Wrapper };
