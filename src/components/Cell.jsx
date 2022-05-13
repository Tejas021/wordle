import React from 'react'
import "../styles/Answer.css"
const Cell = ({content,state}) => {
  return (
    <div className='cell'>
        <div className={`box ${state==="gray"?"bg-gray":state==="yellow"?"bg-warning":state==="green"?"bg-success":"bg-dark" }`}>
            {content}
        </div>
    </div>
  )
}

export default Cell