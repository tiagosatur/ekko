import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { saveState } from "../utils";
import { auth, character, characters, favorites } from "./reducers";

const rootReducer = combineReducers({
  auth,
  character,
  characters,
  favorites,
});

export const loadState = (localStorageName) => {
  const serializedState = localStorage.getItem(localStorageName);
  return serializedState ? { favorites: JSON.parse(serializedState) } : {};
};

const localStorageName = "rickMortyState";
const middlewares = [thunk];
const persistedState = loadState(localStorageName);

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(() => {
  const state = store.getState();
  saveState(state, localStorageName);
});
export default store;
