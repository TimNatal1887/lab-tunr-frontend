import React from 'react';
import "../styles/Song.css";
import { Link, useNavigate } from 'react-router-dom';
import AddToPlaylist from './AddToPlaylistForm';

const Song = ({ song }) => {
  const navigate = useNavigate()
  return (
    <tr className='table-row'>
      <td className='fav'>{song.is_favorite ? "⭐️" : ""}</td>
      <td className='song-name'>
        <Link to={`/songs/song/${song.id}`}>
        {song.name}
        </Link>
        </td>
      <td className='song-artist'>{song.artist}</td>
      <td className='song-time'>{song.time}</td>
      <td>
        <button onClick={()=>navigate(`/playlists/${song.id}/add`)}>Add to Playlist</button>
      </td>
    </tr>
  );
};

export default Song;