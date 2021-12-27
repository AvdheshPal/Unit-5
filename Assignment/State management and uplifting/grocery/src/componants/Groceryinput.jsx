import React, { useState } from "react"

export default function Child1 ({getdata}){
    const [Inp,setInp] = useState("")
    const takeinp = (e)=>{
        setInp(e.target.value)
    }
    const setinp = ()=>{
        getdata(Inp)
    }
    return <>
        <input type="text" placeholder="Enter Your Items" onChange={takeinp} />
        <button onClick={setinp}>Add Item</button>
    </>
}

