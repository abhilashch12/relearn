import {useState,useRef} from "react";
function StopWatch(){
    const[seconds,setSeconds]=useState(0);
    const intervalidRef = useRef(null);
    function start(){
        clearInterval(intervalidRef.current);
        intervalidRef.current = setInterval(()=>{
            setSeconds((prev)=>prev+1);
        },1000);
    }
    function stop(){
       clearInterval(intervalidRef.current);
    }
    function reset(){
        clearInterval(intervalidRef.current);
        setSeconds(0);
    }
    return(
        <div>
            <p>{seconds}</p>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default StopWatch;