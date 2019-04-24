let express = require('express')
let router = express.Router()

// QueryString => query property on the request object
// localhost:3000/person?name=thomas&age=20
router.get('/person', (req, res) => {
  if(req.query.name) {
    res.send(`You have requested a person`)
  }
  else {
    res.send('You have requested a person')
  }
})

// Params property on the request object
// localhost:3000/person/thomas
router.get('/person/:name', (req, res) => {
  res.send(`You have requested a person`)
})

router.get('/error', (req, res) => {
  throw new Error('This is a forced error.')
})



module.exports = router