import { useMemo, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';
import Login from './Login';
import Profile from './Profile';

const My = ({ plusCount, minusCount }) => {
  const { session, addCartItem, removeCartItem } = useSession();
  const [subTitle, setSubTitle] = useState('');
  // const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();

  const totalPrice = useMemo(() => {
    return session.cart.reduce((s, a) => s + a.price, 0);
  }, [session]);

  const onNameChange = (e) => {
    nameRef.current = e.target.value;
  };
  const onPriceChange = (e) => {
    priceRef.current = e.target.value;
  };
  console.log('@@My>>>', session);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      <div>
        {session.loginUser ? (
          <Profile session={session} />
        ) : (
          <Login plusCount={plusCount} minusCount={minusCount} />
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type='text'
          ref={nameRef}
          onChange={onNameChange}
          placeholder='name'
        ></input>
        <input
          type='text'
          ref={priceRef}
          onChange={onPriceChange}
          placeholder='price'
        ></input>
        <button
          onClick={() => {
            addCartItem({
              id: session.cart[session.cart.length - 1].id + 1,
              name: nameRef.current,
              price: parseInt(priceRef.current),
            });
          }}
        >
          카트에 담기
        </button>
        <ul>
          {session?.cart.map((item) => (
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
