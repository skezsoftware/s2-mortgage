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
      <div className="contact-hero-section">
        <h1>We’d Love to Hear From You!</h1>
        <p>
          Whether you’re interested in working together, have questions about
          our services, or just want to say hello, we’re here for you. Fill out
          the form below and our team will get back to you as soon as possible.
          Let’s connect and see how we can help you achieve your goals!
        </p>
      </div>
      <section>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="contact-input"
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            className="contact-textarea"
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
            maxLength={500}
          />
          <div
            style={{ textAlign: "right", fontSize: "0.95rem", color: "#888" }}
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
            >
              {status.message}
            </div>
          )}
        </form>
      </section>
    </>
  );
}
