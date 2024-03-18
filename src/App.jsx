import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Songs from "./components/Songs";
import SongDetails from "./components/SongDetails";
import SongNewForm from "./components/SongNewForm";
import SongEditForm from "./components/SongEditForm";

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
            <Route path="edit/:id" element={<SongEditForm />} />
          </Route>
        </Route>
      </Routes>
    </div>
  </div>;
};

export default App;
