"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactResponse = {
  error?: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = (await response.json()) as ContactResponse;

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "We could not send your request. Please email us directly.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. We received your request and will contact you soon.");
    } catch {
      setStatus("error");
      setMessage("We could not send your request. Please email us directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="contact-name">Your name</label>
      <input id="contact-name" type="text" name="name" placeholder="Your name" autoComplete="name" required maxLength={120} />
      <label className="sr-only" htmlFor="contact-email">Work email</label>
      <input id="contact-email" type="email" name="email" placeholder="Work email" autoComplete="email" required maxLength={160} />
      <label className="sr-only" htmlFor="contact-restaurant">Restaurant or company name</label>
      <input id="contact-restaurant" type="text" name="restaurant" placeholder="Restaurant or company name" autoComplete="organization" required maxLength={160} />
      <label className="sr-only" htmlFor="contact-message">Tell us your current cleaning process</label>
      <textarea id="contact-message" name="message" placeholder="Tell us your current cleaning process" rows={4} required maxLength={2000} />
      <input className="contact-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="demo-btn" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request a Demo"}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
