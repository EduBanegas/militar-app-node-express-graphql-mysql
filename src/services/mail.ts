import nodemailer from 'nodemailer'
import { NODE_MAILER_EMAIL, NODE_MAILER_PASSWORD } from './../config/env.config'

const mail = {
  user: NODE_MAILER_EMAIL,
  pass: NODE_MAILER_PASSWORD
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: mail.user, // generated ethereal user
    pass: mail.pass // generated ethereal password
  }
})

export const sendEmail = async (email: string, subject: string, html: any) => {
  try {
    await transporter.sendMail({
      from: `Eduardo Banegas (Full Stack Developer) <${mail.user}>`, // sender address
      to: email, // list of receivers
      subject, // Subject line
      text: 'Verificación de Email para MilitarApp(Prueba para NEEDZAIO)', // plain text body
      html // html body
    })
  } catch (error) {
    console.log('Something is wrong with the email: ', error)
  }
}

export const getTemplate = (name: string, token: string) => {
  return `
        <head>
          <link rel="stylesheet" href="./styles.css" />
        </head>

        <div id="email___content">
          <img src="https://firebasestorage.googleapis.com/v0/b/test-60a0a.appspot.com/o/Assets%2FLogo%20Edu.ico?alt=media&token=7bdc6180-3116-43d2-924e-68834e095f77" alt="" />
          <h2>Hola ${name}</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a href="http://localhost:3000/email/confirm/${token}" target="_blank"
            >Confirmar Cuenta</a
          >
        </div>
      `
}
