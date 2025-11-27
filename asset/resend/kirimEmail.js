import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event, context) {
  try {
    const { nama, email, message } = JSON.parse(event.body);

    const { data, error } = await resend.emails.send({
      from: "Form <onboarding@resend.dev>",
      to: "darkprince0456@gmail.com",
      subject: `Pesan dari ${nama}`,
      html: `
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Pesan:</b> ${message}</p>
      `
    });

    if(error) return { statusCode: 400, body: JSON.stringify(error) };

    return { statusCode: 200, body: JSON.stringify({ success: true, data }) };

  } catch(err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
  }
}
