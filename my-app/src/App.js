import { motion } from "framer-motion"
import { useState } from 'react';
import Home from './components/Home';
import Question from "./components/Question";
import { HashRouter, Routes, Route } from 'react-router-dom';
import SaidYes from "./components/SaidYes";
import Questionnaire from "./components/Questionnaire";
import Complete from "./components/Complete";
function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/said-yes' element={<SaidYes/>}/>
          <Route path='/questionnaire' element={<Questionnaire/>}/>
          <Route path='/complete' element={<Complete/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
