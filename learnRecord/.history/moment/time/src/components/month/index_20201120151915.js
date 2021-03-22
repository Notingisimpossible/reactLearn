import React from 'react'
import moment from 'moment'

const Month = () => {
  const time = new moment([2020, 0, 31]);
  const end = time.startOf('month').add(-1, 'M').format('YYYY-MM-DD HH:mm');
  console.log(end)
  const monthStart = moment().startOf('month').add(-1, 'M').format('YYYY-MM-DD HH:mm');
  const monthEnd = moment().endOf('month').add(-1, 'M').format('YYYY-MM-DD HH:mm');

  const weekStart = moment().startOf('week').add(-1,'W').add(1, 'd').format('YYYY-MM-DD HH:mm');
  const weekEnd = moment().endOf('week').add(-1,'W').add(1, 'd').add(1, 'd').format('YYYY-MM-DD HH:mm');

  return(
    <div>
      <div>上月：{monthStart}-{monthEnd}</div>
      <div>上周: {weekStart}-{weekEnd}</div>
    </div>
  )
}

export default Month;