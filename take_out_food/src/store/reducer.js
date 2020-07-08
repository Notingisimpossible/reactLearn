import {combineReducers} from 'redux'
import {reducer as webreducer} from '../pages/web/store'
const reducer = combineReducers({
  web: webreducer
})
export default reducer