const express = require('express')
const path = require('path')

const app = express();
app.use(express.json())

//Path.resolve to convert Relative path to Absolute file 
app.use(express.static(path.resolve('../batiweb/client')))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})



module.exports = app;