import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSaga from '../pages/web/store/saga'

const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(reducer,enhancer)
sagaMiddleware.run(todoSaga)
export default store