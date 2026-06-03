import {useEffect,useState} from "react";
function Fetchuser(){
    const [data,setData]=useState({});
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        async function fetchdata(){
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        fetchdata();
    },[])

    return(
        <div>
          {(loading)?(<p>loading...</p>):
          (
          <div><p>name:{data.name}</p>
           <p>email:{data.email}</p>
           <p>city:{data.address.city}</p>
          </div>)}
        </div>
    )
}
export default Fetchuser;