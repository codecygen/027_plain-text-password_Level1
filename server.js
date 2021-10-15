//jshint esversion:6
// Load Node modules
let express = require('express');
const ejs = require('ejs');
// Initialize Express
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Render static files
app.use(express.static(__dirname + '/public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});




// Port website will run on
const port = 3000;
app.listen(port, function() {
	console.log(`Server is running on port ${port}`);
});

