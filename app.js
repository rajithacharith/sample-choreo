const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // log headers
  console.log(req.headers);
  res.send(res.headers)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})