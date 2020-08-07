require('dotenv').config()
const massive = require('massive'),
    express = require('express'),
    // stripe = require('stripe')('sk_test_51HCcjIEur65T7T8alLdHneECvLbf1XLqhEXGS2NZdA9tA19rP3RMzfdMDDjjKc7VtKvl2aly6s2fk3Qqqvv88jt000Yh2mwra7'),
    // bodyParser = require('body-parser'),
    // exphbs = require('express-handlebars'),
    app = express(),
    mainCtrl = require('./controllers/mainController'),
    authCtrl = require('./controllers/authController'),
    dogCtrl = require('./controllers/dogController'),
    session = require('express-session'),
    {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

    app.use(express.json())

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
    }))
    massive({
        connectionString: CONNECTION_STRING,
        ssl: {
            rejectUnauthorized: false
        }
    }).then(db => {
        app.set('db', db)
        console.log('Natalie, your db is connected!')
    }).catch(error => {
        console.log(error)
    })
//authentication endpoints
    app.post('/api/register', authCtrl.register)
    app.post('/api/login', authCtrl.login)
    app.get('api/logout', authCtrl.logout)
//dog profile endpoints
    // app.post('/api/createDog', dogCtrl.createDog)
    // app.delete('/dog/delete/:dog_Id', dogCtrl.deleteDog)
    // app.put('/dog/:dog_Id', dogCtrl.updateDogs)
    app.get('/api/results', dogCtrl.getResults)

    app.listen(SERVER_PORT, () => {console.log(`Natalie's server is tuned in on port ${SERVER_PORT}`)});