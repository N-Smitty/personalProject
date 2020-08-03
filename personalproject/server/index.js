require('dotenv').config()
const massive = require('massive'),
    express = require('express'),
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

    // app.post('/auth/login', authCtrl.login)
    // app.post('/auth/register', authCtrl.register)
    // app.post('/new/:dog_Id', dogCtrl.createDog)
    // app.get('/dog/:dog_Id', dogCtrl.getDogs)
    // app.put('/dog/:dog_Id', dogCtrl.updateDogs)
    // app.delete('/dog/delete/:dog_Id', dogCtrl.deleteDog)

    app.listen(SERVER_PORT, () => {console.log(`Natalie's server is tuned in on port ${SERVER_PORT}`)});