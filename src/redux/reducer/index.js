import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { signupReducer } from "./auth.reducer";

export const rootReducer = combineReducers({
    auth : signupReducer,
    alert : alertReducer
})