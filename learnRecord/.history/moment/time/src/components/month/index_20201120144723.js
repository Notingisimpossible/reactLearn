import React from 'react'
import moment from 'moment'

const Month = () => {
  const time = new moment()
  const monthStart = time.startOf('month');
  return(
    <div>
      <div>上月：{monthStart}</div>
    </div>
  )
}

export default Month;