import "./App.css";
import * as React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import movies from "../../utils/movies";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route isLoggedIn={isLoggedIn} path="/" element={<Main />} />
          <Route
            isLoggedIn={isLoggedIn}
            path="/movies"
            element={<Movies movies={movies} />}
          />
          <Route
            isLoggedIn={isLoggedIn}
            path="/saved-movies"
            element={<SavedMovies movies={movies} />}
          />
          <Route
            isLoggedIn={isLoggedIn}
            path="/profile"
            element={<Profile />}
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
