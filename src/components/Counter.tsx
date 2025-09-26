import React, { useState, useEffect, } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    document.title = `Click: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Hai cliccato {count} volte.</p>
      <button onClick={() => setCount(count + 1)}>
        Clicca qui
      </button>
    </div>
  );

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  );
};

export default Counter;
