// import logo from "./logo.svg";
import './App.css';
import { useState } from 'react';
import { Hello } from './components/Hello';
// import { flushSync } from 'react-dom';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((count) => count + 1);
  };
  const minusCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Count: {count}</h2>
        <SessionProvider>
          <My plusCount={plusCount} minusCount={minusCount} />
        </SessionProvider>
        <Hello isMale={true} plusCount={plusCount} />
      </header>
    </div>
  );
}

export default App;
