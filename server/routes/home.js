const homecontroller = require('./../controllers/home.ctrl')

module.exports = (router) => {
  router.route('/home')
    .get(homecontroller.greeting)
}
