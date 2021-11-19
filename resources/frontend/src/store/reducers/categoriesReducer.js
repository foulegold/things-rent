import { GET_CATEGORIES } from "../actions/categoriesAction";


const initialState = [{ id: 0, title: "Все категории" }]

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return state = action.payload

    default:
      return state;
  }
}

export default categoriesReducer