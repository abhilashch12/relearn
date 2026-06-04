import {useState} from "react"
import SearchInput from "./SearchInput"
import ItemList from "./ItemList"
function SearchParent(){
   const[items,setItems]=useState(["Apple", "Banana", "Orange"]);
   const[search,setSearch]=useState("");
   function onSearch(e){
       setSearch(e.target.value);
   }
   const filtered = items.filter((item)=>{return item.includes(search)})
   console.log(filtered);
    return(
        <div>
            <SearchInput search={search} onSearch={onSearch}/>
            <ItemList  filtered={filtered} />
        </div>
    )
}
export default SearchParent;