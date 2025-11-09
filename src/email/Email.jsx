import React from "react";
import { Html } from "@react-email/components";

export default function Email({ name, email, message }) {
  return (
    <Html>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h2>💋 Nouveau message depuis ton portfolio ma queen 💋</h2>
        <p>
          <strong>Nom :</strong> {name}
        </p>
        <p>
          <strong>Email :</strong> {email}
        </p>
        <p>
          <strong>Message :</strong>
        </p>
        <p>{message}</p>
        <hr />
        <p style={{ fontSize: "12px", color: "#888" }}>
          Cet email a été envoyé automatiquement depuis ton site.
        </p>
      </div>
    </Html>
  );
}
