
import {Link} from 'react-router-dom'


export const Products = ()=>{
    
    const arr = [1,2,3,4,5,6,7,8,9,10]
    return arr.map((e)=> <h1><Link to={`/Products/${e}`} > Products {e} </Link></h1>)
}