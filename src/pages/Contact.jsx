import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error(await res.text());
      setStatus("✅ Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message");
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <span className="phrase">
        Feel free to reach out by email or directly through this form.
      </span>

      <input
        className="name input1 retroUi"
        type="text"
        name="name"
        placeholder="Name"
        required
      />

      <input
        className="email input2 retroUi"
        type="email"
        name="email"
        placeholder="Email"
        required
      />

      <textarea
        className="textarea retroUi"
        name="message"
        placeholder="What's up?"
        required
      ></textarea>

      <button className="submitbtn retroUi" type="submit">
        Send
      </button>

      <p id="status">{status}</p>
    </form>
  );
}

export default Contact;
