import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { auth, characters } from "./reducers";

const rootReducer = combineReducers({
  auth,
  characters,
});

const middlewares = [thunk];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
