import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="header">
            <button className='btn-create'>Create</button>
            <button className='btn-cancel'>Cancel</button>  
        </div>   
        <div className="quiz">
            <div className="card">
                <div className="info">
                    <h1 className="cardTitle">quiz title</h1>
                    <p className="describ">quiz description</p>
                    <p className="link">youtube link : www.youtube.con</p>
                    <p className="score">Score : 2/3</p>
                </div>
                <div className="btns">
                  <button className="answer">Answer</button>
                  <button className='edit'>Edit</button>
                </div>
            </div>
            <div className="card">
                <div className="info">
                    <h1 className="cardTitle">quiz title</h1>
                    <p className="describ">quiz description</p>
                    <p className="link">youtube link : www.youtube.con</p>
                    <p className="score">Score : 2/3</p>
                </div>
                <div className="btns">
                  <button className="answer">Answer</button>
                  <button className='edit'>Edit</button>
                </div>
            </div>
            <div className="card">
                <div className="info">
                    <h1 className="cardTitle">quiz title</h1>
                    <p className="describ">quiz description</p>
                    <p className="link">youtube link : www.youtube.con</p>
                    <p className="score">Score : 2/3</p>
                </div>
                <div className="btns">
                  <button className="answer">Answer</button>
                  <button className='edit'>Edit</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
