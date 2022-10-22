import { useEffect, useRef } from 'react';
import { useCount } from '../hooks/counter-context';
import { useSession } from '../hooks/session-context';

const Login = () => {
  const { login } = useSession();
  const { plusCount, minusCount } = useCount();
  const userIdRef = useRef();
  const userNameRef = useRef();

  useEffect(() => {
    plusCount();
    // userIdRef.current.value = '1231';
    return () => {
      minusCount();
    };
  }, []);

  const submit = (evt) => {
    evt.preventDefault();

    const { value: id } = userIdRef.current;
    const { value: name } = userNameRef.current;

    if (!id) {
      alert('id를 입력해주세요');
      return userIdRef.current.focus();
    }
    if (!name) {
      alert('이름을 입력해주세요');
      return userNameRef.current.focus();
    }
    login(parseInt(id), name);
  };

  return (
    <>
      <div>
        User ID: <input type='text' ref={userIdRef} />
      </div>
      <div>
        name: <input type='text' ref={userNameRef} />
      </div>
      <div>
        Password: <input type='password' />
      </div>
      <button onClick={submit}>Login</button>
    </>
  );
};

export default Login;
