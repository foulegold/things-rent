import { GET_SEARCH_RESULT } from "../actions/searchAction";



const InitialState = [];

function searchReducer(state = InitialState, action) {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return (state = action.payload)

    default:
      return state;
  }
}

export default searchReducer;
