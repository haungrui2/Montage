const Movie = require('../models/movieModel');

function generateMovieData() {
    const My_Neighbor_Totoro = new Movie({
    MovieTitle:"My Neighbor Totoro", MovieYear:1988, MovieDirector:"Hayao Miyazaki", 
    MovieWriter: "Hayao Miyazaki", MovieGenre: "Animation/Comedy/Family",
    MovieDescription: "The adventure story of two girls and forest spirits", movieId:"My_Neighbor_Totoro"
    })
    const The_Unbearable_Lightness_of_Being = new Movie({MovieTitle:"The Unbearable Lightness of Being", MovieYear:1988, MovieDirector:"Philip Kaufman", 
    MovieWriter: "Milan Kundera, Jean-Claude Carrière, Philip Kaufman", MovieGenre: "Drama/Romance",
    MovieDescription: "A lovely story between a Czech doctor who has active sex life and a woman who wants monogamy.", movieId:"The_Unbearable_Lightness_of_Being"})
    const Crayon_Shin = new Movie({MovieTitle:"Crayon Shin-chan: Shrouded in Mystery! The Flowers of Tenkasu Academy", MovieYear:2021, MovieDirector:"Wataru Takahashi", 
    MovieWriter: "Kimiko Ueno", MovieGenre: "Animation/Mystery",
    MovieDescription: "At the invitation of friends Toru Kazama, Nohara Shinnosuke and his friends came to the super elite school and encounter a big mystery.",
    movieId: "Crayon_Shin-chan_Shrouded_in_Mystery!_The_Flowers_of_Tenkasu_Academy"})
    const Birdman = new Movie({MovieTitle:"Birdman", MovieYear:2014, MovieDirector:"Alejandro G. Iñárritu", 
    MovieWriter: "Alejandro G. Iñárritu, Nicolás Giacobone, Alexander Dinelaris", MovieGenre: "Comedy/Drama",
    MovieDescription: "The story about a washed-up superhero actor who tries to re-gain the attention and respect of the public in a Broadway production.",
    movieId: "Birdman"})
    const Ghost_in_the_Shell = new Movie({MovieTitle:"Ghost in the Shell", MovieYear:1995, MovieDirector:"Mamoru Oshii", 
    MovieWriter: "Shirow Masamune, Kazunori Itô", MovieGenre: "Animation/Action/Crime",
    MovieDescription: "The story about a cyborg policewoman and her hunt for a mysterious hacker called Puppet Master.",
    movieId: "Ghost_in_the_Shell"})
    const Evangelion = new Movie({MovieTitle:"Evangelion: 3.0+1.01 Thrice Upon a Time", MovieYear:2021, MovieDirector:"Mahiro Maeda, Katsuichi Nakayama, Kazuya Tsurumaki", 
    MovieWriter: "Hideaki Anno", MovieGenre: "Animation/Action/Drama",
    MovieDescription: "The fourth installment of Evangelion.",
    movieId: "Evangelion_3.0+1.01_Thrice_Upon_a_Time"})
    
    Evangelion.save();
    Ghost_in_the_Shell.save();
    Birdman.save();
    Crayon_Shin.save();
    The_Unbearable_Lightness_of_Being.save();
    My_Neighbor_Totoro.save();

}

module.exports = generateMovieData;