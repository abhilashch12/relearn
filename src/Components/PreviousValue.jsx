import {useState,useEffect,useRef} from "react"
function PreviousValue(){
   const[count,setCount]=useState(0);
   const previousRef = useRef(0);
   useEffect(()=>{
    previousRef.current=count;
   },[count])

    return(
        <div>
        <p>previouscount:{previousRef.current}</p>
        <p>currentcount:{count}</p>
        <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
        </div>
    )
}
export default PreviousValue;