import React, { useEffect, useState } from 'react'
import "../styles/PlaylistForm.css"
import { useNavigate, useParams } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL
const PlaylistUpdateForm = () => {
  const [playlist, setPlayList] = useState({
    name:"",
    is_favorite:false
  })
  const navigate = useNavigate()
  const { id } = useParams()
  const handleTextChange = (event) => {
    setPlayList({ ...playlist, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPlayList({ ...playlist, is_favorite: !playlist.is_favorite });
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(`${API}/playlists/${id}`, {
        method: "PUT",
        body: JSON.stringify(playlist),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res)=> navigate("/playlists"))
  }

  useEffect(()=>{
    fetch(`${API}/playlists/${id}`)
    .then((res)=>res.json())
    .then((resJSON)=> setPlayList(resJSON))
  },[id])
  return (
    <form className='playlist-new-update-wrapper' onSubmit={handleSubmit}>
        <label htmlFor="name" className='playlist-name-label'>
            Name of Playlist
            <input type="text" 
            id='name'
            value={playlist.name}
            onChange={handleTextChange}
            className='playlist-name-input'
            />
        </label>
        <label htmlFor="is_favorite" className='playlist-fav-label'>Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={playlist.is_favorite}
          className='playlist-fav-input'
        />
        <button>Submit</button>
    </form>
  )
}

export default PlaylistUpdateForm