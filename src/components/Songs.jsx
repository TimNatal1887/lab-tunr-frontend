import React, { useEffect, useState } from 'react';
import "../styles/Songs.css";
import Song from './Song';
import { Link } from 'react-router-dom';
import AddToPlaylist from './AddToPlaylistForm';

const API = import.meta.env.VITE_API_URL;

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
      .then((response) => response.json())
      .then((responseJSON) => setSongs(responseJSON))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='songs-wrapper'>
      <div className='songs-header-wrap'>
        <h2 className='songs-header'>All Songs</h2>
        <Link to="/songs/new">
            <p>Add New Song</p>
        </Link>
      </div>
      <table className='song-table'>
        <thead className='table-header'> 
          <tr className='table-categories'>
            <th>Favorite</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Runtime</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <Song key={index} song={song} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Songs;