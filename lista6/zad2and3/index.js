var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.disable('etag'); 
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));

var fileStoreOptions = {};
 
app.use(session({
    store: new FileStore(fileStoreOptions),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    var cookieValue;
    if (!req.cookies.cookie) {
        cookieValue = new Date().toString();
        res.cookie('cookie', cookieValue);
    } else {
        res.clearCookie('cookie'); //first refresh create, second delate, and looping
        cookieValue = req.cookies.cookie;
    }

    var sessionValue;
    if (!req.session.sessionValue) {
        sessionValue = "session value";
        req.session.sessionValue = sessionValue;
    } else {
        sessionValue = req.session.sessionValue;
    }

    var gender = {
        name: 'gender',
        options: [
        { value : 1, text : 'Male' },
        { value : 2, text : 'Female' },
        { value : 3, text : 'Other' }
        ]
    };
    res.render('index', { gender, cookieValue: cookieValue, sessionValue: sessionValue });
});
http.createServer(app).listen(3000);