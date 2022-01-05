import logo from './logo.svg';
import './App.css';
import {Home} from './componats/Home'
import {About} from './componats/About'
import {Products} from './componats/products'
import {Route , Routes} from 'react-router-dom'
import {Navbar} from './componats/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/products" element={<Products />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
