import{useEffect,useState}from "react";

function useFetch(url){
const[data,setData]=useState(null);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(false);
    useEffect(()=>{
         setLoading(true);
        async function fetchuser(){
            try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error ("something went wrong");
            }
            const datafinal = await response.json();
            setData(datafinal);
        }
    catch(error){
        setError(true);
    }
    finally{
        setLoading(false);
    }
}
fetchuser();
    },[url])
    

    return {data,loading,error};
}
export default useFetch;