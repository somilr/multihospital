import * as ActionTypes from "../ActionTypes"
import { call, put, takeEvery,all } from 'redux-saga/effects'
import { signinAPI, signupAPI } from '../../common/api/auth.api';
import { emailverification, logginuser } from '../action/auth.action';
import { resetalert, setalert } from "../action/alert.action";

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
    yield put(setalert({text: "Login successfully", color:"success"}))
    yield put(logginuser(user))
    console.log(user);
  } catch (e) {
    yield put(setalert({text:e.payload, color:"error"}))
    console.log(e);
  }
 }
 
 function* watchsaga() {
   yield takeEvery(ActionTypes.SIGNUP_USER, signupUser);
 }

 function* signinsaga() {
  yield takeEvery(ActionTypes.SIGNIN_USER, signinUser);
 }

 export function* authSagaCall () {
   yield all ([
      watchsaga(),
      signinsaga()
   ])
 }


 
