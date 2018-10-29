const User = require('./../models/User')
const fs = require('fs')

module.exports = {
  login: (req, res, next) => {
    console.log(req.body);
    if (req.body.email && req.body.password) {
      User.authenticate(req.body.email, req.body.password)
      .then((isMatch) => {
        if (isMatch) {
          res.status = 200;
          console.log("login success");
          // redirect to view page
          //res.redirect('/home')
          res.send("login success")
        }
        else {
          var err = new Error("Email/Password error. Please check your input")
          res.status = 400;
          res.send("login failed, error:\n" + err.message)
        }
      })
      .catch((err) => {
        res.status = 400 || err.status;
        res.send(err.message);
      })
    }
    else {
      var err = new Error("All fields are required")
      err.status = 400;
      res.send("login failed, error:\n" + err.message)
    }
  },

  register: (req, res, next) => {
    console.log(req.body);
    if (req.body.email && req.body.password) {
      var userData = {
        email : req.body.email,
        password: req.body.password
      };

      User.create(userData).then((result) => {
        console.log("finished register, detail:\n " + result);
        res.status = 200;
        console.log("register success");
        //res.redirect('/home')
        res.send("register success")
      })
      .catch((err) => {
        res.status = 400;
        res.send("register failed, error:\n" + err);
      })
    }
    else {
      res.status = 400;
      res.send("All fields are required");
    }
  }

}
