import {useState,useEffect} from "react"
function Documenttitle(){
    const [count,setCount]=useState(0)
    function increment(){
        setCount((prev)=>prev+1)
    }
    useEffect(()=>{
       document.title=`count:${count}`
    },[count])

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>count</button>
        </div>
    )
}
export default Documenttitle;