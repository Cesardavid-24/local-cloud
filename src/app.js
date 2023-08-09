const Express = require('express')
const routes = require('./routes/index.routes.js')
const cors = require('cors')
const error = require('./middlewares/error.js')
const filenotexist = require('./middlewares/filenotexist.js')
const fileExistAlready = require('./middlewares/fileExistAlready.js')

// init app
const app = Express()

//Middlewares
app.use(Express.json())
app.use(cors())

//routes
app.use(routes)

//Erros
app.use(error)
app.use(filenotexist)
app.use(fileExistAlready)


module.exports = app
