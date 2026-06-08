import {useState} from "react";
import useFetch from "../Hooks/useFetch"
function FetchUrl(){
const [userid,setUserid]=useState(1);
   const {data,loading,error}=useFetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
   if(error)return<p>something went wrong</p>
   if(loading)return<p>loading...</p>

    return(
        <div>
          <button onClick={()=>setUserid(1)}>user1</button>
          <button onClick={()=>setUserid(2)}>user2</button>
          <button onClick={()=>setUserid(3)}>user3</button>
          <button onClick={()=>setUserid(4)}>user4</button>
          <button onClick={()=>setUserid(5)}>user5</button>
          <p>{data.name}</p>
        </div>
    )
}
export default FetchUrl;