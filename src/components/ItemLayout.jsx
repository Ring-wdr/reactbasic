import { useRef } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/session-context';

export const ItemLayout = () => {
  const { session } = useSession();
  const nav = useNavigate();
  const searchRef = useRef();
  const onSearch = (e) => {
    e.preventDefault();
    const item = session.cart.filter(
      (it) => it.name === searchRef.current.value
    );

    item.length === 0
      ? nav('/items')
      : nav(`/items/${item[0].id}`, { state: { item } });
  };

  return (
    <>
      <h2>ITEMS</h2>
      <Link
        to='/items/100'
        state={{ item: session.cart.filter((it) => it.id === 100) }}
      >
        Item11
      </Link>
      |
      <Link
        to='/items/101'
        state={{ item: session.cart.filter((it) => it.id === 101) }}
      >
        Item22
      </Link>
      <form onSubmit={onSearch}>
        <input type='text' ref={searchRef}></input>
        <button>검색</button>
      </form>
      <Outlet context={{ name: 'Hong' }} />
    </>
  );
};
