import * as ActionTypes from "../ActionTypes"

export const setalert = (data) => (dispech) => {
    // console.log(data);
    dispech({type:ActionTypes.SET_ALERT, payload: data});
}

export const resetalert = () => (dispech) => {
    dispech({type:ActionTypes.RESET_ALERT});
}