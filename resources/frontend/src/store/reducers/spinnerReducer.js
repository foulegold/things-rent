import { SET_LOADING_STATUS } from "../actions/spinnerActions";

const initialState = false

function spinnerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return state = action.payload

    default:
      return state;
  }
}

export default spinnerReducer