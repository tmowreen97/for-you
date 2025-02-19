import { useLocation } from "react-router-dom";
import spongebob from '../imgs/spongebob-valentine.gif'


const Complete = () => {
  const {state} = useLocation()
  const finalAnswer = state

  console.log(finalAnswer)
  return(
    <div id="center-container">
      {/* <img src="/imgs/spongebob-valentine.gif"/> */}
      <h1 id='finally-text'>Complete!</h1>
      <img alt='spongebob-hearts' src={spongebob}/>
      <p>Thank you for your participation!</p>
      <p>Your Valentine will be notified.</p>
    </div>
  )
}

export default Complete;