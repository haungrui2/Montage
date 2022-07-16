const Movie = require('../models/movieModel');

const queries = {
    getAllMovies: async function (filter) {
        const movies = await Movie.find(filter);
        return movies;
    },
    getOneMovie: async function (filter) {
        const movie = await Movie.findOne(filter);
        return movie;
    },
    insertOneMovie: async function (movie) {
        const added  = await Movie.insertMany({
            MovieTitle: movie.MovieTitle,
            MovieYear: movie.MovieYear,
            MovieDirector: movie.MovieDirector,
            MovieWriter: movie.MovieWriter,
            MovieGenre: movie.MovieGenre,
            MovieDescription: movie.MovieDescription,
            movieId: movie.movieId,
            imageData: movie.imageData});
        return added;
    },
    editOneMovie: async function (movie) {
        const added  = await Movie.updateOne({movieId: movie.movieId},{$set:{
            MovieTitle: movie.MovieTitle,
            MovieYear: movie.MovieYear,
            MovieDirector: movie.MovieDirector,
            MovieWriter: movie.MovieWriter,
            MovieGenre: movie.MovieGenre,
            MovieDescription: movie.MovieDescription,
            imageData: movie.imageData}});
        return added;
    }
}

module.exports = queries;