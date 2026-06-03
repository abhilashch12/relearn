import {useEffect,useState}from"react"
function Autosave(){
   const [letter,setLetter]=useState();

    return(
        <div>
        <form>
            <input name="txt" type="text" placeholder="write something"></input>
        </form>
        </div>
    )
}
export default Autosave;