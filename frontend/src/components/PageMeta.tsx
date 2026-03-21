import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://reviumlabs.co";
// TODO: Create a 1200x630px branded OG image and upload as /public/og-image.jpg
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object | object[];
}

const PageMeta = ({ 
  title, 
  description, 
  keywords,
  ogImage,
  structuredData 
}: PageMetaProps) => {
  const { pathname } = useLocation();
  const canonical = `${BASE_URL}${pathname === "/" ? "" : pathname}`;
  const image = ogImage ? `${BASE_URL}${ogImage}` : DEFAULT_OG_IMAGE;

  // Convert structured data to script tags
  const renderStructuredData = () => {
    if (!structuredData) return null;
    
    const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
    return dataArray.map((data, index) => (
      <script 
        key={index} 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    ));
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Revium Labs" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@reviumlabs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {renderStructuredData()}
    </Helmet>
  );
};

export default PageMeta;
