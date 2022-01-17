import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Dashboard } from './components/Dashboard'
import {Login} from './components/Login'
import {Home} from './components/Home'
import {PrivateRoute} from './PrivateRoute/PrivateRoute'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/home" element={
        <PrivateRoute>
          <Home/>
        </PrivateRoute>
        } ></Route>
      </Routes>
    </div>
  );
}

export default App;
