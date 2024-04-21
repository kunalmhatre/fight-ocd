import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { Wrapper, Content, ButtonsContainer } from "./styles";
import Button from "../../components/Button";
import { Link } from "../../components/Link";
import { Helmet } from "react-helmet";

const TestYourself = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Helmet>
        <title>Fight OCD - Test yourself</title>
        <meta
          name="description"
          content="Identify your obsessions and compulsions that need attention."
        />
      </Helmet>
      <Wrapper>
        <h1>Test yourself</h1>
        <Content>
          The goal of this tool is to identify your obsessions and compulsions
          that needs attention. You will be given an option to download your
          report at the end of each test. You can share your reports with a
          therapist who specializes in treating OCD using ERP therapy. We do not
          ask for any of your personally identifiable information while taking
          any of the tests or for the report generation; therefore, you can be
          yourself while taking the tests.
        </Content>
        <ButtonsContainer>
          <Button
            data-umami-event="identify-obsessions"
            onClick={() => navigate("/identify-obsessions")}
          >
            Identify Obsessions
          </Button>
          <Button
            data-umami-event="identify-compulsions"
            onClick={() => navigate("/identify-compulsions")}
          >
            Identify Compulsions
          </Button>
        </ButtonsContainer>
        <Content>
          The inspiration for this tool is taken from a book called{" "}
          <Link to="https://www.amazon.com/gp/product/042527389X?ie=UTF8&linkCode=sl1&tag=bestpunchingbag-20&linkId=4da9d6c36f1fdaeeb0065f07d9956129&language=en_US&ref_=as_li_ss_tl">
            Freedom from Obsessive Compulsive Disorder: A Personalized Recovery
            Program for Living with Uncertainty
          </Link>{" "}
          by Dr. Jonathan Grayson. We have received permission from the author
          of that book to use their work for this tool, and to note that the
          author is not working with us. We highly recommend anyone who is
          suffering from OCD to read that book.
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default TestYourself;
