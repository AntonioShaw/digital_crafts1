 // importing express into your app
 const express = require('express')
 const app = express()  
 
app.use(express.json)

 const movies = [
     {name: "Batman", genre: "Fiction"}, 
     {name: "Finding Nemo", genre: "Kids"}, 
     {name: "Superman", genre: "Fiction"}
 ]
 
 
 // http://localhost:3000
//  app.get('/', (req, res) => {
//      // req is the request coming from the client 
//      // res is the server response to the client 
//      res.send('Hello World')
//  })
 
//  app.get('/hello', (req, res) => {
//      let person = {firstName: 'John', lastName: 'Doe'}
//      res.json(person)
//  })
 
 app.get('/movies', (req, res) => {
     res.json(movies)
 })
 
 // CREATE A MOVIE
 // name: String
 // genre: String
 app.post('/movies', (req, res) => {

    const name = req.body.name
    const genre = req.body.genre

    console.log(name, genre)

    res.send('ADDING MOVIE')
 })
 // genre is a route parameter, i.e., a variable
 // /movies/action 
 // /movies/comedy 
 // /movies/cat  
 /*
   
 const movies = [
     {name: "Batman", genre: "Fiction"}, 
     {name: "Finding Nemo", genre: "Kids"}, 
     {name: "Superman", genre: "Fiction"}
 ] 
 */
 app.get('/movies/:genre', (req, res) => {
 
     // access the route parameter from the req
     const genre = req.params.genre
     const filteredMovies = movies.filter((movie) => {
         return movie.genre.toLocaleLowerCase() == genre.toLocaleLowerCase()
     })
 
     res.json(filteredMovies)
 
 })
 
 // /movies/comedy/year/2010
 app.get('/movies/:genre/year/:year', (req, res) => {
     const genre = req.params.genre
     const year = req.params.year 
     res.send(`${genre} - ${year}`)
 })
 
 /*
 app.get('/movies/kids', (req, res) => {
     res.send('Kids')
 })
 app.get('/movies/comedy', (req, res) => {
     res.send('Comedy')
 })
 app.get('/movies/action', (req, res) => {
     res.send('Action')
 })
 app.get('/movies/horror', (req, res) => {
     res.send('Horror')
 }) */
 
 
 app.listen(3000, () => {
     console.log('Server is running...')
 })
 
 // http://localhost:3000 
 // https://localhost:3000/hello 
 
 // www.google.com // ROOT 
 // www.google.com/maps 
 // www.abc.com // ROOT 
 // www.abc.com/sports 