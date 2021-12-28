import { useState } from "react"

import { Form } from "../inputs"

import { Tableitem } from "./tableItem"

export const Table = ()=>{
    const [inp,setinp] = useState()
    const getdata = (e)=>{
        setinp(e)
    }
    // console.log(inp);
        return <>
        <Form el={getdata} />
        <h1>This is my table</h1>
        <Tableitem itms={inp} />
        </>
}