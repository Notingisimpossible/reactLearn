import React from 'react'
import moment from 'moment'

const Month = () => {
  const monthStart = moment().startOf('month').add(-1, 'M').format('YYYY-MM-DD HH:mm');
  console.log({ monthStart })
  return(
    <div>
      <div>上月：{monthStart}</div>
    </div>
  )
}

export default Month;