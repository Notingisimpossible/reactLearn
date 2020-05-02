import React, {useState, useEffect} from 'react'
import './style.css'
import {Toast, Button, List, InputItem, TextareaItem, DatePicker, ImagePicker} from 'antd-mobile'
import axios from '../utils/axios'
import moment from 'moment'
import {getQueryString} from '../utils'
import {useHistory} from 'react-router-dom'

const Edit = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState([])
  const id = getQueryString('id')

  const onChange = (files, type, index) => {
    console.log(files, type, index)
    setFiles(files)
  }

  useEffect(() => {
    if(id) {
      axios.get(`/detail/${id}`).then(res => {
        if(res.data.length) {
          setTitle(res.data[0].title)
          setContent(res.data[0].content)
          setDate(new Date(res.data[0].date))
          setFiles([{url: res.data[0].url}])
        }
      })
    }
  }, [])


  const publish = () => {
    if(!title||!content||!date){
      Toast.fail('请输入正确笔记内容')
      return
    }
    const params = {
      title,
      content,
      date: moment(date).format('YYYY-MM-DD'),
      url: files.length ? files[0].url : ''
    }
    if(id) {
      params['id'] = id
      axios.post('/update', params).then(res => {
        Toast.success('修改成功')
        history.push(`/detail?id=${id}`)
      })
      return
    }
    axios.post('/add', params).then(res => {
      Toast.success('发布成功')
      history.push('/')
    })
  }

  return (
    <div className="diary-edit">
      <List renderHeader={() => '编辑日记'} className="my-list">
        <InputItem
          placeholder="请输入标题"
          value={title}
          clear
          onChange={(value) => setTitle(value)}
        >标题</InputItem>
        <TextareaItem
          placeholder="请输入日记内容"
          value={content}
          rows = {6}
          onChange={(value) => setContent(value)}
        />
        <DatePicker
          mode="date"
          title="请选择日期"
          extra="请选择日期"
          value={date}
          onChange={date => setDate(date)}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
        <ImagePicker
          files={files}
          onChange={onChange}
          multiple={false}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 1}
        />
        <Button type='primary' onClick={() => publish()}>发布</Button>
      </List>
    </div>
  )
}

export default Edit