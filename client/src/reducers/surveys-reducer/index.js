import * as actions from 'actions/actions-type'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.FETCH_SURVEYS:
      return action.payload
    default:
      return state
  }
}
