
import './App.css';
import { increment, decrement, login } from './actions';
import {useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer);
  const loggedIn = useSelector(state => state.loggedReducer);

  return (
    <div className="App">
      <h1>This here is a counter: </h1>
      <button onClick={() => dispatch(login())}>{loggedIn? "Log out" : "Log in"}</button>
      <p>The count is : {counter} </p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br/>
      {loggedIn ? "You are logged in." :"Unauthorized"}
    </div>
  );
}

export default App;
