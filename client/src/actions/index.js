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
