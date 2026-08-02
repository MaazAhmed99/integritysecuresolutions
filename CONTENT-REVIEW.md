# Pre-launch content review

The site is branded **Integrity Secure Solutions**. It was built using
sentrixsecurityltd.com as a structural reference, and some of that company's real
business data came across as scaffolding. **Read section 0 before showing this to anyone.**

## 0. Contact details — status

All values live in `src/lib/site.ts`.

| Field | Current value | Status |
|---|---|---|
| `phone` / `phoneHref` | +447438082841 / `tel:+447438082841` | ✅ Real — client supplied |
| `address` | 797-801 Stratford Road, Birmingham, West Midlands B11 4DA | ✅ Real — client supplied |
| `serviceArea` | Birmingham & the West Midlands | ⚠️ Assumed from the postcode — confirm actual radius |
| `email` | info@integritysecuresolutions.co.uk | ❌ Invented placeholder — set the real inbox |
| `url` | https://integritysecuresolutions.co.uk | ❌ Invented placeholder — set the real domain |

The address drives the Google Map embed on `/contact` and the `SecurityService` JSON-LD in
`src/app/layout.tsx` automatically. `serviceArea` drives every mention of the operating
area in headings, meta descriptions, the About page and the FAQs.

**Still outstanding:** the three testimonials in `src/lib/content.ts` are another company's
client quotes with the name swapped. **Replace them with genuine Integrity Secure Solutions
feedback, or delete the `TestimonialsSection` from `src/app/page.tsx`, `/about` and
`/sectors`.**

## 1. Claims that need client sign-off

These are standard for a UK security company and are almost certainly true, but they are
*not* stated anywhere on the current live site. Do not publish them unverified.

| Claim | Where | Action |
|---|---|---|
| "SIA licensed" officers | Throughout — footer, hero, FAQs, service pages | Confirm all deployed officers hold front line licences |
| Screening "to BS 7858" | `src/app/about/page.tsx`, `src/lib/content.ts` (FAQ) | Confirm, or remove the standard reference |
| "Public and employers' liability insurance" | Footer badge, about page, FAQ | Confirm cover is in place |
| "NASDU-standard trained" dogs | `src/lib/services.ts` → `dog-handling-security` | Confirm handler/dog certification body |
| "Most sites covered within 24 hours" | Service page sidebars, FAQ | Confirm this is realistic |
| "No minimum contract length" | About, CTA copy, FAQ | Confirm commercially |
| "Free site survey" / "no obligation" | Multiple CTAs and the quote page | Confirm |
| Coverage: "the West Midlands as standard, national for multi-site" | `site.serviceArea`, used by About page and FAQ | Confirm actual operating radius |
| Named account manager on every contract | About page, `src/lib/content.ts` | Confirm |
| NFC checkpoint scanning / online patrol portal | `src/lib/services.ts` → `mobile-patrol-security` | Confirm the technology is actually used |
| Redeployable CCTV towers | `src/lib/services.ts` → `cctv-monitoring` | Confirm this is offered |
| Anonymously coded key safe storage | `src/lib/services.ts` → `key-holding-alarm-response` | Confirm |

**Fastest path:** read through `src/lib/services.ts` and `src/lib/content.ts` with the client.
Those two files hold nearly all of the added copy.

## 2. Headline statistics — currently placeholders

`src/lib/site.ts` → `site.stats`

```
250+ satisfied clients · 12+ years experience · 900+ sites secured · 24/7 coverage
```

The live WordPress site renders all of these as **`0+`** because its counter script never
fires, so there were no real figures to carry over. **These numbers are invented placeholders.**
Replace them with the client's real figures, or delete the `StatsBand` section from
`src/app/page.tsx` and `src/app/about/page.tsx` if they would rather not publish numbers.

## 3. Contact details

Covered in section 0. Phone and address are done; email and domain still need setting.
Note that `phoneHref` is a separate field (`tel:+44...`), so update both if the number
ever changes.

## 4. Testimonials

Covered in section 0. Separately, the 5-star rating graphic next to each quote is **new** —
the reference site shows no ratings. If your testimonials aren't backed by real reviews,
remove the star block in `src/components/sections/testimonials-section.tsx`.

## 5. Photography

All images are free-licence Unsplash photos (`src/lib/images.ts`), safe for commercial use
without attribution. They are stock, and they look it. **Strongly recommend replacing the
hero, about and service images with photographs of the client's own officers, vehicles and
uniforms** — for a security firm, real photos of your own team convert far better than stock.
Only `src/lib/images.ts` needs to change.

The mobile patrol photo currently shows a vehicle that could read as police. Swap it if the
client is concerned about implying a police association.

## 6. Privacy policy

`src/app/privacy/page.tsx` is a **template, not legal advice**. It is set to `noindex`.
Before launch the client should have it reviewed and add their ICO registration number and
concrete data retention periods.

## 7. Forms

No email provider is wired up yet. Until `RESEND_API_KEY` and `ENQUIRY_FROM_EMAIL` are set in
`.env.local`, submissions are validated and written to the server log — the user still sees a
success message, but **nobody receives an email**. Set this up before launch, then send one
test submission per form.

Consider adding a CAPTCHA (hCaptcha or Cloudflare Turnstile) if spam becomes a problem; the
honeypot field handles basic bots only.
