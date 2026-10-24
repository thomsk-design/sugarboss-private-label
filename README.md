# Sugar Boss Private Label — website

Static Next.js site (no backend yet). Deploys to Vercel as-is.

## Run it locally
```
npm install
npm run dev        # http://localhost:3000
```

## Deploy
Push this folder to a GitHub repo and import it in Vercel — no settings needed.
`npm run build` also produces a plain static site in `out/` that can be hosted anywhere.

## Where things live
- `app/page.tsx` — all page copy and sections (lists at the top: pastes, care products, steps, FAQ)
- `app/globals.css` — colours (top of file), type and layout
- `app/components/JarStage.tsx` — the hero jars + "try it with your name" demo
- `app/components/EnquiryForm.tsx` — enquiry form (currently opens an email to roxan@sugarboss.ca)

## Still to fill in
Search for `[` in `app/page.tsx`: [MOQ PER SKU], [STOREFRONT PRICE], [CONFIRM], [SETUP FEE], [MOQ], [$ / MONTH], [PRICE], [LEAD TIME], [TERRITORY POLICY].

## When adding a backend
Remove `output: "export"` in `next.config.ts`, then point `EnquiryForm.tsx` at an API route (e.g. Resend or Supabase).
