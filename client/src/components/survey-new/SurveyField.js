import React from 'react'
import TextField from 'material-ui/TextField'

const SurveyField = ({ icon, label, input, meta: { touched, error }, ...custom }) => {
  // console.log('input', input)
  // color: '#26a69a'
  return (
    <div style={{ padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <i
        className='material-icons'
        style={{ fontSize: 30 }}
      >
        {icon}
      </i>
      <TextField
        style={{ marginLeft: 10, fontSize: 22, padding: 5 }}
        floatingLabelText={label}
        floatingLabelStyle={{ fontSize: 20 }}
        errorText={touched && error}
        {...input}
        {...custom}
        icon='person'
        fullWidth
        multiLine
        floatingLabelShrinkStyle={{ color: '#00BCD4', fontWeight: 'bold' }}
      />
    </div>
  )
}

export default SurveyField
