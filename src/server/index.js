var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(1234, function () {
    console.log('You got served on port 1234!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
