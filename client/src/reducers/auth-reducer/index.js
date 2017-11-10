import * as actions from 'actions/actions-type'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  // console.log('type', action.type)
  switch (action.type) {
    case actions.FETCH_USER:
      console.log('data', action.payload)
      return state
    default:
      return state
  }
}
