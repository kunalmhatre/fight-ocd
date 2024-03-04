import Layout from "../../components/Layout";
import { Wrapper, Description, Message } from "./styles";
import { ReactRouterLink } from "../../components/ReactRouterLink";

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Let's fight OCD!</h1>
        <Description>Tools to help you fight OCD.</Description>

        <nav>
          <ReactRouterLink to="/evaluate-yourself">
            Evaluate yourself
          </ReactRouterLink>
        </nav>
        <Message>More tools coming soon.</Message>
      </Wrapper>
    </Layout>
  );
};

export default Home;
