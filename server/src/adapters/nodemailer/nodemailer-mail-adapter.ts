import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8373dd46fe74e8",
    pass: "8060c935120bf6",
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Guilherme Borges <gsilvaborges@gmail.com>",
      subject,
      html: body,
    })
  }
}
