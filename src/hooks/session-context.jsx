import { createContext, useContext, useState } from 'react';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

export const SessionContext = createContext();
export const SessionProvider = ({ children }) => {
  //   const [count, setCount] = useState(0);
  const [session, setSession] = useState(SampleSession);
  //   const plusCount = () => setCount(count + 1);
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
    setSession({
      ...session,
      cart: [...session.cart, item],
    });
  };
  const removeCartItem = (itemId) => {
    // const sess = { ...session };
    // sess.cart = sess.cart.filter((item) => item.id !== itemId);
    // sess.cart = { ...sess.cart.filter((item) => item.id !== itemId) };
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
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
