import { Router } from "express";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config()

const router = Router();

router.post("/", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ ok: false, message: "All fields are required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS, // 16-character app password
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.MAIL_TO,
            subject: `Contact Form: ${subject}`,
            html: `
        <h2>New Message from ${name}</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br>${message.replace(/\n/g, "<br>")}</p>
      `,
        });

        res.json({ ok: true, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, message: "Failed to send message" });
    }
});

export default router;
