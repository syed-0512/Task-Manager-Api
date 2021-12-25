const express = require('express')
require("./db/mongoose.js")
const userRouter = require("./router/user")
const taskRouter = require("./router/task")

const app =express()
const port = process.env.PORT

app.use(express.json())
//Router file
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () =>{ 
    console.log('Server is up and running on port '+ port )
})
