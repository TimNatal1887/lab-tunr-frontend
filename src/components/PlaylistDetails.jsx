import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import "../styles/PlaylistDetails.css"
const API = import.meta.env.VITE_API_URL

const PlaylistDetails = () => {
  const [playlist, setPlayList] = useState({})
  const [songList, setSongList] = useState([])
  const { id } = useParams()
  useEffect(()=>{
    fetch(`${API}/playlists/${id}`)
    .then((res)=> res.json())
    .then((resJSON)=> setPlayList(resJSON))
  },[id])

  useEffect(()=>{
    fetch(`${API}/playlists/${id}/songs`)
    .then((res)=>res.json())
    .then((resJSON)=>setSongList(resJSON.allSongs))
  },[id])
  return (
    <div className='playlist-details'>
        <h1><span>{playlist.is_favorite ? "⭐️":""}</span>{playlist.name}</h1>
        <div className='song-list'>

        {songList.map(song=>(
            <Link to={`/songs/song/${song.id}`} className='song-link' key={song.id}>
            <div className='playlist-songlist' key={song.id}>
                <p>{song.name}</p>
                <p>{song.artist}</p>
                <p>{song.time}</p>
            </div>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default PlaylistDetails