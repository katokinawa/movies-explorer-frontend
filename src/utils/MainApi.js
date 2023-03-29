const BASE_URL = "https://84.201.172.98";

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/api/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email, password: password }),
  }).then(checkRes);
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/api/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  }).then(checkRes);
};

export const updateProfile = ({ name, email }) => {
  return fetch(`${BASE_URL}/me`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  }).then(checkRes);
};

export const getUser = () => {
  return fetch(`${BASE_URL}/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkRes);
};