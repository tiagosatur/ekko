import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { saveState, reduxMiddlewares } from "../utils";
import { auth, character, characters, favorites } from "./reducers";

const rootReducer = combineReducers({
  auth,
  character,
  characters,
  favorites,
});

const loadState = (localStorageName) => {
  const serializedState = localStorage.getItem(localStorageName);
  return serializedState ? { favorites: JSON.parse(serializedState) } : {};
};

const localStorageName = "rickMortyState";
const middlewares = [thunk, reduxMiddlewares.addFavoriteMiddlewareInterceptor];
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
