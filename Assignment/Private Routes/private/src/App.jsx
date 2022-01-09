import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar'
import { Home } from './Pages/home'
import { Dashboard } from './Pages/dashboard'
import { Setting } from './Pages/setting'
import { Login } from './Pages/login'
import { PrivateRoute } from './PrivateRoute/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} ></Route>
        <Route path="/dashboard/settings" element={<PrivateRoute><Setting/></PrivateRoute>} ></Route>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
