const welcomecontroller = require('./../controllers/welcome.ctrl')

module.exports = (router) => {
  router.route('/welcome')
    .get(welcomecontroller.welcome)
}
