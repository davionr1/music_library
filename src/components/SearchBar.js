import { useContext } from 'react'
import { searchContext } from '../context/SearchContext'
import { useRef } from 'react'
function SearchBar() {
    const {term, handleSearch} = useContext(searchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}


export default SearchBar




