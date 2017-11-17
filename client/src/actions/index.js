import axios from 'axios'

import * as actions from './actions-type'

export const fetchUser = () => async dispatch => {
  const url = '/api/current_user'
  const request = await axios.get(url)
  dispatch({
    type: actions.FETCH_USER,
    payload: request.data
  })
}

export const fetchSurveys = () => async dispatch => {
  const url = '/api/surveys'
  const request = await axios.get(url)
  dispatch({
    type: actions.FETCH_SURVEYS,
    payload: request.data
  })
}

export const handleToken = (token) => async dispatch => {
  const url = '/api/stripe'
  const request = await axios.post(url, token)
  dispatch({
    type: actions.FETCH_USER,
    payload: request.data
  })
}

export const submitSurvey = (values, history) => async dispatch => {
  const url = '/api/surveys'
  const request = await axios.post(url, values)

  history.push('/')
  dispatch({
    type: actions.FETCH_USER,
    payload: request.data
  })
}
