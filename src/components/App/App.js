import "./App.css";
import * as React from "react";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import movies from "../../utils/movies";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const location = useLocation();


  const isHeaderVisible = ['/'];
  const isFooterVisible = ['/', '/movies', '/saved-movies'];

  return (
    <div className="body">
      <div className="page">
      {(isHeaderVisible.includes(location.pathname) ? <Header /> : <Header isLoggedIn={isLoggedIn} />)}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={<Movies movies={movies} />}
          />
          <Route
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
        {isFooterVisible.includes(location.pathname) && <Footer />}
      </div>
    </div>
  );
}

export default App;
