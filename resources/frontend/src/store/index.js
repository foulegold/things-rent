import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import announcementReducer from "./reducers/announcementsReducer";
import userReducer from "./reducers/authReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import searchReducer from "./reducers/searchReducer";
import spinnerReducer from "./reducers/spinnerReducer";
import userAnnouncementsReducer from "./reducers/userAnnouncementsReducer";
import warningReducer from "./reducers/warningReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

// создаем объект конфигурации для persist
const persistConfig = {
  key: "things-rent",
  storage,
  blacklist: ["announcements", "filteredAnnouncements", "loading", "warning", "userAnnouncements"],
};


// объединение редьюсеров
const rootReducer = combineReducers({
  announcements: announcementReducer,
  filteredAnnouncements: searchReducer,
  categories: categoriesReducer,
  loading: spinnerReducer,
  user: userReducer,
  userAnnouncements: userAnnouncementsReducer,
  warning: warningReducer,
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);


// создаем store с использованием persistedReducer
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// создаем persistor
export const persistor = persistStore(store);