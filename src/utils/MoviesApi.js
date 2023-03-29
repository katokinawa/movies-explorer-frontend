const BASE_URL = "https://84.201.172.98/";

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const changeLikeCardStatus = (cardId, isLiked) => {
  // return fetch(`${BASE_URL}/movies`, {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ name: name, email: email, password: password }),
  // }).then(checkRes);
};