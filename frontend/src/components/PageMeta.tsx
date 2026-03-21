import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://reviumlabs.co"; // TODO: Update to production URL before launch

interface PageMetaProps {
  title: string;
  description: string;
  ogImage?: string;
}

const PageMeta = ({ title, description, ogImage }: PageMetaProps) => {
  const { pathname } = useLocation();
  const canonical = `${BASE_URL}${pathname === "/" ? "" : pathname}`;
  const image = ogImage ? `${BASE_URL}${ogImage}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default PageMeta;
