import React, { Component } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

import { handleToken } from 'actions'

class Payments extends Component {
  render () {
    return (
      <StripeCheckout
        name='Easy Survey'
        description='4242 4242 4242 4242 as a card number'
        amount={500}
        currency='EUR'
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <div className='btn-large'>
          Add Credits
        </div>
      </StripeCheckout>
    )
  }
}
export default connect(null, { handleToken })(Payments)
