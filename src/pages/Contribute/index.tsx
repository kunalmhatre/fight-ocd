import Layout from "../../components/Layout";
import { Link } from "../../components/Link";
import { Wrapper, Content } from "./styles";

const Contribute = () => (
  <Layout>
    <Wrapper>
      <h1>Contribute</h1>
      <Content>Become a Warrior Against OCD!</Content>
      <Content>
        At Fight OCD, we're always on the lookout for people ready to join the
        battle against Obsessive-Compulsive Disorder. We believe that every
        individual has something valuable to offer, regardless of their
        background or skill set. Whether you're a seasoned advocate, a creative
        thinker, or simply someone passionate about making a difference, we
        invite you to join our ranks and contribute to our cause.
      </Content>
      <Content>
        Your unique perspective and talents can make a meaningful impact in the
        fight against OCD. Whether you have ideas for raising awareness,
        developing resources, or fostering community support, we welcome your
        input and enthusiasm.
      </Content>
      <Content>
        Ready to lend your voice to the fight? There are two simple ways to get
        involved:
      </Content>
      <Content>
        <ol>
          <li>
            <strong>Join Our Discord Channel:</strong> Connect with like-minded
            individuals in{" "}
            <Link to="https://discord.com/">our Discord community</Link>. Share
            your experiences, exchange ideas, and collaborate on initiatives
            aimed at combating OCD. Together, we can amplify our efforts and
            make a difference in the lives of those affected by this challenging
            disorder.
          </li>
          <li>
            <strong>Reach Out via Email:</strong> Prefer a more direct approach?
            Feel free to drop us an email at{" "}
            <Link to="mailto:contact@fightocd.org">contact@fightocd.org</Link>{" "}
            outlining how you'd like to contribute. Whether you have specific
            skills to offer or simply a desire to help, we'd love to hear from
            you. Send us a message, and let's explore how we can work together
            to fight OCD and bring hope to those in need.
          </li>
        </ol>
      </Content>
      <Content>
        Remember, every contribution, no matter how small, helps us with the
        mission of providing tools to sufferers fight OCD and help them live a
        better life. Join us in the fight today and become a valued member of
        the Fight OCD community. Together, we can make a difference.
      </Content>
    </Wrapper>
  </Layout>
);

export default Contribute;
