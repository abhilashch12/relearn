import {useState} from "react"
import CounterDisplay from "./CounterDisplay"
import CounterControls from "./CounterControls"
function CounterParent(){
    const[count,setCount]=useState(0);
    function increment(){
        setCount((prev)=>prev+1);
    }
    function decrement(){
        if(count>0){
            setCount((prev)=>prev-1);
        }
    }
    function reset(){
        setCount(0);
    }
    return(
        <div>
        <CounterDisplay count={count}/>
        <CounterControls setCount={setCount} count={count} increment={increment} decrement={decrement} reset={reset} />
        </div>
    )
}
export default CounterParent;