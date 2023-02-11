import React from "react";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import QuizList from "./components/quizs/QuizList";
import Create from "./components/create/create";
import Answer from "./components/answer/Answer";
import Edit from "./components/edit/Edit";
import './App.css'

const App = ()=>{
  return (
      <BrowserRouter>
             <div className="App">
                <div className="header">
                    <Link to={'/create'} className='btn-create'>Create</Link>
                    <Link to={'/'}className='btn-cancel'>Cancel</Link>  
                </div>  
                  <Routes>
                      <Route path="/" exact element={<QuizList />} />
                      <Route path="/create"  element={<Create/>} />
                      <Route path="/answer"  element={<Answer/>} />
                      <Route path="/edit"  element={<Edit/>} />
                  </Routes>
                  </div>
      </BrowserRouter>
      )
}

export default App;