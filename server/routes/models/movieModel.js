const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    MovieTitle: String,
    MovieYear: Number,
    MovieDirector: String,
    MovieWriter: String,
    MovieGenre: [String],
    MovieDescription: String,
    movieId: String,
    imageData: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;