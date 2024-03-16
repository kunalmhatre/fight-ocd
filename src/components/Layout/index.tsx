import { ReactNode } from "react";
import { Header, Footer, Content, Wrapper } from "./styles";
import { ThemeProvider } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header onClick={() => navigate("/")}>Fight OCD</Header>
        <Content>{children}</Content>
        <Footer>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/contribute">Contribute</Link>
          </nav>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
