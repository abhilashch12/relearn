import {useEffect,useState} from "react"
function Reactivefetch(){
    const[data,setData]=useState({});
    const[userid,setUserid]=useState(1);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
          setLoading(true);
          async function fetchuser(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
            const data = await response.json();
            setData(data);
            setLoading(false);
          }
          fetchuser();
    },[userid])
    return(
        <div>
         <button onClick={()=>setUserid(1)}>userid1</button>
         <button onClick={()=>setUserid(2)}>userid2</button>
         <button onClick={()=>setUserid(3)}>userid3</button>
         <button onClick={()=>setUserid(4)}>userid4</button>
         <button onClick={()=>setUserid(5)}>userid5</button>
         {loading?<p>loading...</p>:<p>{data.name}</p>}
        </div>
    )
}
export default Reactivefetch;