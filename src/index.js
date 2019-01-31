let express = require('express')

let app = express()

let personRoute = require('./routes/person')
//middleware
app.use((req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    
    next()
})

app.use(personRoute)

app.use(express.static('public'))
//middlewar
//handler for 404 - Not Found 
app.use((req,res,next)=>{
    res.status(404).send('we think you are lost !')
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.info(`Server has started on ${PORT}`))