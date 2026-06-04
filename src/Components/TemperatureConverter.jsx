import {useState} from "react"
import CelsiusInput from "./CelsiusInput"
import FahrenheitDisplay from "./FahrenheitDisplay"
function TemperatureConverter(){
    const[temp,setTemp]=useState("");
    function handler(e){
        setTemp(e.target.value);
    }
        const result = temp*9/5+32;
    return(
        <div>
        <CelsiusInput temp={temp} handler={handler}/>
        <FahrenheitDisplay result={result} />
        </div>
    )
}
export default TemperatureConverter;