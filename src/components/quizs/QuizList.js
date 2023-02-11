import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { quizesData } from './../../data/quizes'
import './quizlist.css';

const QuizList = () => {

    const [quizes , setQuizes ] = useState(quizesData)


  return (
    <div className="App"> 
        <div className="quiz">
              {quizes.map((quiz,id)=>(
                  <div className="card">
                      <div className="info">
                          <h1 className="cardTitle">{quiz.title}</h1>
                          <p className="describ">{quiz.description}</p>
                          <p className="link">{quiz.url}</p>
                          <p className="score">Score : {quiz.score}</p>
                      </div>
                      <div className="btns">
                        <Link to={'/answer'} className="answer">Answer</Link>
                        <Link to={'/edit'}className='edit'>Edit</Link>
                      </div>
                  </div>
              ))}
        </div>
    </div>
  );
}

export default QuizList;
