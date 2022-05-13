import React from 'react'
import "../styles/Keyboard.css"
const Button = ({content,state,setAnswer1,checkAnswer}) => {
  return (

    checkAnswer?   <button onClick={()=>checkAnswer()} className={` btn keyboard-button btn-gray`}>{content}</button>:
    <button onClick={()=>setAnswer1(content)} className={` btn ${state==="gray"?"btn-gray":state==="yellow"?"btn-warning":state==="green"?"btn-success":"btn-outline-light" } keyboard-button`}>{content}</button>
  )
}

export default Button