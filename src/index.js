const express = require('express')
const morgan = require('morgan')
const app = express()

// setting
app.set('port', process.env.PORT || 3000)

// midlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes

// static files

// starting the server
app.listen(app.get('port'), () => {console.log('server on port', app.get('port'))});