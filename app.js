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
app.use(express.static(path.join(__dirname, 'Public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});
// mongoose.connect('mongodb+srv://mitulvardhan:mitula123@cluster0.rzs4ajh.mongodb.net/?retryWrites=true&w=majority').then(result => {
//     console.log("Connected");
app.listen(5000);