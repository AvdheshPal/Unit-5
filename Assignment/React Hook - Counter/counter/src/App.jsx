import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setcounter] = useState(0)

  function ok(e) {
    setcounter(counter + e)

  }

  function reset() {
    setcounter(0)
  }

  if (counter >= 10) {
    return <div className='App'>
      <h1>Counter is Greater than 10</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  }
  if (counter < 0) {
    return <div className='App'>
      <h1>Counter is Smaller than 0</h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  }


  function done(e) {
    setcounter(counter * e)
  }
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <div>
        <button onClick={() => ok(1)} >Count++</button>
        <button onClick={() => ok(-1)} >Count--</button>
        <button onClick={() => done(2)} >Count x2</button>
      </div>
    </div>
  );
}

export default App;
