import * as actions from 'actions/actions-type'

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.FETCH_USER:
      return action.payload || false
    default:
      return state
  }
}
