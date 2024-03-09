import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

  const Button = ({ onClick, children }) => (
    <button
      type="button"
      className="bg-green-900 text-white/80 py-2 px-6 rounded shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
  return (
    <div className="App flex flex-col justify-center items-center my-24 gap-6">
      <div className="flex flex-col ss:flex-row justify-center items-center gap-8 mb-6">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <p className="text-xl font-semibold">Count: {count}</p>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default App;
