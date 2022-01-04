import React, { useContext, useEffect } from "react";
import { Btn } from "./Btn";
import { Div } from "./Div";
import { Inp } from "./Inp";
import { AuthContext } from '../context/AuthContext'


const Navbar = () => {

    const {isAuth ,toggleAuth ,postfun,Token,setToken} = useContext(AuthContext);
    
    
    const logout = ()=>{
        setToken()
    }
    useEffect(()=>{
        output()
        toggleAuth()
    },[Token])
    const output = ()=>{
        return (Token) ? <Btn onClick={logout}>Logout</Btn> : <button onClick={()=>{toggleAuth()}} id="login">Login</button>
    }
    return <>
        <Div>
            <div>
                <Btn>Menu</Btn>
                <Btn>contact</Btn>
                <Btn>Blog</Btn>
            </div>
            <div>
                <Inp type={"text"} placeholder="...Search" />
                <Btn>Search</Btn>
            </div>
            <div id="last">
             {output()}
            </div>
        </Div>
    </>
}

export default Navbar;