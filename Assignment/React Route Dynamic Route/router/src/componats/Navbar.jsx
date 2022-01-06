import { Link } from "react-router-dom"
import './navbar.css'

export const Navbar = ()=>{
    return <div className="nav">
        <Link to="/" > Home </Link>
        <Link to="/about" > About </Link>
        <Link to="/products" > Products </Link>
    </div>
}