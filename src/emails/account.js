const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to : email,
        from: {
            name : "SyedNodejs",
            email : "pixskill123@gmail.com",
        },
            subject : "Thanks for joining course",
            text : `Welcome to the app.${name}.How you Doing...!`
        
    }).then(()=>{
            console.log(" Welcome Email Send Succesfully")
         }).catch((e)=> console.log(e.meassage))
}

const sendCancelationEmail  = (email,name)=>{
    sgMail.send({
        to : email,
        from: {
            name : "SyedNodejs",
            email : "pixskill123@gmail.com",
        },
            subject : "Sorry to see you go",
            text : `Goodbye ${name}.Hope to see you soon. `
        
    }).then(()=>{
            console.log("Delete Email Send Succesfully")
         }).catch((e)=> console.log(e.meassage))
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// sgMail.send({
    
//     to : ["pixskill123@gmail.com","syedomar2022@gmail.com"],//"pixskill123@gmail.com",
//     from: {
//         name : "SyedTaskApp",
//         email : "pixskill123@gmail.com",
//     },
//     subject : "This is third mail from sendgrid",
//     text :  "I hope you got my fisrt email yo....",
// }).then(()=>{
//     console.log("Email Send Succesfully")
// }).catch((e)=> console.log(e.meassage))