"use client";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "invalid sender email"
    };
  }
  
  if (!message || typeof message !== "string") {
    return {
      error: "invalid message"
    };
  }

  // Correct usage of 'senderEmail' instead of 'email'
   await resend.emails.send({
    from: senderEmail,
    to: "simonedescode@simonesathyadesco.com",
    subject: "Message from contact form",
    reply_to: senderEmail,
    text: message,
  });
};

export default sendEmail;
