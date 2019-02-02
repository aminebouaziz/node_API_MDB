let Customer = require('../models/customer.model')
let express = require('express')
let router = express.Router()

// Create a new customer
// POST localhost:3000/customer
router.post('/customer', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }
  
    let model = new Customer({
        name: req.body.name,
        email: req.body.email
    })

    model.save()
    .then(model => {
      
      if(!model || model.length === 0) {
        return res.status(500).send(model)
      }
       res.json(model)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
// GET
router.get('/customer', (req, res) => {
  
    Customer.find()
      .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })
module.exports = router