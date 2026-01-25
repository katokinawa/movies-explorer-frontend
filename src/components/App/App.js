import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRouteElement/ProtectedRouteElement";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Login from "../Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as api from "../../utils/MainApi";

function App() {
  // Функциональные константы
  const history = useNavigate();
  const location = useLocation();

  // Хуки
  const [currentUser, setCurrentUser] = useState({});
  
  // БЛОК С ЛОГИНОМ, РЕГИСТРАЦИЕЙ, РЕДАКТИРОВАНИЕМ ПРОФИЛЯ
  const isMainHeaderVisible = ["/"];
  const isOtherHeaderVisible = ["/movies", "/saved-movies", "/profile"];
  const isFooterVisible = ["/", "/movies", "/saved-movies"];

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      api
        .getUser()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => err);
    }
  }, []);

  function handleRegister(data) {
    api
      .register(data)
      .then(() => {
        handleLogin(data);
      })
      .catch((err) => err);
  }

  function handeUpdateProfile(data) {
    api
      .updateProfile(data)
      .then(() => {
        history("/profile");
      })
      .catch((err) => err);
  }

  function handleLogin(data) {
    api
      .login(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          history("/movies");
        }
      })
      .catch((err) => err);
  }

  function handleLogout() {
    api.deleteToken();
    localStorage.removeItem("jwt");
    history("/signin");
  }

  // Разметка
  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          {isMainHeaderVisible.includes(location.pathname) ? (
            <Header loggedIn={false} />
          ) : isOtherHeaderVisible.includes(location.pathname) ? (
            <Header loggedIn={true} />
          ) : (
            ""
          )}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={<ProtectedRoute user={currentUser} element={Movies} />}
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute user={currentUser} element={SavedMovies} />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  user={currentUser}
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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
