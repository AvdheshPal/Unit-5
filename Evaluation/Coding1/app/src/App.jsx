import logo from './logo.svg';
import './App.css';
import { Form } from './componets/section1';
import { useState } from 'react';
import { Sec2 } from './componets/section2';
import { Sec3 } from './componets/section3';

function App() {
  const [data,setData] = useState()
  const [info,setInfo] = useState()
  const getdata = (e)=>{
    setData(e)
  }
  const getinfo = (e) =>{
    setInfo(e)
  }
  return (
    <div className="App">
       <Form fn={getdata} />
       <Sec2 dt={data} fun={getinfo} />
       <Sec3 e={info} />
    </div>
  );
}

export default App;
