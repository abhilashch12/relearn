import {useState,useMemo} from "react";
function FilterUsememo(){
   const[items,setIems]=useState(["Microphone", "Backpack", "Barometer", "Thermos", "Stethoscope", "Harmonica", "Telescope", "Carabiner", "Microscope", "Hammock"]);
   const[filter,setFilter]=useState("");
   const[counter,setCounter]=useState(0);
   const filtereditems= useMemo(()=>{
    if(filter.trim()==="")return[];
    console.log("filtering");
    return items.filter((item)=>item.toLowerCase().includes(filter.toLowerCase()))

   },[items,filter])

   function handler(e){
    setFilter(e.target.value);
   }

    return(
        <div>
         <input value={filter} type="text" onChange={handler}/>
         <ul>
          {filtereditems.map((item) => (
            <li key={item}>{item}</li>
          ))}
         </ul>
         <p>count{counter}</p>
         <button onClick={()=>setCounter(prev=>prev+1)}>increment</button>
        </div>
    )
}
export default FilterUsememo;