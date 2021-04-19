const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/",router)
app.listen(5000,()=> console.log("connected"));

const contactEmail = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    auth:{
        user:"chrisbwatkins@gmail.com",
        pass: "Flargin2",
    }
});

contactEmail.verify((error)=> {
    if(error){
        console.log(error);
        
    } else {
        console.log("ready to Send");
    }
});

router.post("/contact",(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        sender: email,
        to: "chrisbwatkins@gmail.com",
        subject: "Contact Form Message",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    constactEmail.sendMail(mail,(error)=>{
        if(error){
            res.json({status:"failed"});
        } else {
            res.json({status: "sent"});
        }
    });
});