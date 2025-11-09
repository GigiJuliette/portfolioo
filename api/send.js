import { Resend } from "resend";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Email from "../emails/Email.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, email, message } = (await req.json?.()) || req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: "Missing fields" });

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = renderToStaticMarkup(
      <Email name={name} email={email} message={message} />
    );

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: "gigialiasjuliette@gmail.com",
      subject: `New message from ${name}`,
      html,
    });

    if (error) throw error;
    return res.status(200).json({ id: data.id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Internal error" });
  }
}
