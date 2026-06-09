import {createContext,useContext}from "react";
import {useState} from "react";
const TodoContext = createContext();
export function TodoProvider({children}){
 const[todos,setTodos]=useState([]);
 const[input,setInput]=useState("");
 function addTodo(){
  const updatedtodo={id:Date.now(),text:input,completed:false};
  setTodos([...todos,updatedtodo]);
  setInput("");
 }
 function toggleTodo(id){
     const updatedtodo= todos.map((todo)=>{return todo.id===id?{...todo,completed:true}:todo});
     setTodos(updatedtodo);
 }
 function deleteTodo(id){
     const updatedtodo=todos.filter((todo)=>todo.id!==id);
     setTodos(updatedtodo);
 }

  return(
    <TodoContext.Provider value={{input,setInput,todos,addTodo,toggleTodo,deleteTodo}}>{children}</TodoContext.Provider>
  )
}
export function useTodo(){
  return useContext(TodoContext);
}