import { createStore, applyMiddleware } from "redux"
// import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./sagas/rootSagas"
import { rootReducer } from "./reducer"


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, thunk]
 
const configureStore = () => {
    let store = createStore(rootReducer, applyMiddleware(...middlewares))
 
    sagaMiddleware.run(rootSaga)

    return  store 
}

export const store = configureStore()