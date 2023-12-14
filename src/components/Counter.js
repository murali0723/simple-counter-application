// src/components/Counter.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  text-align: center;
  margin: 50px;
`;

const CountDisplay = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 1rem;
  margin: 0 10px;
  padding: 8px 16px;
  cursor: pointer;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <CounterWrapper>
      <CountDisplay>{count}</CountDisplay>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={handleReset}>Reset</Button>
    </CounterWrapper>
  );
};

export default Counter;
