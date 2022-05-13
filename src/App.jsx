
import {useState,useEffect} from "react"
import './App.css'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import Navbar from './components/Navbar'
import randomWord from "random-word-by-length"

function App() {
  const [word, setword] = useState("")
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    // while(word.length!==5){
      let p =randomWord(5).toUpperCase()
      setword(p)
      // console.log(word)
      // while(p.length!==5){
      //   p =randomWord(5).toUpperCase()
      //   setword(p)
      //   console.log(word)
      // }
      
    // }
 
  }, [])
  
const [current, setCurrent] = useState({row:0,col:0})
  const [alphabets, setAlphabets] = useState({correct:[],wrong:[],present:[]})

const [Answer, setAnswer] = useState( [[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}],
[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}],
[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}],
[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}],
[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"light"}]]
)


  // [[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"yellow"},{content:"",status:"yellow"},{content:"",status:"yellow"}],[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"yellow"},{content:"",status:"yellow"},{content:"",status:"yellow"}],[{content:"",status:"light"},{content:"",status:"light"},{content:"",status:"yellow"},{content:"",status:"yellow"},{content:"",status:"yellow"}]]

//  const [Answer, setAnswer] = useState([['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]);

  const addToCorrect=(a)=>{
    if(!alphabets.correct.includes(a)){
      setAlphabets(prevAlphabets=>({...prevAlphabets,correct:[...prevAlphabets.correct,a]}))

    }
  
    
  }

  const addToPresent=(a)=>{
    setAlphabets(prevAlphabets=>({...prevAlphabets,present:[...prevAlphabets.present,a]}))
  }

  const addToWrong=(a)=>{
    setAlphabets(prevAlphabets=>({...prevAlphabets,wrong:[...prevAlphabets.wrong,a]}))
  }

  const setAnswer1=(val)=>{
    if(current.col<5){
    setAnswer(prevAnswer=>{
      let answer =[... prevAnswer];
      answer[current.row][current.col].content=val;
      setCurrent(prevCurrent=>({...prevCurrent,col:prevCurrent.col+1}))
      return answer;
    })}
  }

  const setColor=(val,i)=>{
   
    if(!current.col<5){
      


    setAnswer(prevAnswer=>{
      let answer =[... prevAnswer];
      answer[current.row][i].status=val;
      
   
      return answer;
    })}
    

  }


  
  const checkAnswer=()=>{
    let score=0;
    let currentAnswer=Answer[current.row];
    if(1===1){
      
      for(let i=0;i<5;i++){
        let P=1
        
          
          if(currentAnswer[i].content===word[i]){
         
          
            addToCorrect(currentAnswer[i].content);
            setColor("green",i)
            score=score+1;
                }else if(word.includes(currentAnswer[i].content)){
           
            addToPresent(currentAnswer[i].content)
            setColor("yellow",i)
          }else{
            addToWrong(currentAnswer[i].content)
            setColor("gray",i)
          }
    
        
    }


    if(score==5){
      
    setTimeout(()=>{
      alert("YOU WIN");
      setGameOver(true)
    },500)  
    
    }else if(current.row===4){
      alert("The correct word is "+ word)
      setGameOver(true)
    }
    
     
    
        setCurrent({col:0,row:current.row+1})
    
    }else{
      alert("enter 5 letter")
    }


  }

  const clear=()=>{
    setAnswer(prevAnswer=>{
      let answer =[... prevAnswer];
    
      setCurrent(prevCurrent=>({...prevCurrent,col:prevCurrent.col-1}));
      
      answer[current.row][current.col-1].content="";
      return answer;
    })
  }

  return (
    <div className="App">
      {console.log(word)}

{gameOver?<h3></h3>:<></>}

      <Navbar/>
<h1 className='mt-3'>Wordle 3</h1>
<p>Try it yourself and guess the word </p>
<Grid correct={alphabets.correct} wrong={alphabets.wrong} present={alphabets.present} Answer={Answer}/>
<Keyboard clear={clear} setAnswer1={setAnswer1} checkAnswer={checkAnswer} correct={alphabets.correct} wrong={alphabets.wrong} present={alphabets.present} />

    </div>
  )
}

export default App
