# EmailJS setup (contact form)

The contact form ([contact-form.tsx](../../src/components/contact/contact-form.tsx)) sends these template variables:

| Variable | Value |
| --- | --- |
| `{{from_name}}` / `{{name}}` | Sender's name |
| `{{from_email}}` / `{{email}}` | Sender's email |
| `{{reply_to}}` | Sender's email (for the Reply-To header) |
| `{{subject}}` | Subject |
| `{{message}}` | Message |
| `{{to_email}}` | Your email (`siteConfig.email`) |
| `{{sent_at}}` | Date and time sent, e.g. "Sep 24, 2026, 3:15 PM" |
| `{{site_url}}` | Portfolio URL |

## 1. Make Gmail "Reply" go to the sender

The code already sends `reply_to`, but EmailJS only uses it if the template tells it to.
Without this step, replies go to your own address.

1. Open [dashboard.emailjs.com](https://dashboard.emailjs.com) → **Email Templates** → open the template whose ID is in `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.
2. In the **Content** tab, fill in the fields on the right:
   - **Subject:** `📬 {{subject}} — from {{from_name}}`
   - **To Email:** `wendellramos400@gmail.com`
   - **From Name:** `{{from_name}} via Portfolio`
   - **From Email:** leave **Use Default Email Address** checked. Gmail blocks sending "as" someone else's address, which is why Reply-To is used instead.
   - **Reply To:** `{{reply_to}}` ← **this is the fix**
3. Click **Save**.

## 2. Use the styled template

1. In the same **Content** tab, click **Edit Content** → **Code Editor**.
2. Replace everything with the contents of [`contact-template.html`](./contact-template.html).
3. **Save**, then click **Test It** (or send a message from the site).

## 3. (Optional) Auto-reply to the sender

1. Open the template's **Auto-Reply** tab and turn it on.
2. **To Email:** `{{from_email}}`; **Subject:** `Thanks for reaching out, {{from_name}}!`
3. **Code Editor** → paste [`auto-reply-template.html`](./auto-reply-template.html) → **Save**.

## 4. Make replies land in the sender's Primary inbox

When you press **Reply**, the email is sent from your own Gmail account, which Google already signs (SPF/DKIM), so it usually lands in the inbox. To keep it out of Spam and Promotions:

1. **Use the Gmail service in EmailJS.** Go to EmailJS → **Email Services** and check that the service is **Gmail**, connected to `wendellramos400@gmail.com`, not "EmailJS default" or a custom SMTP. That way the auto-reply is also sent and signed by Gmail.
2. **Keep the auto-reply plain.** [`auto-reply-template.html`](./auto-reply-template.html) is intentionally simple: no banner, no big button, one link. Designed newsletter-style mail gets sorted into Promotions.
3. **Write replies like a person.**
   - Keep the subject line (`Re: …`).
   - Write a few normal sentences.
   - Delete the long quoted template under your reply (click `•••` in the reply box to show it).
   - Avoid ALL CAPS, lots of links, link shorteners and attachments in the first reply.
4. **Train the recipient's inbox once.** The first time, ask the person to check Spam/Promotions and mark your email **Not spam** or drag it to **Primary**. Adding each other as contacts also helps. Gmail and Outlook learn from this.
5. Don't send many identical replies at once. Bulk-looking mail is treated as marketing.

No setting can *guarantee* the inbox. The recipient's email provider makes the final call, but the steps above give your replies the best chance of landing in Primary.

## Check it

Send a message from the site with a different email address. In Gmail, open the message and press **Reply**. The **To** field should show the sender's email, not yours.
