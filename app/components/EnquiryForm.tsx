"use client";

import { useState } from "react";

const TO = "roxan@sugarboss.ca";

/**
 * No backend yet: submitting opens the visitor's email app with the
 * enquiry pre-filled. Swap handleSubmit for a fetch() to an API route
 * (or Formspree / Resend) when a backend is added.
 */
export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Private label enquiry: ${d.get("business") || d.get("name")}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Business: ${d.get("business")}`,
      `Email: ${d.get("email")}`,
      `Interested in: ${d.get("interest")}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="enquiry__form" onSubmit={handleSubmit}>
      <label className="field">
        Your name
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label className="field">
        Business
        <input name="business" type="text" required autoComplete="organization" />
      </label>
      <label className="field">
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label className="field">
        Interested in
        <select name="interest" defaultValue="Private label products">
          <option>Private label products</option>
          <option>Branded boutique</option>
          <option>Both</option>
        </select>
      </label>
      <label className="field field--full">
        About your business
        <textarea name="message" rows={3} />
      </label>
      <div className="field--full enquiry__actions">
        <button type="submit" className="btn btn--gold">
          Request the partner kit
        </button>
        {sent && (
          <p className="enquiry__note" role="status">
            Your email app should open with the details filled in. If it didn&apos;t, write to{" "}
            <a href={`mailto:${TO}`}>{TO}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
