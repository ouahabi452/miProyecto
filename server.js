const express = require('express')
const app = express()
const miData = require('./data')

app.get('/', function (req, res) {
  res.send(miData)
})

app.listen(3000)