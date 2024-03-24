import Layout from "../../components/Layout";
import { Wrapper, Content } from "./styles";
import { addMetaTagsViaHelmet } from "../../helpers/addMetaTags";

const About = () => (
  <Layout>
    {addMetaTagsViaHelmet({
      title: "Fight OCD - About",
      description: "Know more about Fight OCD.",
    })}
    <Wrapper>
      <h1>About</h1>
      <Content>
        Welcome to Fight OCD, a sanctuary for those battling the relentless grip
        of Obsessive-Compulsive Disorder. We know firsthand that OCD sucks! It's
        more than just a disorder; it's an exhausting and often isolating
        struggle. At Fight OCD, we understand the challenges you face because
        we've been there ourselves.
      </Content>
      <Content>
        Living with OCD can feel like an endless uphill battle, but you don't
        have to face it alone.{" "}
        <strong>
          Our mission is simple yet profound: to provide tools to empower
          individuals in their fight against OCD
        </strong>
        . We recognize that combating such a debilitating mental disorder can be
        overwhelming, which is why we are here to join you in the battle.
      </Content>
      <Content>
        Whether you're grappling with intrusive thoughts, compulsive behaviors,
        or the overwhelming anxiety that accompanies OCD, Fight OCD is your ally
        in the struggle. Our aim is to equip you with the resources and
        strategies you need to reclaim control over your life.
      </Content>
      <Content>
        Together, we can challenge the stigma surrounding OCD and foster a
        community of resilience and understanding. No matter where you are in
        your battle against OCD, remember that hope is never out of reach. Join
        us at Fight OCD, where we're dedicated to helping you reclaim your life
        from the clutches of this challenging disorder.
      </Content>
    </Wrapper>
  </Layout>
);

export default About;
