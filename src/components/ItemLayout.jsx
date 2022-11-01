import { useRef } from 'react';
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';

export const ItemLayout = () => {
  const { session } = useSession();
  // const [searchStr, setSearchstr] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchStr = searchParams.get('searchStr');

  const search = (evt) => {
    // setSearchstr(evt.target.value);
    setSearchParams({ searchStr: evt.target.value });
  };
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
      <input type='text' onChange={search} value={searchStr} />
      <ul>
        {session?.cart?.map((item) => (
          <li key={item.id}>
            <Link
              to={`/items/${item.id}?searchStr=${searchStr}`}
              state={{ item }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Link to='/items'>
          <small>추가하기({session?.cart?.length})</small>
        </Link>
      </div>
      <form onSubmit={onSearch}>
        <input type='text' ref={searchRef}></input>
        <button>검색</button>
      </form>
      <Outlet context={{ name: 'Hong' }} />
    </>
  );
};
