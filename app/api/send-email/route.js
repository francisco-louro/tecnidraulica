import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure your email service
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or your SMTP provider
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      } /*,
      tls: {
        rejectUnauthorized: false, // ONLY for testing, remove in production
      },*/,
    });

    /*await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      subject: "New Form Submission",
      text: JSON.stringify(formData, null, 2),
    });

    return NextResponse.json({ success: true });*/

    const mailOptions = {
      from: `"Formulário de Contato" <${formData.email}>`,
      to: process.env.RECEIVING_EMAIL, // Your target email
      subject: `Pedido de Orçamento para:  ${
        formData.subject || "Sem assunto"
      }`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || "Não fornecido"}
        Assunto: ${formData.subject}
        Message: ${formData.message}
      `,
      html: `
        <h3>Pedido de Orçamento</h3>
        <p><strong>Nome:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Tlf:</strong> ${formData.phone || "Não fornecido"}</p>
        <p><strong>Assunto:</strong> ${
          formData.subject || "Não especificado"
        }</p>
        <p><strong>Mensagem:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
  /*if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, phone, email, subject, message } = req.body;

  // Configure your email service
  const transporter = nodemailer.createTransport({
    service: "smtp-relay.brevo.com", // or your SMTP provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "918c74001@smtp-brevo.com", // Your target email
    subject: `Novo pedido do Formulário do Site de ${name}`,
    text: `
      Nome: ${name}
      Tel: ${phone}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
    html: `
      <h3>Pedido no Formulário do Site</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Tel:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Email send error:", error);
    res
      .status(500)
      .json({ message: "Ocorreu um erro. Tente novamente mais tarde." });
  }*/
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
