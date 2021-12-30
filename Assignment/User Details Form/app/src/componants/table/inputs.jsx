import { useRef, useState } from "react"

export const Form = ()=>{
    const [data,setdata] = useState({})

    const file = useRef(null)

    const handleinp = (e)=>{
       const {name , value} = e.target
        setdata({
            ...data,
            [name]: value,
        })
    }

    const p = (e)=>{
        e.preventDefault();
         async function postfun (){
            try{
                 await fetch(`http://localhost:3004/posts`,{
                    method:"POST",
                    body:JSON.stringify(data),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
            }
            catch(err){console.log(err);}
         }
         postfun ();

         async function getfun(){
             try{
                 let get = await fetch(`http://localhost:3004/posts`)
                 let result = await get.json()
                 console.log(result);
             }
             catch(galati){console.log(galati);}
         }
         getfun()
    }
    return <>
    <div className="form">
   <form onSubmit={p} >
   <input type="text" onChange={handleinp} name="user" placeholder="Username" />
    <input type="number" onChange={handleinp} name="age" placeholder="Age" />
    <input type="text" onChange={handleinp} name="address" placeholder="Address" />
    <input type="text" onChange={handleinp} name="department" placeholder="Department" />
    <input type="number" onChange={handleinp} name="salary" placeholder="Salary" />
    <label htmlFor="married" >Marital Status</label>
    <input type="checkbox" name="married" />
    <input type="file" onChange={handleinp} ref={file} name="file" />
    <input type="submit" />
   </form>
   </div>
    </>
}