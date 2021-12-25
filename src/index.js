const express = require('express')
require("./db/mongoose.js")
const userRouter = require("./router/user")
const taskRouter = require("./router/task")

const app =express()
const port = process.env.PORT

// Multer
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits : {
//         fileSize : 23000
//     },
//     fileFilter(req,file,cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)){ //.endswith(.pdf)
//             return cb(new Error("Please upload new word file"))
//         }
//         cb(undefined,true)
//     }
// })
// app.post('/upload',upload.single('upload'), (req,res)=>{
//     res.send()
// },(error,req,res,next) => {
//     res.status(400).send({error : error.message})
// })



//Midlleware
// app.use((req,res,next)=> {
//     res.status(503).send("Site is under maintainence.Ckeck back Soom.!!")
// })
app.use(express.json())
//Router file
app.use(userRouter)
app.use(taskRouter)

//const bcrypt = require("bcryptjs")
//const jwt = require("jsonwebtoken")

// const myfunction = async (req,res)=> {
//     const token = jwt.sign({_id:'abc123'},"thisismynewcourse",{expiresIn:'7 days'})
//     console.log(token)

//     const data = jwt.verify(token,'thisismynewcourse')
//     console.log(data)

//     Bcrypt
//     const password = "Red1234@"
//     const hashedpassword = await bcrypt.hash(password,8)

//     console.log(password)
//     console.log(hashedpassword)

//     const isMatch  = await bcrypt.compare("red1234@",hashedpassword)
//     console.log(isMatch)
// }

// myfunction()

app.listen(port, () =>{ 
    console.log('Server is up and running on port '+ port )
})










//fetch all users data
// app.get("/users",(req,res)=>{
//     User.find({}).then((users)=>{
//         res.send(users)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })


// //fetch  users data by id
// app.get("/users/:id",(req,res)=>{
//     const _id = req.params.id//it used to fetch id from url params

//     User.findById(_id).then((user)=>{
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })

// app.get("/tasks",(req,res) =>{
//     Task.find({}).then((task)=>{
//         res.send(task)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })

// app.get("/tasks/:id",(req,res) =>{
//     const _id = req.params.id

//     User.findById(_id).then((task)=>{
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })

// app.post('/users',(req,res)=>{
//     const user = new User(req.body)

//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
// })

// app.post('/task',(req,res)=>{
//     const task = new Task(req.body)

//     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
// })



