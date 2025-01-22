import { useState } from "react";
import { useNavigate } from "react-router";

const Questionnaire = () => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState(false)
  const [number, setNumber] = useState(0)
  const [finalAnswer, setFinalAnswer] = useState([])
  const [status, setStatus] = useState(false)
  // const[answer, setAnswer] = useState(false)
  const question_map = [
    {
      answer: 'Go Out',
      additional_questions: [
        {
          question: 'Where do you want to go?',
          answers: [
            'City', 'Queens', 'Brooklyn', 'Jersey'
          ]
        },
        {
          question: 'What do you want to eat?',
          answers: [
            'Steak', 'Sushi', 'Burgers', 'Italian', 'Thai'
          ]
        },
        {
          question: 'Any activities?',
          answers: [
            'Museum', 'Movies', 'Sight-Seeing', 'Dessert-Hopping'
          ]
        },
        {
          question: 'How long would you like to hang out?',
          answers: [
            'Couple of hours', 'Forever', '30 minutes'
          ]
        },
      ]
    },
    {
      answer: 'Stay In',
      additional_questions: [
        {
          question: 'What would you like to do?',
          answers: [
            'Movie', 'Cook', 'Spa Night', 'Games'
          ]
        },
        {
          question: 'What do you want to eat?',
          answers: [
            'Steak', 'Sushi', 'Burgers', 'Italian', 'Thai'
          ]
        }
      ]
    }

  ]


  let final_answer = []

  function handleAnswer(answer){
    console.log(answer.target.innerText)
    if (answer.target.innerText == "Stay In"){
      setQuestions(question_map[1].additional_questions)
    } else {
      setQuestions(question_map[0].additional_questions)
    }
  }

  function handleNewAnswer(answer, list){
    console.log(list, list.length)
    setFinalAnswer([...finalAnswer, {
      question: questions[number].question,
      answer: answer.target.innerText
    }])
    if (number < list.length-1){
      setNumber(number+1)
    }
    else {
      setStatus(true)
    }
  }

  function handleRestart(){
    setStatus(false)
    setQuestions(false)
    setNumber(0)
    setFinalAnswer([])
  }

  function handleContinue(){
    navigate('/complete', {state : finalAnswer})
  }

  console.log(finalAnswer)

  // console.log(questions)
  return(
    <div id="center-container">
      {questions ? 
      <div>
        {status ? 
        <div>
          <h1 id="finally-text">Complete</h1>
          <p>Thank you for filling out my questionnaire.</p>
          <p>Your results are as follows:</p>
          <div id='final-results'>
            {
              finalAnswer.map((result)=> {
                return(
                  <ul>{result.question}: {result.answer}</ul>
                )
              })
            }
          </div>
          <p>If you'd like to change your answers, please <span id='link' onClick={()=> handleRestart()}>click here</span></p>
            <p>Otherwise, please <span id='continue-link' onClick={()=> handleContinue()}>continue</span>.</p>
        </div>
        : 
        <div>
          <h1 id='question-text'>{questions[number].question}</h1>
          <div id='question-buttons'>
            {questions[number].answers.map((answer)=> {
              return(
                <button onClick={(e)=> {handleNewAnswer(e, questions)}}>{answer}</button>
              )
            })}
            
            
          </div>
        </div>}
      </div>
      : 
      <div>
        <h1 id='question-text'>Do you want to go outside or stay in?</h1>
        <div id='question-buttons'>
          <button onClick={(e)=> {handleAnswer(e)}}>Go Out</button>
          <button onClick={(e)=> {handleAnswer(e)}}>Stay In</button>
        </div>
      </div>
      }
    </div>
  )
}

export default Questionnaire;