import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
 
  const [tim, setTim] = useState(0)
  const [flag, setflag] = useState(false)
  const [inp, setinp] = useState(0)
  useEffect(() => {

    let id = setInterval(() => {
      setTim((p) => {
        if (p === 0) {
          clearInterval(id)
          return p
        }
        return p - 1
      })
    }, 1000)

  }, [flag])

  const startfun = (e) => {
    setTim(inp)
    setflag(true)
  }

  const stopfun = (e) => {
    setTim(0)
    setflag(false)
  }

  const handleinp = (e) => {
    setinp(e.target.value)
  }


  return (
    <div className="App">
      <h1>Counter :{tim} </h1>
      <button onClick={startfun} >start</button>
      <button onClick={stopfun} >stop</button>
      <input type="number" onChange={handleinp} />
    </div>
  );
}

export default App;
