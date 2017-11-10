import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'

import { fetchUser } from 'actions'
import Landing from 'components/landing'
import Header from 'components/header'
import Dashboard from 'components/dashboard'
import SurveyNew from 'components/survey-new'

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }
  render () {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, { fetchUser })(App)
