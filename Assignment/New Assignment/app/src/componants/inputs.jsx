import { useRef, useState } from "react"

export const Form = ({el})=>{
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
         el(data)
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