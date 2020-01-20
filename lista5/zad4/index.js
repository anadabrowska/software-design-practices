const express = require('express');
const url = require('url');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));

app.get( '/', (req, res) => {
    const { query } = req;

    res.render('index', {
        error:   query.error || '',
        name:    query.name || '',
        surname: query.surname || '',
        subject: query.subject || '',
        zad1:    query.zad1 || '',
        zad2:    query.zad2 || '',
        zad3:    query.zad3 || '',
        zad4:    query.zad4 || '',
        zad5:    query.zad5 || '',
        zad6:    query.zad6 || '',
        zad7:    query.zad7 || '',
        zad8:    query.zad8 || '',
        zad9:    query.zad9 || '',
        zad10:   query.zad10 || ''
    });
});

app.get('/print', (req,res) => {
    const { query } = req;
    if(!query.name || !query.surname || !query.subject) {
        res.redirect(url.format({
            pathname: '/',
            query: {
                ...query,
                error: 'Musisz podać imię, nazwisko i nazwę przedmiotu!'
            }
        }));
        return;
    }

    res.render('print', {
        name:    query.name? query.name : 0,
        surname: query.surname? query.surname : 0,
        subject: query.subject? query.subject : 0,
        zad1:    query.zad1? query.zad1 : 0,
        zad2:    query.zad2? query.zad2 : 0,
        zad3:    query.zad3? query.zad3 : 0,
        zad4:    query.zad4? query.zad4 : 0,
        zad5:    query.zad5? query.zad5 : 0,
        zad6:    query.zad6? query.zad6 : 0,
        zad7:    query.zad7? query.zad7 : 0,
        zad8:    query.zad8? query.zad8 : 0,
        zad9:    query.zad9? query.zad9 : 0,
        zad10:   query.zad10? query.zad10 : 0
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));