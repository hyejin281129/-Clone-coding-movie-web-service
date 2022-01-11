import React from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = React.useState(0);
  const onclick = () => {
    setCounter(counter + 1);
  }
  return (
    <>
    <div>
      <h3>Total click : {counter}</h3>
      <button onClick={onclick}>Click me</button>
    </div>
    </>
  );
}

export default App;