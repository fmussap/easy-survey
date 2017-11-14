import React from 'react'
import TextField from 'material-ui/TextField'

const SurveyField = ({ icon, label, input, ...custom }) => {
  // console.log('input', input)
  return (
    <div style={{ padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <i
        className='material-icons'
        style={{ fontSize: 40 }}
      >
        {icon}
      </i>
      <TextField
        style={{marginLeft: 10}}
        hintText={label}
        floatingLabelText={label}
        floatingLabelStyle={{ fontSize: 20 }}
        floatingLabelFocusStyle={{ boxShadow: 'none', borderBottom: 'none' }}
        {...input}
        {...custom}
        icon='person'
        fullWidth
      />
    </div>
  )
}

export default SurveyField
