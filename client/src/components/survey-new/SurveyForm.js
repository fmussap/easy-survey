import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SurveyField from './SurveyField'

class SurveyForm extends Component {
  renderFields (name, label, icon) {
    return (
      <div className='row'>
        <Field
          icon={icon}
          name={name}
          label={label}
          component={SurveyField}
        />
      </div>
    )
  }
  render () {
    const { handleSubmit } = this.props
    return (
      <div className='row'>
        <MuiThemeProvider>
          <form
            onSubmit={handleSubmit(values => console.log('values', values))}
          >
            {this.renderFields('title', 'Title', 'create')}
            {this.renderFields('subject', 'Subject', 'create')}
            <button type='submit'>
              Submit
            </button>
          </form>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(connect(null, null)(SurveyForm))
