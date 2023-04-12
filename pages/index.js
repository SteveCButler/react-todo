// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import TodoForm from '../components/todoForm';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const user = { displayName: 'Steve' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1 className="mb-4">{user.displayName}&apos;s Todo List </h1>
      <TodoForm />
    </div>
  );
}

export default Home;
