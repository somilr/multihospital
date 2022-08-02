import { all } from 'redux-saga/effects'
import { authSagaCall } from '../sagas/auth.Sagas'

export function* rootSaga () {
    yield all ([
        authSagaCall()
    ])
}