import {useState,useEffect} from "react";
function useLocalStorage(key,intialValue){
   const[value,setValue]=useState(()=>{
    const storedvalue = localStorage.getItem(key);
    if(storedvalue!==null){
        return JSON.parse(storedvalue);
    }
    return intialValue;
   })
   useEffect(()=>{
     localStorage.setItem(key,JSON.stringify(value));
   },[key,value])

    return [value,setValue];
}
export default useLocalStorage;