import React from 'react'
import moment from 'moment'

const Month = () => {

  const time = new moment()
  return(
    <div>上月：{time}</div>
  )
}

export default Month;