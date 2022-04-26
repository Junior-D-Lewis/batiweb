const express = require('express')
const path = require('path')
const cors = require('cors')
const loginClient = require('./routes/loginClient')
const loginCourtier = require('./routes/loginCourtier')

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

  app.use(express.json())

//Path.resolve to convert Relative path to Absolute file 
app.use(express.static(path.resolve('client')))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.use('/login', loginClient())
app.use('/login', loginCourtier())



module.exports = app;