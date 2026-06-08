import{useState,useEffect} from "react";
function useDebounce(value,delay){
  const[debouncevalue,setDebouncevalue]=useState(value); 
  useEffect(()=>{
    const timer = setTimeout(()=>{setDebouncevalue(value)},delay)

    return ()=> {clearInterval(timer)};
  },[value,delay])


    return debouncevalue;
}
export default useDebounce;