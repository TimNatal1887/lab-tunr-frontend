import React, { useEffect, useState } from 'react'
import "../styles/SongDetails.css"
import { useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const SongDetails = () => {
  const [song, setSong] = useState({})
  const { id } = useParams()
  
  useEffect(()=>{
      fetch(`${API}/songs/${id}`)
      .then((response)=>response.json())
      .then((responseJSON)=> setSong(responseJSON))
      .catch((error)=> console.error(error))
    },[])
    
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
            <p>Back</p>
            <p>Edit Song</p>
            <p>Delete Song</p>
        </div>
    </div>
  )
}

export default SongDetails