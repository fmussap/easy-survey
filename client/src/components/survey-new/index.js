import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SurveyForm from './SurveyForm'

class SurveyNew extends Component {
  render () {
    return (
      <div>
        <SurveyForm />
        <div className='fixed-action-btn'>
          <Link to='/surveys' className='btn-floating btn-large green'>
            <i className='large material-icons'>navigate_before</i>
          </Link>
        </div>
      </div>
    )
  }
}

export default SurveyNew
