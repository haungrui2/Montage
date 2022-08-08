var express = require('express');
var router = express.Router();
const movieQueries = require('./queries/movieQueries');
const rateQueries = require('./queries/rateQueries')
let movies = [];

router.get('/', async function (req, res, next) {
    let r;
    if (req.query.MovieRate) {
        r = await rateQueries.getRatedMovie(req.query)
    }
    movies = await movieQueries.getMovies(req.query, r)
    res.send(movies);
});

router.get('/all', async function (req, res, next) {
    await movieQueries.getMovies(req.query).then((result) => {
        movies = result;
        res.send(movies);
    });
});

router.get('/random', async function (req, res, next) {
    await movieQueries.getMovies(req.query).then((result) => {
        let find = result[Math.floor(Math.random() * result.length)];
        return res.send(find);
    });
});

router.get('/:movieId', function (req, res, next) {
    const foundUser = movies.find(movie => movie.movieId === req.params.movieId);
    return res
        .setHeader('Content-Type', 'application/json')
        .send(foundUser);
});

router.post('/', async function (req, res, next) {
    await movieQueries.insertOneMovie(req.body).then((added) => {
        movies.push(added[0]);
        return res.send(movies);
    });
});

router.put('/', async function (req, res, next) {
    await movieQueries.editOneMovie(req.body).then(
        () => {
            let index = movies.findIndex(e => e.movieId === req.body.recipe.movieId)
            movies[index] = req.body;
            return res.send(movies);
        }
    )
});

module.exports = router;
