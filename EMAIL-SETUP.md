# Email setup

Two separate jobs. Neither needs a code change — the delivery code in
`src/app/api/enquiry/route.ts` is already written and deployed.

| | What it does | Where it is done |
|---|---|---|
| **Part 1** | Website form submissions arrive in your Gmail | Resend + Vercel environment variables |
| **Part 2** | Mail sent *to* info@integritysecuresolutions.com arrives in your Gmail | Namecheap DNS |

> **Never paste an API key or password into a committed file, or into a chat.**
> Keys go in `.env.local` (git ignores it) and in Vercel's dashboard. Nowhere else.

---

## Part 1 — form submissions into your Gmail

Getting mail *out* needs a sending service, not a mailbox. Resend's free tier covers
3,000 emails a month, which is far beyond what a contact form produces.

### Step 1: verify a subdomain in Resend

Sign up at [resend.com](https://resend.com), add a domain, and enter
**`send.integritysecuresolutions.com`** — the subdomain, not the root.

This is not optional. Part 2 puts forwarding MX and SPF records on the root domain, and
two SPF records on one name is a hard failure that sends everything to spam. Verifying a
subdomain keeps the two systems apart.

Resend shows several DNS records. Paste them into Namecheap → Domain List → Manage →
**Advanced DNS**, then wait for the status to read "Verified". Usually minutes.

### Step 2: create an API key

Resend → API Keys → Create. Copy it — it is shown once.

### Step 3: set the variables in Vercel

Project → Settings → **Environment Variables**:

```
NEXT_PUBLIC_SITE_URL=https://integritysecuresolutions.com
ENQUIRY_TO_EMAIL=your.address@gmail.com
RESEND_API_KEY=re_xxxxxxxxxxxx
ENQUIRY_FROM_EMAIL=website@send.integritysecuresolutions.com
```

`ENQUIRY_TO_EMAIL` takes a comma-separated list if you want more than one recipient.

`ENQUIRY_FROM_EMAIL` only has to be *on* the verified subdomain — no mailbox exists at that
address and none is needed. Replies never go there: the code sets Reply-To to whoever
submitted the form.

### Step 4: redeploy

**Environment variables only apply to deployments made after they are saved.** Vercel →
Deployments → the most recent one → Redeploy. Skipping this is the single most common
reason "it still doesn't work".

---

## Part 2 — info@ mail into your Gmail

The site shows `info@integritysecuresolutions.com` in the header, footer and contact page,
so that address has to receive mail.

Namecheap → Domain List → Manage → **Advanced DNS** → **Mail Settings** → choose
**Email Forwarding** (the free option — *not* the paid Private Email product). Add:

| Alias | Forwards to |
|---|---|
| `info` | your Gmail address |

Applies to mail from that moment on. Takes about two minutes.

### Replying *as* info@ — not available on this setup

Forwarding delivers mail one way. Replies will go out from your personal Gmail address.

To reply as `info@` you need somewhere that can *send* for that address, which means either
Google Workspace (~£5-6/month, `info@` becomes a real Google account) or Resend's SMTP
credentials wired into Gmail's "Send mail as". Neither is needed for the forms to work —
revisit it when replying from the right address starts to matter.

---

## Testing

1. Submit the form on `/contact`. Success panel, then the message in Gmail within a minute.
2. **Check the spam folder on the first one** and mark "Not spam" — a brand-new sending
   domain usually lands there once, then Gmail learns.
3. Hit Reply on that email. It must address the person who filled in the form, not you.
4. Repeat on `/quote` and `/apply-for-a-job` — they have the most fields, so they also
   confirm every label renders properly in the email body.
5. Email `info@integritysecuresolutions.com` from your phone and confirm the forwarder
   delivers it.

## When something goes wrong

Vercel → the deployment → **Logs** prints the real reason after `[enquiry]`.

| Symptom | Cause |
|---|---|
| Form says sent, no email, log shows `[enquiry:contact]` and the field values | No transport configured — the variables are missing, or you did not redeploy after saving them |
| Resend rejects with a domain error | `ENQUIRY_FROM_EMAIL` is not on the verified subdomain |
| Mail arrives but always in spam | Two SPF records on the root domain, or the Resend DNS records were never verified |
| Nothing arrives and the log is silent | The deployment predates the variables — redeploy |

## Alternative: your own mailbox over SMTP

If you later buy a real mailbox (Google Workspace, Microsoft 365, cPanel hosting), set these
instead and the code will prefer them, falling back to Resend automatically if they fail:

```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=465
SMTP_USER=info@integritysecuresolutions.com
SMTP_PASS=the mailbox password
```

Port 465 is implicit TLS; 587 uses STARTTLS. Google Workspace and Microsoft 365 need an
**App Password**, not the account login password. Leave `ENQUIRY_FROM_EMAIL` unset in that
case — most mail servers reject a From address that is not the authenticated mailbox.
