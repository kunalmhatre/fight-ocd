import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { Wrapper } from "./styles";

const Home = () => (
  <Layout>
    <Wrapper>
      <h1>Let's fight OCD!</h1>
      <p className="description">Tools to help you fight OCD.</p>

      <nav>
        <Link to="/evaluate-yourself">Evaluate yourself</Link>
      </nav>
      <p className="message">More tools coming soon.</p>
    </Wrapper>
  </Layout>
);

export default Home;
