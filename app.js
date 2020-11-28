const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/resume', (req, res) => {
    res.render('resume')
});
app.get('/contact', (req, res) => {
    res.render('contact')
});
app.get('/amazontheraputics', (req, res) => {
    res.render('projects/amazontheraputics')
});
app.get('/uscampingandhiking', (req, res) => {
    res.render('projects/uscampingandhiking')
});
app.get('/portfolio', (req, res) => {
    res.render('projects/portfolio')
});



app.listen(3000, () => {
    console.log('Serving on port 3000')
});