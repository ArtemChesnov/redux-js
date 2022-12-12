import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'
import { rootWatcher } from '../saga/index'
import countReducer from './countReducer'
import { customerReducer } from './customerReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  countReducer,
  customers: customerReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)),
)

sagaMiddleware.run(rootWatcher)
