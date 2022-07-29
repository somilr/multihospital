import { all } from 'redux-saga/effects'
import { authSagaCall } from './auth.sagas'

export function* rootSaga () {
    yield all ([
        authSagaCall()
    ])
}