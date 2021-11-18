import { SET_USER_ANNOUNCEMETS } from "../actions/userAnnouncementsAction";

const initialState = []

function userAnnouncementsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ANNOUNCEMETS:
      return state = action.payload

    default:
      return state
  }
}

export default userAnnouncementsReducer