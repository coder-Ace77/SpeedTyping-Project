const path = require('path');
const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Schema = mongoose.Schema;

const text = new Schema({
    text: String
})
const string = mongoose.model('text', text);
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'Public')));
const generalRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "input.html"));
});

app.post('/submit', (req, res) => {
    const x = req.body.input;
    console.log(x);
    const new_text = new string({ text: x });
    new_text.save().then((result) => {
        console.log("Saved!!");
        res.redirect('/admin');
    })
});
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(5000);
// })