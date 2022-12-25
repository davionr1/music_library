import { useContext, useState } from 'react'
import { searchContext } from '../context/SearchContext'
import { useRef } from 'react'
function SearchBar(props) {
   
    let[searchTerm, setSearchTerm] =useState('')

    return (
        <form onSubmit={(e)=>props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Search Here" 
            onChange={(e)=>setSearchTerm(e.target.value)}/>
            <input type='submit'/>
        </form>
    )
}


export default SearchBar




