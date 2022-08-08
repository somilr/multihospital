import * as ActionTypes from "../ActionTypes"

const initalState = {
    text: '',
    color: ''
}

export const alertReducer = (state = initalState, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.SET_ALERT:
            return {
                ...state,
                text: action.payload.text,
                color: action.payload.color
            }
        case ActionTypes.RESET_ALERT:
            return {
                ...state,
                text: '',
                color: ''
            }
        default:
            return state;
    }
}