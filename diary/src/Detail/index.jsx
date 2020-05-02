import React,{useState, useEffect} from 'react'
import { NavBar, List, Icon, Toast } from "antd-mobile";
import {getQueryString} from '../utils'
import {useHistory} from 'react-router-dom'
import axios from '../utils/axios'

const Detail = () => {
  const history = useHistory()
  const id = getQueryString('id')
  const [detail, setDetail] = useState({})
  // console.log('detail.id',detail.id )
  useEffect(() => {
    axios.get(`/detail/${id}`).then((res) => {
    console.log(res)
      if(res.data.length) {
        setDetail(res.data[0])
      }
    })
  },[])

  const deleteDiary = (id) => {
    axios.post('/delete',{id}).then(res => {
      Toast.success('删除成功')
      history.push('/')
      // console.log(res)
    })
  }
  return (
    <div className="diary-detail">
      <NavBar
        mode="light"
        icon={<Icon key={detail.id} type="left" />}
        onLeftClick={() => history.goBack()}
        rightContent={[
          <Icon type="cross-circle-o" onClick={()=>deleteDiary(detail.id)}/>,
          <img onClick={() => history.push(`/edit?id=${detail.id}`)} src="http://s.weituibao.com/1578721957732/Edit.png" alt="" style={{width: '26px'}}/>
        ]}
      >{detail.title || ''}
      </NavBar>
      <List renderHeader={() => `${detail.date}晴天`} className="my-list">
        <List.Item wrap>
        {detail.content}
        </List.Item>
      </List>
    </div>
  )
}

export default Detail