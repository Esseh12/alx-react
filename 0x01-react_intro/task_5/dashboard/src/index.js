import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment} className="button increment">Increment</button>
      <button onClick={decrement} className="button decrement">Decrement</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('app'));
