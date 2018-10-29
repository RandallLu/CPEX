const User = require('./../models/User');
const fs = require('fs');

module.exports = {
  greeting: (req, res, next) => {
    console.log("Greeting. Start trading")
    res.send("GreetinG. Start trading")
  }
}
