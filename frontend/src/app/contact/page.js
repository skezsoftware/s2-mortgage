"use client";
import React, { useState } from "react";
import './contact.css'

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: data.message });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({ type: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
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
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
        />
        <button className="contact-button" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <div className="contact-status" style={{ color: status.type === "success" ? "var(--primary)" : "#d32f2f" }}>
            {status.message}
          </div>
        )}
      </form>
    </section>
  );
}