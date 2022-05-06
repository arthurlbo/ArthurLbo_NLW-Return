import nodemailer from'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '0cbd58718b0fd4',
        pass: '50149f18dc47c9',
    },
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
