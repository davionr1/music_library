// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const AlbumView = (props) => {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const API_URL = `http://localhost:3000/song/${id}`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    const allAlbums = albumData.filter(entity => entity.kind === 'song')
        .map((album, i) => { 
            return (
            <div key={i}>{album.trackName}</div>
            )
        })

    return (
        <div>
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <p>loading...</p>}
            {navButtons()}
            {allAlbums}
        </div>
    )
}

export default AlbumView

