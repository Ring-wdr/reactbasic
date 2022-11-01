import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';

export const Item = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams(); // Item.jsx
  const { session, removeCartItem } = useSession();
  const location = useLocation();
  console.log(session);
  const {
    item: { name, price },
  } = location.state;
  console.log('sssssssssssspp>>', searchParams.get('aaa'));

  return (
    <>
      <h3>Item: {id}</h3>
      <div>
        {name}: {price}
      </div>
      {/* <button onClick={() => setSearchParams({ aaa: '333' })}>
        {id ? '수정' : null}
      </button> */}

      <button onClick={() => removeCartItem(parseInt(id))}>DEL</button>
    </>
  );
};
