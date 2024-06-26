import { ReactNode } from "react";
import { Header, Footer, Content, Wrapper } from "./styles";
import { ThemeProvider } from "styled-components";
import { Link } from "../Link";
import moment from "moment";

interface LayoutProps {
  children: ReactNode;
}

interface Theme {
  [key: string]: string;
}

const theme: Theme = {
  primary: "#000000",
  border: "#838282",
  grey: "#808080",
  white: "#FFFFFF",
  danger: "#C21A1A",
  green: "#008000",
  discomfortLevel1: "#FFFFFF",
  discomfortLevel2: "#FFF968",
  discomfortLevel3: "#F39C6A",
  discomfortLevel4: "#E26562",
  discomfortLevel5: "#C21A1A",
};

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header>
        <Link to="/">Fight OCD</Link>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contribute">Contribute</Link>© {moment().year()} Fight
          OCD. All rights reserved.
        </nav>
      </Footer>
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
