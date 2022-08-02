import * as ActionTypes from "../ActionTypes"
import { call, put, takeEvery,all } from 'redux-saga/effects'
import { signupAPI } from '../../common/api/auth.api';
import { emailverification } from '../action/auth.action';

function* signupUser(action) {
   console.log(action);
    try {
       const user = yield call(signupAPI, action.payload);
       yield put(emailverification(user));
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }
 
 function* watchsaga() {
   yield takeEvery(ActionTypes.SIGNUP_USER, signupUser);
 }

 export function* authSagaCall () {
   yield all ([
      watchsaga()
   ])
 }


 
