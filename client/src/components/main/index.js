import React from 'react'
import { connect } from 'react-redux'

import Landing from '../landing'
import Dashboard from '../dashboard'

const Main = ({ auth }) => {
  const renderMain = () => {
    if (auth) {
      return <Dashboard />
    }
    return <Landing />
  }
  return (
    <div>
      {renderMain()}
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps, null)(Main)
