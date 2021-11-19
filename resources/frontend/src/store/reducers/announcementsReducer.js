
import { GET_ANNOUNCEMENTS } from "../actions/announcementsActions";

const initialState = []

function announcementReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return state = action.payload

    default:
      return state;
  }
}

export default announcementReducer