// import React, { useEffect, useRef, useState } from "react"



// export const Timer = (start, end , flag) => {
    
//     const [tim, setTim] = useState(0)

//     setTim(start)

//     const flags = useRef(flag)

//         let id = setInterval(() => {
//             setTim((p) => {
//                 if (p === end) {
//                     clearInterval(id)
//                     return p
//                 }
//                 return p - 1
//             })
//         }, 1000)

   
//     console.log(tim);
//     return <>
//     </>
// }