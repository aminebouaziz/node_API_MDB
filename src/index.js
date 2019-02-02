let express = require('express')
let app = express()
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let path = require('path')
let bodyPaser= require('body-parser')

app.use(bodyPaser.json())

//middleware
// app.use((req,res,next)=>{
//     console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body)
    
//     next()
// })

app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))
//middlewar
//handler for 404 - Not Found 
app.use((req,res,next)=>{
    res.status(404).send('we think you are lost !')
})
//handle error 500
app.use((req,res,next)=>{
   console.error(err.stack)
    res.sendFile(path.join( __dirname,'../public/500.html'))
    
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.info(`Server has started on ${PORT}`))