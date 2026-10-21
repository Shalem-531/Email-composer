import createmail from "../config/emailconfig.js";

export const emailsender = async (req, res) => {
  try {
    const { to, body } = req.body;

    if (!to || !body?.trim()) {
      return res.status(400).json({
        message: "Recipient and email body are required"
      });
    }

    const transporter = await createmail();

    const info = await transporter.sendMail({
      from: `"Compose Email App" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Message from Compose Email App",
      text: body
    });

    res.status(200).json({
      message: "Email sent successfully",
      messageId: info.messageId
    });
  } catch (error) {
    console.error("Email error:", error.message);

    res.status(500).json({
      message: "Failed to send email"
    });
  }
};