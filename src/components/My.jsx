import { useEffect, useMemo, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';
import Login from './Login';
import Profile from './Profile';

const My = () => {
  const { session, addCartItem, removeCartItem, login, logout } = useSession();
  const [subTitle, setSubTitle] = useState('');
  // const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const logOutRef = useRef();
  useEffect(() => {
    if (logOutRef.current) logOutRef.current.onclick = logout;
  }, [logout]);
  const totalPrice = useMemo(
    () => session?.cart?.reduce((s, a) => s + a.price, 0),
    [session]
  );
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      <div>
        {session.loginUser ? (
          <Profile ref={logOutRef} />
        ) : (
          <Login login={login} />
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input type='text' ref={nameRef} placeholder='name' required></input>
        <input type='text' ref={priceRef} placeholder='price' required></input>
        <button
          onClick={() => {
            addCartItem({
              // id: session.cart[session.cart.length - 1].id + 1,
              id: Math.max(...session.cart.map((item) => item.id), 0) + 1,
              name: nameRef.current.value,
              price: parseInt(priceRef.current.value),
            });
          }}
        >
          카트에 담기
        </button>
        <ul>
          {session?.cart?.map((item) => (
            <li key={item.id}>
              {item.name} ({item.price})
              <button onClick={() => removeCartItem(item.id)}>DEL</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5>소제목: {subTitle}</h5>
        <strong>Sum: {totalPrice}원</strong>
        <input type='text' onChange={(evt) => setSubTitle(evt.target.value)} />
      </div>
    </div>
  );
};

export default My;
