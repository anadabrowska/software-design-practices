var http = require('http');
var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var bodyParser = require('body-parser')
var express = require('express')

// setup route middlewares
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })

// create express app
var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());


app.get('/', csrfProtection, function (req, res) {
  // pass the csrfToken to the view
  res.render('index', { csrfToken: req.csrfToken() });
});

app.post('/process', parseForm, csrfProtection, function (req, res) {
  res.send('data is being processed');
});

//-----------------------------------------------------------------

app.get("/faktura/:id(\\d+)",
(req, res) => { res.end(`dynamicznie generowana faktura:
${req.params.id}`)});

app.use((req,res,next) => { res.render('404.ejs', { url : req.url });
});

http.createServer(app).listen(port);