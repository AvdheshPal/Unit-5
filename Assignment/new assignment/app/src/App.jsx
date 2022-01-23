import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { Div } from './conponents/Div';
import { useState } from 'react';
import { BasicButtons } from './conponents/btn'


function App() {
  const [theme, setTheme] = useState("lite")
  console.log(theme);
  return (
    <div className="App">
      <Div theme={theme} >Button</Div>
      <button onClick={() => {
        setTheme((theme === "lite" ? "dark" : "lite"))
      }} >change</button>
      <BasicButtons />
    </div>
  );
}

export default App;
