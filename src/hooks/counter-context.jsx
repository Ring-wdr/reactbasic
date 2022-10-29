import { createContext, useContext, useReducer } from 'react';
// import { flushSync } from 'react-dom';

const CountContext = createContext();

const reducer = (count, action) => {
  switch (action.type) {
    case 'plus':
      return count + 1;
    case 'minus':
      return count - 1;
    default:
      return count;
  }
};

export const CountProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  // const [count, ]
  const plusCount = () => {
    // flushSync(() =>
    // setCount((count) => count + 1);
    dispatch({ type: 'plus' });
    // );
  };
  const minusCount = () => {
    // flushSync(() =>
    // setCount((count) => count - 1);
    dispatch({ type: 'minus' });
    // );
  };
  return (
    <CountContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CountContext.Provider>
  );
};
export const useCount = () => useContext(CountContext);
