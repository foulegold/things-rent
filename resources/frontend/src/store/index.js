import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import searchReducer from "./reducers.js/searchReducer";

// объединение редьюсеров
const rootReducer = combineReducers({
  // ваши редьюсеры
  filteredAnnouncement: searchReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
