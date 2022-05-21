const express = require('express')

const port = 8080;

const app = express()

const {hexToRgb, rgbToHex} = require('../conversor')



app.get('/status', (req, res) => {
  res.send('Servidor Ok')
})



app.get(`/rgbToHex`, (req, res) => {  
  let r = parseInt(req.query.r)  
  let g = parseInt(req.query.g)
  let b = parseInt(req.query.b)
  console.log(r,g,b)
  console.log(rgbToHex(r,g,b))
  res.send(rgbToHex(r,g,b))
})

app.get('/hexToRgb', (req, res) => {
  let hex = req.query.hex
  let rgb = hexToRgb(hex)
  res.send(hexToRgb(hex).toString())
  console.log((hexToRgb(hex)))
})

app.listen(port, () => {
  console.log(`Servidor Ok porta: ${port}`)
})