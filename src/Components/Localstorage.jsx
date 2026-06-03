import {useEffect,useState} from "react"
function Localstorage(){
  const [text,setText]=useState("");
   useEffect(()=>{
     const savedtext = localStorage.getItem("input");
     if(savedtext){
        setText(savedtext)
     }
   },[])
   function handler(e){
    setText(e.target.value);
    localStorage.setItem("input",e.target.value);
   }
    return(
        <div>
            <input value={text} type="text" placeholder="type the input" onChange={handler}/>
        </div>
    )
}
export default Localstorage;