import {useState,useEffect} from "react"
function Fetchapi(){
   const [data,setData]=useState([])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>setData(data))
   },[])

    return(
        <div>
            {data.map((post)=>{
              return <p key={post.id} >{post.title}</p>
            })}
        </div>
    )
}
export default Fetchapi;