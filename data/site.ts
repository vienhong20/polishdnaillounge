export const site = {
  name: "Polishd Nail Lounge",
  tagline: "Where your nails get the love they deserve.",
  // SEO description — local keywords (services + city/neighborhood). Used in metadata + JSON-LD.
  description:
    "Polishd Nail Lounge is a nail salon on Biscayne Blvd in North Miami, FL. Manicures, pedicures, gel-X, dip powder, acrylics & nail art in a clean, cozy studio. Book your appointment today.",
  // Canonical production domain — used for metadataBase, sitemap, robots, JSON-LD.
  // ⚠️ Confirm/replace with the real deployed domain before launch.
  url: "https://polishdnaillounge.com",
  phone: "786-391-3755",
  phoneHref: "+17863913755",
  address: "12000 Biscayne Blvd #150, Miami, FL 33181",
  // Structured address parts for LocalBusiness schema (NAP must stay consistent).
  addr: {
    street: "12000 Biscayne Blvd #150",
    city: "Miami",
    region: "FL",
    postalCode: "33181",
    country: "US",
  },
  geo: { lat: 25.8871902, lon: -80.1650841 },
  priceRange: "$$",
  // Nearby areas served — reinforces local relevance for "near me" searches.
  areaServed: [
    "Miami",
    "North Miami",
    "North Miami Beach",
    "Aventura",
    "Miami Shores",
    "Bay Harbor Islands",
  ],
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "11:00 AM – 5:00 PM" },
  ],
  // Machine-readable hours for schema.org openingHoursSpecification (24h "HH:MM").
  hoursSpec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      open: "10:00",
      close: "19:00",
    },
    { days: ["Sunday"], open: "11:00", close: "17:00" },
  ],
  booking: {
    busid: "5931931713667072",
    url: "https://rewanow.com/scheduler/s/5931931713667072",
  },
  socials: {
    instagram: "https://www.instagram.com/polishddnaillounge/",
    facebook: "https://www.facebook.com/polishddnaillounge/",
  },
  reviews: {
    rating: 3.5,
    count: 231,
    googleUrl:
      "https://www.google.com/maps/search/?api=1&query=Polishd%20Nail%20Lounge%2012000%20Biscayne%20Blvd%20Miami",
    yelpUrl: "https://www.yelp.com/biz/polish-d-nail-lounge-north-miami-2",
    // Paste your Elfsight Google Reviews widget id here to show live reviews.
    // Get one free at https://elfsight.com/google-reviews-widget/ (see README).
    elfsightAppId: "",
  },
  cardSurchargePct: 2,
} as const;
