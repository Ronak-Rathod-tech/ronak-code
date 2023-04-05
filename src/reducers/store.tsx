import { legacy_createStore } from "redux";
import  cartReducer  from "../reducers/cartReducer";

const store = legacy_createStore(cartReducer);

export default store;