import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  // useState,
} from 'react';
import { useFetch } from './fetch-hook';

const SAMPLE_URL = '/data/sample.json';

const reducer = (session, action) => {
  switch (action.type) {
    case 'set':
      console.log(action.payload);
      return { ...action.payload };
    case 'login':
      return {
        ...session,
        loginUser: action.payload,
      };
    case 'logout':
      return { ...session, loginUser: null };
    case 'addCartItem':
      session.cart.push(action.payload.item);
      return { ...session };
    case 'removeCartItem':
      return {
        ...session,
        cart: session.cart.filter((item) => item.id !== action.payload.itemId),
      };
    default:
      return session;
  }
};

export const cachedFetch = {};
export const SessionContext = createContext();
export const SessionProvider = ({ children }) => {
  // const [session, setSession] = useState({ loginUser: {}, cart: [] });
  const [session, dispatch] = useReducer(reducer, {});

  const data = useFetch(SAMPLE_URL);

  useEffect(() => {
    data && dispatch({ type: 'set', payload: data });
  }, [data]);

  const login = (id, name) => {
    console.log('App.login!!');
    dispatch({ type: 'login', payload: { id, name } });
    console.log('App.session>>>', session);
  };
  const logout = () => {
    console.log('App.logout!!');
    dispatch({ type: 'logout' });
    console.log('App.session>>>', session);
  };
  const addCartItem = (item) => {
    dispatch({ type: 'addCartItem', payload: { item } });
  };
  const removeCartItem = (itemId) => {
    dispatch({ type: 'removeCartItem', payload: { itemId } });
  };

  return (
    <SessionContext.Provider
      value={{ session, login, logout, addCartItem, removeCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
