const express = require('express');
const path = require('path');
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/entertainment-web-app'))

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/entertainment-web-app/index.html')
})

app.listen(PORT, () => {
  console.log('servido iniciado na porta' + PORT)
})
