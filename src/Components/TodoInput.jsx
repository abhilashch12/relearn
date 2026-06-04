function TodoInput({input,handler,onAdd}){


    return(
        <div>
          <input value={input} onChange={handler}/>  
          <button onClick={onAdd}>Add</button>
        </div>
    )
}
export default TodoInput;