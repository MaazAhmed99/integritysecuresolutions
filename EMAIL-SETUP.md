# Email setup

Two separate things, both needed before launch:

| | What it does | Where it is done |
|---|---|---|
| **Part 1** | Website form submissions arrive in your Gmail | Environment variables (below) |
| **Part 2** | Mail sent *to* info@integritysecuresolutions.co.uk arrives in your Gmail | Your email host's control panel |

> **Never put the mailbox password in a file that gets committed, or paste it into a chat.**
> It goes in `.env.local` (git ignores that file) and in your hosting dashboard. Nowhere else.

---

## Part 1 — Form submissions into your Gmail

### Step 1: get your SMTP details

Your email host gives you four values. Where to find them:

| Host | SMTP host | Port | Username |
|---|---|---|---|
| cPanel (most UK resellers) | `mail.integritysecuresolutions.co.uk` | 465 | the full email address |
| Hostinger | `smtp.hostinger.com` | 465 | the full email address |
| Zoho Mail | `smtp.zoho.eu` | 465 | the full email address |
| Google Workspace | `smtp.gmail.com` | 465 | the full email address, **App Password** not the login password |
| Microsoft 365 | `smtp.office365.com` | 587 | the full email address |

The password is the mailbox password you set when you created `info@…` — except on Google
Workspace and Microsoft 365, which need an App Password generated in their security settings.

### Step 2: fill in the values

Copy `.env.example` to `.env.local` in the project folder, then fill in:

```
ENQUIRY_TO_EMAIL=your.address@gmail.com,info@integritysecuresolutions.co.uk
SMTP_HOST=mail.integritysecuresolutions.co.uk
SMTP_PORT=465
SMTP_USER=info@integritysecuresolutions.co.uk
SMTP_PASS=the mailbox password
```

`ENQUIRY_TO_EMAIL` is a comma-separated list — every address on it gets a copy. Use just the
Gmail if you would rather not keep a second copy in the info@ mailbox.

### Step 3: put the same values on the live site

`.env.local` never leaves your computer. On the live host, enter the same five variables in its
environment settings (Vercel: Project → Settings → Environment Variables; cPanel Node app:
the "Environment variables" panel; VPS: your `.env` or process manager config), then restart
the site.

**If email never arrives on the live site but works locally, this step was missed.**

---

## Part 2 — info@ mail into your Gmail

### Forward the mailbox

In your email host's control panel:

- **cPanel** — Email → Forwarders → *Add Forwarder* → address `info` → forward to your Gmail
- **Hostinger** — hPanel → Emails → Manage → Forwarders → *Create*
- **Zoho** — Control Panel → Users → your user → Mail Forwarding
- **Google Workspace / Microsoft 365** — the mailbox's own settings → Forwarding

Takes about two minutes and applies to mail from that moment on.

### Reply *as* info@ from Gmail

Without this, your replies go out from your personal Gmail address, which looks wrong to
customers. Do it **after** setting up forwarding — Gmail emails a confirmation code to
`info@`, and forwarding is what delivers that code to you.

Gmail → Settings (gear) → *See all settings* → **Accounts and Import** → "Send mail as" →
*Add another email address*:

- Name: `Integrity Secure Solutions`
- Email: `info@integritysecuresolutions.co.uk`
- SMTP server, port, username, password: the same four values from Step 1
- Paste the confirmation code when it lands in your inbox

Now Gmail lets you pick which address a reply comes from.

---

## Testing it

1. Submit the form on `/contact` locally. You should see the success panel, no error in the
   terminal, and the message in Gmail within a minute.
2. **Check the spam folder the first time.** Mail from a brand-new domain often lands there
   once; mark it "Not spam" and Gmail learns.
3. Hit Reply on that email — it should address the person who filled in the form, not the site.
4. Repeat on `/quote` and `/apply-for-a-job`, which have the most fields.
5. Send a mail from your phone to `info@integritysecuresolutions.co.uk` and confirm the
   forwarder delivers it.

## When something goes wrong

The terminal (or your host's runtime logs) prints the real reason after `[enquiry]`.

| Symptom | Cause |
|---|---|
| `535 Invalid login` | Wrong password, or the username needs to be the *full* email address |
| Connection times out | The port is blocked — set `SMTP_PORT=587` and try again, or ask the host whether outbound SMTP is allowed |
| `553` / `501 sender rejected` | The From address must match the mailbox: leave `ENQUIRY_FROM_EMAIL` empty |
| Form says sent, no email, log shows `[enquiry:contact]` and the fields | No transport is configured — the variables are missing on that environment |
| Everything works, mail lands in spam | Ask your host to confirm an SPF record exists for the domain |

## If SMTP is blocked

Some shared hosts refuse outbound mail to anywhere but their own server. In that case use
[Resend](https://resend.com) instead: set `RESEND_API_KEY` and `ENQUIRY_FROM_EMAIL`, add the
DNS records it gives you, and leave the `SMTP_*` variables empty. The site tries SMTP first
and falls back to Resend automatically, so both can be set at once.
