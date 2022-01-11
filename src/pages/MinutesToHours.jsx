import React from 'react';

function MinutesToHours() {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  return(
    <>
      <div>
        <div>
          <label htmlFor="minutes">Minutes</label>
          <input 
            value={flipped ? (amount*60) : amount} 
            id="minutes"
            placeholder="Minutes" 
            type="number"
            onChange={onChange}
            disabled={flipped === true}
          />
        </div>
        <div>
          <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : (amount/60)}
          id="hours" 
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={flipped === false}
        />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>Flip</button>
      </div>
    </>
  );
}

export default MinutesToHours;