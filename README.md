# MamaPlus — Next.js Landing Page

Exact replica of the Lovable site, built in Next.js 14 with Tailwind CSS.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → opens at http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## Before you go live — one thing to change

Open `src/app/page.tsx` and replace line 7:

```ts
const WHATSAPP_NUMBER = 'YOUR_PHONE_NUMBER'
```

With your real Nigerian WhatsApp number in international format (no + or spaces):

```ts
const WHATSAPP_NUMBER = '2348012345678'
```

## Deploy for free

### Vercel (easiest — recommended)
1. Push this folder to a GitHub repo
2. Go to vercel.com → Import project → select the repo
3. Click Deploy — done. You get a live URL in ~60 seconds.

### Netlify
1. Push to GitHub
2. Go to netlify.com → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `.next`

## File structure

```
mamaplus-nextjs/
├── src/
│   └── app/
│       ├── layout.tsx     ← HTML head, metadata, fonts
│       ├── page.tsx       ← Full landing page (edit WhatsApp number here)
│       └── globals.css    ← Animations, global styles
├── next.config.js         ← Allows loading image from Lovable CDN
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Pregnant woman image

The hero image loads directly from the Lovable CDN:
`https://ai-mama-support.lovable.app/assets/hero-mother-CQv7t45m.png`

If you want to host it yourself:
1. Download the image from that URL
2. Save it to `public/hero-mother.png`
3. In `page.tsx`, change the Image src to `/hero-mother.png`
4. Remove the `remotePatterns` entry in `next.config.js`
