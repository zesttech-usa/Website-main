# Zest Technologies: Portal Administration Guide

This document explains how to use the Jobs Portal Administration features, specifically how to add a new job to the site and configure the internal email system.

---

## 🔐 1. Admin Authentication

To access the portal, navigate to the **`/zest-admin`** route on the live site (e.g., `https://zest-technologies.vercel.app/zest-admin`).

*   **Password:** Enter the master password provided by your developer.
*   *Note: This password is set in the Vercel Environment Variables (`ADMIN_PASSWORD`).*

---

## 📝 2. Adding a New Job

Once logged in, fill out the details for the new job role.

*   **Job Description (HTML formatting):**
    Because the form is simple and fast, formatting is handled via basic HTML tags.
    *   To start a new paragraph, wrap it in `<p> ... </p>`. Example: `<p>We are looking for a great developer.</p>`
    *   To make a bulleted list, use `<ul>` and `<li>`. Example:
        ```html
        <ul>
          <li>3+ years React experience</li>
          <li>Knowledge of Tailwind</li>
        </ul>
        ```
    *   To make text bold, use `<strong>Bold Text</strong>`.
*   **Publishing:** Click "Publish Job to Portal".
*   **What Happens Next:** The system will say "Processing..." and commit the data securely to GitHub. **Please wait 60 to 90 seconds** for the Vercel site to automatically update and refresh with the new content.

---

## 📧 3. Email System Configuration (Gmail App Password)

The portal dynamically sends candidate resumes straight to your email inbox without storing them anywhere, ensuring candidate privacy.

To send these emails from your Gmail account securely, you must generate a **16-letter App Password** (do not use your regular Gmail password).

### How to Generate a Gmail App Password:
1. Go to your Google Account management page ([myaccount.google.com](https://myaccount.google.com/)).
2. On the left navigation panel, click **Security**.
3. Under "How you sign in to Google," ensure **2-Step Verification** is turned ON.
4. Click on **2-Step Verification**.
5. Scroll down to the bottom and click on **App passwords**.
6. Select **App**: Choose "Mail" or "Other (Custom name)".
7. Select **Device**: Choose "Other" and name it something like *Zest Portal*.
8. Click **Generate**.
9. Google will provide a **16-character password**. Copy this; you will only see it once!

### Providing to the Developer:
Provide this App Password to your developer so it can be added to the Vercel Environment Variables (`GMAIL_PASS`) alongside the sending email address (`GMAIL_USER`) and the destination inbox (`CLIENT_EMAIL`).
