import { createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from './fetch-hook';
// import SampleSession from '../../public/data/sample.json';
// const SampleSession = {
//   loginUser: { id: 1, name: 'Hong' },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 200, name: '파', price: 5000 },
//   ],
// };

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

  const login = (id, name) => {
    console.log('App.login!!');
    setSession({ ...session, loginUser: { id, name } });
    console.log('App.session>>>', session);
  };
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
