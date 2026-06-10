import {useEffect,useRef} from "react";
function AutoFocus(){
   const inputRef=useRef(null);
   useEffect(()=>{
    inputRef.current.focus();
   },[]) 
   function focus(){
    inputRef.current.focus();
   }

    return(
        <div>
        <input  ref={inputRef} />
        <button onClick={focus}>focus</button>
        </div>
    )
}
export default AutoFocus;