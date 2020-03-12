// useRef 保存普通变量
import React, {useState, useEffect, useRef} from 'react'

function Example () {
  const inputEl = useRef(null)
  const onButtonClick = () =>{
    inputEl.current.value = "敏哥贼帅"
    console.log(inputEl)
  }
  // -------------------------
  const [text, setText] = useState('敏哥')
  const textRef = useRef()

  useEffect(() => {
    textRef.current = text
    console.log(textRef.current)
  })
  // --------------------------
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br/>
      <hr/>
      <input value={text} onChange={(e) => {setText(e.target.value)}}></input>
    </>
  )
}

export default Example