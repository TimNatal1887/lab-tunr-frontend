import React, { useEffect, useState } from 'react'
import "../styles/SongDetails.css"
import { useParams,Link, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const SongDetails = () => {
  const [song, setSong] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const deleteSong = () => {
    fetch(`${API}/songs/${id}`, {
      method: 'DELETE',
    })
      .then(() => navigate(`/songs`))
      .catch((error) => console.error(error))
  }
  
  useEffect(()=>{
      fetch(`${API}/songs/${id}`)
      .then((response)=>response.json())
      .then((responseJSON)=> setSong(responseJSON))
      .catch((error)=> console.error(error))
    },[id])
    
  if(Object.keys(song).length === 0) return null
  return (
    <div className='song-wrapper'>
        <div className='song-details-wrapper'>
        <h2 className='song-header-data'>{song.is_favorite ? "⭐️":""}{song.name}</h2>
        <p className='song-artist-data'>by {song.artist}</p>
        <p className='song-album-data'>{song.album}</p>
        <p className='song-runtime-data'>Time: {song.time}</p>
        </div>
        <div className='detail-button-wrapper'>
            <Link to="/songs" className='detail-link'>
                <p className='detail-button return-home'>Back</p>
            </Link>
            <Link to={`/songs/${song.id}/edit`} className='detail-link'>
            <p className='detail-button edit'>Edit Song</p>
            </Link>
            <p className='detail-button delete' onClick={deleteSong}>Delete Song</p>
        </div>
    </div>
  )
}

export default SongDetails