const usercontroller = require('./../controllers/user.ctrl')

// exporting a function that takes in a router and link it up
module.exports = (router) => {
  // login function
  router.route('/login')
    .post(usercontroller.login)

  // register function
  router.route('/register')
    .post(usercontroller.register)
}
