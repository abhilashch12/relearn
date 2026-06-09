import {useTodo} from "../Context/TodoContext";
function TodoInputc(){
    const{input,setInput,addTodo}=useTodo();
    function handler(e){
        setInput(e.target.value);
    }
    return(
        <div>
            <input value={input} type="text" onChange={handler} />
            <button onClick={addTodo}>add</button>
        </div>
    )
}
export default TodoInputc;