import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Songs from "./components/Songs";
import SongDetails from "./components/SongDetails";
import SongNewForm from "./components/SongNewForm";
import SongEditForm from "./components/SongEditForm";
import Playlists from "./components/Playlists.jsx";
import PlaylistDetails from "./components/PlaylistDetails.jsx";
import AddToPlaylistForm from "./components/AddToPlaylistForm.jsx";
import PlaylistNewForm from "./components/PlayListNewForm.jsx";
import PlaylistUpdateForm from "./components/PlaylistUpdateForm.jsx";

const App = () => {
  return <div className="page-wrap">
    <Navbar />
    <div className="page-body-wrap">
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="songs">
            <Route index element={<Songs />}/>
            <Route path="song/:id" element={<SongDetails />}/>
            <Route path="new" element={<SongNewForm />}/>
            <Route path=":id/edit" element={<SongEditForm />} />
          </Route>
          <Route path="playlists">
            <Route index element={<Playlists />} />
            <Route path="new" element={<PlaylistNewForm />}/>
            <Route path=":id/add" element={<AddToPlaylistForm />} />
            <Route path=":id/edit" element={<PlaylistUpdateForm />}/>
            <Route path=":id" element={<PlaylistDetails/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  </div>;
};

export default App;
