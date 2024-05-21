"use server";

import nodemailer from "nodemailer";

export interface ISendEmailState {
  status: "idle" | "success" | "error";
  message: string;
}

export const sendEmail = async (
  prevState: ISendEmailState,
  formData: FormData,
): Promise<ISendEmailState> => {
  const user = process.env.EMAIL_USERNAME;

  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message" as string);
  const source = (formData.get("source") as string) ?? "";

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  return transporter
    .sendMail({
      from: user,
      to: user,
      replyTo: email,
      subject: `Contato Site - ${name}`,
      html: `
              <p><strong>Nome:</strong> ${name} </p>
              <p><strong>Telefone:</strong> ${phone} </p>
              <p><strong>Email:</strong> ${email} </p>
              <p><strong>Mensagem:</strong> ${message} </p>
              <p><strong>Como conheceu a Dom Drone?:</strong> ${source} </p>
              `,
    })
    .then(
      () =>
        ({
          status: "success",
          message: "Success: email was sent",
        }) as ISendEmailState,
    )
    .catch((error) => {
      throw new Error(`Error: failed to send email because - ${error}}`);
    });
};
