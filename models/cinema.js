const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function() {
  let titles = this.films.map((film) => {return film.title})
  return titles;
}

Cinema.prototype.searchByTitle = function(title){
  let titles = this.films.filter((film) => {return film.title == title})
  return titles;
}

Cinema.prototype.filterByGenre = function(genre){
  let movie = this.films.filter((film) => {return film.genre == genre})
  return movie
}

module.exports = Cinema;


