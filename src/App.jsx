   import React from 'react';
import './App.css';
import MinutesToHours from './pages/MinutesToHours';
import KmToMiles from './pages/KmToMiles';


function App() {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <>
      <div>
        <h1>Super Converter</h1>
        <select value={index} onChange={onSelect}>
          <option value="xx">Select your unites</option>
          <option value="0">Minute & Hours</option>
          <option value="1">Km & Miles</option>
        </select>
      </div>
      <hr />
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </>
  );
}

export default App;