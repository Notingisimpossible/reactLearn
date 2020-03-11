import { takeEvery, put } from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionsTypes'
import {initListAction} from'./actionCreators'
import axios from 'axios'

function* getInitList() {

  try {
    const res = yield axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1')
    const action = initListAction(Array.from(Object.keys(res.data.hotComments[0])))
    yield put(action)
  } catch (e) {
    console.log('网络请求失败')
  }
  // axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
  //       // console.log(res)
  //       const data = res.data
  //       // console.log(data)
  //       const action = initListAction(Array.from(Object.keys(data.hotComments[0])))
  //       // dispatch(action)
  //       put(action)
  //       console.log(action)
  // })
}

function* mySaga() { // sagas 必须是generate函数
  yield takeEvery(GET_INIT_LIST, getInitList) // takeEvery 第一个参数是dispatch传过去数据 如果数据一致则执行第二个参数
}

export default mySaga