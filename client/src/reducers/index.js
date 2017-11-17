import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'

import authReducer from './auth-reducer'
import surveysReducer from './surveys-reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  surveys: surveysReducer,
  form: reduxForm
})

export default rootReducer
