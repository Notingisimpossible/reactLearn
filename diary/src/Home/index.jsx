import React,{useEffect, useState} from 'react'
import './style.css'
import {Card} from 'antd-mobile'
import {Link} from 'react-router-dom'
import axios from '../utils/axios'


const Home = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get('/list').then((res) => {
      // console.log(res.data)
      setList(res.data)
    })
  },[])
  return (
    <div className="diary-list">
      {
        list.map(item => (
          <Link key={item.id} to={{ pathname: 'detail', search: `?id=${item.id}`}}>
            <Card className="diary-item">
              <Card.Header
                title={item.title}
                thumb={item.url}
                extra={<span>晴</span>}
              />
              <Card.Body>
                <div>{item.content}</div>
              </Card.Body>
              <Card.Footer content={item.date} extra={<div>查看详情</div>} />
            </Card>
          </Link>
        ))  
      }
    </div>
  )
}

export default Home