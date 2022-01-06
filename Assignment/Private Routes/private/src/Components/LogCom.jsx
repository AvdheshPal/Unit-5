import React,{useState,useContext,useEffect} from 'react'
import { AuthContext } from '../Context/Authcontext'

export const LogCom = () => {
    const {token , setToken} = useContext(AuthContext)
    const [data,setData] = useState({})

    const handleinp = (e) =>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }


    const postfun = async (e)=>{
        e.preventDefault();
        try { 
            let req = await fetch(`https://reqres.in/api/register`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
            });
        let res = await req.json();
        setToken(res.token)
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={postfun}>
                <input type="text" name="email" onChange={handleinp} placeholder="Email" />
                <input type="password" name="password" onChange={handleinp} placeholder="Password" />
                <input type="submit" />
            </form>
        </div>
    )
}
