// useMemo(useCallback) 优化React Hooks 程序的性能

import React, {useState, useMemo} from 'react'

function Example () {
  const [Wn, setWn] = useState('蜗牛的梦')
  const [zm, setZm] = useState('猛哥的梦')

  return (
    <>
      <button onClick={() => {setWn(new Date().getTime())}}>蜗牛</button>
      <button onClick={() => {setZm(new Date().getTime()+',猛哥贼帅')}}>猛哥</button>
      <ChildComponent name={zm}>{Wn}</ChildComponent>
    </>
  )
}

function ChildComponent ({name, children}) {
  function changeZm (name) {
    console.log('他来了，他来了，猛哥向我走来了')
    return name + ',猛哥向我走来了'
  }

  const actionZm = useMemo(() => changeZm(name), [name]) 
  return (
    <>
      <div>{actionZm}</div>
      <div>{children}</div>
    </>
  )
}
export default Example