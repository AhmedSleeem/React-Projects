import React from 'react';

import './App.css';

function App() {
  const [counter,setCounter] = React.useState(0);
  const increase = ()=>{
    setCounter(preValue =>preValue + 1)
  }
  const decrease = ()=>{
    setCounter(preValue =>{
      if(preValue == 0 )return 0;
      return preValue - 1; 
    })
  }
  return (
    <div className="counter">
    <button className="counter--minus" onClick={decrease}>–</button>
    <div className="counter--count">
        <h1>{counter}</h1>
    </div>
    <button className="counter--plus" onClick={increase}>+</button>
</div>
  );
}

export default App;
