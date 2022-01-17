import React,{useContext} from 'react'
import {Navigate,Route} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';


export const PrivateRoute = ({children}) => {
    const {token} = useContext(AuthContext);
   if(!token){
       return <Navigate to={"/login"}/>
   }
  return children;
}
