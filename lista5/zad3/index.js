var http = require('http');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('index');
})
app.post('/',(req,res) => {
    res.header('Content-disposition', 'attachment; filename="data.txt"');
    res.end('Very important data.');
})

http.createServer(app).listen(5000);