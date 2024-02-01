import useCounterAndLog from "../hooks/use-counter";

import Button from "../components/Button";

const CounterPage = ({ initialCount }) => {
  const { count, increment } = useCounterAndLog(initialCount);
  //render
  return (
    <div>
      <h1>count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default CounterPage;
