import logo from './logo.svg';
import './App.css';
import {Home} from './componats/Home'
import {About} from './componats/About'
import {Products} from './componats/products'
import {Route , Routes} from 'react-router-dom'
import {Navbar} from './componats/Navbar'
import {Product_id} from './componats/product_id'
import {Err} from './componats/err'

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
      <Route path="*" element={<Err/>}></Route>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/products" element={<Products />} ></Route>
        <Route path="/Products/:id" element={<Product_id />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
