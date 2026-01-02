import { createStore } from "redux";
import compteurReducer from "./reducers";
const store1 = legacy_createStore(compteurReducer); //anciennemnt juste createSore(...)
export default store1;
