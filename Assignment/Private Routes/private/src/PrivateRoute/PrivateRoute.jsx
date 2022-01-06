import React,{useContext} from 'react'
import {Navigate,Route} from 'react-router-dom'
import { AuthContext } from '../Context/Authcontext';


export const PrivateRoute = ({path,element}) => {
    const {token} = useContext(AuthContext);
   if(token){
       return <Navigate to={"/login"}/>
   }
  return <Route path={path}  >{element}</Route>
}
