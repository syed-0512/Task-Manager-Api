// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId
// Abstract of above three into single one Object Destructuring
const {MongoClient , ObjectID} = require("mongodb")

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())


MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)

    //Delete from db
    db.collection('users').deleteMany({
        age: 20
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })



    // db.collection('tasks').updateMany({
    //     done: false
    //     }, {
    //     $set: {
    //     done: true
    //     }
    //     }).then((result) => {
    //     console.log(result.modifiedCount)
    //     }).catch((error) => {
    //     console.log(error)
    //     })

    // const updatePromise = db.collection('users').updateOne({
    //     _id : new ObjectID("61a07a8a6df69c542597ed53")
    // },{
    //     $set : {
    //         name: 'Amaan'
    //     }
    // })
    // //Promise 
    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //Read from datan
    // db.collection('users').findOne({name:'Anukul'},(error,result)=>{
    //     if(error){
    //         return console.log("Unable to fetch details")
    //     }

    //     console.log(result)
            // })

    // db.collection("tasks").findOne({_id :  new ObjectID("61a0672f7687c37a93e1415d")},(error,result)=>{
    //     if(error){
    //         return console.log("Unable to fetch details") 
    //     }
    //     console.log(result)
    // })
    
    // db.collection("tasks").find({done : "True"}).toArray((error,result)=>{
    //     if(error){
    //         return console.log("Unable to fetch details")
    //     }
    //     console.log(result);
    // })
   
    //INSERT INTO DATABASE
    // db.collection('users').insertOne({
    //     name: 'Anukul',
    //     age : 26//,
    //     //_id: id
    // },(error,result)=>{
    //    if(error){
    //        console.log("Unable to insert user")
    //    } 
    //    console.log(result)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description : "Clean Mat",
    //         done : "True"
    //     },{
    //         description : "Clean Floor",
    //         done : "False"
    //     },{
    //         description : "Clean Roof",
    //         done : "True"
    //     }
    // ],(error,result) =>{
    //     if(error){
    //         return console.log("Unable to insert into Task Collection")
    //     }
    
    //     console.log(result)
    // })




})
console.log("Server Running")