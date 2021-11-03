const express= require("express");
const app= express();
const nodemailer= require('nodemailer');
const PORT = process.env.PORT || 8000;
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT,()=>{
    console.log('server started');
})


app.post('/', (req,res)=>{

console.log(req.body);
const transport= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'yadavnk0903@gmail.com',
        pass: 'Mohit@123',
        
    }
})
const mailoptions ={
    to: "yadavnk0903@gmail.com",
    subject: `Message from ${req.body.Name} Email : ${req.body.Email}`,
  text: req.body.Msg,
}
const clientmail ={
    to:req.body.Email,
    subject: "Thanks for contacting Mohit Yadav",
    text: "I have got your message. I will contact you soon."
}
transport.sendMail(mailoptions,(error,info)=>{
    if(error){
        console.log(error);
        res.send('error');
    }
    else{
        console.log('email sent'+info.response);
        res.send('success')
    }
})
transport.sendMail(clientmail);
})