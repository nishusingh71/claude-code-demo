import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  author?: string;
  twitterHandle?: string;
  structuredData?: object;
  noIndex?: boolean;
  canonical?: string;
  alternateLanguages?: { hreflang: string; href: string }[];
  breadcrumbs?: { name: string; url: string }[];
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export default function SEOHead({
  title = "DSecure - Secure Data Erasure Solutions",
  description = "Professional data erasure and device sanitization platform for enterprises. NIST 800-88, DoD 5220.22-M compliant secure data destruction with audit trails and compliance certificates.",
  keywords = "data erasure, secure data deletion, NIST 800-88, DoD 5220.22-M, device sanitization, hard drive wiping, data destruction, compliance certificates, audit trails, enterprise data security, GDPR compliance, HIPAA compliance",
  image = "/dsecure-logo-white.svg",
  url = "https://www.dsecuretech.com",
  type = "website",
  siteName = "DSecure",
  author = "DSecure Team",
  twitterHandle = "@dsecure",
  structuredData,
  noIndex = false,
  canonical,
  alternateLanguages = [],
  breadcrumbs = [],
  article
}: SEOHeadProps) {
  const fullTitle = title === "DSecure - Secure Data Erasure Solutions" ? title : `${title} | DSecure`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  const canonicalUrl = canonical || url;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DSecure",
    "description": description,
    "url": url,
    "logo": `${url}/dsecure-logo-white.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-DSECURE",
      "contactType": "customer service",
      "email": "support@dsecure.com",
      "availableLanguage": ["English"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://twitter.com/dsecure",
      "https://linkedin.com/company/dsecure"
    ],
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "DSecure Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Security Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Device Data Erasure",
          "description": "Secure data erasure for mobile devices and endpoints"
        },
        {
          "@type": "OfferCatalog", 
          "name": "Network Data Sanitization",
          "description": "Server and network storage data destruction"
        },
        {
          "@type": "OfferCatalog",
          "name": "Cloud Data Removal",
          "description": "Cloud storage and SaaS data sanitization"
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/services?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Generate breadcrumb structured data
  const breadcrumbStructuredData = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${url}${crumb.url}`
    }))
  } : null;

  // Generate article structured data if article props provided
  const articleStructuredData = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImageUrl,
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "author": {
      "@type": "Organization",
      "name": article.author || "DSecure Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DSecure",
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/dsecure-logo-white.svg`
      }
    },
    "articleSection": article.section,
    "keywords": article.tags?.join(", ") || keywords
  } : null;

  // Combine all structured data
  const allStructuredData = [
    structuredData || defaultStructuredData,
    breadcrumbStructuredData,
    articleStructuredData
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="language" content="en-US" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Advanced SEO Meta Tags */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="expires" content="never" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteName} - ${title}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={`${siteName} - ${title}`} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:domain" content="dsecure.vercel.app" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="geo.position" content="39.50;-98.35" />
      <meta name="ICBM" content="39.50, -98.35" />
      
      {/* Business/Industry Specific */}
      <meta name="industry" content="Data Security, IT Services, Compliance" />
      <meta name="topic" content="Data Erasure, Device Sanitization, Compliance" />
      <meta name="audience" content="Enterprise, IT Professionals, Compliance Officers" />
      
      {/* Alternate Language Links */}
      {alternateLanguages.map((lang, index) => (
        <link key={index} rel="alternate" hrefLang={lang.hreflang} href={lang.href} />
      ))}
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.clarity.ms" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.clarity.ms" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
