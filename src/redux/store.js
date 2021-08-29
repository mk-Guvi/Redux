import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducers";
import rootReducer from "./rootReducer";
//create strore can acceot only one reducer

//const store = createStore(cakeReducer);
//for multiple reducers we use rootReducer
const store = createStore(rootReducer);

export default store;
