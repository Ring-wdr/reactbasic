import { useSession } from '../hooks/session-context';

const Profile = () => {
  const { session, logout } = useSession();
  return (
    <>
      <div>User ID: {session.loginUser?.name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Profile;
