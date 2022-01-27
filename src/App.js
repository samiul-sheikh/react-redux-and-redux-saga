import './App.css';
import { useEffect } from "react";
import { getUsers } from "./action";
import { useSelector, useDispatch } from "react-redux";


function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      <h2>Welcome To Redux Saga</h2>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => (
        <h3 key={i}>{user.name}</h3>
      ))}
    </div>
  );
}

export default App;
