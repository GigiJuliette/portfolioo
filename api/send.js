import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, message } = req.body || {};

    const { data, error } = await resend.emails.send({
      from: "🎊 Portfolio <onboarding@resend.dev>",
      to: "gigialiasjuliette@gmail.com",
      subject: `New message from ${name || "Someone"}`,
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>💋 Nouveau message depuis ton portfolio ma queen 💋</h2>
      <p>
        <strong>Nom :</strong><br/>${name}
      </p>
      <p>
        <strong>Email :</strong><br/>${email}
      </p>
      <p>
        <strong>Message :</strong>
      </p>
      <p>${message}</p>
      <hr />
      <p style="font-size: 12px; color: #888;">
        Cet email a été envoyé automatiquement depuis ton site ma queen.
      </p>
    </div>
  `,
    });

    if (error) throw error;

    res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
}
