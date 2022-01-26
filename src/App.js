import './App.css';
import { useEffect } from "react";
import { cartIncrement, cartDecrement, getUsers } from "./action";
import { useSelector, useDispatch } from "react-redux";


function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  },[]);

  return (
    <div className="App">
      <h2>Redux Saga</h2>
      {users.map(user=>console.log(user.name))}
    </div>
  );
}

export default App;
