import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.min.css'

import Landing from 'components/landing'
import Header from 'components/header'
import Dashboard from 'components/dashboard'
import SurveyNew from 'components/survey-new'

const App = () => {
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

export default App
