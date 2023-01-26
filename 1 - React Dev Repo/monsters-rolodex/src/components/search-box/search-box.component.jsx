import './search-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHandler} // No more reinitializing anonymous function
    />
)

export default SearchBox;