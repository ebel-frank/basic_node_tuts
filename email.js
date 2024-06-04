const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'frankcebeledike@gmail.com',
      pass: 'mfpkuowynnmwdozd'
    }
  });
  
  var mailOptions = {
    from: 'frankcebeledike@gmail.com',
    to: 'horizonstech01@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });