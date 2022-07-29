import { combineReducers } from "redux";
import { signupReducer } from "./auth.reducer";

export const rootReducer = combineReducers({
    auth : signupReducer
})