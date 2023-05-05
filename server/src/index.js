const express = require('express')
const mongoose = require('mongoose')
const routes = require('./router')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect( 'mongodb+srv://bhupendra_:1B97GiRnjBfdXTL4@cluster5.fjlkdvr.mongodb.net/MentorStudent', {useNewUrlParser : true})
.then(()=> console.log("mongodb connected"))
.catch((err)=> console.log(err))

app.use('/', routes)

app.listen(4000, ()=>{
    console.log("server is started in port number", 4000)
})