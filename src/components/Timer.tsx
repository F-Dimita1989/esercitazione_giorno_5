import React, { useEffect, useRef, useState } from "react";

const Timer: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => setCount(c => c + 1), 1000);
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <div>Timer: {count}</div>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
};

export default Timer;
