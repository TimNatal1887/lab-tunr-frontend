import React from 'react';
import "../styles/Song.css";
import { Link } from 'react-router-dom';

const Song = ({ song }) => {
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
    </tr>
  );
};

export default Song;