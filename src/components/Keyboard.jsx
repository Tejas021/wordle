import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import Button from './Button'

const Keyboard = ({correct,wrong,present,addToCorrect,setAnswer1,checkAnswer,clear}) => {

 let alphabets=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','ENTER','Z','X','C','V','B','N','M']
   

  return (
    <div className='keyboard-grid'>
        {alphabets.map(a=>a==="ENTER"?<Button checkAnswer={checkAnswer} setAnswer1={setAnswer1}  key={a} content={a} state="gray"/>:<Button setAnswer1={setAnswer1}  key={a} content={a} state={`${correct.includes(a)?"green":present.includes(a)?"yellow":wrong.includes(a)?"gray":"light"}`}/>)}
        <button onClick={()=>clear()} className={` btn keyboard-button btn-gray`} style={{width:"70px",textAlign:"center"}}>DELETE</button>
    </div>
  )
}

export default Keyboard