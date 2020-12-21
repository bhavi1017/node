# node
//1 step
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhavigotawala@gmail.com',
    pass: 'bhavi10171017'
  }
});

var mailOptions = {
  from: 'bhavigotawala@gmail.com',
  to: 'gotawalabhavi1017@gmail.com',
  subject: 'Sending Email using Node.js',
  //text: `That was easy!`,
  //html:`<h1>Nodemailer</h1>`
  attachments:[
    {
      filename:'file1.txt',
      content:'hello world'
    }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
