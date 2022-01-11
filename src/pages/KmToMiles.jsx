import React from 'react';

function KmToMiles() {

  const [length, setLength] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (event) => {
    setLength(event.target.value);
  };
  const reset = () => {
    setLength(0);
  };
  const onFilp = () => {
    reset();
    setFlipped((current) => !current);
  };

  return(
    <>
      <div>
        <label htmlFor="km">Km</label>
        <input
          value={flipped ? (length / 1000) : length} 
          id="km"
          placeholder="Km" 
          type="number"
          onChange={onChange}
          disabled={flipped === true}
         />
         <br />
         <label htmlFor="miles">Miles</label>
         <input
          value={flipped ? length : (length * 1000)}
          id="miles"
          placeholder="Miles"
          type="number"
          onChange={onChange}
          disabled={flipped === false}
         />
         <br />
         <button onClick={reset}>Reset</button>
         <button onClick={onFilp}>Flip</button>
      </div>
    </>
  );
}

export default KmToMiles;