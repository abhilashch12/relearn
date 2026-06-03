import {useState}from "react"
function Colorpicker(){
  const [color,Setcolor]=useState("");

    return(
        <div style={{backgroundColor:color}}>
            <button onClick={()=>Setcolor("red")}>red</button>
            <button onClick={()=>Setcolor("green")}>green</button>
            <button onClick={()=>Setcolor("blue")}>blue</button>
            <p style={{color:"white"}}>{color}</p>
        </div>
    )
}
export default Colorpicker;