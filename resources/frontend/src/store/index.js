import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import categoriesReducer from "./reducers.js/categoriesReducer";
import searchReducer from "./reducers.js/searchReducer";


// объединение редьюсеров
const rootReducer = combineReducers({
  // ваши редьюсеры
  filteredAnnouncements: searchReducer,
  categories: categoriesReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
