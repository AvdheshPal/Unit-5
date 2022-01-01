import { useState } from "react"

import { Form } from "../table/Form"

import { Tableitem } from "./tableItem"

export const Table = ()=>{
    const [inp,setinp] = useState()
    const getdata = (e)=>{
        setinp(e)
    }
        return <>
        <Form el={getdata} />
        <h1>Here is your User id cards</h1>
        <div id="table" ><Tableitem itm={inp}/></div>
        </>
}