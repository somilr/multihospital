import * as ActionTypes from "../ActionTypes"
import { call, put, takeEvery,all } from 'redux-saga/effects'
import { logauAPI, signinAPI, signupAPI } from '../../common/api/auth.api';
import { emailverification, loggedoutuser, logginuser } from '../action/auth.action';
import { resetalert, setalert } from "../action/alert.action";
import { history } from "../../history";

function* signupUser(action) {
   // console.log(action);
    try {
       const user = yield call(signupAPI, action.payload);
      //  console.log(user);
       yield put(setalert({text:user.payload, color:"success"}))
       //yield put(emailverification(user));
    } catch (e) {
      // console.log((e));
      yield put(setalert({text:e.payload, color:"error"}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 function* signinUser(action){
  try {
    const user = yield call(signinAPI, action.payload);
    yield put(logginuser(user))
    history.push("/")
    yield put(setalert({text: "Login successfully", color:"success"}))  
    console.log(user);
  } catch (e) {
    yield put(setalert({text:e.payload, color:"error"}))
    console.log(e);
  }
 }

 function* logoutUser(action){
  try {
    const user = yield call(logauAPI, action.payload)
    history.push("/")
    yield put(loggedoutuser(user))
    // console.log(user);
    yield put(setalert({text: user.payload , color:"success"}))
  } catch (e) {
    yield put(setalert({text:e.payload,color:"error"}))
  }
 } 
 
 function* watchsaga() {
   yield takeEvery(ActionTypes.SIGNUP_USER, signupUser);
 }

 function* signinsaga() {
  yield takeEvery(ActionTypes.SIGNIN_USER, signinUser);
 }

 function* logoutsaga() {
  yield takeEvery(ActionTypes.LOGOUT_USER, logoutUser);
 }

 export function* authSagaCall () {
   yield all ([
      watchsaga(),
      signinsaga(),
      logoutsaga()
   ])
 }


 
