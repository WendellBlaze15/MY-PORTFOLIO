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

## Check it

Send a message from the site with a different email address. In Gmail, open the message and press **Reply**. The **To** field should show the sender's email, not yours.
