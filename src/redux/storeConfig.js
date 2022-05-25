import { legacy_createStore as createStore } from "redux";
import userReducer from "./arada/reducer/reducer";
import { combineReducers } from "redux";

const rootReducer =combineReducers ({
    userReducer,
})
const store =  createStore(rootReducer,{});
export default store;