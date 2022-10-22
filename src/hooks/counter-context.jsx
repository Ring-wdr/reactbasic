import { useState, createContext, useContext } from 'react';
import { flushSync } from 'react-dom';

const CountContext = createContext();
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    flushSync(() => {
      setCount((count) => count + 1);
    });
  };
  const minusCount = () => {
    flushSync(() => {
      setCount((count) => count - 1);
    });
  };
  return (
    <CountContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CountContext.Provider>
  );
};
export const useCount = () => useContext(CountContext);
