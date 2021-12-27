export default function Output ({list, status, id ,deletfun}){
    function ok(){
        deletfun(id)
    }
    return <>
   <div> {list} &nbsp; &nbsp;&nbsp; 
   <button onClick={ok}>delete</button>
   </div>
    </>
}