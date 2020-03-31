import { createStore, combineReducers } from 'redux'

const initialState = {
  count: 0
}

const ADD = 'ADD'
function countReducer(state = initialState, action) {
  switch (action) {
    case ADD:
      return { count: state.count+1 }
    default:
      return state
  }
}

const AllReducer = combineReducers({
  counter: countReducer
})
// function userReducer(srare = )

// {counter: initialState}
const store = createStore(countReducer, initialState)
// console.log(store.getState())
store.dispatch({type: 'ADD'})
// console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})
export default AllReducer
// export default store