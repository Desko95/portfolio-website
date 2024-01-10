"use client";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const NewEmailSection = async (formData, FormData) => {
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  resend.emails.send({
    from: email,
    to:"simonedescode@simonesathyadesco.com",
    subject:"Message from contact form",
    text: message,
  })
};

export default NewEmailSection