import Counter from "./Components/Counter"
import User from "./Components/User"
import Digitalclock from "./Components/Digitalclock"
import Fetchapi from "./Components/Fetchapi"
import Autosave from "./Components/Autosave"
import StudentComponent from "./Components/StudentComponent"
import Productcard from "./Components/Productcard"
import Colorpicker from "./Components/Colorpicker"
import Todoapp from "./Components/Todoapp"
import Fetchuser from "./Components/Fetchuser"
import Reactivefetch from "./Components/Reactivefetch"
import Timer from "./Components/Timer"
import Localstorage from "./Components/Localstorage"
import CounterParent from "./Components/CounterParent"
import TemperatureConverter from "./Components/TemperatureConverter"
import SearchParent from "./Components/SearchParent"
import TodoAppParent from "./Components/TodoAppParent"
import FetchUrl from "./Components/FetchUrl"
import LocalStorageh from "./Components/LocalStorageh"
import Debounce from "./Components/Debounce"
import {ThemeProvider} from "./Context/ThemeContext" 
import Nav from "./Components/Nav"
import {UserProvider} from "./Context/UserContext"
import NameInput from "./Components/NameInput"
import NameDisplay from "./Components/NameDisplay"
import TodoAppc from "./Components/TodoAppc"
import {TodoProvider} from "./Context/TodoContext" 
function App(){

return(
  <div>
    <TodoProvider>
      <TodoAppc />
    </TodoProvider>
    <UserProvider>
      <NameInput />
      <NameDisplay />
    </UserProvider>
    <ThemeProvider>
      <Nav />
    </ThemeProvider>
    <Debounce />
    <LocalStorageh />
    <FetchUrl />
    <TodoAppParent />
    <SearchParent />
    <TemperatureConverter />
    <CounterParent />
    <Localstorage />
    <Timer />
    <Reactivefetch />
    <Fetchuser />
    <Todoapp />
    <Counter />
    <User />
    <Digitalclock />
    <Fetchapi />
    <Autosave />
    <StudentComponent  name="Abhilash" marks={61} grade="c"/>
    <StudentComponent  name="Abhilash" marks={90} grade="a"/>
    <StudentComponent  name="Abhilash" marks={49} grade="f"/>

    <Productcard  name="tcs" price={200} instock={true} />
    <Productcard  name="zeroda" price={300} instock={false} />

    <Colorpicker />
  </div>
)
}
export default App;