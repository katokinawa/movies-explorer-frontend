import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRouteElement/ProtectedRouteElement";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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
import * as auth from "../../utils/MainApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const location = useLocation();
  const history = useNavigate();
  const isMainHeaderVisible = ["/"];
  const isOtherHeaderVisible = ["/movies", "/saved-movies", "/profile"];
  const isFooterVisible = ["/", "/movies", "/saved-movies"];

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .getUser()
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          history.push("/profile");
        })
        .catch((err) => err);
    }
  }, [history]);

  function handleRegister(data) {
    auth
      .register(data)
      .then(() => {
        history.push("/movies");
      })
      .catch((err) => err);
  }

  function handeUpdateProfile(data) {
    auth
      .updateProfile(data)
      .then(() => {
        history.push("/profile");
      })
      .catch((err) => err);
  }

  function handleLogin(data) {
    auth
      .login(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history.push("/");
        }
      })
      .catch((err) => err);
  }

  function handleLogout() {
    auth.deleteToken();
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/signin");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          {isMainHeaderVisible.includes(location.pathname) ? (
            <Header />
          ) : isOtherHeaderVisible.includes(location.pathname) ? (
            <Header loggedIn={loggedIn} />
          ) : (
            ""
          )}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={<ProtectedRoute element={Movies} movies={movies} />}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRoute element={SavedMovies} movies={movies} />}
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  logout={handleLogout}
                  updateProfile={handeUpdateProfile}
                />
              }
            />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/signup"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          {isFooterVisible.includes(location.pathname) && <Footer />}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
