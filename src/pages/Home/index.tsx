import Layout from "../../components/Layout";
import { Wrapper, Description } from "./styles";
import { Link } from "../../components/Link";
import { addMetaTagsViaHelmet } from "../../helpers/addMetaTags";

const Home = () => {
  return (
    <Layout>
      {addMetaTagsViaHelmet({
        title: "Fight OCD - An online platform to help you fight OCD",
        description: "Fight OCD is an online platform to help you fight OCD.",
      })}
      <Wrapper>
        <h1>Let's fight OCD!</h1>
        <Description>An online platform to help you fight OCD.</Description>

        <nav>
          <Link to="/take-a-test-for-ocd">Take a test for OCD</Link>
          <Link to="/learn-about-ocd">Learn about OCD</Link>
        </nav>
      </Wrapper>
    </Layout>
  );
};

export default Home;
