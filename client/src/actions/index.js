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

export const handleToken = (token) => async dispatch => {
  const url = '/api/stripe'
  const request = await axios.post(url, token)
  dispatch({
    type: actions.FETCH_USER,
    payload: request.data
  })
}
