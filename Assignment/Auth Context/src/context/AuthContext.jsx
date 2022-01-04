import React, { createContext, useState } from "react";

const AuthContext = createContext();
const AuthContextProvider = ({children})=>{
    const [isAuth,setAuth] = useState(true)

    const [Token,setToken] = useState()

    const toggleAuth = ()=>{
        setAuth(!isAuth)
    }

    const postfun = async (e)=>{
        try{
          let req = await fetch(`https://reqres.in/api/register`,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify(e),   
          })
          let result = await req.json();
          setToken(result.token)
        }
        catch(err){console.log(err);}
      }
    

    return <>
         <AuthContext.Provider value={{isAuth ,toggleAuth ,postfun,Token,setToken}}>{children}</AuthContext.Provider>
    </> 
}

export { AuthContext , AuthContextProvider }

