import { useEffect, useRef } from 'react';
import { useSession } from '../hooks/session-context';

const Login = ({ plusCount, minusCount }) => {
  const { login } = useSession();
  const userIdRef = useRef();
  const userNameRef = useRef();

  useEffect(() => {
    plusCount();
    return () => {
      minusCount();
    };
  }, []);

  const onChangeId = (e) => {
    userIdRef.current = e.target.value;
  };
  const onChangeName = (e) => {
    userNameRef.current = e.target.value;
  };

  return (
    <>
      <div onChange={onChangeId}>
        User ID: <input type='text' />
      </div>
      <div onChange={onChangeName}>
        name: <input type='text' />
      </div>
      <div>
        Password: <input type='password' />
      </div>
      <button
        onClick={() => {
          if (!userIdRef.current) {
            alert('id를 입력해주세요');
            return;
          }
          if (!userNameRef.current) {
            alert('이름을 입력해주세요');
            return;
          }
          login(parseInt(userIdRef.current), userNameRef.current);
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
