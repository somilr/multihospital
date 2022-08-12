import * as ActionTypes from "../ActionTypes"

export const signupuser = (values) => (dispech) => {
    dispech({type:ActionTypes.SIGNUP_USER, payload: values});
}

export const signinuser = (values) => (dispech) => {
    dispech({type:ActionTypes.SIGNIN_USER, payload: values});
}

export const logginuser = (values) => (dispech) => {
    dispech({type:ActionTypes.LOGGIN_USER, payload: values});
}

export const logoutuser = () => (dispech) => {
    dispech({type:ActionTypes.LOGOUT_USER})
}

export const loggedoutuser = () => (dispech) => {
    dispech({type:ActionTypes.LOGGEDOUT_USER})
}

export const emailverification = (user) => (dispech) => {
    dispech({type:ActionTypes.EMAIL_VERIFICATION, payload:user})
}