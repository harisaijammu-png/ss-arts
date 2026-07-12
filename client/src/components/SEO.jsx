import React, { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SS Arts Digital Printing",
      "image": "", // URL to your shop image
      "@id": "",
      "url": window.location.origin,
      "telephone": "+919290078861",
      "email": "digitalprintingssarts@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Opposite Pakala Road, Trunk Road (Beside SBH ATM)",
        "addressLocality": "Singarayakonda",
        "addressRegion": "AP",
        "postalCode": "523101", 
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 15.2505,
        "longitude": 80.0163
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, UPI, PhonePe"
    };

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default SEO;
