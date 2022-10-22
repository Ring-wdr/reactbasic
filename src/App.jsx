// import logo from "./logo.svg";
import './App.css';
import { Hello } from './components/Hello';
// import { flushSync } from 'react-dom';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';
import { useCount } from './hooks/counter-context';

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useCount();

  // logOutRef.current.onclick = () => {
  //   console.log('dd');
  // };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Count: {count}</h2>
        <SessionProvider>
          <My />
        </SessionProvider>
        <Hello isMale={true} />
      </header>
    </div>
  );
}

export default App;
