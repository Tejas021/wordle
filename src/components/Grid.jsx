import React from 'react'
import "../styles/Answer.css"
import Cell from './Cell'
const Grid = ({Answer,correct,wrong,present}) => {

    let grid=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','X','C','V','B','N','M']
   
    const flatter=(a)=>{
        let arr=[]
        
        for(let i =0;i<5;i++)
        {
            for(let j=0;j<5;j++){
                // a[i][j].content="a"
               arr= arr.concat(a[i][j])
            }
        }
        
        return arr}
        

// Answer=Answer.flat()

  return (
    <div className=' mb-3 answer-grid '>
        {
            flatter(Answer).map(g=><Cell  content={g.content} state={`${g.status}`}/>)
        }


      
    </div>
  )
}

export default Grid