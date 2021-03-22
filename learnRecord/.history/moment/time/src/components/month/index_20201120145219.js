import React from 'react'
import moment from 'moment'

const Month = () => {
  const monthStart = moment().startOf('month');
  console.log({ monthStart})
  return(
    <div>
      <div>上月：</div>
    </div>
  )
}

export default Month;