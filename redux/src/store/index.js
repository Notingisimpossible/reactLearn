import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

const composeEnhanders = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhanders(
  // applyMiddleware(ReduxThunk)//引入中间件
  applyMiddleware(sagaMiddleware)
)
const store = createStore (
  reducer,
  enhancer
  ) // store已经能知道笔记本中记过两个笔记
  sagaMiddleware.run(todoSagas)


export default store