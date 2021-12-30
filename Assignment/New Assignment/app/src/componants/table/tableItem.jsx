export const Tableitem = ({itms})=>{
   if(itms){
       console.log(itms);
       return<>
       <h3>Name : {itms.user}</h3>
       <h3>Age : {itms.age}</h3>
       <h3>Address : {itms.address}</h3>
       <h3>Department : {itms.department}</h3>
       <h3>Salary : {itms.salary}</h3>
       <img src={itms.file} alt="" />
       </>
   }
   return<></>
}