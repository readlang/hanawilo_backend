const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

const root = require('./routes/root')
const category = require('./routes/category')

dotenv.config({ path: './config/config.env' })

const app = express();

// parse application/json
app.use(bodyParser.json())

//define your endpoints and resources 
app.use('/', root)
app.use('/category', category) // route: url/category 

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Awesome server is listening on PORT: ${PORT}`)
})

