import Layout from "../../components/Layout";
import { Wrapper, Description, Message } from "./styles";
import { Link } from "../../components/Link";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Fight OCD</title>
        <meta
          name="description"
          content="Fight OCD is a free online platform that provides tools to help you fight OCD."
        />
      </Helmet>
      <Wrapper>
        <h1>Let's fight OCD!</h1>
        <Description>Tools to help you fight OCD.</Description>

        <nav>
          <Link to="/evaluate-yourself">Evaluate yourself</Link>
        </nav>
        <Message>More tools coming soon.</Message>
      </Wrapper>
    </Layout>
  );
};

export default Home;
