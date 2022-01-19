import logo from './logo.svg';
import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import { useState } from 'react';
import {addTodo} from './Redux/Action'
import {Todos} from './componants/Todos'
import {Profile} from './componants/Profile'
import {Glogin,Glogout} from './componants/GoogleOauth'


function App() {
  const data = useSelector(state => state.todos)
  const dispatch = useDispatch();

  

  return (
    <div className="App">
      <h1 className="font-bold text-4xl mb-6 text-indigo-600" >This is React App with Tailwind</h1>
     {/* <button onClick={()=>{
       dispatch(addTodo(1))
     }} >Add 1</button>
     <button>Add -1</button> */}
     <Todos/>
     <Glogin/>
     <Glogout/>
     <Profile/>
    </div>
  );
}

export default App;
