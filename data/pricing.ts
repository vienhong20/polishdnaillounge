export type Service = { name: string; note?: string; desc?: string; price: number };
export type Group = { label?: string; services: Service[] };
export type Category = { title: string; groups: Group[] };

export const pricing: Category[] = [
  {
    title: "Manicure & Pedicure",
    groups: [
      {
        label: "Manicure",
        services: [
          {
            name: "Basic Manicure",
            desc: "Nail shaping, cuticle care, and regular polish.",
            price: 20,
          },
          {
            name: "Deluxe Manicure",
            desc: "Basic manicure with exfoliating scrub and extended hand massage.",
            price: 35,
          },
          {
            name: "Gel Manicure",
            desc: "Manicure finished with long-lasting gel polish cured under LED.",
            price: 35,
          },
          { name: "Gel Manicure / Dip Removal", price: 45 },
          { name: "Gel Deluxe Manicure", price: 50 },
          { name: "Structure Gel Manicure", price: 50 },
        ],
      },
      {
        label: "Pedicure",
        services: [
          {
            name: "Classic Pedicure",
            desc: "Warm soak, scrub, nail and cuticle care, and a relaxing massage.",
            price: 30,
          },
          { name: "Cool Blue Pedicure", price: 34 },
          {
            name: "Deluxe Spa Pedicure",
            desc: "Classic pedicure with sugar scrub, mask, and extended massage.",
            price: 45,
          },
          { name: "Gel Pedicure", price: 50 },
          { name: "Paradise Spa Pedicure", price: 55 },
          { name: "Honey and Milk Spa Pedicure", price: 69 },
          { name: "Ola La Spa Pedicure", price: 79 },
          {
            name: "Lava Spa Pedicure",
            desc: "Our signature spa ritual with hot lava gel and hot stone massage.",
            price: 99,
          },
          { name: "Add-On Gel Polish", note: "any pedicure", price: 20 },
        ],
      },
    ],
  },
  {
    title: "Acrylic, Gel & Dip",
    groups: [
      {
        label: "Nail Enhancement",
        services: [
          { name: "Reg. Fill", price: 45 },
          { name: "Gel Fill", price: 50 },
          {
            name: "Gel Fullset",
            desc: "Durable gel-enhanced full set, shaped to your length and style.",
            price: 60,
          },
          { name: "Reg. Fullset", price: 50 },
          { name: "Ombre Fill", price: 55 },
          { name: "Ombre Fullset", price: 70 },
          { name: "Pink & White Refill", price: 50 },
          { name: "Pink & White Fullset", price: 75 },
          { name: "Pink Fill", price: 45 },
          { name: "Liquid Gel / Fill", price: 55 },
          { name: "Liquid Gel / Fullset", price: 65 },
          {
            name: "Gel X / Apres",
            desc: "Lightweight soft-gel extension tips for a natural full set.",
            price: 65,
          },
        ],
      },
      {
        label: "Dipping Powder & Healthy Nails",
        services: [
          {
            name: "Dip Color",
            desc: "Durable dipping powder color — no UV light needed.",
            price: 50,
          },
          { name: "Dip w/ Tip", price: 55 },
          { name: "Dip w/ Gel", price: 55 },
          { name: "Dip French", price: 60 },
          { name: "Dip Gel w/ Tip", price: 60 },
          { name: "Dip French w/ Tip", price: 65 },
          { name: "Dip Ombre", price: 65 },
          { name: "Add-On Manicure", note: "any dip", price: 15 },
        ],
      },
    ],
  },
  {
    title: "Polish Change & Kids",
    groups: [
      {
        label: "Polish Change",
        services: [
          { name: "Gel Polish Change", note: "w/o removal", price: 25 },
          { name: "Gel Polish Change", note: "w/ removal", price: 30 },
          { name: "Reg. Polish Nail", price: 15 },
          { name: "Reg. Polish Toes", price: 20 },
          { name: "Reg. French Polish Nails", price: 20 },
          { name: "Reg. French Polish Toes", price: 25 },
        ],
      },
      {
        label: "Kids (under 10)",
        services: [
          { name: "Kid Mani", price: 15 },
          { name: "Kid Pedi", price: 25 },
          { name: "Kid Polish Hand", price: 9 },
          { name: "Kid Polish Feet", price: 12 },
        ],
      },
    ],
  },
  {
    title: "Waxing & Lashes",
    groups: [
      {
        label: "Waxing",
        services: [
          {
            name: "Eyebrow",
            desc: "Professional eyebrow shaping.",
            price: 12,
          },
          { name: "Upper Lip", price: 9 },
          { name: "Chin", price: 10 },
          { name: "Sideburns", price: 12 },
          { name: "Nose", price: 15 },
          { name: "Ears Wax / Nose", price: 25 },
          { name: "Wax & Tint Eyebrows", price: 25 },
          { name: "Full Face", price: 45 },
          { name: "Under Arms", price: 25 },
          { name: "Half Arms", price: 35 },
          { name: "Full Arms", price: 60 },
          { name: "Full Back", price: 70 },
          { name: "Full Legs", price: 70 },
          { name: "Half Legs", price: 40 },
          { name: "Bikini", price: 40 },
          { name: "Brazilian", price: 60 },
        ],
      },
      {
        label: "Eyelash Extension",
        services: [
          {
            name: "Cluster New Set",
            desc: "Quick, fuller lashes applied in small clusters.",
            price: 35,
          },
          {
            name: "Individual New Set",
            desc: "Full classic set applied lash by lash for a natural look.",
            price: 120,
          },
          { name: "Individual Refill", price: 60 },
        ],
      },
    ],
  },
  {
    title: "Add-Ons",
    groups: [
      {
        services: [
          { name: "Acrylic Removal Only", price: 15 },
          { name: "Acrylic Remove w/ Redone", price: 10 },
          { name: "Dip Removal", price: 15 },
          { name: "Gel Polish Removal Only", price: 15 },
          { name: "Shinny Buff", price: 7 },
          { name: "Design", price: 5 },
          { name: "French Toe", price: 5 },
          { name: "French Hand", price: 10 },
          { name: "Curve French", price: 15 },
          { name: "Shape", price: 5 },
          { name: "Length", price: 5 },
          { name: "Cut Nail", price: 15 },
          { name: "Paraffin Hand", price: 10 },
          { name: "Repair", price: 5 },
          { name: "Paraffin Feet", price: 12 },
          { name: "Foot Massage 30 mins", price: 45 },
          { name: "Acrylic Toe New", price: 10 },
          { name: "Acrylic Toe Fill", price: 7 },
          { name: "Chrome Design", price: 10 },
          { name: "Cat Eye", price: 10 },
          { name: "Remove w/ Service", price: 10 },
        ],
      },
    ],
  },
];
