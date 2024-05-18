import Layout from "../../components/Layout";
import { Wrapper, Description, Message } from "./styles";
import { Link } from "../../components/Link";
import { addMetaTagsViaHelmet } from "../../helpers/addMetaTags";

const Home = () => {
  return (
    <Layout>
      {addMetaTagsViaHelmet({
        title: "Fight OCD - Free online platform to help you fight OCD",
        description:
          "Fight OCD is a free online platform to help you fight OCD.",
      })}
      <Wrapper>
        <h1>Let's fight OCD!</h1>
        <Description>Free online platform to help you fight OCD.</Description>

        <nav>
          <Link to="/take-a-test-for-ocd">Take a test for OCD</Link>
          <Link to="/learn-about-ocd">Learn about OCD</Link>
        </nav>
        <Message>More tools coming soon.</Message>
      </Wrapper>
    </Layout>
  );
};

export default Home;
