//  Retorne os filmes em que o ratings possua tamanho 4 e que seja da category
//  "adventure" ou "family", mas que não tenha o imdbRating menor que 7.

db.movies.find(
  {
    ratings: {$size: 4},
    $or: [{category: "adventure"},
    {category: "family"}],
    imdbRating: {$not: {$lt: 7} }
  },
  {_id: 0, title: 1, category: 1, imdbRating: 1}
).pretty();