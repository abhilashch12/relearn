import {useState,useEffect} from "react"
function User(){
    const [username,setUsername]=useState(null)
    useEffect(()=>{
         fetch("https://jsonplaceholder.typicode.com/users/1")
         .then((response)=>response.json())
         .then((data)=>setUsername(data))
    },[])

    return(
        <div>
        {username?<p>{username.name}</p>:<p>loading...</p>}

        </div>
    )
}
export default User;