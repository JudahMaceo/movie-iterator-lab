function getTitles(arr) {
  // returns an array of movie titles
}

function generalAudienceMovies(arr) {
  // returns an array of movies rated 'G'
}

function ninetiesMovies(arr) {
  // returns an array of movies released in the 90s
}

function terribleMovies(arr) { 
  // returns an array of movies with freshness scores of 0.10 or less
}

function reformatRuntimes(arr) {
  // returns an array of movie data with the runtimes are in HH:MM format.
  // For example, a movie that's 90 minutes long should have a runtime of '01:30'
}

function marathonTime(arr) {
  // returns the cumulative runtime of all movies in the array
}

function ratingCounts(arr) {
  // returns an object whose keys are movie ratings,
  // and whose values are the number of movies in the array with that rating
}

module.exports = {
  getTitles,
  generalAudienceMovies,
  ninetiesMovies,
  terribleMovies,
  reformatRuntimes,
  marathonTime,
  ratingCounts
}