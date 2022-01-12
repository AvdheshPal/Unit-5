import logo from './logo.svg';
import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import {addTodo} from './Redux/Action'
import {Todos} from './componants/Todos'

function App() {
  const data = useSelector(state => state.todos)
  const dispatch = useDispatch();
  return (
    <div className="App">
     {/* <button onClick={()=>{
       dispatch(addTodo(1))
     }} >Add 1</button>
     <button>Add -1</button> */}

     <Todos/>
     
    </div>
  );
}

export default App;
