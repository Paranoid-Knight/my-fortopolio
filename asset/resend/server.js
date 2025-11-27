import express from "express";
import { Resend } from "resend";
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(express.static("public")); // supaya index.html bisa diakses

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/kirim-email", async (req, res) => {
  const { nama, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Form <onboarding@resend.dev>", // pakai domain Resend untuk testing
      to: "darkprince0456@gmail.com",
      subject: `Pesan dari ${nama}`,
      html: `
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Pesan:</b> ${message}</p>
      `,
    });

    if (error) return res.status(400).json(error);
    res.json({ success: true, data });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
