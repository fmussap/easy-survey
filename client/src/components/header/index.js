import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Payments from 'components/payments'

class Header extends Component {
  showButton () {
    const text = this.props.auth
    if (text === '') {
      return <div />
    }

    if (text) {
      return [
        <li key={1}><Payments /></li>,
        <li key={2} style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
        <li key={3}><a href='/api/logout'>Logout</a></li>
      ]
    }

    return (
      <a href='/auth/google'>Sign in with Google</a>
    )
  }

  render () {
    return (
      <nav>
        <div className='nav-wrapper' style={{ paddingLeft: 10 }}>
          <Link
            to='/'
            className='brand-logo left'
          >
            <div>
              <i className='material-icons' style={{ fontSize: 40 }}>home</i>
              Easy Survey
            </div>
          </Link>
          <ul className='right'>
            {this.showButton()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps, null)(Header)
