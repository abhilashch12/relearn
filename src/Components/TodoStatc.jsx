import {useTodo} from "../Context/TodoContext"
function TodoStatc(){
  const{todos}=useTodo();
  const remaining = todos.filter((todo)=>!todo.completed).length;
  return(
    <div>
      <p>remaining:{remaining}</p>
    </div>
  )
}
export default TodoStatc;