// PLACEHOLDER testimonials — replace the quotes/names below with the salon's
// real Google or Yelp reviews. (Bots can't scrape them, so paste them in here.)
export type Testimonial = {
  name: string;
  stars: number;
  quote: string;
  source?: "Google" | "Yelp";
};

export const testimonials: Testimonial[] = [
  {
    name: "Jasmine R.",
    stars: 5,
    quote:
      "Best gel mani I've ever had! The lounge is so cute and cozy and the staff treat you like family.",
    source: "Google",
  },
  {
    name: "Maria L.",
    stars: 5,
    quote:
      "My dip set lasted three full weeks with zero chips. Spotless salon and the sweetest service.",
    source: "Yelp",
  },
  {
    name: "Ashley T.",
    stars: 5,
    quote:
      "Obsessed with my ombre set — they took their time and the detail is unreal. New regular for sure!",
    source: "Google",
  },
  {
    name: "Daniela P.",
    stars: 5,
    quote:
      "The Lava Spa pedicure is pure heaven. Relaxing, gorgeous, and worth every penny. Highly recommend.",
    source: "Google",
  },
  {
    name: "Sophia M.",
    stars: 5,
    quote:
      "Clean, friendly, and so talented. They nailed exactly the look I wanted from my inspo photo.",
    source: "Yelp",
  },
];
