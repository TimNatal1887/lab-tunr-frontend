import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/SongForm.css"
const API = import.meta.env.VITE_API_URL;

function SongEditForm() {
  const navigate = useNavigate();
  const { id } = useParams()
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
  });

  useEffect(()=>{
    fetch(`${API}/songs/${id}`)
    .then((response)=>response.json())
    .then((responseJSON)=>setSong(responseJSON))
    .catch((error)=>console.error(error))
  },[])

  const addSong = () => {
    fetch(`${API}/songs`, {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/songs`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="New">
      {console.log(song)}
      <form onSubmit={handleSubmit} className="form-wrap">
        <label htmlFor="name">Song Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Song Name"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Artist's Name"
          onChange={handleTextChange}
        />
        <label htmlFor="Album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <label htmlFor="time">Song Length:</label>
        <input
          id="time"
          name="time"
          pattern="^\d{1,2}:\d{2}$"
          required
          value={song.time}
          onChange={handleTextChange}
          placeholder="Enter song length in mm:ss"
          title="Please enter a valid time format in mm:ss or m:ss"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongEditForm