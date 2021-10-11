

var {catalog, createMovie, addMovie, searchMovie,changeStatus, listAllMovie, listarFilmesEmCartaz, listMovieLongTime, listAllMovieForEach} = require('./cinema')

const newMovie = createMovie(3, "A Deva do Pedaço", 3.1, ["Thaissa", "Eu"], 2022, false)

addMovie(newMovie)

console.log(catalog)

console.log(listMovieLongTime(catalog))

console.log(listAllMovieForEach())



//console.log(listMovieLongTime())