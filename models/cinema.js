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

Cinema.prototype.filterByRelease = function(year){
  let movie = this.films.filter(( film) =>{return film.year == year})
  return movie
}

Cinema.prototype.checkIfHasFilmByRelease = function(year) {
  let movie = this.films.some((film) => {return film.year == year});
  return movie;
}

Cinema.prototype.allDurationOver = function(duration) {
  let isTrue = this.films.every((film) => {return film.length > duration});
  return isTrue;
}

Cinema.prototype.totalRunTime = function(){
  let total = this.films.reduce((runningTotal, film) =>{ return runningTotal + film.length},0);
  return total;
}

Cinema.prototype.filmByProperty = function(property, value){

  let thing = property;
  let otherthing = value;
  let movies = this.films.filter((film) => {return film.thing == property});
  let filmsByValue = movies.filter((film) => {return film.value == value});
  return filmsByValue;
  
}

module.exports = Cinema;


