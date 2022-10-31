import { useEffect } from 'react';
import classNames from 'classnames';
import styles from './Child.module.css';

// 자식 컴포넌트
export const Child = ({ fn }) => {
  console.log('Child rendering!');
  useEffect(() => {
    console.log('call fn()!!!!!!');
    fn(); // fn 변경 없으면 1회만 실행!
  }, [fn]);

  // const isActive = true;
  return (
    <>
      <button className={styles['btn-bg-blue']}>combo1</button>
      <button className={classNames(styles['color-white'])}></button>
    </>
  );
};
