const express = require('express')
const bodyParser = require('body-parser')
const cors = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello word!'
    })
})

// app.listen(process.env.PORT || 8081)
app.listen(8081)