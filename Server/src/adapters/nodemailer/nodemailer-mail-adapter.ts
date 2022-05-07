import nodemailer from'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "658e1ee3d913b8",
        pass: "6bedcb5bfa7192"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        const feedback = await transport.sendMail({
        from: 'Equipe Feedget <equipe@feedget.com>',
        to: 'Arthur C Lobo <aclskt16@gmail.com',
        subject,
        html: body,
    })

    }
}
