import * as ActionTypes from "../ActionTypes"

const initalState = {
    isLoading: false,
    user: null,
    error: ''
}

export const signupReducer = (state = initalState, action) => {
    switch (action.type) {
        case ActionTypes.LOGGIN_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        default:
            return state;
    }
}