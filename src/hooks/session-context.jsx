import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFetch } from './fetch-hook';

const SAMPLE_URL = '/data/sample.json';

export const cachedFetch = {};
export const SessionContext = createContext();
export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({ loginUser: {}, cart: [] });

  const data = useFetch(SAMPLE_URL);

  useEffect(() => {
    // console.log('dddddddddd>>', data);
    data && setSession(data);
  }, [data]);

  const login = useCallback((id, name) => {
    console.log('App.login!!');
    setSession({ ...session, loginUser: { id, name } });
    console.log('App.session>>>', session);
  }, []);
  const logout = () => {
    console.log('App.logout!!');
    // session.loginUser = null;
    setSession({ ...session, loginUser: null });
    console.log('App.session>>>', session);
  };
  const addCartItem = (item) => {
    session.cart.push(item);
    setSession({ ...session });
    // setSession({
    //   ...session,
    //   cart: [...session.cart, item],
    // });
  };
  const removeCartItem = (itemId) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  // useEffect(() => {
  // const data = useFetchByCache(SAMPLE_URL);
  // setSession(data);
  // }, []);

  return (
    <SessionContext.Provider
      value={{ session, login, logout, addCartItem, removeCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
