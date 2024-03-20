import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/Playlists.css"
const API = import.meta.env.VITE_API_URL

const Playlists = () => {
    const [playlists, setPlayLists] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`${API}/playlists`)
        .then((res)=> res.json())
        .then((resJSON)=> setPlayLists(resJSON))
    },[])
  const deletePlaylist = (id) =>{
    fetch(`${API}/playlists/${id}`, {
        method: "DELETE",
    })
    .then((res)=> navigate("/songs"))
  }

  return (
    <div className='playlists-wrapper'>
        <h1>All Playlists</h1>
        <button onClick={()=>navigate("/playlists/new")}>Add New Playlist</button>
        <ul className='playlist-list'>
            {playlists.map(playlist=> (
                <li key={playlist.id} className='playlist-item'>
                    <Link to={`/playlists/${playlist.id}`} className='playlist-item-link'>
                    <p className='playlist-name'><span>{playlist.is_favorite ? "⭐️":""}</span>{playlist.name}</p>
                    </Link>
                    <button onClick={()=>navigate(`/playlists/${playlist.id}/edit`)}>Update Playlist Info</button>
                    <button onClick={()=>deletePlaylist(playlist.id)}>Delete Playlist</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Playlists