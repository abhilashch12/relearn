import {useState} from "react"
function Todoapp(){
const [todoarr,Settodoarr]=useState([]);
const [todoitem,Settodoitem]=useState("");
function updatetodo(){
    if(todoitem.trim()==="")return;
    Settodoarr([...todoarr,{text:todoitem,completed:false}]);
    Settodoitem("");
}
function toggle(indexof){
    Settodoarr(todoarr.map((todo,index)=>{
        return index===indexof?{...todo,completed:!todo.completed}:todo
    }))
}
const remainingtasks=todoarr.filter((todo)=>!todo.completed).length;

function deletetodo(indexof){
  Settodoarr(
    todoarr.filter((todo,index)=>
    index!=indexof)
  )
}

    return(
        <div>
            <input value={todoitem} 
                   type="text"  
                   placeholder="add todo"
                   onChange={(e)=>Settodoitem(e.target.value)}/>
            <button onClick={updatetodo}>Add</button>
            <ul>
                {todoarr.map((todo,index)=>
                <li key={index} 
                onClick={()=>toggle(index)}
                style={{textDecoration:todo.completed?"line-through":"none"}}>
                {todo.text}
                <button onClick={(e)=>{
                 e.stopPropagation();
                 deletetodo(index);
                }}
               >delete</button>
                </li>)}
            </ul>
            <p>remaining tasks:{remainingtasks}</p>
        </div>
    )
}
export default Todoapp;