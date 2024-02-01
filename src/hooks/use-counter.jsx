import { useState, useEffect } from "react";

const useCounterAndLog = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("useEffect called", count);
  }, [count]);

  // click event handler
  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment,
  };
};

export default useCounterAndLog;
