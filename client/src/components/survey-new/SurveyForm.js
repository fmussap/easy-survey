import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField'
import validateEmails from 'utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
  renderFields (name, label, icon) {
    return formFields.map(({ name, label, icon }) => {
      return (
        <div className='row' key={name}>
          <Field
            icon={icon}
            name={name}
            label={label}
            type='text'
            component={SurveyField}
          />
        </div>
      )
    })
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div className='row'>
        <h5>New Survey</h5>
        <MuiThemeProvider>
          <form
            onSubmit={handleSubmit(this.props.onSurveyNext)}
          >
            {this.renderFields()}
            <Link to='/'>
              <button className='btn waves-effect waves-light red'>
                Cancel
              </button>
            </Link>
            <button
              className='btn waves-effect waves-light green darken-2 right'
              name='next'
            >
              Next
              <i className='material-icons right'>chevron_right</i>
            </button>
          </form>
        </MuiThemeProvider>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '')

  formFields.map(({ name, error }) => {
    if (!values[name]) {
      errors[name] = error
    }
    return errors[name]
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(connect(null, null)(SurveyForm))
