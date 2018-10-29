const User = require('./../models/User');
const fs = require('fs');

module.exports = {
  // export the methods in the example form below
  //
  welcome: (req, res, next) => {
    console.log("Welcome to CPEX!!");
    res.send("Welcome to CPEX!!")
  }
}
