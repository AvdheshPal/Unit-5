import React, {useState} from 'react'

export const Jobs = () => {
    const [data,setData] = useState([
        {
            "id":1,
            "company":"Google",
            "title":"Developer",
            "salary":"10 LPA",
            "des":"react redux javascript",
            "location":"Delhi",
            "type":"remote"
     },
     {
        "id":2,
        "company":"yahoo",
        "title":"Developer",
        "salary":"12 LPA",
        "des":"react redux javascript",
        "location":"kolkata",
        "type":"remote"
   },
   {
    "id":3,
    "company":"paytm",
    "title":"Developer",
    "salary":"11 LPA",
    "des":"react redux javascript",
    "location":"allahabad",
    "type":"Work from home"
}
    ]);

    function dlete (e){
        setData(
            data.filter(el => el.id !== e)
        )
        alert("Applied Successfully")
    }
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            {data.map((e,i) =><div key={i} style={{display:'grid',width:'400px',justifyContent: 'center',border: '1px solid'}}  >
               <div>
               <h3>Company : {e.company}</h3>
                <div>Title : {e.title}</div>
                <div>Salary : {e.salary}</div>
                <div>Description : {e.des}</div>
                <div>location : {e.location}</div>
                <div>type : {e.type}</div>
               </div>
               <div>
                   <button onClick={() =>{dlete(e.id)}}>Apply</button>
               </div>
                
            </div>)}

        </div>
    )
}
