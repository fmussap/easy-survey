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
        <div className='btn-large'>
          Add Credits
        </div>
      </StripeCheckout>
    )
  }
}
export default connect(null, { handleToken })(Payments)
