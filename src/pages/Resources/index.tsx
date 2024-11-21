import Layout from "../../components/Layout";
import { Wrapper, Content, ResourcesList } from "./styles";
import addMetaTagsViaHelmet from "../../helpers/addMetaTags";
import resources from "../../data/resources.json";
import { Link } from "@/components/Link";

interface Resource {
  title: string;
  link: string;
}

const Resources = () => {
  const resourcesToRead = resources.read;
  const resourcesToWatch = resources.watch;

  return (
    <Layout>
      {addMetaTagsViaHelmet({
        title: "Fight OCD - Learn about OCD",
        description: "Resources to help you fight OCD.",
      })}
      <Wrapper>
        <h1>Learn about OCD</h1>
        <Content>
          Empowering yourself with knowledge is a powerful strategy in combating
          OCD. To support you on this journey, we've gathered resources to help
          you gain a deeper understanding of the disorder.
        </Content>
        <h2>Watch</h2>
        <ResourcesList>
          {resourcesToWatch.map((resource: Resource, index) => (
            <li key={index}>
              <Content>
                <Link to={resource.link} target="_blank">
                  {resource.title}
                </Link>
              </Content>
            </li>
          ))}
        </ResourcesList>
        <h2>Read</h2>
        <ResourcesList>
          {resourcesToRead.map((resource: Resource, index) => (
            <li key={index}>
              <Content>
                <Link to={resource.link} target="_blank">
                  {resource.title}
                </Link>
              </Content>
            </li>
          ))}
        </ResourcesList>
        <h2>Listen</h2>
        <ResourcesList>
          {resources.listen.map((resource: Resource, index) => (
            <li key={index}>
              <Content>
                <Link to={resource.link} target="_blank">
                  {resource.title}
                </Link>
              </Content>
            </li>
          ))}
        </ResourcesList>
      </Wrapper>
    </Layout>
  );
};

export default Resources;
