const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

const MOCK_MOVIES = [
  {
    id: 1,
    country: "Россия",
    director: "Андрей Тарковский",
    duration: 163,
    year: "1972",
    description: "Философская драма о космонавте, который отправляется на планету Солярис и сталкивается с призраками прошлого.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Солярис",
    nameEN: "Solaris",
    image: {
      url: "/images/solaris.jpg",
      formats: {
        thumbnail: {
          url: "/images/solaris-thumb.jpg"
        }
      }
    }
  },
  {
    id: 2,
    country: "США",
    director: "Кристофер Нолан",
    duration: 148,
    year: "2010",
    description: "Научно-фантастический триллер о специалисте по проникновению в сны, который получает задание внедрить идею в подсознание.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Начало",
    nameEN: "Inception",
    image: {
      url: "/images/inception.jpg",
      formats: {
        thumbnail: {
          url: "/images/inception-thumb.jpg"
        }
      }
    }
  },
  {
    id: 3,
    country: "Великобритания",
    director: "Дэнни Бойл",
    duration: 103,
    year: "1996",
    description: "Черная комедия о группе наркоманов в Эдинбурге и их попытках найти смысл жизни.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "На игле",
    nameEN: "Trainspotting",
    image: {
      url: "/images/trainspotting.jpg",
      formats: {
        thumbnail: {
          url: "/images/trainspotting-thumb.jpg"
        }
      }
    }
  },
  {
    id: 4,
    country: "США",
    director: "Фрэнк Дарабонт",
    duration: 142,
    year: "1994",
    description: "Драма о банкире, который был приговорен к пожизненному заключению и нашел способ выжить в тюрьме.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Побег из Шоушенка",
    nameEN: "The Shawshank Redemption",
    image: {
      url: "/images/shawshank.jpg",
      formats: {
        thumbnail: {
          url: "/images/shawshank-thumb.jpg"
        }
      }
    }
  },
  {
    id: 5,
    country: "США",
    director: "Фрэнсис Форд Коппола",
    duration: 175,
    year: "1972",
    description: "Эпическая криминальная драма о семье мафиози и их борьбе за власть.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Крестный отец",
    nameEN: "The Godfather",
    image: {
      url: "/images/godfather.jpg",
      formats: {
        thumbnail: {
          url: "/images/godfather-thumb.jpg"
        }
      }
    }
  },
  {
    id: 6,
    country: "США",
    director: "Квентин Тарантино",
    duration: 154,
    year: "1994",
    description: "Криминальная драма о нескольких переплетающихся историях в Лос-Анджелесе.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Криминальное чтиво",
    nameEN: "Pulp Fiction",
    image: {
      url: "/images/pulpfiction.jpg",
      formats: {
        thumbnail: {
          url: "/images/pulpfiction-thumb.jpg"
        }
      }
    }
  },
  {
    id: 7,
    country: "США",
    director: "Стивен Спилберг",
    duration: 195,
    year: "1993",
    description: "Историческая драма о немецком промышленнике, который спас более тысячи евреев во время Холокоста.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Список Шиндлера",
    nameEN: "Schindler's List",
    image: {
      url: "/images/schindler.jpg",
      formats: {
        thumbnail: {
          url: "/images/schindler-thumb.jpg"
        }
      }
    }
  },
  {
    id: 8,
    country: "США",
    director: "Ридли Скотт",
    duration: 117,
    year: "1982",
    description: "Научно-фантастический триллер о репликантах и охотнике за ними в будущем Лос-Анджелесе.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Бегущий по лезвию",
    nameEN: "Blade Runner",
    image: {
      url: "/images/bladerunner.jpg",
      formats: {
        thumbnail: {
          url: "/images/bladerunner-thumb.jpg"
        }
      }
    }
  },
  {
    id: 9,
    country: "США",
    director: "Стэнли Кубрик",
    duration: 142,
    year: "1968",
    description: "Эпический научно-фантастический фильм о путешествии человечества от зарождения до будущего.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Космическая одиссея 2001",
    nameEN: "2001: A Space Odyssey",
    image: {
      url: "/images/2001.jpg",
      formats: {
        thumbnail: {
          url: "/images/2001-thumb.jpg"
        }
      }
    }
  },
  {
    id: 10,
    country: "США",
    director: "Мартин Скорсезе",
    duration: 178,
    year: "1990",
    description: "Криминальная драма о жизни гангстера Генри Хилла и его пути в мафиозном мире.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Славные парни",
    nameEN: "Goodfellas",
    image: {
      url: "/images/goodfellas.jpg",
      formats: {
        thumbnail: {
          url: "/images/goodfellas-thumb.jpg"
        }
      }
    }
  },
  {
    id: 11,
    country: "США",
    director: "Дэвид Финчер",
    duration: 139,
    year: "1999",
    description: "Психологический триллер о детективе, который расследует серию убийств, связанных с семью смертными грехами.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Семь",
    nameEN: "Se7en",
    image: {
      url: "/images/se7en.jpg",
      formats: {
        thumbnail: {
          url: "/images/se7en-thumb.jpg"
        }
      }
    }
  },
  {
    id: 12,
    country: "США",
    director: "Кристофер Нолан",
    duration: 152,
    year: "2008",
    description: "Супергеройский фильм о Бэтмене, который противостоет Джокеру, хаотичному преступнику.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Темный рыцарь",
    nameEN: "The Dark Knight",
    image: {
      url: "/images/darkknight.jpg",
      formats: {
        thumbnail: {
          url: "/images/darkknight-thumb.jpg"
        }
      }
    }
  },
  {
    id: 13,
    country: "США",
    director: "Стэнли Кубрик",
    duration: 146,
    year: "1980",
    description: "Психологический хоррор о писателе, который сходит с ума в изолированном отеле.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Сияние",
    nameEN: "The Shining",
    image: {
      url: "/images/shining.jpg",
      formats: {
        thumbnail: {
          url: "/images/shining-thumb.jpg"
        }
      }
    }
  },
  {
    id: 14,
    country: "США",
    director: "Роберт Земекис",
    duration: 142,
    year: "1994",
    description: "Драма о человеке с низким IQ, который становится свидетелем и участником важных исторических событий.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Форрест Гамп",
    nameEN: "Forrest Gump",
    image: {
      url: "/images/forrest.jpg",
      formats: {
        thumbnail: {
          url: "/images/forrest-thumb.jpg"
        }
      }
    }
  },
  {
    id: 15,
    country: "США",
    director: "Дэвид Линч",
    duration: 134,
    year: "1986",
    description: "Сюрреалистическая драма о студенте колледжа, который расследует убийство в маленьком городке.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Синий бархат",
    nameEN: "Blue Velvet",
    image: {
      url: "/images/bluevelvet.jpg",
      formats: {
        thumbnail: {
          url: "/images/bluevelvet-thumb.jpg"
        }
      }
    }
  },
  {
    id: 16,
    country: "США",
    director: "Джордж Лукас",
    duration: 121,
    year: "1977",
    description: "Эпическая космическая опера о молодом фермере, который присоединяется к повстанцам в борьбе против Империи.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Звездные войны",
    nameEN: "Star Wars",
    image: {
      url: "/images/starwars.jpg",
      formats: {
        thumbnail: {
          url: "/images/starwars-thumb.jpg"
        }
      }
    }
  },
  {
    id: 17,
    country: "США",
    director: "Альфред Хичкок",
    duration: 109,
    year: "1960",
    description: "Психологический триллер о секретаре, которая крадет деньги и скрывается в мотеле, управляемом загадочным владельцем.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Психо",
    nameEN: "Psycho",
    image: {
      url: "/images/psycho.jpg",
      formats: {
        thumbnail: {
          url: "/images/psycho-thumb.jpg"
        }
      }
    }
  },
  {
    id: 18,
    country: "США",
    director: "Орсон Уэллс",
    duration: 119,
    year: "1941",
    description: "Драма о жизни и смерти медиа-магната, рассказанная через воспоминания людей, которые его знали.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Гражданин Кейн",
    nameEN: "Citizen Kane",
    image: {
      url: "/images/citizenkane.jpg",
      formats: {
        thumbnail: {
          url: "/images/citizenkane-thumb.jpg"
        }
      }
    }
  },
  {
    id: 19,
    country: "США",
    director: "Сидни Люмет",
    duration: 96,
    year: "1957",
    description: "Судебная драма о присяжных, которые должны решить судьбу обвиняемого в убийстве подростка.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "12 разгневанных мужчин",
    nameEN: "12 Angry Men",
    image: {
      url: "/images/12angry.jpg",
      formats: {
        thumbnail: {
          url: "/images/12angry-thumb.jpg"
        }
      }
    }
  },
  {
    id: 20,
    country: "США",
    director: "Терри Гиллиам",
    duration: 142,
    year: "1985",
    description: "Фантастическая комедия о клерке, который попадает в странный мир, где реальность смешивается с фантазией.",
    trailerLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    nameRU: "Бразилия",
    nameEN: "Brazil",
    image: {
      url: "/images/brazil.jpg",
      formats: {
        thumbnail: {
          url: "/images/brazil-thumb.jpg"
        }
      }
    }
  }
];

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

function isNetworkError(error) {
  return error instanceof TypeError || error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError');
}

export const getMovies = () => {
  return fetch(`${BASE_URL}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(checkRes)
    .catch((error) => {
      if (isNetworkError(error)) {
        return Promise.resolve([...MOCK_MOVIES]);
      }
      return Promise.reject(error);
    });
};
