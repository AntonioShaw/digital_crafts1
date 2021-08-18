const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')


app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// everything inside the public folder is available at the root level 
// localhost:3000/css/styles.css

app.use('/', moviesRouter)


// movies are now available in all router files 
global.movies = []

const PORT = 3000

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
// the pages are located in views directory
app.set('views', './views')
// extension will be .mustache
app.set('view engine', 'mustache')


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('Server is running...')
})