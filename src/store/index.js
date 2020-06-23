import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { manageLocalStorage } from "../utils";
import { auth, character, characters, episodes, favorites } from "./reducers";

const rootReducer = combineReducers({
  auth,
  character,
  characters,
  // episodes,
  favorites,
});

const localStorageName = "rickMortyState";

const { saveState, loadState } = manageLocalStorage(localStorageName);

const middlewares = [thunk];

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});
export default store;
