const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', ejsMate);

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/resume', (req, res) => {
    res.render('resume')
});
app.get('/amazontherapeutics', (req, res) => {
    res.render('projects/amazontherapeutics')
});
app.get('/uscampingandhiking', (req, res) => {
    res.render('projects/uscampingandhiking')
});
app.get('/portfolio', (req, res) => {
    res.render('projects/portfolio')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Service on port ${port}`);
});