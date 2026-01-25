const MOCK_USER = {
  _id: "mock-user-id",
  name: "Демо Пользователь",
  email: "demo@example.com"
};

const MOCK_TOKEN = "mock-jwt-token-demo";

const DEMO_EMAIL = "demo@example.com";
const DEMO_PASSWORD = "demo123";

const MOCK_SAVED_MOVIES = [
  {
    _id: "mock-movie-1",
    movieId: 1,
    country: "Россия",
    director: "Андрей Тарковский",
    duration: 163,
    year: "1972",
    description: "Философская драма о поиске смысла жизни",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Солярис",
    nameEN: "Solaris",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800",
    thumbnail: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300"
  },
  {
    _id: "mock-movie-2",
    movieId: 2,
    country: "США",
    director: "Кристофер Нолан",
    duration: 148,
    year: "2010",
    description: "Научно-фантастический триллер о путешествии во времени",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Начало",
    nameEN: "Inception",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
  },
  {
    _id: "mock-movie-3",
    movieId: 3,
    country: "Великобритания",
    director: "Дэнни Бойл",
    duration: 103,
    year: "1996",
    description: "Черная комедия о наркоманах в Эдинбурге",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "На игле",
    nameEN: "Trainspotting",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300"
  }
];

let mockSavedMovies = [...MOCK_SAVED_MOVIES];
let mockUser = { ...MOCK_USER };

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

function isNetworkError(error) {
  return error instanceof TypeError || error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError');
}

function isMockMode() {
  const token = localStorage.getItem("jwt");
  return token === MOCK_TOKEN;
}

export const register = ({ name, email, password }) => {
  return fetch(`/api/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email, password: password }),
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        return Promise.resolve({ data: { ...MOCK_USER, name, email } });
      }
      return Promise.reject(error);
    });
};

export const login = ({ email, password }) => {
  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    localStorage.setItem("jwt", MOCK_TOKEN);
    return Promise.resolve({ token: MOCK_TOKEN, user: MOCK_USER });
  }

  return fetch(`/api/signin/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
          localStorage.setItem("jwt", MOCK_TOKEN);
          return Promise.resolve({ token: MOCK_TOKEN, user: MOCK_USER });
        }
        return Promise.reject(new Error("Демо-режим: используйте demo@example.com / demo123"));
      }
      return Promise.reject(error);
    });
};

export const updateProfile = ({ name, email }) => {
  if (isMockMode()) {
    mockUser = { ...mockUser, name, email };
    return Promise.resolve(mockUser);
  }

  return fetch(`/api/users/me/`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        if (isMockMode()) {
          mockUser = { ...mockUser, name, email };
          return Promise.resolve(mockUser);
        }
      }
      return Promise.reject(error);
    });
};

export const getUser = () => {
  if (isMockMode()) {
    return Promise.resolve(mockUser);
  }

  return fetch(`/api/users/me/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        if (isMockMode()) {
          return Promise.resolve(mockUser);
        }
      }
      return Promise.reject(error);
    });
};

export const deleteToken = () => {
  if (isMockMode()) {
    localStorage.removeItem("jwt");
    mockSavedMovies = [...MOCK_SAVED_MOVIES];
    mockUser = { ...MOCK_USER };
    return Promise.resolve({});
  }

  return fetch(`/api/signout/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        localStorage.removeItem("jwt");
        mockSavedMovies = [...MOCK_SAVED_MOVIES];
        mockUser = { ...MOCK_USER };
        return Promise.resolve({});
      }
      return Promise.reject(error);
    });
};

export const getUserMovie = () => {
  if (isMockMode()) {
    return Promise.resolve([...mockSavedMovies]);
  }

  return fetch(`/api/movies/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        if (isMockMode()) {
          return Promise.resolve([...mockSavedMovies]);
        }
      }
      return Promise.reject(error);
    });
};

export const likeMovie = (movie) => {
  if (isMockMode()) {
    const savedMovie = {
      _id: `mock-movie-${Date.now()}`,
      ...movie
    };
    mockSavedMovies.push(savedMovie);
    return Promise.resolve(savedMovie);
  }

  return fetch(`/api/movies/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        if (isMockMode()) {
          const savedMovie = {
            _id: `mock-movie-${Date.now()}`,
            ...movie
          };
          mockSavedMovies.push(savedMovie);
          return Promise.resolve(savedMovie);
        }
      }
      return Promise.reject(error);
    });
};

export const dislikeMovie = (movieId) => {
  if (isMockMode()) {
    const index = mockSavedMovies.findIndex(movie => movie._id === movieId);
    if (index !== -1) {
      const deletedMovie = mockSavedMovies[index];
      mockSavedMovies.splice(index, 1);
      return Promise.resolve(deletedMovie);
    }
    return Promise.reject(new Error("Фильм не найден"));
  }

  return fetch(`/api/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        if (isMockMode()) {
          const index = mockSavedMovies.findIndex(movie => movie._id === movieId);
          if (index !== -1) {
            const deletedMovie = mockSavedMovies[index];
            mockSavedMovies.splice(index, 1);
            return Promise.resolve(deletedMovie);
          }
          return Promise.reject(new Error("Фильм не найден"));
        }
      }
      return Promise.reject(error);
    });
};
