import React, { useState ,useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
    const Navigate = useNavigate();
    const {token ,setToken} = useContext(AuthContext)
    const [text,setText] = useState({})
    const handleinp = (e) => {
        const {name , value} = e.target
        setText({
            ...text,
            [name]:value
        }
        )
    }
    const getfun = async ()=>{
        try{ 
            let req = await fetch(`https://reqres.in/api/login`,{
            method: "POST",
            body: JSON.stringify(text),
            headers: {
                "Content-Type": "application/json"
            }
            });
            
            let res = await req.json();
            if(res.token){
                setToken(res.token)
                Navigate(-1)
            }
            else{
                alert('Wrong Email or Password')
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            <h1>You are not login</h1>
            <h2>Please Login first</h2>
            <input type="text" name="email" placeholder="Email" onChange={handleinp}/>
            <input type="text" name="password" placeholder="Password" onChange={handleinp}/>
            <button onClick={() =>{getfun()}}>Login</button>
        </div>
    )
}
