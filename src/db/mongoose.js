const mongoose = require("mongoose")
const validator  = require("validator")

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
})



// const me = new User({
//     name: 'Syed',
//     password: "sy1234556"
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error..!",error)
// })



// job.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })