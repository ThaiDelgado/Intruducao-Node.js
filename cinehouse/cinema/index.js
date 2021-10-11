
const catalog = require('../database/catalogo.json')

//Cria e adiciona filme:
function createMovie(id, tilte, time, actors, year, inPoster){
    return ({id, tilte, time, actors, year, inPoster});
}

function addMovie(cb){
    catalog.push(cb);
}

//Busca filme:
function searchMovie(array, id){
    const movie = array.find(element => element.id === id);
    return movie;
}

//Altera status:
function changeStatus(id){
    const movie = searchMovie(catalog, id)
    movie.inPoster = movie.inPoster ? false : true;
    return movie;
}

//Lista todos os filmes:
function listAllMovie(){
    for(movie of catalog){
        console.log(`Movie: ${movie.title} - Time: ${movie.time} - Poster: ${movie.inPoster}`)
    }
}

//Lista filmes em cartaz:
function listarFilmesEmCartaz(){
    for(movie of catalog){
        if(movie.inPoster){
            console.log(`Movie: ${movie.title}`)
        }
    }
}

//Filtra filmes:
function listMovieLongTime(){
    const movieLongTime = catalog.filter(element => element.time > 3)
    return movieLongTime
}

//Lista todos os filmes com forEach():
function listAllMovieForEach(){
    catalog.forEach(elemento => console.log(`Filmes: ${elemento.title}`))
}




module.exports = {catalog, createMovie, addMovie, searchMovie,changeStatus, listAllMovie, listarFilmesEmCartaz, listMovieLongTime, listAllMovieForEach}


