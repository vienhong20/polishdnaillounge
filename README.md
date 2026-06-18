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

## Live Google reviews

`components/Reviews.tsx` shows the real star rating + links to Google/Yelp by default.
To show live, auto-updating Google reviews:

1. Create a free **Google Reviews** widget at https://elfsight.com/google-reviews-widget/
2. Connect the Polishd Nail Lounge Google profile and copy the widget id
   (the part after `elfsight-app-` in the embed code).
3. Paste it into `reviews.elfsightAppId` in `data/site.ts`.

The widget then renders in place of the fallback card.

## Deploy

Import the repo at https://vercel.com/new — framework auto-detects as Next.js, no env vars needed.
