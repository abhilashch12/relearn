function StudentComponent({name,marks,grade}){
 

    return(
        <div>
            <p>name:{name}</p>
            <p>marks:{marks}</p>
            <p>grade:{grade}</p>
            {marks>=60?<p style={{color:"green"}}>pass</p>:<p style={{color:"red"}}>fail</p>}
        </div>
    )
}
export default StudentComponent;