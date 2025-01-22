import '../App.css'
import { motion } from "framer-motion"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import closed from '../imgs/closed-envelope.gif';
import open from '../imgs/open-envelope.gif'

const Home = () => {
  const [envelope, setEnvelope] = useState(false)
  const nav = useNavigate();
  useEffect(()=>{ 
      if (envelope) {
        setTimeout(()=> nav('question'),4000)
      };
    },[envelope])
  return(
    <div className="App test-cursor">
        {envelope ? '' : <h2 id='click-text'>Click Here</h2>}
        <div id='envelope-img'>
          {
            envelope ? 
            <motion.div
            animate={{ scale: [1,1.25,1.5,1.75], opacity:[1,0.95,0.75,0.5,0.25, 0], transition: { delay: 2, duration: 2 }}}
            
            >
            <img 
              width={'550px'}
              height={'500px'}
              alt='open-envelope'
              src={open}
            /> 
            </motion.div>
            :
            <img 
              onClick={()=>setEnvelope(true)}
              id = 'closed-envelope'
              alt='closed-envelope'
              src={closed}
            />
          }        
        </div>
    </div>
  )
}
export default Home;