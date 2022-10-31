// import logo from "./logo.svg";
import './App.css';
import { Hello } from './components/Hello';
// import { flushSync } from 'react-dom';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';
import { Nav } from './Nav';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Items } from './components/Items';
import { Item } from './components/Item';
import { NotFound } from './NotFound';
import Login from './components/Login';
import { ItemLayout } from './components/ItemLayout';

function App() {
  return (
    <div className='App'>
      <SessionProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my' element={<My />} />
          <Route path='/login' element={<Login />} />
          <Route path='/items' element={<ItemLayout />}>
            <Route index element={<Items />} />
            <Route path=':id' element={<Item />} />
          </Route>
          <Route path='/hello' element={<Hello />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SessionProvider>
    </div>
  );
}

export default App;
