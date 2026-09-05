# brettt.com

Personal site for Brett Ede. Built with Vite, React, and TypeScript. Hosted on Netlify so the domain can leave Squarespace.

## Local

```bash
npm install
npm run dev
```

## Deploy

```bash
npx netlify deploy --prod
```

After the first deploy, point `brettt.com` and `www.brettt.com` at Netlify, then cancel the Squarespace plan. Email on `updates.brettt.com` is separate and should keep working if those DNS records are left alone.
