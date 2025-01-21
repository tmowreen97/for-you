import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [yes, setYes]= useState(false)
  const [no_answer, setNoAnswer] = useState(0)
  const no_answers = ['No', 'Try Again', 'Keep Trying','Is Your Mouse Not Working?']

  const nav = useNavigate();
  useEffect(()=>{ 
      if (yes) {
        setTimeout(()=> nav('/said-yes'),4000)
      };
    },[yes])

  function handleNo(){
    if (no_answer < no_answers.length-1) {
      setNoAnswer(no_answer+1)
      console.log(no_answer)
    } else {
      setNoAnswer(10)

    }
  }

  function handleYes(){
    setYes(true)
    setNoAnswer(10)
  }

  // function handleAnswer(){
  //   if (answer){
  //     'he said yes'
  //   }
  // }
  
  return(
    // <div id='question-container'>
    //   <h1 id="the-question" className="typewriter">Will you be my Valentine?...  </h1>
    //   <div id='question-buttons'>
    //     {yes ? 
    //     <img 
    //       id="yes-img"
    //       src="/imgs/love-you.gif"
    //     /> : <button onClick={()=> {handleYes()}}>Yes</button>}
    //     { no_answer>=4 ? '' : <button onClick={()=>handleNo()}>{no_answers[no_answer]}</button>}
    //   </div>
    // </div>

    <div id='question-container'>
    {
    yes ? 
    <img 
        id="yes-img"
        src="/imgs/love-you.gif"
      />
    :
    <div>
      <h1 id="the-question" className="typewriter">Will you be my Valentine?...  </h1>
    <div id='question-buttons'>
      <button onClick={()=> {handleYes()}}>Yes</button>
      { no_answer>=4 ? '' : <button onClick={()=>handleNo()}>{no_answers[no_answer]}</button>}
    </div>
    </div>}
  </div>
  )
}

export default Question;