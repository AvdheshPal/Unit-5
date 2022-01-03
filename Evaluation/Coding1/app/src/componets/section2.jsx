export const Sec2 = ({dt , fun})=>{
 if(dt){

    return dt.map((e,i) =>  <div key={i}> {e.title} <button onClick={()=>{fun(e)}} >Show</button> </div> )
     
 }
 return <></>
}