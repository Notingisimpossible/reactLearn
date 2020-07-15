import {takeEvery,put} from 'redux-saga/effects'
import * as actionType from './actionType'
import {changeHomeList} from './actionCreater'
import axios from 'axios'

function* getList() {
  try{
    const res = yield axios.get('/api/home.json')
    const data = res.data.data.homeContentList
    const action = changeHomeList(data)
    yield put(action)
  }catch(e){
    console.log('数据请求失败')
  }
}

function* mySaga() {
  yield takeEvery(actionType.getHomeList,getList)
}

export default mySaga