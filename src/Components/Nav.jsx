import {useTheme} from "../Context/ThemeContext";
function Nav(){
  const{theme,toggleTheme}=useTheme();
  return(
    <div style={{background:theme==="light"?"white":"black",color:theme==="light"?"black":"white"}}>
    <p>{theme}</p>
    <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}
export default Nav;