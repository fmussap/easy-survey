import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

import SurveyField from './SurveyField'
import validateEmails from 'utils/validateEmails'

const FIELDS = [
  { label: 'Campaign Title', name: 'title', icon: 'edit' },
  { label: 'Subject Line', name: 'subject', icon: 'edit' },
  { label: 'Email Body', name: 'body', icon: 'edit' },
  { label: 'Recipient List', name: 'recipients', icon: 'email' }
]

class SurveyForm extends Component {
  renderFields (name, label, icon) {
    return FIELDS.map(({ name, label, icon }) => {
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
        <MuiThemeProvider>
          <form
            onSubmit={handleSubmit(values => console.log('values', values))}
          >
            {this.renderFields()}
            <Link to='/surveys'>
              <button className='btn waves-effect waves-light red'>
                Cancel
              </button>
            </Link>
            <button
              className='btn waves-effect waves-light green darken-2 right'
              type='submit'
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
  const requiredFields = {
    title: 'Please enter a campaign title',
    subject: 'Please enter a subject',
    body: 'Please enter a body',
    recipients: 'Please enter at least one email'
  }

  errors.recipients = validateEmails(values.recipients || '')

  Object.keys(requiredFields).map(field => {
    if (!values[field]) {
      errors[field] = requiredFields[field]
    }
    return errors[field]
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(connect(null, null)(SurveyForm))
