import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import 'materialize-css/dist/css/materialize.min.css'

import { fetchUser } from 'actions'
import Header from 'components/header'
import SurveyNew from 'components/survey-new'
import Main from 'components/main'
import 'css/style.css'

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
            <Route exact path='/' component={Main} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, { fetchUser })(App)
