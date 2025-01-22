import { useState } from "react"
const Questionnaire = () => {
  const [questions, setQuestions] = useState(false)
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

  function handleAnswer(answer){
    console.log(answer.target.innerText)
    if (answer.target.innerText == "Stay In"){
      setQuestions(question_map[1].additional_questions)
    } else {
      setQuestions(question_map[0].additional_questions)
    }
  }

  console.log(questions)
  return(
    <div id="center-container">
      <h1 id='question-text'>Do you want to go outside or stay in?</h1>
      <div id='question-buttons'>
        <button onClick={(e)=> {handleAnswer(e)}}>Go Out</button>
        <button onClick={(e)=> {handleAnswer(e)}}>Stay In</button>
      </div>
    </div>
  )
}

export default Questionnaire;