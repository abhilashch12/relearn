import {useState} from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
function LocalStorageh(){
   const [search,setSearch]=useLocalStorage("username"," ");
   function handler(e){
    setSearch(e.target.value);
   }

    return(
        <div>
         <input  value={search} type="text" onChange={handler} />
         <p>{search}</p>
        </div>
    )
}
export default LocalStorageh;