import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  showButton () {
    const text = this.props.auth
    if (text === '') {
      return <div />
    }

    return (
      <a href={!text ? '/auth/google' : '/api/logout'}>
        {!text ? 'Sign in with Google' : 'Logout'}
      </a>
    )
  }

  render () {
    return (
      <nav>
        <div className='nav-wrapper' style={{ paddingLeft: 10 }}>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='brand-logo'
          >
            Easy Survey
          </Link>
          <ul className='right'>
            <li>
              {this.showButton()}
            </li>
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
