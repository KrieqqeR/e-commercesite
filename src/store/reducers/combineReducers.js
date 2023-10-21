import {combineReducers} from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import shoppingCardReducer from "./shoppingCardReducer";
import storeReducer from "./storeReducer";


export const reducers = combineReducers({
    globalReducer,
    userReducer,
    productReducer,
    shoppingCardReducer,
    storeReducer
});


