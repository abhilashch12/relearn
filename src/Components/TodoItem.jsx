function TodoItem({todos,onToggle,onDelete}){


    return(
        <div>
          <input type="checkbox"
                  checked={todos.completed}
                  onChange={() => onToggle(todos.id)}/>
          <span>{todos.text}</span>
          <button onClick={()=>onDelete(todos.id)}>delete</button>  
        </div>
    )
}
export default TodoItem;