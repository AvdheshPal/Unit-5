import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
const Product_id = () => {
    const {id} = useParams();
    const [dat,setDat] = useState()
    const getfun = async ()=>{
        try {
            let get = await fetch(`http://localhost:3004/Products/${id}`)
            let res = await get.json();
            setDat(res)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getfun()
    },[id])
    function output (dat){
        if(dat){
            return (
            <div style={{display: 'grid'}}>
                <h3 style={{color:"green"}} >
                   {dat.name}
                </h3>
                <div style={{display: 'flex', margin:'auto'}} ><h3 style={{color:"red"}} >Price &nbsp;:&nbsp;</h3><h3>{dat.price}</h3></div>
                <div style={{display: 'flex', margin:'auto'}} ><h3 style={{color:"coral"}} >category : &nbsp; </h3><h3>{dat.category}</h3></div>
                <div style={{display: 'flex', margin:'auto'}} ><h3 style={{color:"blue"}} >
                    Description &nbsp; </h3><h3>{dat.paragraph}</h3></div>
            </div>
            )
        }
    }
    // output(dat)
    return (
        <div>
            {output (dat)  }
        </div>
    )
}

export  {Product_id}
