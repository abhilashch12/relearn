import {useState} from "react";
function RegisterationForm(){
   const intialvalues=({name:"",email:"",password:"",role:"",terms:false});
   const [formdata,setFormdata]=useState(intialvalues);
   const[err,setErr]=useState({});
   const[sucess,setSucess]=useState("");  
    function handler(e){
    const name = e.target.name;
    const value=e.target.value;
    setFormdata({...formdata,[name]:value});
    setErr({...err,[name]:""});
    setSucess("");
   }
   function handlecheckbox(e){
     const{name,checked}=e.target;
     setFormdata({...formdata,[name]:checked});
     setErr({...err,[name]:""});
     setSucess("");
   }
   function handlesubmit(e){
      e.preventDefault();
      const errors ={};
      if(!formdata.name.trim()){
        errors.name="enter a name";
      }
      if(!formdata.email.includes("@")){
        errors.email="email must include @";
      }
      if(formdata.password.length<6){
        errors.password="enter a valid password";
      }
      if(!formdata.role){
        errors.role="select a role";
      }
      if(!formdata.terms){
        errors.terms="check the box";
      }
      setErr(errors);
      if(Object.keys(errors).length===0){
        setSucess(`Welcome ${formdata.name}`);
      }
   }
   function handlereset(e){
    setFormdata(intialvalues);
    setErr({});
    setSucess("");
   }
    return(
        <div>
        <form onSubmit={handlesubmit}>
        <div>
         <input type="text" name="name" value={formdata.name} placeholder="enter the name" onChange={handler} />
         <p>{err.name}</p>
        </div>
        <div>
         <input type="text" name="email" value={formdata.email} placeholder="enter the email" onChange={handler} />
        <p>{err.email}</p>
        </div>
        <div>
         <input type="password" name="password" value={formdata.password} placeholder="enter the password" onChange={handler} />
         <p>{err.password}</p>
         </div>
        <div>
         <select name="role" value={formdata.role} onChange={handler}>
              <option value="">select</option>
              <option value="mba">mba</option>
              <option value="mca">mca</option>
              <option value="btech">btech</option>
         </select>
         <p>{err.role}</p>
        </div>
        <div>
         <input type="checkbox" name="terms" checked={formdata.terms} onChange={handlecheckbox} />
         <label>read all the terms and conditions carefully</label>
        <p>{err.terms}</p>
        </div>
        <h3>{sucess}</h3>
        <button type="submit">submit</button>
        <button type="button" onClick={handlereset}>reset</button>
        </form>
        </div>
    )
}
export default RegisterationForm;