import { Helmet } from "react-helmet";

interface AddMetaTagsViaHelmetParams {
  title: string;
  description: string;
}

export const addMetaTagsViaHelmet = ({
  title,
  description,
}: AddMetaTagsViaHelmetParams) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </Helmet>
);
