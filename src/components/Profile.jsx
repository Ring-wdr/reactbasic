import { forwardRef } from 'react';
import { useSession } from '../hooks/session-context';

const Profile = forwardRef((props, ref) => {
  const { session } = useSession();
  return (
    <>
      <div>User ID: {session.loginUser?.name}</div>
      <button ref={ref}>Logout</button>
      {/* <button onClick={logout}>Logout</button> */}
    </>
  );
});

export default Profile;
