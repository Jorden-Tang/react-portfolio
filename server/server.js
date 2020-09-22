const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = 8000;

const cors = require('cors');

const app = express();

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.post('/api/email', (req, res)=>{
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sssssshuuuuuu@gmail.com',
          pass: 'Aa745892475'
        }
      });
      
      var mailOptions = {
        from: 'from@gmail.com',
        to: 'jordentangwork@gmail.com',
        subject: 'JOB ALERT FROM PORTFOLIO',
        html: `<h1> ${req.body.name}</h1> <h1> ${req.body.email}</h1> <h1> ${req.body.company}</h1> <p> ${req.body.message}</p>`,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})

app.listen(port, ()=>{
    console.log('listen to port 8000 right now')
})