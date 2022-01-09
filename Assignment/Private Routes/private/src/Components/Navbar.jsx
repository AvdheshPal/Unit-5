import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div style={{display:'flex',justifyContent: 'space-around', height:'50px', backgroundColor:'#ffb3b3', alignItems: 'center'}}>
            <Link to={"/"} style={{textDecoration: 'none'}} ><h1>Home</h1></Link>
            <Link to={"/dashboard"} style={{textDecoration: 'none'}} ><h1>Dashboard</h1></Link>
            <Link to={"/login"} style={{textDecoration: 'none'}} ><h1>Login</h1></Link>
        </div>
    )
}
