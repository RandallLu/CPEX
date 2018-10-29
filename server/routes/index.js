const home = require('./home')
const userAuth = require('./userAuth')
const welcome = require('./welcome')

// this is where we connect all the routes
module.exports = (router) => {
  home(router)
  userAuth(router)
  welcome(router)
}
