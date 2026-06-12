import {useState} from "react";
function LoginForm(){
   const[formdata,setFormdata]=useState({email:"",password:""});
   const[err,setErr]=useState({});
   const[sucess,setSucess]=useState("");
   function handler(e){
        const name=e.target.name;
        const value=e.target.value;
        setFormdata({...formdata,[name]:value});
        setErr({...err,[name]:""});
        setSucess("");
   }
   function handlesubmit(e){
    e.preventDefault();
    const newerrors ={};
    if(!formdata.email.includes("@")){
        newerrors.email="email must contain @"
    }
    if(formdata.password.length<6){
        newerrors.password="password must contain atleast 6 letters"
    }
    setErr(newerrors);
    if(Object.keys(newerrors).length===0){
       setSucess("login sucessful");
    }
   }
    return(
        <div>
        <form onSubmit={handlesubmit}>
        <div>
        <input type="text" name="email" onChange={handler} value={formdata.email} placeholder="enter email"/>
        <p>{err.email}</p>
        </div>
        <div>
        <input type="text" name="password" onChange={handler} value={formdata.password} placeholder="enter password"/>
        <p>{err.password}</p>
        </div>
        <button type="submit">login</button>
        </form>
        <p>{sucess}</p>
        </div>
    )
}
export default LoginForm;