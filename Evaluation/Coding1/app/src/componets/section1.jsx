import React , {useEffect, useState}  from "react"

export const Form = ({fn})=>{
    const [data, setdata] = useState({})
    const handleinp = (e) => {
        const { name, value } = e.target
        setdata({
            ...data,
            [name]: value,
        })
    }
    async function postfun (e) {
        e.preventDefault();
        try{
            await fetch(`http://localhost:3004/posts`,{
                method:"POST",
                body: JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json"
                }
            })
        }
        catch(e){
            console.log(e);
        }
        getfun()
    } 
    useEffect(()=>{
        getfun()
    },[])
    
    async function getfun(){
        try{  

            let res = await fetch(`http://localhost:3004/posts`)

            let resul = await res.json();

            fn(resul);

        }
        catch(err){
            console.log(err);
        }
    }
    
    return <div>
        <form onSubmit={postfun} >
            <input type="text" name="title" onChange={handleinp} placeholder="Title" />
            <input type="text" name="ingredients" onChange={handleinp} placeholder="Ingredients" />
            <input type="text" name="time" onChange={handleinp} placeholder="time" />
            <input type="text" name="image" onChange={handleinp} placeholder="Image link" />
            <input type="text" name="instructions" onChange={handleinp} placeholder="Instructions" />
            <input type="submit"  />
        </form>
    </div>
}
