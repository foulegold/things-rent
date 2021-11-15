import { USER_LOGIN, USER_LOGOUT } from "../actions/authAction";

const initialState = null

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return state = action.payload

    case USER_LOGOUT:
      return state = null

    default:
      return state
  }
}

export default userReducer