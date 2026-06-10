import {useState,useCallback}from "react";
import ChildMemo from "./ChildMemo";
function ParentMemo(){
    const[count,setCount]=useState(0);
    const handgreet = useCallback(()=>{
        console.log("hello");
    },[])

    return(
        <div>
        <ChildMemo  greet={handgreet}/>
        <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
        <p>{count}</p>
        </div>
    )
}
export default ParentMemo;