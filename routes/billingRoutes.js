'use strict'

const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'use 4242 4242... as a card number',
      source: req.body.id
    })
    if (charge.paid) {
      req.user.credits += 5
      const user = await req.user.save()
      res.send(user)
    }
  })
}
