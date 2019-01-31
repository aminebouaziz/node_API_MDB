let express = require('express')
let router = express.Router()
// querry string => query proprety on the request object after ? 
//localhost:3000/person?blabla
router.get('/person',(req,res)=>{
    if(req.query.name){
    res.send(`You have requested a person ${req.query.name}`)

}
else{
    res.send('You have requested a person')

}
})
// params proprety 
router.get('/person/:name',(req,res)=>{
    res.send(`You have requested a person ${req.params.name}`)
})

module.exports= router