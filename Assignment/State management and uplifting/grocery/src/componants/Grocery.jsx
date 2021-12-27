import React, { useState } from "react"
import Inputpaart from '../componants/Groceryinput';
import Output from '../componants/Grocerylist'
import { nanoid } from 'nanoid'

export default function Grocery(){
    const [list,setlist] = useState([]);
    const dataget = (e)=>{
      let payload = {
          title:e,
          status:false,
          id:nanoid(7)
      }
     setlist([...list,payload])
  }
  function deletekaro(id){
    //   console.log(list[0].id);
    setlist(list.filter(l => l.id != id))
  }
  return (
      <>
      <Inputpaart getdata={dataget} />
      {list.map((e) => <Output key={e.id} list={e.title} id={e.id} status={e.status} deletfun={deletekaro} />)}
      </>
  );
}