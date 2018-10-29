var mongoose = require('mongoose');
var promise = require('bluebird')
const bcrypt = promise.promisifyAll(require('bcrypt'));

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  id: String
})

UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.hashAsync(user.password, 10)
  .then((hash) => {
    user.password = hash;
    console.log(`password hash ${hash}`);
    next();
  })
  .catch((err) => {
    console.log("hashing err " + err)
    next(err);
  })
});

UserSchema.statics.authenticate = function(email, password) {
  return new Promise((resolve, reject) => {
    User.findOne({email:email}).exec()
    .then((user) => {
      console.log("find one result: \n" + user)
      if (!user) {
        var err = new Error("Account not found");
        err.status = 400;
        return Promise.reject(err)
      }
      else {
        return bcrypt.compareAsync(password, user.password);
      }
    })
    .then((isMatch) => {
      console.log("isMatch " +  isMatch);
      return resolve(isMatch);
    })
    .catch((err) => {
      console.log("authenticate error: " + err.message);
      return reject(err);
    })
  })
}


var User = mongoose.model('User', UserSchema);
module.exports = User;
