import axios from 'axios'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_LIST, INIT_LIST_ACTION } from './actionsTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_LIST,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
      axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
      // console.log(res)
      const data = res.data
      console.log(data)
      const action = initListAction(Array.from(Object.keys(data.hotComments[0])))
      dispatch(action)
    })
  }
}