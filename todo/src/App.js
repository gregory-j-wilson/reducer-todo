import React, {useReducer} from 'react';
import './App.css';
import List from './List'
import Form from './Form'
import {reducer, initialState} from './reducers/reducer'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <List todoList={state.todo} dispatch={dispatch}/>
      <Form dispatch={dispatch}/>
    </div>
  );
}

export default App;
