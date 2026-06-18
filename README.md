# Polishd Nail Lounge

Mobile-first landing page for **Polishd Nail Lounge** (12000 Biscayne Blvd #150, Miami, FL 33181).

Built with Next.js 16, Tailwind CSS v4, and Framer Motion. Pastel/cute design with a full
price menu (Cash / Card +2% toggle) and Rewanow online booking.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm test         # price helper unit tests
```

## Editing content

- **Salon info** (name, phone, address, hours, socials, booking) — `data/site.ts`
- **Price menu** — `data/pricing.ts` (cash prices; card = cash × 1.02 at runtime)
- **Gallery photos** — replace files in `public/images/nail-1.jpg … nail-6.jpg`
  (currently professional stock nail photography — swap with the salon's own shots)

## Booking widget (Rewanow)

Loaded in `app/layout.tsx`. Every "Book Now" button uses
`busid = 5931931713667072` (`data/site.ts`). If the widget script fails to attach,
buttons fall back to opening the booking page in a new tab.

## Testimonials carousel

`components/Reviews.tsx` is an auto-advancing, swipeable carousel driven by
`data/testimonials.ts`. The real aggregate rating + Google/Yelp links sit beneath it.

The quotes in `data/testimonials.ts` are **placeholders** -- replace them with the
salon's real Google/Yelp reviews (name, stars 1-5, quote, and source "Google" or "Yelp").

## Deploy

Import the repo at https://vercel.com/new — framework auto-detects as Next.js, no env vars needed.
