import {useUser} from "../Context/UserContext"
function NameDisplay(){
  const {name}=useUser();

    return(
        <div>
            <p>{name}</p>
        </div>
    )
}
export default NameDisplay;