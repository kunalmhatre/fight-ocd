import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { Wrapper, Content, ButtonsContainer } from "./styles";
import Button from "../../components/Button";
import { Link } from "../../components/Link";

const EvaluateYourself = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Wrapper>
        <h1>Evaluate yourself</h1>
        <Content>
          The goal of this tool is to identify your obsessions and compulsions
          that needs attention. You will be given an option to download your
          report at the end of each test. You can share your reports with a
          therapist who specializes in treating OCD using ERP therapy. We do not
          ask for any of your personally identifiable information while taking
          any of the tests or for the report generation; therefore, you can be
          yourself while taking the tests.
        </Content>
        <Content>
          The inspiration for this tool is taken from a book called{" "}
          <Link to="https://www.amazon.com/gp/product/042527389X?ie=UTF8&linkCode=sl1&tag=bestpunchingbag-20&linkId=4da9d6c36f1fdaeeb0065f07d9956129&language=en_US&ref_=as_li_ss_tl">
            Freedom from Obsessive Compulsive Disorder: A Personalized Recovery
            Program for Living with Uncertainty
          </Link>{" "}
          by Dr. Jonathan Grayson.
        </Content>
        <ButtonsContainer>
          <Button onClick={() => navigate("/identify-obsessions")}>
            Identify Obsessions
          </Button>
          <Button onClick={() => navigate("/identify-compulsions")}>
            Identify Compulsions
          </Button>
        </ButtonsContainer>
      </Wrapper>
    </Layout>
  );
};

export default EvaluateYourself;
