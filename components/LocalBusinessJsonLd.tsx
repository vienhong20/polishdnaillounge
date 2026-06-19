import { site } from "@/data/site";

/**
 * NailSalon (a HealthAndBeautyBusiness/LocalBusiness) structured data.
 * Helps Google show the rich local result: name, address, hours, rating, map pin.
 * Rendered as a <script> per Next.js JSON-LD guidance; `<` is escaped to prevent XSS.
 */
export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref,
    priceRange: site.priceRange,
    image: `${site.url}/images/nail-5.jpg`,
    logo: `${site.url}/images/nail-5.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addr.street,
      addressLocality: site.addr.city,
      addressRegion: site.addr.region,
      postalCode: site.addr.postalCode,
      addressCountry: site.addr.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lon,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${site.name} ${site.address}`,
    )}`,
    openingHoursSpecification: site.hoursSpec.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    })),
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    sameAs: [site.socials.instagram, site.socials.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviews.rating,
      reviewCount: site.reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: site.booking.url,
      name: "Book an appointment",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
