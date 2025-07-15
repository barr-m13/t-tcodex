import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const { email, message } = req.body
  try {
    await resend.emails.send({
      from: 'noreply@resend.dev',
      to: ['trialsandtribulationslaw@gmail.com'],
      subject: 'New message',
      text: `Email: ${email}\nMessage: ${message}`
    })
    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to send' })
  }
}
