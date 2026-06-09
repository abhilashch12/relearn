import {useUser} from "../Context/UserContext";
function NameInput(){
    const{name,setName}=useUser();
    function handler(e){
        setName(e.target.value);
    }
    return(
        <div>
        <input value={name} type="text" onChange={handler}  />
        </div>
    )
}
export default NameInput;