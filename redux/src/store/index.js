import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import ReduxThunk from 'redux-thunk'

const composeEnhanders = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose

const enhancer = composeEnhanders(
  applyMiddleware(ReduxThunk)//引入中间件
)

const store = createStore (
  reducer,
  enhancer
  ) // store已经能知道笔记本中记过两个笔记



export default store