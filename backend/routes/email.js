import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { nombre, contacto, correo, direccion, ciudad, mensaje } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey", // 👈 literal, siempre "apikey"
        pass: process.env.SENDGRID_API_KEY, // tu API Key
      },
    });

    await transporter.sendMail({
      from: "rubenquintero26@outlook.com", // remitente (puede ser tu correo verificado en SendGrid)
      to: "rubenquintero26@outlook.com",   // destinatario
      subject: `Nuevo mensaje de ${nombre}`,
      text: `
        Nombre: ${nombre}
        Contacto: ${contacto}
        Correo: ${correo}
        Dirección: ${direccion}
        Ciudad: ${ciudad}
        Mensaje: ${mensaje}
      `,
    });

    res.status(200).send("Correo enviado ✅");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al enviar ❌");
  }
});

export default router;