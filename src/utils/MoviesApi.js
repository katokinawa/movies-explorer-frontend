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
      url: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
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
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      formats: {
        thumbnail: {
          url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300"
        }
      }
    }
  }
];

export const getMovies = () => {
  return Promise.resolve([...MOCK_MOVIES]);
};
