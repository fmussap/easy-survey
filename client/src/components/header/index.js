import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='brand-logo'>
            Easy Survey
          </a>
          <ul className='right'>
            <li>
              <a>Sign in with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
