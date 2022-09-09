import { legacy_createStore as createStore } from "redux";
import { userReducer, channelReducer,menuReducer} from "./arada/reducer/reducer";
import { combineReducers } from "redux";

const rootReducer =combineReducers ({
    userReducer,
    channelReducer,
    menuReducer,
})
const store =  createStore(rootReducer,{});
export default store;