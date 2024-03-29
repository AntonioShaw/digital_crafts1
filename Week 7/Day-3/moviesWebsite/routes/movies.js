

const express = require('express')
const router = express.Router()


// /movies/add-movie GET 
router.get('/movies', (req, res) => {
    res.render('index', {moviesList: movies})
})

// movies/34
router.get('/:movieId', (req, res) => {
    res.send('MOVIE ID')
})

// movies/add-movie POST
router.post('/create', (req, res) => {

    const title = req.body.title
    const description = req.body.description 
    const genre = req.body.genre
    const posterURL = req.body.posterURL
    let movie = {title: title, description: description, genre: genre, posterURL: posterURL, movieId: (movies.length + 1)}
    movies.push(movie)
    res.redirect('/movies')
})




module.exports = router // now other files can import router 