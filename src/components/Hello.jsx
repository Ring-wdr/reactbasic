import { useEffect, useState } from 'react';
import { useCount } from '../hooks/counter-context';

export const Hello = (props) => {
  // console.log("@@@@@");
  // const [nickname, setNickname] = useState("");
  const [isActive, setActive] = useState(false);
  const [badSec, setBadSec] = useState(0);
  const [goodSec, setGoodSec] = useState(0);

  const { plusCount } = useCount();

  useEffect(() => {
    setInterval(() => {
      setBadSec((pre) => pre + 1);
    }, 1000);

    const intl = setInterval(() => {
      setGoodSec((pre) => pre + 1);
    }, 1000);
    // }
    return () => clearInterval(intl);
  }, []);

  return (
    <>
      <span style={{ float: 'left', color: 'red' }}>{badSec} sec</span>
      <span style={{ float: 'right', color: 'blue' }}>{goodSec} sec</span>

      <h1 style={{ backgroundColor: 'darkgray' }}>
        Hello, {props.name}!{props.age && (props.isMale ? '군' : '양')}(
        {props.age ? props.age : 25})
      </h1>
      {props.children}
      <div>
        <p>회원등급: {isActive ? '정' : '준'}회원</p>
        <button
          onClick={() => {
            setActive(!isActive);
          }}
        >
          등급등급
        </button>
        <button onClick={plusCount}> 카운트</button>
      </div>
    </>
  );
};
Hello.defaultProps = { name: 'World', isMale: false };
