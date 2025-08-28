import express from "express";
import nodemailer from "nodemailer";
import crypto from "crypto";

const app = express();

// Temporary store (you can use Redis/DB instead)
const otpStore = {};
// Send OTP
export const sendOtp = async (req,res) =>{

  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  // Generate 6-digit OTP
  const otp = crypto.randomInt(100000, 999999);

  // Save OTP in store with 5 min expiry
  otpStore[email] = { otp, expires: Date.now() + 5 * 60 * 1000 };

  // Configure transporter (use your Gmail/SMTP credentials)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rashikrashik660@gmail.com",
      pass: "nhgx elec arjb ljwn" // Use App Password (not real Gmail password)
    },
  });

  // Mail options
  const mailOptions = {
  from: '"MockI Support" <mocki@gmail.com>', // Professional sender format
  to: email,
  subject: "Your One-Time Password (OTP) - MockI",
  html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #4CAF50;">MockI Verification</h2>
      <p>Dear User,</p>
      <p>Thank you for using <strong>MockI</strong>. Please use the OTP below to complete your verification:</p>
      
      <p style="font-size: 20px; font-weight: bold; color: #d32f2f; letter-spacing: 2px;">
        ${otp}
      </p>
      
      <p>This OTP will expire in <strong>5 minutes</strong>. Do not share it with anyone for security reasons.</p>
      
      <p style="margin-top: 20px;">Best regards,<br/>The MockI Team</p>
    </div>
  `,
};


  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "OTP sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending OTP", error });
  }
}

export const verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore[email];

  if (!record) return res.status(400).json({ message: "OTP not found" });
  if (Date.now() > record.expires) return res.status(400).json({ message: "OTP expired" });
  if (parseInt(otp) !== record.otp) return res.status(400).json({ message: "Invalid OTP" });

  delete otpStore[email];
  res.json({ message: "OTP verified successfully" });
};
