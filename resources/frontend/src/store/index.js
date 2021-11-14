import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import announcementReducer from "./reducers/announcementsReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import searchReducer from "./reducers/searchReducer";
import spinnerReducer from "./reducers/spinnerReducer";
import testUserReducer from "./reducers/testUserReducer"

// объединение редьюсеров
const rootReducer = combineReducers({
  // ваши редьюсеры
  announcements: announcementReducer,
  filteredAnnouncements: searchReducer,
  categories: categoriesReducer,
  loading: spinnerReducer,
  user: testUserReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
