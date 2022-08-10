import { createStore, applyMiddleware } from "redux"
// import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./sagas/rootSagas"
import { rootReducer } from "./reducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, thunk]

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares))
 
    sagaMiddleware.run(rootSaga)

    return  store 
}

export const store = configureStore()

export let persistor = persistStore(store)