const express = require('express')

const port = 8080;

const app = express()

app.get('/status', (req, res) => {
  res.send('Servidor Ok')
})



app.listen(port, () => {
  console.log(`Servidor Ok porta: ${port}`)
})