import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./sagas/rootSagas"


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, thunk]
 
export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares))
 

    sagaMiddleware.run(rootSaga)

    return { store, persistor }
}