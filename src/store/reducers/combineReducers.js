import {combineReducers} from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import shoppingCardReducer from "./shoppingCardReducer";
import storeReducer from "./storeReducer";


const reducers = combineReducers({
   global: globalReducer,
   user: userReducer,
   product: productReducer,
   shopping: shoppingCardReducer,
   store: storeReducer
});
export default reducers;


