import { Helmet } from 'react-helmet-async';

interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours: string[];
  image: string;
  logo: string;
  priceRange: string;
  areaServed: string[];
  serviceType: string[];
}

interface ServiceData {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string[];
  serviceType: string;
}

interface WebPageData {
  url: string;
  name: string;
  description: string;
  isPartOf: {
    name: string;
    url: string;
  };
}

interface StructuredDataProps {
  localBusiness?: LocalBusinessData;
  service?: ServiceData;
  webpage?: WebPageData;
  type?: 'LocalBusiness' | 'Service' | 'WebPage' | 'Organization';
}

const StructuredData: React.FC<StructuredDataProps> = ({
  localBusiness,
  service,
  webpage,
  type = 'WebPage'
}) => {
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org"
    };

    switch (type) {
      case 'LocalBusiness':
        if (!localBusiness) return baseData;
        return {
          ...baseData,
          "@type": "LocalBusiness",
          "name": localBusiness.name,
          "description": localBusiness.description,
          "url": localBusiness.url,
          "telephone": localBusiness.telephone,
          "email": localBusiness.email,
          "image": localBusiness.image,
          "logo": localBusiness.logo,
          "priceRange": localBusiness.priceRange,
          "address": {
            "@type": "PostalAddress",
            ...localBusiness.address
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": localBusiness.geo.latitude,
            "longitude": localBusiness.geo.longitude
          },
          "openingHoursSpecification": localBusiness.openingHours.map(hours => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": hours.split(' ')[0],
            "opens": hours.split(' ')[1],
            "closes": hours.split(' ')[2]
          })),
          "areaServed": localBusiness.areaServed.map(area => ({
            "@type": "City",
            "name": area
          })),
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Construction Services",
            "itemListElement": localBusiness.serviceType.map((serviceType, index) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": serviceType
              }
            }))
          }
        };

      case 'Service':
        if (!service) return baseData;
        return {
          ...baseData,
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": service.provider.name,
            "url": service.provider.url
          },
          "areaServed": service.areaServed.map(area => ({
            "@type": "City",
            "name": area
          })),
          "serviceType": service.serviceType
        };

      case 'WebPage':
        if (!webpage) return baseData;
        return {
          ...baseData,
          "@type": "WebPage",
          "url": webpage.url,
          "name": webpage.name,
          "description": webpage.description,
          "isPartOf": {
            "@type": "WebSite",
            "name": webpage.isPartOf.name,
            "url": webpage.isPartOf.url
          }
        };

      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData(), null, 2)}
      </script>
    </Helmet>
  );
};

export default StructuredData; 