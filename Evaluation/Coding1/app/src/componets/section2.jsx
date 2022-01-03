export const Sec2 = ({dt , fun})=>{
 if(dt){

    return dt.map((e,i) =>  <h3 key={i}> {e.id}  {e.title} <button onClick={()=>{fun(e)}} >Show</button> </h3> )
     
 }
 return <></>
}