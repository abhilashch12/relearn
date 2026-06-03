import {useEffect,useState} from "react";
function Timer(){
   const[time,setTime]=useState(new Date());
   useEffect(()=>{
    const id = setInterval(()=>{setTime(new Date())},1000);
    return ()=>{clearInterval(id)};
   },[])
    return(
        <div>
        <h1>{time.getHours()}:
            {time.getMinutes()}:
            {time.getSeconds()}
        </h1>
        </div>
    )
}
export default Timer;