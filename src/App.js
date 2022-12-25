import './App.css';
import { Fragment, useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { searchContext } from './context/SearchContext'
import { DataContext } from './context/DataContext'

function App() {
    // let [searchTerm, setSearchTerm] = useState('')
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])
    
    useEffect(() => {
        if(search) {
         document.title = `${search} Music`   
         const fetchData = async () => {
            const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
            const resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
            fetchData()
        }
    }, [search])
    
    const handleSearch = (e, term) =>{
        e.preventDefault()
        setSearch(term)
    }
    return (
        <div>
        {message}
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Fragment>
                            <SearchBar handleSearch = {handleSearch}/>
                            <Gallery data={data} />
                        </Fragment>
                    } />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
        </div>
    )
    
}

export default App;










  
