const MovieImage = require('../models/movieImageModel');
const fs = require('fs');

function generateMovieImageData() {
    const My_Neighbor_Totoro = new MovieImage({
        MovieTitle:"My Neighbor Totoro", 
        movieId:"My_Neighbor_Totoro",
        imageData: convertToBase64('./routes/images/My_Neighbor_Totoro.png')
    })
    const Crayon_Shin = new MovieImage({
        MovieTitle:"Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkasu Academy", 
        movieId:"Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy",
        imageData: convertToBase64('./routes/images/Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy.png')
    })
    const Birdman = new MovieImage({
        MovieTitle:"Birdman", 
        movieId:"Birdman",
        imageData: convertToBase64('./routes/images/Birdman.png')
    })
    const Ghost_in_the_Shell = new MovieImage({
        MovieTitle:"Ghost in the Shell", 
        movieId: "Ghost_in_the_Shell",
        imageData: convertToBase64('./routes/images/Ghost_in_the_Shell.png')
    })
    const Evangelion = new MovieImage({
        MovieTitle:"Evangelion: 3.0+1.01 Thrice Upon a Time", 
        movieId: "Evangelion_3.0+1.01_Thrice_Upon_a_Time",
        imageData: convertToBase64('./routes/images/Evangelion_3.0+1.01_Thrice_Upon_a_Time.png')
    })
    const The_Unbearable_Lightness_of_Being = new MovieImage({
        MovieTitle:"The Unbearable Lightness of Being",
        movieId:"The_Unbearable_Lightness_of_Being",
        imageData: convertToBase64('./routes/images/The_Unbearable_Lightness_of_Being.png')
    })

    My_Neighbor_Totoro.save();
    Crayon_Shin.save();
    Birdman.save();
    Ghost_in_the_Shell.save();
    Evangelion.save();
    The_Unbearable_Lightness_of_Being.save();


}

function convertToBase64(src) {
    let fileContent = fs.readFileSync(src);
    return "data:image/png;base64," + fileContent.toString('base64');
}

module.exports = generateMovieImageData;