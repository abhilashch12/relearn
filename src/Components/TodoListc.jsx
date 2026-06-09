import {useTodo} from "../Context/TodoContext"
function TodoListc(){
  const {todos,toggleTodo,deleteTodo}=useTodo();
  return(
    <div>
    <ul>
     {todos.map((todo)=>{return <li key={todo.id} onClick={()=>{toggleTodo(todo.id)}} style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}
      <button onClick={(e)=>{e.stopPropagation();deleteTodo(todo.id)}}>delete</button>
     </li>})} 
    </ul>
    </div>
  )
}
export default TodoListc;