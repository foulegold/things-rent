import { SET_WARNING_TEXT } from "../actions/warningAction";

const initialState = false

function warningReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WARNING_TEXT:
      if (action.payload === false) {
        return state = false
      }
      state = `${action.payload}`

    default:
      return state
  }
}

export default warningReducer