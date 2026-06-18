export const site = {
  name: "Polishd Nail Lounge",
  tagline: "Where your nails get the love they deserve.",
  phone: "786-391-3755",
  phoneHref: "+17863913755",
  address: "12000 Biscayne Blvd #150, Miami, FL 33181",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "11:00 AM – 5:00 PM" },
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
