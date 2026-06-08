import {useState,useEffect} from "react";
import useDebounce from "../Hooks/useDebounce";
function Debounce(){
const[search,setSearch]=useState("");
const debounce=useDebounce(search,1000);
function handler(e){
  setSearch(e.target.value);
}
useEffect(()=>{
  console.log(debounce);
},[debounce])
return(
  <div>
    <input value={search} type="text" onChange={handler}/>
    <p>{search}</p>
    <p>{debounce}</p>
  </div>
)
}
export default Debounce;