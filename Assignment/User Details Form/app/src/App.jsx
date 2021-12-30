import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

import { Table } from "./componants/table/tablel"

function App() {
  return (
    <div className="App">
      <h1>The React</h1>
      <Table/>
    </div>
  );
}

export default App;
