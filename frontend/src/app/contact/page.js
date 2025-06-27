"use client";
import React, { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: data.message });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <main>
      <header className="contact-hero-section" aria-labelledby="contact-hero-title">
        <h1 id="contact-hero-title">We&apos;d Love to Hear From You!</h1>
        <p>
          Whether you&apos;re interested in working together, have questions about
          our services, or just want to say hello, we&apos;re here for you. Fill out
          the form below and our team will get back to you as soon as possible.
          Let&apos;s connect and see how we can help you achieve your goals!
        </p>
      </header>
      <section className="contact-form-section" aria-labelledby="contact-form-title">
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          autoComplete="off"
          role="form"
          aria-labelledby="contact-form-title"
        >
          <label htmlFor="contact-name" className="sr-only">Name</label>
          <input
            className="contact-input"
            type="text"
            name="name"
            id="contact-name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="contact-email" className="sr-only">Email</label>
          <input
            className="contact-input"
            type="email"
            name="email"
            id="contact-email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="contact-phone" className="sr-only">Phone</label>
          <input
            className="contact-input"
            type="tel"
            name="phone"
            id="contact-phone"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="contact-message" className="sr-only">Message</label>
          <textarea
            className="contact-textarea"
            name="message"
            id="contact-message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
            maxLength={500}
          />
          <div
            style={{ textAlign: "right", fontSize: "0.95rem", color: "var(--primary)" }}
          >
            {message.length} / 500 characters
          </div>
          <button className="contact-button" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <div
              className="contact-status"
              style={{
                color: status.type === "success" ? "var(--primary)" : "#d32f2f",
              }}
              aria-live="polite"
              role="status"
            >
              {status.message}
            </div>
          )}
        </form>
      </section>
      </main>
    </>
  );
}
