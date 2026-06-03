import {useEffect,useState} from "react"
function Counter(){
 const [count,Setcount]=useState(0);
 function increment(){
  Setcount((prev)=>prev+1)
 }
 function decrement(){
  if(count>0){
  Setcount((prev)=>prev-1)
 }}
 function reset(){
  Setcount(0)
 }
 useEffect(()=>{
  document.title=count;
 },[count])
  return(
    <div>
    <h1>{count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    </div>
  )
}
export  default Counter;