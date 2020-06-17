import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { auth, character, characters, episodes } from "./reducers";

const rootReducer = combineReducers({
  auth,
  character,
  characters,
  episodes,
});

const middlewares = [thunk];

const sessionStorageName = "rickMortyState";

const persistedState = sessionStorage.getItem(sessionStorageName)
  ? JSON.parse(sessionStorage.getItem(sessionStorageName))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(() => {
  sessionStorage.setItem(sessionStorageName, JSON.stringify(store.getState()));
});
export default store;
