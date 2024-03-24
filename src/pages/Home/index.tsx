import Layout from "../../components/Layout";
import { Wrapper, Description, Message } from "./styles";
import { Link } from "../../components/Link";
import { addMetaTagsViaHelmet } from "../../helpers/addMetaTags";

const Home = () => {
  return (
    <Layout>
      {addMetaTagsViaHelmet({
        title: "Fight OCD - Tools to help you fight OCD",
        description:
          "Fight OCD is a free online platform that provides tools to help you fight OCD.",
      })}
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
