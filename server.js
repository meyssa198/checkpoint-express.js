const express = require('express')
const app = express ()
const logger = require('./Middleware/logger')

app.use(logger)

app.use(express.static(__dirname+"/public"))
const PORT = 4000;
app.listen(PORT,(err)=>{
    err
    ?console.log(err)
    :console.log(`the server is running on port ${PORT}`)
})