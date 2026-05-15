import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
};

const defaultImage = "https://www.mecatronixperu.com/ogImageMecatronix.png";
const siteName = "Mecatronix Perú";
const defaultUrl = "https://www.mecatronixperu.com";

function setMetaTag(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setPropertyTag(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO({
  title,
  description,
  url = defaultUrl,
  image = defaultImage,
  type = "website",
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    setMetaTag("description", description);
    setMetaTag("keywords", "mantenimiento industrial, automatización, mecatrónica, servicios industriales");
    setMetaTag("robots", "index, follow");

    setPropertyTag("og:type", type);
    setPropertyTag("og:title", title);
    setPropertyTag("og:description", description);
    setPropertyTag("og:url", url);
    setPropertyTag("og:image", image);
    setPropertyTag("og:site_name", siteName);

    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    if (canonical.getAttribute("href") !== url) {
      canonical.setAttribute("href", url);
    }

    setMetaTag("author", "Mecatronix Perú");
    setMetaTag("theme-color", "#1E293B");
    setMetaTag("mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent");

    setPropertyTag("og:locale", "es_PE");

    if (type === "article") {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "datePublished": new Date().toISOString(),
      };

      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, url, image, type]);

  return null;
}