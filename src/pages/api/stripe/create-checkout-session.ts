import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { getSession } from 'next-auth/react'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await getSession({ req })
      if (!session?.user) {
        return res.status(401).json({ error: 'Not authenticated' })
      }

      const { priceId } = req.body

      const checkoutSession = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/canceled`,
        customer_email: session.user.email!,
      })

      res.status(200).json({ sessionId: checkoutSession.id })
    } catch (err) {
      res.status(500).json({ error: 'Error creating checkout session' })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}