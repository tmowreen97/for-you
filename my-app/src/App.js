import { motion } from "framer-motion"
import { useState } from 'react';
import Home from './components/Home';
import Question from "./components/Question";
import { HashRouter, Routes, Route } from 'react-router-dom';
import SaidYes from "./components/SaidYes";
function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/said-yes' element={<SaidYes/>}/>
        </Routes>
      </HashRouter>
    </>

    // <div className="App">
    //     {envelope ? '' : <h2>Click Here</h2>}
    //     <div id='envelope-img'>
    //       {
    //         envelope ? 
    //         <motion.div
    //         animate={{ scale: [1,1.25,1.5,1.75], opacity:[1,0.95,0.75,0.5,0.25, 0], transition: { delay: 2, duration: 2 }}}
            
    //         >
    //         <img 
    //           width={'550px'}
    //           height={'500px'}
    //           src='/imgs/open-envelope.gif'
    //         /> 
    //         </motion.div>
    //         :
    //         <img 
    //           onClick={()=>setEnvelope(true)}
    //           id = 'closed-envelope'
    //           src='/imgs/closed-envelope.gif'
    //         />
    //       }        
    //     </div>
    // </div>
  );
}

export default App;
