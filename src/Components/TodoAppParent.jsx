import {useState} from"react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats"
function TodoAppParent(){
const[todo,setTodo]=useState([]);
const[input,setInput]=useState("");
function handler(e){
    setInput(e.target.value);
}
function onAdd(){
     if(input.trim()==="")return;
     const newtodo= {id: Date.now(),
                     text:input,
                     completed:false
     }
     setTodo([...todo,newtodo]);
     setInput("");
}
function onToggle(id){
    const updatedtodo = todo.map((todos)=>{
       return (todos.id===id)?{...todos,completed:!todos.completed}:todos
    })
    setTodo(updatedtodo);
}
function onDelete(id){
    const updatedtodo=todo.filter((todos)=>todos.id!==id);
    setTodo(updatedtodo);
}


    return(
        <div>
          <TodoInput input={input} handler={handler} onAdd={onAdd}/>
          <TodoList  todo={todo} onToggle={onToggle} onDelete={onDelete}/>  
          <TodoStats  todo={todo} />
        </div>
    )
}
export default TodoAppParent;