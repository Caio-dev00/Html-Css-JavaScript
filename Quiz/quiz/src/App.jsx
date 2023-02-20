
import './App.css'
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Question from './components/Question.jsx';
import Welcome from './components/Welcome'
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    //embaralhar as perguntas
    dispatch({type: "REODER_QUESTIONS"});
  },[])
  
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
