import "./SearchBar.css";

const SearchBar = ({ toggleSearch, searchFilter, setSearchInput, searchInput }) =>{
    const handleChange = (e) => {
      setSearchInput(e.target.value)
      searchFilter(searchInput)   
    }
    return(
      <div className="search-form-container">
        <form>
          <input onChange={handleChange} placeholder="search" />
        </form>
        <button className="new-todo-button" onClick={toggleSearch}>New</button>
      </div>
    )
}

export default SearchBar;