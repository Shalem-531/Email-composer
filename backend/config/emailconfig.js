import nodemailer from "nodemailer";

async function createmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.verify();
  console.log("Gmail SMTP authentication successful!");

  return transporter;
}

export default createmail;