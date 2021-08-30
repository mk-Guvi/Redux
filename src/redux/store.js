import { createStore, applyMiddleware } from "redux";
//import cakeReducer from "./cake/cakeReducers";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
//create strore can acceot only one reducer

//const store = createStore(cakeReducer);
//for multiple reducers we use rootReducer
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
