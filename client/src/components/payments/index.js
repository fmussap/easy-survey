import React, { Component } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

import { handleToken } from 'actions'

class Payments extends Component {
  render () {
    return (
      <StripeCheckout
        name='Easy Survey'
        description='$5 for 5 surveys credits'
        amount={500}
        currency='EUR'
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='btn'>Add Credits</button>
      </StripeCheckout>
    )
  }
}
export default connect(null, { handleToken })(Payments)
