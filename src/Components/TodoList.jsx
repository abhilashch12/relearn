import TodoItem from "./TodoItem"
function TodoList({todo,onToggle,onDelete}){


    return(
        <div>
         {todo.map((todos)=>(<TodoItem key={todos.id}todos={todos} onToggle={onToggle} onDelete={onDelete}/>))}    
        </div>
    )
}
export default TodoList;