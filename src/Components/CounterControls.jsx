function CounterControls({increment,decrement,reset}){
return(
    <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
)
}
export default CounterControls;