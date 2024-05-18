import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { Wrapper, Content, ButtonsContainer } from "./styles";
import Button from "../../components/Button";
import { Link } from "../../components/Link";
import { Helmet } from "react-helmet";

const Test = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Helmet>
        <title>Fight OCD - Take a test for OCD</title>
        <meta
          name="description"
          content="Identify your obsessions and compulsions that need attention."
        />
      </Helmet>
      <Wrapper>
        <h1>Test a test for OCD</h1>
        <Content>
          The goal of these tests is to identify obsessions and compulsions that
          need attention. The tests are comprehensive, so it will require some
          time and dedication to complete. At the end of each test, you will
          have the option to download your report. You can share your reports
          with a therapist who specializes in treating OCD using ERP therapy. We
          do not ask for any personally identifiable information during the
          tests or for report generation. This test is derived from the book{" "}
          <Link to="https://www.amazon.com/gp/product/042527389X?ie=UTF8&linkCode=sl1&tag=bestpunchingbag-20&linkId=4da9d6c36f1fdaeeb0065f07d9956129&language=en_US&ref_=as_li_ss_tl">
            Freedom from Obsessive Compulsive Disorder: A Personalized Recovery
            Program for Living with Uncertainty
          </Link>{" "}
          by Dr. Jonathan Grayson. We have received permission from the author
          to use his work for this test, but please note that he is not working
          with us. We highly recommend his book to anyone suffering from OCD.
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
      </Wrapper>
    </Layout>
  );
};

export default Test;
