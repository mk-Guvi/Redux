//all the reducers are combined here and exported to be used as single reducer
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer;
