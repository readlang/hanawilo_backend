const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/error')
const root = require('./routes/root')
const category = require('./routes/category')
const item = require('./routes/item')
const user = require('./routes/user')

dotenv.config({ path: './config/config.env' })

const app = express();

// parse application/json
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}))

//define your endpoints and resources 
// app.use(middleware1) // will use middleware for all controllers
app.use(logger)
app.use(errorHandler)
app.use('/', root)
app.use('/category', category) // route: url/category 
app.use('/item', item)
app.use('/user', user)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Awesome server is listening on PORT: ${PORT}`)
})

