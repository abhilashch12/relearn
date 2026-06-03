import {useEffect,useState}from "react"
function Digitalclock(){
   const [time,setTime]=useState(new Date().toLocaleTimeString())
   useEffect(()=>{
   const timer= setInterval(()=>{setTime(new Date().toLocaleTimeString())},1000)
   return()=> clearInterval(timer)
   },[])

    return(
        <div>
        <p>{time}</p>
        </div>
    )
}
export default Digitalclock;