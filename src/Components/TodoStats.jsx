function TodoStats({todo}){


    const remainingcount=todo.filter((todos)=>!todos.completed).length;


    return(
        <div>
         <p>remainingcount:{remainingcount}</p>   
        </div>
    )
}
export default TodoStats;