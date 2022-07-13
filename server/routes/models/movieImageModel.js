const mongoose = require('mongoose');

const movieImageSchema = new mongoose.Schema({
    MovieTitle: String,
    movieId: String,
    imageData: String
});

const MovieImage = mongoose.model('MovieImage', movieImageSchema);

module.exports = MovieImage;