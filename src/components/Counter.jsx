import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container text-center align-content-center mt-5 border border-black bg-dark">
      <h2 className='text-white'>Counter App</h2>
      <div className="display-4 my-4 text-white">{count}</div>
      <div className='d-inline'>
        <button className="btn btn-success mx-2" onClick={increment}>Increment</button>
        <button className="btn btn-danger mx-2" onClick={decrement}>Decrement</button>
        <button className="btn btn-secondary mx-2" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
