import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { withRouter } from 'react-router-dom'

import { submitSurvey } from 'actions'
import formFields from './formFields'

const SurveyFormReview = ({ onSurveyBack, formValues, submitSurvey, history }) => {
  const renderFormReview = () => {
    return formFields.map(({ name, label }) => {
      return (
        <div className='row' key={name}>
          <TextField
            style={{ fontSize: 22 }}
            disabled
            floatingLabelText={label}
            defaultValue={formValues[name]}
            floatingLabelStyle={{ fontSize: 20 }}
            fullWidth
            multiLine
            floatingLabelShrinkStyle={{ color: '#00BCD4', fontWeight: 'bold' }}
          />
        </div>
      )
    })
  }

  return (
    <div className='row'>
      <h5>Please confirm your entries</h5>
      <MuiThemeProvider>
        <div className='row'>
          <div style={{ padding: 20 }}>
            {renderFormReview()}
          </div>
          <button
            className='btn waves-effect waves-light yellow darken-3'
            onClick={onSurveyBack}
          >
            Back
            <i className='material-icons left'>chevron_left</i>
          </button>
          <button
            className='btn waves-effect waves-light green darken-2 right'
            onClick={() => submitSurvey(formValues, history)}
            name='done'
          >
            Send survey
            <i className='material-icons right'>email</i>
          </button>
        </div>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => ({
  formValues: state.form.surveyForm.values
})

export default connect(mapStateToProps, { submitSurvey })(withRouter(SurveyFormReview))
