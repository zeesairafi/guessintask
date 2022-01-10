
import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  
  
  const addCounter = () => {
    if(counter<=100)
    setCounter(counter+1)
    console.log(counter);
  }
  const decCounter = () => {
    if(counter>=0)
setCounter(counter-1)
  }
  return (
    <body className="container level-3">
      
    <div className="App">
      <div className="container">
      <div class = "content">
        <h1>The Ancient OctOwl</h1>
         
         <h1> stris beneth the tumultuous waves, thinking of a number that will end the world</h1>
        
        
        <h2>Find the secret number amd use it to banish the OctOwl</h2>
      </div>
      <h2 >Your invocation is too strong.</h2>
      <h2 >That was so far off it banished some other unrelated elder beast!</h2>
      </div>
      <div newClass="content guess-controls row">
        
        <div class ="content">
        <input type="number" id="victim-guess" className="form-control input-lg col-xs-12" placeholder="1-100" />
        <button onClick={()=>addCounter(counter+1)}>+</button> {counter}
<button onClick={()=>decCounter()}>-</button>
       
        <div><button className="btn btn-lg btn-info col-xs-12" >BANISH</button></div>
      
      </div>
      </div>
     <div newClass = "content button-controls">
     <div class ="content">
       <button  className="btn btn-lg btn-default">Seek Wisdom</button>
       <button  className="btn btn-lg btn-default">Seek Wisdom</button>
     </div>
     </div>
     
     <div class ="content"  >
     <h2>The oracle has chosen the following numbers:</h2>
     <ul id="hint-choice" style={{display: "inline-block"}}></ul>
     <li >31</li>
     <li>54</li>
     <li>16</li>
     <li>17</li>
     </div>
        <h2 id="counter">3 More attempts until the owl awakenes</h2>
    </div>
    
    </body>
    
  );
}


export default App;
//<span>1-100</span>
//<button onClick={()=>addCounter(counter+1)}>+</button> {counter}
//<button onClick={()=>decCounter()}>-</button>