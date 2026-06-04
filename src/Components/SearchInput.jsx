function SearchInput({search,onSearch}){


    return(
        <div>
        <input  value={search} type="text" onChange={onSearch}/>
        </div>
    )
}
export default SearchInput;