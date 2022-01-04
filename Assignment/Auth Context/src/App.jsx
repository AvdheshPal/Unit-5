import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './comopnent/navbar';
import { AuthContext } from './context/AuthContext'

function App() {
  const [data, setData] = useState({})
  const { isAuth, toggleAuth, postfun, Token, setToken } = useContext(AuthContext);

  const handleinp = (e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value,
    })

  }
  useEffect(()=>{
    showform()
  },[isAuth])
  const btnfun = () => {
    postfun(data)
  }
  
  const showform = ()=>{
    if(isAuth === true){
      return <div id='form' >
      <h4>Login Form</h4>
      <input type="text" placeholder='E-mail' onChange={handleinp} name='email' />
      <input type="text" placeholder='Password' onChange={handleinp} name='password' />
      <button onClick={() => { btnfun() }} id='Sub' >Submit</button>
    </div>
    }else if(Token === undefined){
      return <h1>Please login first</h1>
    }
  }

  return (

    <div className="App">

      <Navbar />
      <div id='main'>
        {showform()}
        <div id='detail' >
        </div>
      </div>
        {(Token) ? <div>
        <h1>Login successfully</h1>
          <h1> Your Token is : {Token}</h1> 
        </div> : <></>}
    </div>
  );
}

export default App;
