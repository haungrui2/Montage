const Movie = require('../models/movieModel');

const queries = {
    getMovies: async function (query, r) {
        const q = {$and: []}
        q.$and.push({});
        if (r) q.$and.push({movieId: {$in: r}});
        if (query.MovieTitle) q.$and.push({MovieTitle: {$regex: "(?i)" + query.MovieTitle}});
        if (query.MovieYear) q.$and.push({MovieYear: query.MovieYear});
        if (query.MovieGenre1) q.$and.push({MovieGenre: query.MovieGenre1});
        if (query.MovieGenre2) q.$and.push({MovieGenre: query.MovieGenre2});
        if (query.MovieGenre3) q.$and.push({MovieGenre: query.MovieGenre3});
        if (query.MovieGenre4) q.$and.push({MovieGenre: query.MovieGenre4});
        if (query.MovieGenre5) q.$and.push({MovieGenre: query.MovieGenre5});
        return Movie.find(q);
    },
    insertOneMovie: async function (movie) {
        const added = await Movie.insertMany({
            MovieTitle: movie.MovieTitle,
            MovieYear: movie.MovieYear,
            MovieDirector: movie.MovieDirector,
            MovieWriter: movie.MovieWriter,
            MovieGenre: movie.MovieGenre,
            MovieDescription: movie.MovieDescription,
            movieId: movie.movieId,
            imageData: movie.imageData
        });
        return added;
    },
    editOneMovie: async function (movie) {
        const added = await Movie.updateOne({movieId: movie.movieId}, {
            $set: {
                MovieTitle: movie.MovieTitle,
                MovieYear: movie.MovieYear,
                MovieDirector: movie.MovieDirector,
                MovieWriter: movie.MovieWriter,
                MovieGenre: movie.MovieGenre,
                MovieDescription: movie.MovieDescription,
                imageData: movie.imageData
            }
        });
        return added;
    }
}

module.exports = queries;