import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/AddToPlaylistForm.css"

const API = import.meta.env.VITE_API_URL;

const AddToPlaylistForm = () => {
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState('');
    const [song, setSong] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`${API}/songs/${id}`)
        .then((res)=>res.json())
        .then((resJSON)=> setSong(resJSON))
    },[id])

    useEffect(() => {
        fetch(`${API}/playlists`)
            .then((res) => res.json())
            .then((resJSON) => setPlaylists(resJSON));
    }, []);

    const handleSelectChange = (event) => {
        setSelectedPlaylistId(event.target.value);
        setSong({...song, playlist_id:event.target.value})
    };

    const addToPlaylist =(e) =>{
        e.preventDefault()
        fetch(`${API}/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => {
            navigate(`/playlists/${selectedPlaylistId}/`);
        })
        .catch((error) => console.error("catch", error));
    };

    return (
    <div className='playlist-page-wrap'>
        <div className='song-wrapper'>
            <div className='song-details-wrapper'>
            <h2 className='song-header-data'>{song.is_favorite ? "⭐️":""}{song.name}</h2>
            <p className='song-artist-data'>by {song.artist}</p>
            <p className='song-album-data'>{song.album}</p>
            <p className='song-runtime-data'>Time: {song.time}</p>
            </div>
        </div>
        <form onSubmit={addToPlaylist} className='playlist-form-wrapper'>
            <label htmlFor="playlist">Add to playlist</label>
            <select id="playlist" onChange={handleSelectChange}>
                <option value="">Select a playlist</option>
                {playlists.map((playlist) => (
                    <option key={playlist.id} value={playlist.id}>
                        {playlist.name}
                    </option>
                ))}
            </select>
            <button type="submit">Add</button>
        </form>

    </div>
    );
};

export default AddToPlaylistForm;
