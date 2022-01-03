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
      <h1>Recipe Tracking Application</h1>
      <div className='upper'>
       <Form fn={getdata} />
       <div className='sec2'><Sec2 dt={data} fun={getinfo} /></div>
      </div>
      <h1>Information</h1>
       <div className='sec3' ><Sec3 e={info} /></div>
    </div>
  );
}

export default App;
