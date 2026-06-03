import {useState} from "react"
function Controlledinput(){
    const [input,Setinput]=useState("");
    return(
        <div>
         <input value={input} type="text" placeholder="type something" onChange={(e)=>Setinput(e.target.value)} />
         <p>{input}</p>
         <p>count:{input.replaceAll(" ","").length}</p>
        </div>
    )
}
export default Controlledinput;