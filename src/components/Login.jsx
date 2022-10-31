import { memo, useEffect, useRef } from 'react';
// import { useCount } from '../hooks/counter-context';
import { useSession } from '../hooks/session-context';

const Login = () => {
  // const { plusCount, minusCount } = useCount();
  const userIdRef = useRef();
  const userNameRef = useRef();

  const { login } = useSession();

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

  useEffect(() => {
    // plusCount();
    console.log('로그인해주세용');
    userIdRef.current.focus();
    return () => {
      // minusCount();
      console.log('로그인했어용');
    };
  }, []);
  // }, [plusCount, minusCount]);

  return (
    <>
      <div>
        User ID: <input type='text' ref={userIdRef} />
      </div>
      <div>
        name: <input type='text' ref={userNameRef} />
      </div>
      <button onClick={submit}>Login</button>
    </>
  );
};

export default memo(Login);
