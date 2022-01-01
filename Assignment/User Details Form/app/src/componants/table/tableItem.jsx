export const Tableitem = ({itm})=>{
   if(itm){
       
       return itm.map((e)=>
       <div id="ddiv" >
           <div> Name : {e.user}</div>
           <div> Age : {e.age}</div>
           <div> Address : {e.address}</div>
           <div> Deparment : {e.department}</div>
           <div> Photo : {e.file}</div>
           <div> Salary : {e.salary}</div>
       </div>
       )

   }
   return<></>
}