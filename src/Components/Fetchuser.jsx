import {useEffect,useState} from "react";
function Fetchuser(){
    const[userdata,setUserdata]=useState({});
   const[loading,setLoading]=useState(true);
   const[err,setErr]=useState(false);
    useEffect(()=>
        {
            async function userdata(){
                try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                if(!response.ok){
                   throw new Error("failed to fetch")
                }
                const data = await response.json();
                setUserdata(data);
            }
            catch(err){
             setErr(true);
            }
            finally{
                setLoading(false);
            }
            }
            userdata();
        },[])

        if(loading){
            return<h3>...loading</h3>
        }
        if(err){
            return<h3>"Something went wrong"</h3>
        }
    return(
        <div>
         
           <p>name:{userdata.name}</p>
           <p>email:{userdata.email}</p>
           <p>city:{userdata.address.city}</p>

        </div>
    )
}
export default Fetchuser;