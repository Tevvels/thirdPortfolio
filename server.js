const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/",router)
app.listen(port,()=> console.log("connected"));

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth:{
        
        user:"chrisbwatkins@gmail.com",
        pass: "gxcesfgnyswykrsv",
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
        from: name,
        to: "chrisbwatkins@gmail.com",
        subject: "Contact Form Message",
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    console.log(req)
    contactEmail.sendMail(mail,(error)=>{
        console.log(mail);
        if(error){
            res.json({status:"failed"});
        } else {
            res.json({status: "sent"});
        }
    });
});